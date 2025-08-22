import { ArrowLeft, CreditCard, Smartphone, Shield, Zap, TrendingUp, User, Settings, Plus, Send, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileBanking = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  const transactions = [
    { id: 1, type: "credit", description: "Salary Deposit", amount: 3500, date: "Today, 9:30 AM" },
    { id: 2, type: "debit", description: "Grocery Store", amount: -45.80, date: "Yesterday, 6:15 PM" },
    { id: 3, type: "debit", description: "Coffee Shop", amount: -8.50, date: "Yesterday, 2:30 PM" },
    { id: 4, type: "credit", description: "Freelance Payment", amount: 750, date: "Dec 20, 11:00 AM" },
  ];

  const quickActions = [
    { icon: Send, label: "Transfer", action: "transfer" },
    { icon: Plus, label: "Deposit", action: "deposit" },
    { icon: CreditCard, label: "Pay Bills", action: "bills" },
    { icon: TrendingUp, label: "Invest", action: "invest" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold">SecureBank Mobile</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile App Simulator */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Phone Frame */}
            <div className="glass-card rounded-[2.5rem] p-2 shadow-2xl border-8 border-foreground/10">
              <div className="bg-gradient-to-br from-primary via-primary/80 to-accent rounded-[2rem] overflow-hidden">
                
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                    <div className="w-6 h-2 bg-white/60 rounded-sm"></div>
                    <div className="w-6 h-2 bg-white/40 rounded-sm"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="bg-background rounded-t-[2rem] min-h-[600px] p-6">
                  
                  {/* Welcome Section */}
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-muted-foreground">Good morning,</h2>
                    <h3 className="text-2xl font-bold">Toheeb Mustapha</h3>
                  </div>

                  {/* Balance Card */}
                  <Card className="glass-card p-6 mb-6 bg-gradient-to-r from-primary to-accent text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-white/80 text-sm">Total Balance</p>
                        <div className="flex items-center gap-2">
                          <p className="text-3xl font-bold">
                            {showBalance ? "$12,450.80" : "••••••"}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowBalance(!showBalance)}
                            className="text-white hover:bg-white/20"
                          >
                            {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <Shield className="w-6 h-6 text-white/80" />
                    </div>
                    
                    <div className="flex justify-between text-sm text-white/80">
                      <span>**** 4829</span>
                      <span>12/26</span>
                    </div>
                  </Card>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {quickActions.map((action, index) => (
                      <div key={index} className="text-center">
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full aspect-square rounded-2xl hover-lift"
                        >
                          <action.icon className="w-6 h-6" />
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2">{action.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Transactions */}
                  <div>
                    <h4 className="font-semibold mb-4">Recent Transactions</h4>
                    <div className="space-y-3">
                      {transactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-3 glass-card rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                            }`}>
                              {transaction.type === 'credit' ? <TrendingUp className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{transaction.description}</p>
                              <p className="text-xs text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                          <p className={`font-semibold ${
                            transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="glass-card p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Biometric Security</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced fingerprint and face recognition for secure access
                </p>
              </Card>
              
              <Card className="glass-card p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Instant Transfers</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time money transfers with instant notifications
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SecureBank Mobile Banking Demo - Developed by Toheeb Abiodun Mustapha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MobileBanking;