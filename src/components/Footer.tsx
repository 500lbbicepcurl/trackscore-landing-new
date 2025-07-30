import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Youtube, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Scalysis</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              The AI calling platform that talks to every COD customer, confirms intent, 
              and reduces RTO before it happens. Built by founders, for founders.
            </p>
            
            {/* Founder Quote */}
            <div className="bg-muted/10 border border-muted/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  A
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "RTO was killing my ₹6Cr business. So I built the AI caller I wished existed."
                  </p>
                  <p className="text-sm font-semibold">— Scalysis Founder</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:hello@scalysis.ai" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-background">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/reduce-rto" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/one-click-checkout-truth" className="text-muted-foreground hover:text-primary transition-colors">
                  One-Click Truth
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-background">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-data-protection" className="text-muted-foreground hover:text-primary transition-colors">
                  🔐 Privacy & Data Protection
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-muted/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="font-semibold text-background mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm">
                Get the latest insights on COD optimization and D2C growth.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-muted/10 border border-muted/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md text-sm font-medium transition-colors shadow-newspaper">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Scalysis. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ for Indian D2C brands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;