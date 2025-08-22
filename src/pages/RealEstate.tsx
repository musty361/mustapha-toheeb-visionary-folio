import { ArrowLeft, MapPin, Bed, Bath, Square, Heart, Share2, Calculator, Camera, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

const RealEstate = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    priceRange: "",
    propertyType: "",
    bedrooms: ""
  });

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$450,000",
      location: "Downtown, NY",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      type: "Apartment",
      status: "For Sale",
      featured: true,
      images: ["/api/placeholder/600/400"],
      description: "Stunning modern apartment with city views and premium amenities.",
      features: ["City View", "Gym", "Parking", "Balcony"]
    },
    {
      id: 2,
      title: "Luxury Family Villa",
      price: "$750,000",
      location: "Suburbs, CA",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      type: "House",
      status: "For Sale",
      featured: true,
      images: ["/api/placeholder/600/400"],
      description: "Beautiful family home with garden and modern kitchen.",
      features: ["Garden", "Garage", "Modern Kitchen", "Pool"]
    },
    {
      id: 3,
      title: "Cozy Studio Loft",
      price: "$1,800/month",
      location: "Brooklyn, NY",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      type: "Studio",
      status: "For Rent",
      featured: false,
      images: ["/api/placeholder/600/400"],
      description: "Perfect starter home in trendy neighborhood.",
      features: ["Exposed Brick", "High Ceilings", "Pet Friendly"]
    },
    {
      id: 4,
      title: "Penthouse Suite",
      price: "$1,200,000",
      location: "Manhattan, NY",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2200,
      type: "Penthouse",
      status: "For Sale",
      featured: false,
      images: ["/api/placeholder/600/400"],
      description: "Exclusive penthouse with panoramic city views.",
      features: ["Panoramic Views", "Private Terrace", "Concierge", "Wine Cellar"]
    }
  ];

  const featuredProperties = properties.filter(p => p.featured);
  const allProperties = properties;

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
                <MapPin className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold">EstateHub</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calculator className="w-4 h-4 mr-2" />
                Mortgage Calculator
              </Button>
              <Button className="bg-primary hover:bg-primary/80" size="sm">
                List Property
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Your Dream Home</h2>
            <p className="text-muted-foreground">Discover the perfect property with our advanced search tools</p>
          </div>

          {/* Search Form */}
          <Card className="glass-card p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Input
                placeholder="Location"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="md:col-span-2"
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-300k">$0 - $300k</SelectItem>
                  <SelectItem value="300k-600k">$300k - $600k</SelectItem>
                  <SelectItem value="600k-1m">$600k - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-primary hover:bg-primary/80">
                Search
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">

            <Tabs defaultValue="featured" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="featured">Featured Properties</TabsTrigger>
                <TabsTrigger value="all">All Properties</TabsTrigger>
                <TabsTrigger value="calculator">Mortgage Calculator</TabsTrigger>
              </TabsList>

              {/* Featured Properties */}
              <TabsContent value="featured">
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredProperties.map((property) => (
                    <Card key={property.id} className="glass-card overflow-hidden hover-lift hover-glow group">
                      {/* Property Image */}
                      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-16 h-16 text-primary/60" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'}>
                            {property.status}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <p className="text-2xl font-bold text-white bg-black/50 px-3 py-1 rounded-lg">
                            {property.price}
                          </p>
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {property.location}
                        </p>

                        {/* Property Stats */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            {property.bedrooms} bed
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            {property.bathrooms} bath
                          </div>
                          <div className="flex items-center gap-1">
                            <Square className="w-4 h-4" />
                            {property.sqft} sqft
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">
                          {property.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {property.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            Schedule Tour
                          </Button>
                          <Button className="flex-1 bg-primary hover:bg-primary/80">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* All Properties */}
              <TabsContent value="all">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allProperties.map((property) => (
                    <Card key={property.id} className="glass-card overflow-hidden hover-lift hover-glow">
                      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-primary/60" />
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'} className="text-xs">
                            {property.status}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <p className="text-lg font-bold text-white bg-black/50 px-2 py-1 rounded">
                            {property.price}
                          </p>
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-bold mb-1">{property.title}</h4>
                        <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {property.location}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Bed className="w-3 h-3" />
                            {property.bedrooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="w-3 h-3" />
                            {property.bathrooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Square className="w-3 h-3" />
                            {property.sqft}
                          </span>
                        </div>

                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Mortgage Calculator */}
              <TabsContent value="calculator">
                <div className="max-w-2xl mx-auto">
                  <Card className="glass-card p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                      <Calculator className="w-6 h-6 text-primary" />
                      Mortgage Calculator
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Home Price</label>
                          <Input placeholder="$450,000" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Down Payment</label>
                          <Input placeholder="$90,000" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
                          <Input placeholder="6.5" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Loan Term (years)</label>
                          <Input placeholder="30" />
                        </div>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/80">
                        Calculate Payment
                      </Button>

                      <Card className="bg-secondary/50 p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Estimated Monthly Payment</p>
                        <p className="text-3xl font-bold text-primary">$2,156</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Principal & Interest only. Does not include taxes, insurance, or PMI.
                        </p>
                      </Card>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 EstateHub Real Estate Platform Demo - Developed by Toheeb Abiodun Mustapha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RealEstate;