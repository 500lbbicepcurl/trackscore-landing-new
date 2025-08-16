import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Play, Phone, TrendingDown, Mic } from "lucide-react";
import { SynchronizedAudioPlayer } from "@/components/ui/SynchronizedAudioPlayer";
import { useNavigate } from "react-router-dom";

// Import brand images
import brand1 from "./BRAND 1.png";
import brand2 from "./BRAND 2.png";
import brand3 from "./BRAND 3.png";
import brand4 from "./BRAND 4.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
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

  const handleLiveAICallClick = () => {
    navigate('/live-ai-testing');
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

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-7"
          >
            <TrendingDown className="w-4 h-4" />
            Reduce RTO by 40% with AI-powered calling
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground mb-6"
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
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-2"
              onClick={handleLiveAICallClick}
            >
              <Mic className="w-5 h-5 mr-2" />
              Live AI Call
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

      {/* Brands and Stats Section */}
      <div className="w-full">
        {/* Brands Section - Hero Background */}
        <div className="w-full pt-6 pb-12">
          <div className="w-full">
            {/* Sliding Brands */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll px-10">
                {/* First set */}
                <div className="flex items-center gap-20 whitespace-nowrap">
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand1} alt="Brand 1" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand2} alt="Brand 2" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand3} alt="Brand 3" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand4} alt="Brand 4" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
                
                {/* Gap between sets */}
                <div className="w-20"></div>
                
                {/* Second set */}
                <div className="flex items-center gap-20 whitespace-nowrap">
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand1} alt="Brand 1" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand2} alt="Brand 2" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand3} alt="Brand 3" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand4} alt="Brand 4" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
                
                {/* Gap between sets */}
                <div className="w-20"></div>
                
                {/* Third set for extra smoothness */}
                <div className="flex items-center gap-20 whitespace-nowrap">
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand1} alt="Brand 1" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand2} alt="Brand 2" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand3} alt="Brand 3" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-12">
                    <img src={brand4} alt="Brand 4" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Blue Background */}
        <div className="bg-blue-600 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <div className="text-5xl md:text-6xl font-bold">
                42%
              </div>
              <div className="text-center md:text-left max-w-xs">
                <p className="text-lg md:text-xl leading-relaxed">
                  average <span className="font-bold">increase</span> in new customer revenue <span className="font-bold">90 days after signing up</span> with Scalysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Hero;