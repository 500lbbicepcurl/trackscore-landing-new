import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, TrendingDown, ArrowRight } from "lucide-react";

const CTA = () => {
  const handleGetStarted = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="get-started" className="py-20 gradient-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm font-medium">
              <TrendingDown className="w-4 h-4" />
              Cut RTO by 40% with AI calling
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop losing money on 
            <br />
            <span className="text-white/90">failed COD deliveries</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 200+ D2C brands using Scalysis AI to call every COD customer, 
            confirm orders, and reduce returns before they happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-500 hover:text-white px-8 py-6 text-lg font-semibold shadow-large"
              onClick={handleGetStarted}
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Demo Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg font-semibold"
            >
              See Live Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-white/60 text-sm">
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