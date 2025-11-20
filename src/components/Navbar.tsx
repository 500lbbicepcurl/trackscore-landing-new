import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ScalysisLogo from "./ScalysisLogo";

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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-medium" : "bg-white"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 w-full px-6 lg:px-8">
          {/* Left side - Logo + Navigation links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <ScalysisLogo size={32} />
              <span className="text-2xl font-bold text-[#1c1c1f]">Scalysis</span>
            </Link>
            <Link
              to="#"
              className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
            >
              Use Case
            </Link>
            <Link
              to="#"
              className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
            >
              Tech
            </Link>
            <Link
              to="#"
              className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
            >
              Help
            </Link>
            <Link
              to="#"
              className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
            >
              Careers
            </Link>
            <Link
              to="#"
              className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
            >
              Pricing
            </Link>
          </div>

          {/* Mobile - Just logo */}
          <Link to="/" className="md:hidden flex items-center space-x-2">
            <ScalysisLogo size={32} />
            <span className="text-2xl font-bold text-[#1c1c1f]">Scalysis</span>
          </Link>

          {/* Right side - Buttons only */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-white border border-gray-300 text-[#1c1c1f] hover:bg-gray-50 px-4 py-2"
            >
              AI Call
            </Button>
            <Button
              className="bg-[#1c1c1f] text-white hover:bg-[#2a2a2d] px-4 py-2"
            >
              Dashboard
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
            className="md:hidden bg-white border border-gray-200 rounded-lg mt-4 p-4 shadow-medium"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="#"
                className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Use Case
              </Link>
              <Link
                to="#"
                className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tech
              </Link>
              <Link
                to="#"
                className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Help
              </Link>
              <Link
                to="#"
                className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="#"
                className="text-[#1c1c1f] hover:text-[#266def] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button
                  variant="outline"
                  className="bg-white border border-gray-300 text-[#1c1c1f] hover:bg-gray-50"
                >
                  AI Call
                </Button>
                <Button
                  className="bg-[#1c1c1f] text-white hover:bg-[#2a2a2d]"
                >
                  Dashboard
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;