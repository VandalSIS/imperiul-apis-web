import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Droplet } from "lucide-react";

import acaciaImage from "@/assets/Imperiul Apis 300 g.jpg";
import lindenImage from "@/assets/Imperiul Apis 500 g.jpg";
import sunflowerImage from "@/assets/Imperiul Apis 500 g 1.jpg";
import polyfloralImage from "@/assets/Imperiul Apis 500 g si 300 g.jpg";
import sageImage from "@/assets/Paragon 200 g.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      image: acaciaImage,
      name: "Miere de Salcâm",
      latinName: "Miere de Salcâm",
      description: "Miere delicată și ușoară cu cristalizare lentă. Perfectă pentru îndulcirea băuturilor și gătitul gurmand. Recoltată din florile de salcâm alb din pădurile pristine ale Moldovei.",
      benefits: [
        "Cristalizare lentă menține forma lichidă mai mult timp",
        "Gust delicat și blând care nu acoperă alte gusturi",
        "Bogată în antioxidanți și enzime naturale",
        "Ideală pentru diabetici datorită indicelui glicemic scăzut",
      ],
      color: "#F5DEB3",
      category: "monofloral",
    },
    {
      image: lindenImage,
      name: "Miere de Tei",
      latinName: "Miere de Tei",
      description: "Miere aromatică cu proprietăți medicinale. Folosită tradițional pentru sănătatea respiratorie și susținerea imunității. Parfum puternic și distinctiv din florile de tei.",
      benefits: [
        "Proprietăți antibacteriene și antivirale naturale",
        "Calmează tusea și durerile în gât",
        "Promovează relaxarea și somnul mai bun",
        "Susține funcția sistemului imunitar",
      ],
      color: "#DAA520",
      category: "monofloral",
    },
    {
      image: sunflowerImage,
      name: "Miere de Floarea Soarelui",
      latinName: "Miere de Floarea Soarelui",
      description: "Miere aurie cu cristalizare rapidă. Bogată în vitamine și minerale cu un gust luminos și plăcut. Culoare aurie distinctivă din vastele câmpuri de floarea soarelui din Moldova.",
      benefits: [
        "Conținut ridicat de vitamine A, B, C și E",
        "Bogată în minerale incluzând fier și calciu",
        "Cristalizarea rapidă creează o textură netedă",
        "Gust luminos și plăcut iubit de copii",
      ],
      color: "#FFD700",
      category: "monofloral",
    },
    {
      image: polyfloralImage,
      name: "Miere Poliflorală",
      latinName: "Miere Polifloră",
      description: "Gust complex din diverse flori sălbatice. Gust bogat și robust cu valoare nutrițională excepțională. Fiecare lot oferă un profil unic de gust bazat pe florile sezoniere.",
      benefits: [
        "Profil de gust complex și bogat",
        "Cea mai largă gamă de nutrienți",
        "Sursă naturală de energie pentru sportivi",
        "Gustul unic variază în funcție de sezon",
      ],
      color: "#8B4513",
      category: "polyfloral",
    },
    {
      image: sageImage,
      name: "Miere de Salvie",
      latinName: "Miere de Salvie",
      description: "Miere aromatică cu proprietăți terapeutice distinctive. Culoare deschisă cu gust delicat și parfum floral subtil. Recoltată din florile de salvie din zonele montane ale Moldovei.",
      benefits: [
        "Proprietăți antiseptice și antiinflamatoare",
        "Susține sănătatea digestivă",
        "Gust delicat și aromat",
        "Bogată în antioxidanți naturali",
      ],
      color: "#E6E6FA",
      category: "monofloral",
    },
  ];

  const packagingOptions = [
    {
      category: "Ambalare Retail",
      options: [
        { size: "200g", type: "Borcan de Sticlă", description: "Perfect pentru rafturi retail" },
        { size: "300g", type: "Borcan de Sticlă", description: "Dimensiune populară pentru consumatori" },
        { size: "500g", type: "Borcan de Sticlă", description: "Opțiune dimensiune familie" },
      ],
    },
    {
      category: "Ambalare Semi-Vrac",
      options: [
        { size: "1kg", type: "Recipient Plastic", description: "HDPE alimentar" },
        { size: "10kg", type: "Găleată Plastic", description: "Bucătării comerciale" },
        { size: "25kg", type: "Găleată Plastic", description: "Producători alimentari" },
        { size: "40kg", type: "Recipient Plastic", description: "Uz industrial" },
      ],
    },
    {
      category: "Ambalare în Vrac",
      options: [
        { size: "290kg", type: "Bidon Metalic", description: "Export internațional" },
        { size: "Personalizat", type: "Diverse", description: "Adaptat nevoilor dvs." },
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
              Colecția Noastră de Miere
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Varietăți premium naturale de miere din cele mai bune apiarii din Moldova
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
              Toate Produsele
            </Button>
            <Button
              variant={selectedCategory === "monofloral" ? "default" : "outline"}
              onClick={() => setSelectedCategory("monofloral")}
              className={selectedCategory === "monofloral" ? "bg-primary text-white" : ""}
            >
              Miere Monoflorală
            </Button>
            <Button
              variant={selectedCategory === "polyfloral" ? "default" : "outline"}
              onClick={() => setSelectedCategory("polyfloral")}
              className={selectedCategory === "polyfloral" ? "bg-primary text-white" : ""}
            >
              Miere Poliflorală
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
              Opțiuni de Ambalare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluții flexibile de ambalare de la borcane retail la bidoane în vrac
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
              Soluții Personalizate de Ambalare
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Aveți nevoie de ceva specific? Putem produce miere în borcane sau sticle cu capacități diferite 
              în funcție de cerințele dumneavoastră. Etichetare privată și branding personalizat disponibil.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/contact">Solicitați Ofertă Personalizată</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Garanție de Calitate
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Toate produsele noastre de miere sunt:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-background/80 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">100% Naturală</h4>
                <p className="text-sm text-muted-foreground">
                  Fără aditivi, conservanți sau prelucrare artificială
                </p>
              </div>
              <div className="bg-background/80 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Testată în Laborator</h4>
                <p className="text-sm text-muted-foreground">
                  Verificată în laboratoare acreditate la nivel național și internațional
                </p>
              </div>
              <div className="bg-background/80 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">Calitate Certificată</h4>
                <p className="text-sm text-muted-foreground">
                  Producție certificată ISO 9001, ISO 22000 și HACCP
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
