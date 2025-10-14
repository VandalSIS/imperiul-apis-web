import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Target, Users, TrendingUp, CheckCircle } from "lucide-react";
import beekeepersImage from "@/assets/beekeepers.jpg";
import productionImage from "@/assets/production.jpg";

const About = () => {
  const timeline = [
    { year: "2004", event: "Compania fondată de apicultori experimentați" },
    { year: "2008", event: "Obținerea certificării ISO 9001:2008" },
    { year: "2010", event: "Obținerea certificărilor ISO 22000:2005 și HACCP" },
    { year: "2015", event: "Extindere în peste 8 piețe internaționale de export" },
    { year: "2024", event: "20 de ani de excelență în producția de miere" },
  ];

  const values = [
    {
      icon: Award,
      title: "Calitatea pe Primul Loc",
      description: "Fiecare lot de miere respectă standarde internaționale riguroase cu verificare în laborator.",
    },
    {
      icon: Target,
      title: "Puritate Naturală",
      description: "Miere 100% naturală fără aditivi, conservanți sau prelucrare artificială.",
    },
    {
      icon: Users,
      title: "Focalizare pe Client",
      description: "Soluții flexibile adaptate pentru a satisface cerințele specifice ale partenerilor B2B.",
    },
    {
      icon: TrendingUp,
      title: "Îmbunătățire Continuă",
      description: "Investim în tehnologie și expertiză pentru a spori calitatea și eficiența.",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2008",
      description: "Standard internațional pentru Sistemele de Management al Calității, asigurând calitate constantă în producție.",
      details: [
        "Procese sistematice de control al calității",
        "Monitorizare și îmbunătățire continuă",
        "Focalizare pe satisfacția clientului",
      ],
    },
    {
      name: "ISO 22000:2005",
      description: "Standard al Sistemului de Management al Siguranței Alimentare, garantând produse sigure pentru consumatori.",
      details: [
        "Analiză și control al pericolelor",
        "Trasabilitate pe parcursul producției",
        "Conformitate cu reglementările de siguranță alimentară",
      ],
    },
    {
      name: "HACCP",
      description: "Sistem de Analiză a Pericolelor și Puncte Critice de Control pentru siguranța alimentară.",
      details: [
        "Abordare centrată pe prevenire",
        "Monitorizarea punctelor critice de control",
        "Evaluare și atenuare a riscurilor",
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
              Povestea Noastră
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Două decenii de pasiune, expertiză și angajament în producerea celei mai bune mieri moldovenești
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
                Fondată de Apicultori Pasionați
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondată în 2004 de apicultori experimentați și dedicați, S.C. "Vasdiai & Co" S.R.L. se specializează 
                în prelucrarea și îmbutelierea produselor din miere pentru piețele naționale și internaționale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prin angajamentul nostru neclintit pentru calitate, am construit un sistem eficient de management 
                certificat conform Standardelor Internaționale de Management al Calității: ISO 9001:2008 și 
                Management al Siguranței Alimentare: ISO 22000:2005, asigurându-ne că produsele noastre mențin 
                cea mai înaltă calitate în fiecare etapă de producție.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Produsele noastre sunt vândute sub marca "Imperiul Apis". Toate produsele sunt naturale, 
                sănătoase și îndeplinesc standardele naționale și internaționale de calitate, testate în 
                laboratoare acreditate atât în țară cât și în străinătate.
              </p>
            </div>
            <div>
              <img
                src={beekeepersImage}
                alt="Apicultori la lucru"
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
              Călătoria Noastră
            </h2>
            <p className="text-xl text-muted-foreground">
              Repere în angajamentul nostru pentru excelență
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
              Valorile Noastre de Bază
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Principiile care ghidează tot ceea ce facem
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
              Certificări de Calitate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Standarde internaționale asigurând cea mai înaltă calitate și siguranță
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
                  Testare în Laborator & Asigurarea Calității
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fiecare lot de miere este supus unor teste riguroase în laboratoare acreditate atât la nivel 
                  național cât și internațional. Acest lucru asigură că produsele noastre îndeplinesc și 
                  depășesc în mod constant standardele de calitate.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Procesul nostru de control al calității include teste pentru puritate, autenticitate, conținut 
                  de umiditate și absența contaminanților, garantând că doar cea mai bună miere ajunge la clienții noștri.
                </p>
              </div>
              <div>
                <img
                  src={productionImage}
                  alt="Facilitate de producție"
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
                Capacități de Producție
              </h2>
              <p className="text-xl text-muted-foreground">
                Soluții flexibile de ambalare pentru a satisface nevoile dumneavoastră specifice
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Putem produce miere în diverse formate de ambalare în funcție de specificațiile cumpărătorului:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Ambalare Retail</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Borcane de sticlă (capacități diverse)</li>
                    <li>• Recipiente din plastic alimentar</li>
                    <li>• Branding personalizat disponibil</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Ambalare în Vrac</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cutii și bidoane metalice</li>
                    <li>• Diverse dimensiuni de bidoane</li>
                    <li>• Potrivit pentru angro</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Soluții Personalizate</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Design personalizat de ambalaj</li>
                    <li>• Opțiuni de etichetă privată</li>
                    <li>• Cerințe specifice de volum</li>
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
