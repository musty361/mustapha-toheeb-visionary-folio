import { useState } from "react";
import { BarChart3, Users, TrendingUp, Heart, Share, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const SocialDashboard = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const platforms = [
    { name: "All", color: "text-primary", count: "2.4M" },
    { name: "Facebook", color: "text-blue-500", count: "856K" },
    { name: "Instagram", color: "text-pink-500", count: "732K" },
    { name: "Twitter", color: "text-sky-500", count: "421K" },
    { name: "LinkedIn", color: "text-blue-600", count: "389K" }
  ];

  const posts = [
    {
      id: 1,
      platform: "Instagram",
      content: "Just launched our new product line! 🚀 What do you think?",
      likes: 1203,
      shares: 89,
      comments: 156,
      time: "2 hours ago",
      engagement: 92
    },
    {
      id: 2,
      platform: "Facebook",
      content: "Behind the scenes of our latest project. Amazing team work!",
      likes: 892,
      shares: 234,
      comments: 78,
      time: "4 hours ago",
      engagement: 87
    },
    {
      id: 3,
      platform: "Twitter",
      content: "Quick tip: Always test your code before pushing to production! 💡",
      likes: 567,
      shares: 123,
      comments: 45,
      time: "6 hours ago",
      engagement: 94
    },
    {
      id: 4,
      platform: "LinkedIn",
      content: "Excited to share our latest achievement in web development...",
      likes: 445,
      shares: 67,
      comments: 23,
      time: "8 hours ago",
      engagement: 88
    }
  ];

  const stats = [
    { label: "Total Followers", value: "2.4M", change: "+12%", icon: Users },
    { label: "Engagement Rate", value: "8.7%", change: "+3.2%", icon: TrendingUp },
    { label: "Total Posts", value: "1,247", change: "+24", icon: BarChart3 },
    { label: "Reach", value: "5.2M", change: "+18%", icon: Share }
  ];

  const filteredPosts = selectedPlatform === "All" 
    ? posts 
    : posts.filter(post => post.platform === selectedPlatform);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="hover:bg-secondary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              <h1 className="text-2xl font-bold gradient-text">Social Analytics Pro</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <select 
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-secondary border border-border rounded px-3 py-2"
              >
                {platforms.map(platform => (
                  <option key={platform.name} value={platform.name}>
                    {platform.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Platform Overview */}
          <div className="lg:col-span-1">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Platform Overview</h3>
              
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border border-white/10 cursor-pointer transition-all ${
                      selectedPlatform === platform.name 
                        ? "bg-primary/20 border-primary/40" 
                        : "hover:bg-secondary/50"
                    }`}
                    onClick={() => setSelectedPlatform(platform.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-semibold ${platform.color}`}>
                          {platform.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {platform.count} followers
                        </div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-current opacity-50"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/80">
                  Create New Post
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Content
                </Button>
                <Button variant="outline" className="w-full">
                  Generate Report
                </Button>
              </div>
            </Card>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">
                Recent Posts ({filteredPosts.length})
              </h3>
              
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="glass-card p-4 rounded-lg border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {post.platform[0]}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold">{post.platform}</div>
                          <div className="text-muted-foreground text-sm">{post.time}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-semibold gradient-text">
                          {post.engagement}% engagement
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground mb-4">{post.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Share className="w-4 h-4" />
                          <span className="text-sm">{post.shares}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>
                      
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
                
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    No posts found for {selectedPlatform}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Analytics Chart Placeholder */}
        <div className="mt-8">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Engagement Trends</h3>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive analytics chart would be displayed here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Integration with Chart.js, D3.js or similar charting library
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 glass-card border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Social Analytics Pro - Demo Social Media Dashboard by Toheeb Abiodun Mustapha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SocialDashboard;