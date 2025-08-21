import { useState } from "react";
import { ShoppingCart, Star, Plus, Minus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const EcommercePlatform = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "🎧",
      rating: 4.8,
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399.99,
      image: "⌚",
      rating: 4.9,
      description: "Advanced smartwatch with health monitoring features"
    },
    {
      id: 3,
      name: "Laptop Stand Aluminum",
      price: 89.99,
      image: "💻",
      rating: 4.7,
      description: "Ergonomic aluminum laptop stand for better posture"
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 59.99,
      image: "🖱️",
      rating: 4.6,
      description: "Precision wireless mouse with RGB lighting"
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
              <h1 className="text-2xl font-bold gradient-text">TechStore Pro</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </span>
                )}
              </div>
              <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!selectedProduct ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground">Discover amazing tech products at great prices</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="glass-card p-6 hover-lift hover-glow cursor-pointer">
                  <div 
                    className="text-center"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="text-6xl mb-4">{product.image}</div>
                    <h3 className="font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="text-2xl font-bold gradient-text mb-4">
                      ${product.price}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/80"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </Card>
              ))}
            </div>

            {/* Cart Summary */}
            {cart.length > 0 && (
              <div className="mt-12">
                <Card className="glass-card p-6 max-w-md mx-auto">
                  <h3 className="font-bold mb-4">Cart Summary</h3>
                  <div className="space-y-2">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 mt-4 pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total: ${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-accent hover:bg-accent/80">
                    Proceed to Checkout
                  </Button>
                </Card>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedProduct(null)}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-9xl mb-6">{selectedProduct.image}</div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold mb-4">{selectedProduct.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span>{selectedProduct.rating}</span>
                  </div>
                  <span className="text-muted-foreground">(324 reviews)</span>
                </div>
                
                <div className="text-3xl font-bold gradient-text mb-6">
                  ${selectedProduct.price}
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {selectedProduct.description}. Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="flex gap-4">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/80"
                    onClick={() => addToCart(selectedProduct)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 glass-card border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 TechStore Pro - Demo E-commerce Platform by Toheeb Abiodun Mustapha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EcommercePlatform;