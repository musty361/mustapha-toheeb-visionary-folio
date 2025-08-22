import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mustytoh@gmail.com",
      href: "mailto:mustytoh@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mustapha-toheeb-427a46216?trk=contact-info"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/musty361"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for remote work",
      href: null
    }
  ];

  // Messaging via Zapier Webhook (stored locally for the site owner)
  const [webhookUrl, setWebhookUrl] = React.useState<string>(() =>
    localStorage.getItem('zapier_webhook_url') || ''
  );
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem('zapier_webhook_url', webhookUrl);
  }, [webhookUrl]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!webhookUrl) {
      toast({
        title: 'Webhook required',
        description: 'Add your Zapier webhook URL below to receive emails.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      submittedAt: new Date().toISOString(),
      page: window.location.href,
    };

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });

      toast({
        title: 'Message sent',
        description: "Your request was sent. Check your Zap history and Gmail inbox.",
      });

      form.reset();
    } catch (error) {
      console.error('Zapier webhook error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's build something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities, whether it's a challenging project, 
                  a full-time position, or just a chat about technology. Don't hesitate to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="font-bold mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project discussion"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground hover-glow"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <div className="space-y-2 pt-4 border-t border-border/50">
                  <label htmlFor="webhook" className="block text-xs text-muted-foreground">
                    Zapier Webhook URL (owner only, stored locally)
                  </label>
                  <Input
                    id="webhook"
                    type="url"
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="bg-secondary border-border focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    Create a Zap: Webhooks by Zapier (Catch Hook) ➜ Gmail: Send Email.
                  </p>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Prefer email? Drop me a line at{" "}
                  <a 
                    href="mailto:mustytoh@gmail.com"
                    className="text-primary hover:underline"
                  >
                    mustytoh@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Footer */}
          <div className="mt-16 text-center">
            <div className="glass-card p-6 rounded-2xl border-accent/20">
              <p className="text-sm text-accent mb-2">
                © 2024 Toheeb Abiodun Mustapha. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                This portfolio website and all associated designs, code implementations, and creative works 
                are original creations by Toheeb Abiodun Mustapha. Unauthorized reproduction is prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;