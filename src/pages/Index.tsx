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
      name: "Miere de Salcâm",
      latinName: "Miere de Salcâm",
      description: "Miere delicată și ușoară cu cristalizare lentă. Perfectă pentru îndulcirea băuturilor și gătitul gurmand.",
      benefits: ["Cristalizare lentă", "Gust delicat și blând", "Bogată în antioxidanți"],
      color: "#F5DEB3",
    },
    {
      image: lindenImage,
      name: "Miere de Tei",
      latinName: "Miere de Tei",
      description: "Miere aromatică cu proprietăți medicinale. Folosită tradițional pentru sănătatea respiratorie și susținerea imunității.",
      benefits: ["Proprietăți medicinale", "Aromatică și calmantă", "Susține sănătatea respiratorie"],
      color: "#DAA520",
    },
    {
      image: sunflowerImage,
      name: "Miere de Floarea Soarelui",
      latinName: "Miere de Floarea Soarelui",
      description: "Miere aurie cu cristalizare rapidă. Bogată în vitamine și minerale cu un gust luminos și plăcut.",
      benefits: ["Conținut ridicat de vitamine", "Cristalizare rapidă", "Gust plăcut și luminos"],
      color: "#FFD700",
    },
    {
      image: polyfloralImage,
      name: "Miere Poliflorală",
      latinName: "Miere Polifloră",
      description: "Gust complex din diverse flori sălbatice. Gust bogat și robust cu valoare nutrițională excepțională.",
      benefits: ["Profil de gust complex", "Bogată în nutrienți", "Sursă naturală de energie"],
      color: "#8B4513",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Calitate Certificată",
      description: "Producție certificată ISO 9001:2008 și ISO 22000:2005 asigurând cele mai înalte standarde internaționale.",
    },
    {
      icon: Beaker,
      title: "Testat în Laborator",
      description: "Toate produsele testate în laboratoare acreditate atât național cât și internațional.",
    },
    {
      icon: Package,
      title: "Ambalare Personalizată",
      description: "Soluții flexibile de ambalare de la borcane retail la containere în vrac în funcție de cerințele dumneavoastră.",
    },
    {
      icon: Truck,
      title: "Export Global",
      description: "Canale de export stabilite în peste 8 țări cu transport internațional fiabil.",
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
              Colecția Noastră Premium de Miere
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Varietăți naturale și pure de miere din cele mai bune apiarii din Moldova
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
                Vedeți Toate Produsele
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
              De Ce Să Alegeți APISMD
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Două decenii de expertiză în producția și exportul de miere
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
                Povestea Noastră: De la Stup la Recoltă
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondată în 2004 de apicultori pasionați, S.C. "Vasdiai & Co" S.R.L. a crescut până la a deveni 
                un nume de încredere în producția și exportul de miere. Angajamentul nostru pentru calitate ne-a 
                determinat să implementăm sisteme riguroase de management certificate la standarde internaționale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sub marca "Imperiul Apis", livrăm produse de miere 100% naturale și sănătoase care respectă 
                standardele naționale și internaționale de calitate, testate în laboratoare acreditate în întreaga lume.
              </p>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-foreground hover:bg-primary/5">
                <Link to="/about">
                  Aflați Mai Multe Despre Noi
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
              Gata Să Deveniți Partenerul Nostru?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solicitați o ofertă en-gros sau informați-vă despre soluțiile de ambalare personalizate pentru afacerea dumneavoastră.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/contact">Solicitați Ofertă en-gros</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link to="/products">Răsfoiți Produsele</Link>
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
