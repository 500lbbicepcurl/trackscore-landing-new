import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ScalysisLogo from "./ScalysisLogo";

// Figma image asset for logo - EXACT from node-id=1-222
const img12001 = "https://www.figma.com/api/mcp/asset/f432c66e-3372-4bd5-816c-b2d8febe83ba";

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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 w-full px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Left side - Logo + Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-7 h-7">
                <img src={img12001} alt="Scalysis" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-semibold text-[#1d1e20]">Scalysis</span>
            </Link>
            <Link
              to="/human-vs-ai"
              className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium text-base"
            >
              Human Vs AI
            </Link>
            <Link
              to="#"
              className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium text-base"
            >
              Use Case
            </Link>
            <Link
              to="#"
              className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium text-base"
            >
              Tech
            </Link>
            <Link
              to="#"
              className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium text-base"
            >
              Help
            </Link>
            <Link
              to="#"
              className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium text-base px-4 py-2 rounded-[12px]"
            >
              Careers
            </Link>
            <Link
              to="/pricing"
              className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium text-base"
            >
              Pricing
            </Link>
          </div>

          {/* Mobile - Just logo */}
          <Link to="/" className="md:hidden flex items-center space-x-2">
            <div className="w-7 h-7">
              <img src={img12001} alt="Scalysis" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-semibold text-[#1d1e20]">Scalysis</span>
          </Link>

          {/* Right side - Buttons - EXACT Figma Match */}
          <div className="flex items-center gap-3">
            <button
              className="border border-[#cdd3db] rounded-[12px] px-[17px] py-2 text-[#31373d] hover:bg-gray-50 text-base font-medium transition-colors"
            >
              AI Call
            </button>
            <a
              href="https://scalysis-app.onrender.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d1e20] border border-[#505967] rounded-[12px] px-[17px] py-2 text-[#edeef0] hover:bg-[#2a2a2d] text-base font-medium transition-colors inline-block text-center"
            >
              Dashboard
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1d1e20] hover:text-[#5066d3] transition-colors"
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
            className="md:hidden bg-white border border-gray-200 rounded-lg mt-4 p-4 shadow-lg mx-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/human-vs-ai"
                className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Human Vs AI
              </Link>
              <Link
                to="#"
                className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Use Case
              </Link>
              <Link
                to="#"
                className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tech
              </Link>
              <Link
                to="#"
                className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Help
              </Link>
              <Link
                to="#"
                className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/pricing"
                className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/human-vs-ai"
                className="text-[#1d1e20] hover:text-[#5066d3] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Human Vs AI
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <button
                  className="border border-[#cdd3db] rounded-[12px] px-4 py-2 text-[#31373d] hover:bg-gray-50 text-base font-medium transition-colors"
                >
                  AI Call
                </button>
                <a
                  href="https://scalysis-app.onrender.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1d1e20] border border-[#505967] rounded-[12px] px-4 py-2 text-[#edeef0] hover:bg-[#2a2a2d] text-base font-medium transition-colors inline-block text-center"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
