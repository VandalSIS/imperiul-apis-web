import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Target, Users, TrendingUp, CheckCircle } from "lucide-react";
import beekeepersImage from "@/assets/beekeepers.jpg";
import productionImage from "@/assets/production.jpg";

const About = () => {
  const timeline = [
    { year: "2004", event: "Company founded by experienced beekeepers" },
    { year: "2008", event: "Achieved ISO 9001:2008 certification" },
    { year: "2010", event: "Achieved ISO 22000:2005 and HACCP certification" },
    { year: "2015", event: "Expanded to 8+ international export markets" },
    { year: "2024", event: "20 years of excellence in honey production" },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every batch of honey meets rigorous international standards with laboratory verification.",
    },
    {
      icon: Target,
      title: "Natural Purity",
      description: "100% natural honey with no additives, preservatives, or artificial processing.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Flexible solutions tailored to meet specific requirements of our B2B partners.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Investing in technology and expertise to enhance quality and efficiency.",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2008",
      description: "International standard for Quality Management Systems, ensuring consistent quality in production.",
      details: [
        "Systematic quality control processes",
        "Continuous monitoring and improvement",
        "Customer satisfaction focus",
      ],
    },
    {
      name: "ISO 22000:2005",
      description: "Food Safety Management System standard, guaranteeing safe products for consumers.",
      details: [
        "Hazard analysis and control",
        "Traceability throughout production",
        "Compliance with food safety regulations",
      ],
    },
    {
      name: "HACCP",
      description: "Hazard Analysis Critical Control Point system for food safety.",
      details: [
        "Prevention-focused approach",
        "Critical control point monitoring",
        "Risk assessment and mitigation",
      ],
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
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Two decades of passion, expertise, and commitment to producing the finest Moldovan honey
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Founded by Passionate Beekeepers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2004 by experienced and devoted beekeepers, S.C. "Vasdiai & Co" S.R.L. specializes 
                in processing and bottling honey products for both national and international markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our unwavering commitment to quality, we've built an efficient management system 
                certified to International Quality Management Standards: ISO 9001:2008 and Food Safety 
                Management: ISO 22000:2005, ensuring our products maintain the highest quality at every 
                production stage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our products are sold under the "Imperiul Apis" (The Apis Empire) brand. All products are 
                natural, healthy, and meet national and international quality standards, tested in accredited 
                laboratories both domestically and abroad.
              </p>
            </div>
            <div>
              <img
                src={beekeepersImage}
                alt="Beekeepers at work"
                className="rounded-xl shadow-hover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Milestones in our commitment to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8 relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary/30" />
                  )}
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 shadow-card">
                  <p className="text-lg text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Quality Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              International standards ensuring the highest quality and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-lg mb-4">
                  <span className="text-xl font-bold text-primary">{cert.name}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{cert.description}</p>
                <ul className="space-y-3">
                  {cert.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Laboratory Testing & Quality Assurance
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every batch of our honey undergoes rigorous testing in accredited laboratories both 
                  nationally and internationally. This ensures that our products consistently meet and 
                  exceed quality standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our quality control process includes tests for purity, authenticity, moisture content, 
                  and absence of contaminants, guaranteeing that only the finest honey reaches our customers.
                </p>
              </div>
              <div>
                <img
                  src={productionImage}
                  alt="Production facility"
                  className="rounded-xl shadow-card w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Production Capabilities
              </h2>
              <p className="text-xl text-muted-foreground">
                Flexible packaging solutions to meet your specific needs
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We can produce honey in various packaging formats based on buyer specifications:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Retail Packaging</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Glass jars (various capacities)</li>
                    <li>• Food-grade plastic containers</li>
                    <li>• Custom branding available</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Bulk Packaging</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Metal cans and drums</li>
                    <li>• Various drum sizes</li>
                    <li>• Suitable for wholesale</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Custom Solutions</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tailored packaging designs</li>
                    <li>• Private label options</li>
                    <li>• Specific volume requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
