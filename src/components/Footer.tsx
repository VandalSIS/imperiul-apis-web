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
              Premium Moldovan honey producer since 2004. ISO 9001:2008 & ISO 22000:2005 certified.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Products
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
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
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
                <a href="http://www.apismd.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-primary transition-colors">
                  www.apismd.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Certifications */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Location</h4>
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

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} S.C. "Vasdiai & Co" S.R.L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
