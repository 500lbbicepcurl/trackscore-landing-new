import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, TrendingDown, ArrowRight } from "lucide-react";

const CTA = () => {
  const handleGetStarted = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="get-started" className="py-20 bg-primary relative overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-primary-foreground"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/20 border border-primary-foreground/30 rounded-md text-sm font-medium">
              <TrendingDown className="w-4 h-4" />
              Cut RTO by 40% with AI calling
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Stop losing money on 
            <br />
            <span className="text-primary-foreground/90">failed COD deliveries</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 200+ D2C brands using Scalysis AI to call every COD customer, 
            confirm orders, and reduce returns before they happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-medium shadow-card"
              onClick={handleGetStarted}
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Demo Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-medium"
            >
              See Live Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;