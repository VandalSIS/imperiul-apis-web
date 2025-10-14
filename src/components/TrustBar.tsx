import { Award, Shield, Globe, CheckCircle } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Award,
      title: "ISO 9001:2008",
      subtitle: "Quality Management",
    },
    {
      icon: Shield,
      title: "ISO 22000:2005",
      subtitle: "Food Safety",
    },
    {
      icon: CheckCircle,
      title: "HACCP",
      subtitle: "Certified Process",
    },
    {
      icon: Globe,
      title: "8+ Countries",
      subtitle: "Export Markets",
    },
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
