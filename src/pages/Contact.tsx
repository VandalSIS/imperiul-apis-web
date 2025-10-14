import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Globe, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      toast({
        title: "Informații Lipsă",
        description: "Vă rugăm să completați toate câmpurile obligatorii.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email Invalid",
        description: "Vă rugăm să introduceți o adresă de email validă.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Mesaj Trimis!",
      description: "Vă mulțumim pentru solicitare. Vom răspunde în 24 de ore.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+373 79 43 70 26", "+373 69 99 25 22"],
      link: "tel:+37379437026",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["vasldiai@apismd.com"],
      link: "mailto:vasldiai@apismd.com",
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.apismd.com"],
      link: "http://www.apismd.com",
    },
    {
      icon: MapPin,
      title: "Adresă",
      details: ["Str. Independentei nr 38", "Stefan Voda, MD-6512", "Republica Moldova"],
      link: "https://maps.google.com/?q=Stefan+Voda+Moldova",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Contactați-ne
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Gata să deveniți parteneri cu noi? Suntem aici să răspundem la întrebările dumneavoastră despre comenzi en-gros, ambalare personalizată și parteneriate de export.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.title === "Website" || item.title === "Adresă" ? "_blank" : undefined}
                rel={item.title === "Website" || item.title === "Adresă" ? "noopener noreferrer" : undefined}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Trimiteți-ne un Mesaj
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nume Complet *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ion Popescu"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Adresă Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ion@companie.ro"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company">Nume Companie</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Compania Dumneavoastră S.R.L."
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Număr Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+373 xxx xxx xxx"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiryType">Tip Solicitare *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectați tipul solicitării" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wholesale">Solicitare en-gros</SelectItem>
                      <SelectItem value="export">Parteneriat de Export</SelectItem>
                      <SelectItem value="packaging">Cerere Ambalare Personalizată</SelectItem>
                      <SelectItem value="general">Întrebare Generală</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mesaj *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Spuneți-ne despre cerințele dumneavoastră..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  Trimiteți Mesajul
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Program de Lucru</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Luni - Vineri</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sâmbătă</span>
                    <span className="font-medium">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duminică</span>
                    <span className="font-medium">Închis</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Timp Rapid de Răspuns:</strong> De obicei răspundem la solicitări în 24 de ore în zilele lucrătoare.
                  </p>
                </div>
              </div>

              {/* Export Markets */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Piețe de Export
                </h3>
                <p className="text-muted-foreground mb-6">
                  Exportăm în prezent în peste 8 țări din Europa și nu numai. Echipa noastră experimentată de logistică asigură transport internațional fiabil.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Piețe UE", "SUA", "Orientul Mijlociu", "Asia Pacific"].map((market, index) => (
                    <span key={index} className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-foreground">
                      {market}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Locația Noastră
                </h3>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Stefan+Voda+Moldova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="h-12 w-12" />
                    <span className="font-medium">Vezi pe Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Întrebări Frecvente
              </h2>
              <p className="text-xl text-muted-foreground">
                Răspunsuri rapide la întrebări comune
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Care este cantitatea minimă de comandă?",
                  a: "Cantitățile minime de comandă variază în funcție de produs și tipul de ambalaj. Contactați-ne cu cerințele dumneavoastră specifice pentru informații detaliate.",
                },
                {
                  q: "Oferiți ambalare personalizată și etichetare privată?",
                  a: "Da! Putem produce miere în diverse formate de ambalare cu branding personalizat în funcție de specificațiile dumneavoastră.",
                },
                {
                  q: "Ce certificări au produsele dumneavoastră?",
                  a: "Toate produsele noastre sunt realizate conform certificărilor ISO 9001:2008, ISO 22000:2005 și HACCP. Putem furniza certificate la cerere.",
                },
                {
                  q: "Cât durează transportul internațional?",
                  a: "Timpul de livrare variază în funcție de destinație. De obicei 5-14 zile pentru piețele europene și 10-21 zile pentru alte regiuni.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
