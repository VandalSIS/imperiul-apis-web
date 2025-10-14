import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe2, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-honey.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Moldovan honey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Animated Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Certificat ISO 9001 & 22000</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Miere Pură din Moldova
            <span className="block text-primary mt-2">Din 2004</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            Furnizor premium de miere în vrac pentru piețe internaționale. Calitate certificată, puritate naturală, soluții personalizate de ambalare.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 animate-scale-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">20+</div>
              <div className="text-sm text-muted-foreground">Ani Experiență</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">8+</div>
              <div className="text-sm text-muted-foreground">Țări Export</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Calitate Naturală</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-elegant hover:shadow-hover transition-all"
            >
              <Link to="/contact">
                Solicitați Ofertă en-gros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-foreground hover:bg-primary/5 font-semibold"
            >
              <Link to="/products">Vedeți Produsele</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Calitate Certificată ISO</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe2 className="h-5 w-5 text-primary" />
              <span>Transport Internațional</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Comenzi în Vrac & Personalizate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-honey-drip" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
