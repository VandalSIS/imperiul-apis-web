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
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll respond within 24 hours.",
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
      title: "Phone",
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
      title: "Address",
      details: ["Str. Independentei nr 38", "Stefan Voda, MD-6512", "Republic of Moldova"],
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to partner with us? We're here to answer your questions about wholesale orders, custom packaging, and export partnerships.
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
                target={item.title === "Website" || item.title === "Address" ? "_blank" : undefined}
                rel={item.title === "Website" || item.title === "Address" ? "noopener noreferrer" : undefined}
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
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                      <SelectItem value="export">Export Partnership</SelectItem>
                      <SelectItem value="packaging">Custom Packaging Request</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  Send Message
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
                  <h3 className="text-2xl font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Quick Response Time:</strong> We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* Export Markets */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Export Markets
                </h3>
                <p className="text-muted-foreground mb-6">
                  We currently export to 8+ countries across Europe and beyond. Our experienced logistics team ensures reliable international shipping.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["EU Markets", "USA", "Middle East", "Asia Pacific"].map((market, index) => (
                    <span key={index} className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-foreground">
                      {market}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Stefan+Voda+Moldova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="h-12 w-12" />
                    <span className="font-medium">View on Google Maps</span>
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is your minimum order quantity?",
                  a: "Minimum order quantities vary by product and packaging type. Contact us with your specific requirements for detailed information.",
                },
                {
                  q: "Do you offer custom packaging and private labeling?",
                  a: "Yes! We can produce honey in various packaging formats with custom branding based on your specifications.",
                },
                {
                  q: "What certifications do your products have?",
                  a: "All our products are produced under ISO 9001:2008, ISO 22000:2005, and HACCP certifications. We can provide certificates upon request.",
                },
                {
                  q: "How long does international shipping take?",
                  a: "Shipping times vary by destination. Typically 5-14 days for European markets and 10-21 days for other regions.",
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
