
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCTAClick = () => {
    if (window.location.pathname === "/") {
      // We're already on the home page, scroll to the form
      document.getElementById("get-started")?.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      // Navigate to the home page and to the form
      window.location.href = "/#get-started";
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "py-1 sm:py-2 backdrop-blur-xl bg-white/20 border-b border-white/20 shadow-elegant" 
        : "py-2 sm:py-4 bg-transparent"
    )}>
      <div className="container mx-auto sm:px-6 lg:px-10 px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
              <img 
                src="https://framerusercontent.com/images/qOi3xuJUI1I1c13AATXI63xs.png?" 
                alt="Scalysis Logo" 
                className="h-14 sm:h-20" 
                onError={e => {
                  console.error("Logo failed to load");
                  e.currentTarget.style.display = "none";
                }} 
              />
              <span className="text-xl font-semibold text-white"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#stats" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Results
            </a>
            <Link 
              to="/one-click-checkout-truth" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              One-Click Truth
            </Link>
            <Button asChild variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              <a href="#contact" className="text-sm font-medium">
                Contact
              </a>
            </Button>
            <ShimmerButton 
              background="rgba(255, 255, 255, 0.2)" 
              shimmerColor="rgba(255, 255, 255, 0.6)" 
              className="w-auto px-5 text-white border border-white/30 backdrop-blur-sm" 
              onClick={handleCTAClick}
            >
              <span className="text-sm font-medium">Try Scalysis Early</span>
            </ShimmerButton>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-white/80 hover:text-white" 
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - With Modern Glass Effect */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <nav className="flex flex-col space-y-4 backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 shadow-glow">
              <a 
                href="#features" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1.5 rounded-md hover:bg-white/10" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1.5 rounded-md hover:bg-white/10" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#stats" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1.5 rounded-md hover:bg-white/10" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </a>
              <Link 
                to="/one-click-checkout-truth" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1.5 rounded-md hover:bg-white/10" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                One-Click Truth
              </Link>
              <a 
                href="#contact" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1.5 rounded-md hover:bg-white/10" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <ShimmerButton 
                background="rgba(255, 255, 255, 0.2)" 
                shimmerColor="rgba(255, 255, 255, 0.6)" 
                className="w-full text-white border border-white/30" 
                onClick={() => {
                  handleCTAClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="text-sm font-medium">Try Scalysis Early</span>
              </ShimmerButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
