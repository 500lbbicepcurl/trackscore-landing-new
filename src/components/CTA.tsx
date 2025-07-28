
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Observer for fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("typeform-container");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <section id="get-started" className="py-20 relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to <span className="text-gradient">Optimize</span> Your Shipping?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Get early access to Scalysis and start making data-driven shipping decisions today.
          </p>
        </div>
        <div 
          id="typeform-container"
          className={cn(
            "max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-glow backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-700",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div data-tf-live="01JVWDWG3HHEAD58J2SYJYFMAG" className="w-full aspect-video"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
