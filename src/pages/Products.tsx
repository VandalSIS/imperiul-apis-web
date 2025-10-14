import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Droplet } from "lucide-react";

import acaciaImage from "@/assets/acacia-honey.jpg";
import lindenImage from "@/assets/linden-honey.jpg";
import sunflowerImage from "@/assets/sunflower-honey.jpg";
import polyfloralImage from "@/assets/polyfloral-honey.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      image: acaciaImage,
      name: "Acacia Honey",
      latinName: "Miere de Salcâm",
      description: "Light, delicate honey with slow crystallization. Perfect for sweetening beverages and gourmet cooking. Harvested from white acacia blossoms in Moldova's pristine forests.",
      benefits: [
        "Slow crystallization maintains liquid form longer",
        "Mild, delicate flavor that doesn't overpower",
        "Rich in antioxidants and natural enzymes",
        "Ideal for diabetics due to low glycemic index",
      ],
      color: "#F5DEB3",
      category: "monofloral",
    },
    {
      image: lindenImage,
      name: "Linden Honey",
      latinName: "Miere de Tei",
      description: "Aromatic honey with medicinal properties. Traditionally used for respiratory health and immune support. Strong, distinctive fragrance from linden tree blossoms.",
      benefits: [
        "Natural antibacterial and antiviral properties",
        "Soothes coughs and sore throats",
        "Promotes relaxation and better sleep",
        "Supports immune system function",
      ],
      color: "#DAA520",
      category: "monofloral",
    },
    {
      image: sunflowerImage,
      name: "Sunflower Honey",
      latinName: "Miere de Floarea Soarelui",
      description: "Golden honey with quick crystallization. Rich in vitamins and minerals with a bright, sunny flavor. Distinctive golden color from Moldova's vast sunflower fields.",
      benefits: [
        "High in vitamins A, B, C, and E",
        "Rich in minerals including iron and calcium",
        "Quick crystallization creates smooth texture",
        "Bright, pleasant taste loved by children",
      ],
      color: "#FFD700",
      category: "monofloral",
    },
    {
      image: polyfloralImage,
      name: "Polyfloral Honey",
      latinName: "Miere Polifloră",
      description: "Complex flavor from diverse wildflowers. Rich, robust taste with exceptional nutritional value. Each batch offers a unique flavor profile based on seasonal blooms.",
      benefits: [
        "Complex, rich flavor profile",
        "Broadest range of nutrients",
        "Natural energy source for athletes",
        "Unique taste varies by season",
      ],
      color: "#8B4513",
      category: "polyfloral",
    },
  ];

  const packagingOptions = [
    {
      category: "Retail Packaging",
      options: [
        { size: "250g", type: "Glass Jar", description: "Perfect for retail shelves" },
        { size: "350g", type: "Glass Jar", description: "Popular consumer size" },
        { size: "500g", type: "Glass Jar", description: "Family size option" },
      ],
    },
    {
      category: "Semi-Bulk Packaging",
      options: [
        { size: "1kg", type: "Plastic Container", description: "Food-grade HDPE" },
        { size: "10kg", type: "Plastic Bucket", description: "Commercial kitchens" },
        { size: "25kg", type: "Plastic Bucket", description: "Food manufacturers" },
        { size: "40kg", type: "Plastic Container", description: "Industrial use" },
      ],
    },
    {
      category: "Bulk Packaging",
      options: [
        { size: "290kg", type: "Metal Drum", description: "International export" },
        { size: "Custom", type: "Various", description: "Tailored to your needs" },
      ],
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our Honey Collection
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Premium natural honey varieties from Moldova's finest apiaries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "bg-primary text-white" : ""}
            >
              All Products
            </Button>
            <Button
              variant={selectedCategory === "monofloral" ? "default" : "outline"}
              onClick={() => setSelectedCategory("monofloral")}
              className={selectedCategory === "monofloral" ? "bg-primary text-white" : ""}
            >
              Monofloral Honey
            </Button>
            <Button
              variant={selectedCategory === "polyfloral" ? "default" : "outline"}
              onClick={() => setSelectedCategory("polyfloral")}
              className={selectedCategory === "polyfloral" ? "bg-primary text-white" : ""}
            >
              Polyfloral Honey
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Package className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Packaging Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible packaging solutions from retail jars to bulk drums
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagingOptions.map((category, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.options.map((option, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                      <Droplet className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          {option.size} - {option.type}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-xl p-8 shadow-card text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Custom Packaging Solutions
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Need something specific? We can produce honey in jars or bottles with different capacities 
              based on your requirements. Private labeling and custom branding available.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Quality Guarantee
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              All our honey products are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-background/80 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">100% Natural</h4>
                <p className="text-sm text-muted-foreground">
                  No additives, preservatives, or artificial processing
                </p>
              </div>
              <div className="bg-background/80 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Laboratory Tested</h4>
                <p className="text-sm text-muted-foreground">
                  Verified in accredited labs nationally and internationally
                </p>
              </div>
              <div className="bg-background/80 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Certified Quality</h4>
                <p className="text-sm text-muted-foreground">
                  ISO 9001, ISO 22000, and HACCP certified production
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
