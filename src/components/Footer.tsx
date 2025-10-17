import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🐝</span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold">APISMD</h3>
                <p className="text-xs opacity-80">Imperiul Apis</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Producător premium de miere din Moldova din 2004. Certificat ISO 9001:2008 & ISO 22000:2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Link-uri Rapide</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Produse
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contactați-ne</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="opacity-80">
                  <a href="tel:+37379437026" className="hover:text-primary transition-colors">
                    +373 79 43 70 26
                  </a>
                  <br />
                  <a href="tel:+37369992522" className="hover:text-primary transition-colors">
                    +373 69 99 25 22
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:vasldiai@apismd.com" className="opacity-80 hover:text-primary transition-colors">
                  vasldiai@apismd.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Globe className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="https://www.apismd.eu/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-primary transition-colors">
                  www.apismd.eu
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Certifications */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Locație</h4>
            <div className="flex items-start space-x-2 mb-4 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <p className="opacity-80 leading-relaxed">
                Str. Independentei nr 38<br />
                Stefan Voda, MD-6512<br />
                Republic of Moldova
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded text-xs font-medium">
                ISO 9001:2008
              </div>
              <div className="inline-block bg-primary/10 px-3 py-1 rounded text-xs font-medium ml-2">
                ISO 22000:2005
              </div>
              <div className="inline-block bg-primary/10 px-3 py-1 rounded text-xs font-medium">
                HACCP Certified
              </div>
            </div>
          </div>
        </div>

        {/* Funding Disclaimer Section */}
        <div className="border-t border-secondary-foreground/10 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Logos */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-8">
              <img 
                src="/sweeden_logo-300x121.png" 
                alt="Sweden Logo" 
                className="h-8 sm:h-12 object-contain"
              />
              <img 
                src="/uk_dev_logo-300x113.png" 
                alt="UK International Development Logo" 
                className="h-8 sm:h-12 object-contain"
              />
              <img 
                src="/undp_logo.png" 
                alt="UNDP Logo" 
                className="h-8 sm:h-12 object-contain"
              />
            </div>
            
            {/* Disclaimer Text */}
            <div className="text-center text-xs opacity-70 max-w-4xl leading-relaxed">
              <p className="italic">
                Acest site web a fost realizat cu asistența financiară a Suediei și Marii Britanii, în cadrul proiectului „Dezvoltarea capacităților de export pe malurile Nistrului" (AdTrade), implementat de PNUD. Conținutul acestui site web este responsabilitatea exclusivă a autorului și nu reprezintă neapărat punctele de vedere ale PNUD, Suediei sau Marii Britanii.
              </p>
              <p className="mt-2 italic">
                PNUD nu promovează nicio entitate, marcă, produs sau serviciu.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} S.C. "Vasdiai & Co" S.R.L. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
