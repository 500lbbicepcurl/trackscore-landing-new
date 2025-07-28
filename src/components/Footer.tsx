import { useEffect, useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("footer-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
    // Here you would typically send the email to your backend
  };

  const handleCTAClick = () => {
    if (window.location.pathname === "/") {
      // We're already on the home page, scroll to the form
      document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the home page and to the form
      window.location.href = "/#get-started";
    }
  };
  
  return (
    <footer id="contact" className="bg-gradient-primary pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      </div>
      <div 
        id="footer-section"
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700",
          isVisible ? "animate-fadeIn" : "opacity-0"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/3c4756d4-83a0-499f-8d98-04970f61faa7.png" 
                alt="Scalysis Logo" 
                className="h-10 mr-2 cursor-pointer" 
                onClick={() => navigate("/")}
              />
            </div>
            <p className="text-white/80 font-light">
              <span className="font-semibold text-white">Smart order selection</span> for COD orders. Reducing RTO rates for e-commerce businesses across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-2 font-light">
              <li>
                <a 
                  href="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <Link 
                  to="/reduce-rto" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Reduce RTO Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-data-protection" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy & Data Protection
                </Link>
              </li>
              {["Features", "How It Works", "Results", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Contact Us</h3>
            <ul className="space-y-3 font-light">
              <li className="flex items-start">
                <MapPin size={18} className="text-white mr-2 mt-0.5" />
                <span className="text-white/80">
                  Tech Park, Electronic City<br />
                  Bangalore, 560100, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-white mr-2" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-white transition-colors">
                  +91 9149874123
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-white mr-2" />
                <a href="mailto:info@scalysis.com" className="text-white/80 hover:text-white transition-colors">
                  aditya.kotwal@scalysis.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 font-light">
              Get the latest updates on <span className="font-semibold text-white">RTO reduction strategies</span> and e-commerce optimization.
            </p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="icon" className="bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm">
                <Send size={16} className="text-white" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center">
          <p className="text-white/60 text-sm font-light">
            &copy; {new Date().getFullYear()} Scalysis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
