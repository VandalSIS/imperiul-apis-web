import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Beaker, Truck, Award } from "lucide-react";

import acaciaImage from "@/assets/acacia-honey.jpg";
import lindenImage from "@/assets/linden-honey.jpg";
import sunflowerImage from "@/assets/sunflower-honey.jpg";
import polyfloralImage from "@/assets/polyfloral-honey.jpg";
import beekeepersImage from "@/assets/beekeepers.jpg";
import productionImage from "@/assets/production.jpg";

const Index = () => {
  const featuredProducts = [
    {
      image: acaciaImage,
      name: "Acacia Honey",
      latinName: "Miere de Salcâm",
      description: "Light, delicate honey with slow crystallization. Perfect for sweetening beverages and gourmet cooking.",
      benefits: ["Slow crystallization", "Mild, delicate flavor", "Rich in antioxidants"],
      color: "#F5DEB3",
    },
    {
      image: lindenImage,
      name: "Linden Honey",
      latinName: "Miere de Tei",
      description: "Aromatic honey with medicinal properties. Traditionally used for respiratory health and immune support.",
      benefits: ["Medicinal properties", "Aromatic and soothing", "Supports respiratory health"],
      color: "#DAA520",
    },
    {
      image: sunflowerImage,
      name: "Sunflower Honey",
      latinName: "Miere de Floarea Soarelui",
      description: "Golden honey with quick crystallization. Rich in vitamins and minerals with a bright, sunny flavor.",
      benefits: ["High vitamin content", "Quick crystallization", "Bright, pleasant taste"],
      color: "#FFD700",
    },
    {
      image: polyfloralImage,
      name: "Polyfloral Honey",
      latinName: "Miere Polifloră",
      description: "Complex flavor from diverse wildflowers. Rich, robust taste with exceptional nutritional value.",
      benefits: ["Complex flavor profile", "Rich in nutrients", "Natural energy source"],
      color: "#8B4513",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Quality",
      description: "ISO 9001:2008 and ISO 22000:2005 certified production ensuring highest international standards.",
    },
    {
      icon: Beaker,
      title: "Laboratory Tested",
      description: "All products tested in accredited laboratories both nationally and internationally.",
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Flexible packaging solutions from retail jars to bulk drums based on your requirements.",
    },
    {
      icon: Truck,
      title: "Global Export",
      description: "Established export channels to 8+ countries with reliable international shipping.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our Premium Honey Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Natural, pure honey varieties from Moldova's finest apiaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-elegant">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Choose APISMD
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two decades of expertise in honey production and export
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Our Story: From Hive to Harvest
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2004 by passionate beekeepers, S.C. "Vasdiai & Co" S.R.L. has grown into a trusted 
                name in honey production and export. Our commitment to quality led us to implement rigorous 
                management systems certified to international standards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under the "Imperiul Apis" brand, we deliver 100% natural, healthy honey products that meet 
                national and international quality standards, tested in accredited laboratories worldwide.
              </p>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-foreground hover:bg-primary/5">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={beekeepersImage}
                alt="Beekeepers at work"
                className="rounded-xl shadow-card hover:shadow-hover transition-shadow duration-300 w-full h-64 object-cover"
              />
              <img
                src={productionImage}
                alt="Production facility"
                className="rounded-xl shadow-card hover:shadow-hover transition-shadow duration-300 w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Hexagon Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hexagons-cta" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons-cta)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request a wholesale quote or inquire about custom packaging solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/contact">Request Wholesale Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
