import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Play, Phone, TrendingDown } from "lucide-react";
import { SynchronizedAudioPlayer } from "@/components/ui/SynchronizedAudioPlayer";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // Remove opacity transform that causes blurring on scroll

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCTAClick = () => {
    document.getElementById("get-started")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // Waveform visualization component
  const Waveform = () => (
    <div className="flex items-center justify-center gap-1 h-16">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-primary to-accent rounded-full animate-waveform"
          style={{
            animationDelay: `${i * 0.1}s`,
            height: `${Math.random() * 40 + 10}px`
          }}
        />
      ))}
    </div>
  );

  return (
    <motion.section 
      ref={sectionRef} 
      className="relative min-h-screen gradient-hero overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" 
          style={{ y: y2 }}
        />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8"
          >
            <TrendingDown className="w-4 h-4" />
            Reduce RTO by 40% with AI-powered calling
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-foreground mb-6"
          >
            Talk to every COD customer.{" "}
            <span className="text-gradient">Filter fraud.</span>{" "}
            Reduce RTO.{" "}
            <span className="text-gradient">With AI.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            Scalysis calls your customers instantly, understands intent, confirms address, 
            and learns who will RTO – before it's too late.
          </motion.p>

          {/* Founder badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 text-muted-foreground mb-10"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
            <span>Built by a ₹6Cr D2C founder — out of RTO pain.</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" className="gradient-primary text-white px-8 py-6 text-lg font-semibold shadow-large">
              <Phone className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2">
              Try Free
            </Button>
          </motion.div>

          {/* Interactive Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl"
            style={{ opacity: showAudioPlayer ? 1 : undefined }}
          >
            {showAudioPlayer ? (
              <SynchronizedAudioPlayer 
                audioSrc="/anuj.wav" 
                onClose={() => setShowAudioPlayer(false)}
              />
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 shadow-large">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">Live AI Call Demo</div>
                </div>
                
                {/* Waveform visualization */}
                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <Waveform />
                </div>
                
                {/* Call transcript preview */}
                <div className="space-y-4 text-left">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-muted-foreground">AI Assistant</p>
                      <p className="text-foreground">"Hello! This is regarding your recent order. Can you confirm your delivery address?"</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Customer</p>
                      <p className="text-foreground">"Yes, it's 123 MG Road, Bangalore. But I might not be available tomorrow."</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-muted-foreground">AI Assistant</p>
                      <p className="text-foreground">"No problem! When would be a better time for delivery?"</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center">
                  <Button 
                    variant="ghost" 
                    className="text-primary"
                    onClick={() => setShowAudioPlayer(true)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Hear a real call
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default Hero;