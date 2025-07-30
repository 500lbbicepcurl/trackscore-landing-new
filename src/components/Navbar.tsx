import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    if (location.pathname === "/") {
      document.getElementById("get-started")?.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      window.location.href = "/#get-started";
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-newspaper" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Scalysis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                to="/reduce-rto"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                to="/one-click-checkout-truth"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                One-Click Truth
              </Link>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 shadow-newspaper"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden newspaper-card mt-4 p-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/reduce-rto"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/one-click-checkout-truth"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                One-Click Truth
              </Link>
              <Button
                onClick={handleGetStarted}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-left justify-start"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;