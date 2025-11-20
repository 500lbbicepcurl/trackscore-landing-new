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
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* White Background with Visible Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-white">
        {/* Visible grid pattern - matching PDF */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 pt-24 pb-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          
          {/* Badge - Matching PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1c1f] rounded-lg text-sm font-medium text-white mb-8"
          >
            <span className="font-bold">40%</span> Reduction in RTO Rates with AI-Powered{" "}
            <span className="text-[#266def]">→</span>
          </motion.div>

          {/* Main Headline - Matching PDF exactly with correct sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-[#1c1c1f] mb-6 max-w-5xl"
          >
            Replace Manual Calling with one{" "}
            <span className="text-[#266def]">AI Calling</span> Ecosystem
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#1c1c1f] leading-relaxed max-w-3xl mb-12"
          >
            Built in RTO-Engine. 85%+ Conversion rates.
          </motion.p>

          {/* CTA Buttons - Matching PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center mb-8"
          >
            <Button 
              size="lg" 
              className="bg-[#1c1c1f] text-white hover:bg-[#2a2a2d] px-8 py-6 text-base font-semibold shadow-large"
            >
              Dashboard
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white border-2 border-gray-300 text-[#1c1c1f] hover:bg-gray-50 px-8 py-6 text-base font-semibold"
            >
              AI Call
            </Button>
          </motion.div>

          {/* Free calls badge with arrow - Matching PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex items-center justify-center gap-2 text-[#266def] text-sm font-medium italic mt-2"
          >
            <span className="relative z-10">get free 100 calls</span>
            <svg 
              className="w-24 h-5 text-[#266def] relative -ml-2" 
              viewBox="0 0 140 25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeDasharray="5,5"
            >
              <path d="M 5 12 Q 50 8, 80 12 T 130 12" />
              <path d="M 125 8 L 135 12 L 125 16" fill="currentColor" />
            </svg>
          </motion.div>

                  </div>
                </div>
                
      {/* Video Player Section - After Text Content with Grid Background */}
      <div className="relative w-full mt-12 mb-10 z-0">
        <div className="relative w-full max-w-6xl mx-auto px-6">
          {/* Video Container with Grid Background Visible */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Grid pattern overlay on video - visible through */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Video with dark gradient background */}
            <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-[#1c1833] via-[#262044] to-[#1c192c]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
              
                </div>
              </div>
        </div>
      </div>

      {/* Brands and Stats Section */}
      <div className="w-full">
        {/* Partner Logos Section - Matching PDF with actual logo designs */}
        <div className="w-full pt-6 pb-12 bg-white">
          <div className="w-full">
            {/* Sliding Partner Logos */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll px-10">
                {/* Partner logos with visual designs */}
                {[
                  { name: "Coca-Cola", type: "cocacola" },
                  { name: "OpenAI", type: "openai" },
                  { name: "Pallet", type: "pallet" },
                  { name: "CAUSAL", type: "causal" },
                  { name: "Plain.", type: "plain" },
                  { name: "passionfroot", type: "passionfroot" },
                  { name: "DOPT", type: "dopt" },
                  { name: "HYPERLINE", type: "hyperline" },
                  { name: "On Deck", type: "ondeck" },
                  { name: "BRAVADO", type: "bravado" },
                  { name: "Beacons", type: "beacons" }
                ].map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center px-8 whitespace-nowrap min-w-[120px]">
                    <div className="flex items-center gap-2">
                      {/* Logo visual representation */}
                      {logo.type === "cocacola" && (
                        <span className="text-red-600 font-bold italic text-lg" style={{ fontFamily: "serif" }}>Coca-Cola</span>
                      )}
                      {logo.type === "openai" && (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
                          <span className="text-gray-800 font-semibold">{logo.name}</span>
                        </div>
                      )}
                      {logo.type === "pallet" && (
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-gray-400"></div>
                          <div className="w-4 h-4 bg-gray-600"></div>
                          <span className="text-gray-800 font-semibold ml-1">{logo.name}</span>
                        </div>
                      )}
                      {logo.type === "causal" && (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                        </div>
                      )}
                      {logo.type === "plain" && (
                        <span className="text-gray-800 font-bold">{logo.name}</span>
                      )}
                      {logo.type === "passionfroot" && (
                        <span className="text-gray-800 font-bold lowercase">{logo.name}</span>
                      )}
                      {logo.type === "dopt" && (
                        <span className="text-gray-800 font-black text-lg tracking-tight">{logo.name}</span>
                      )}
                      {logo.type === "hyperline" && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                          <div className="w-2 h-2 bg-gray-600"></div>
                        </div>
                      )}
                      {logo.type === "ondeck" && (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 border border-white"></div>
                          </div>
                          <span className="text-gray-800 font-medium">{logo.name}</span>
                        </div>
                      )}
                      {logo.type === "bravado" && (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-gray-800 rounded-sm"></div>
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                        </div>
                      )}
                      {logo.type === "beacons" && (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                  </div>
                      )}
                  </div>
                  </div>
                ))}
                
                {/* Repeat for seamless scroll */}
                <div className="w-20"></div>
                
                {[
                  { name: "Coca-Cola", type: "cocacola" },
                  { name: "OpenAI", type: "openai" },
                  { name: "Pallet", type: "pallet" },
                  { name: "CAUSAL", type: "causal" },
                  { name: "Plain.", type: "plain" },
                  { name: "passionfroot", type: "passionfroot" },
                  { name: "DOPT", type: "dopt" },
                  { name: "HYPERLINE", type: "hyperline" },
                  { name: "On Deck", type: "ondeck" },
                  { name: "BRAVADO", type: "bravado" },
                  { name: "Beacons", type: "beacons" }
                ].map((logo, idx) => (
                  <div key={`repeat-${idx}`} className="flex items-center justify-center px-8 whitespace-nowrap min-w-[120px]">
                    <div className="flex items-center gap-2">
                      {logo.type === "cocacola" && (
                        <span className="text-red-600 font-bold italic text-lg" style={{ fontFamily: "serif" }}>Coca-Cola</span>
                      )}
                      {logo.type === "openai" && (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
                          <span className="text-gray-800 font-semibold">{logo.name}</span>
                        </div>
                      )}
                      {logo.type === "pallet" && (
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-gray-400"></div>
                          <div className="w-4 h-4 bg-gray-600"></div>
                          <span className="text-gray-800 font-semibold ml-1">{logo.name}</span>
                        </div>
                      )}
                      {logo.type === "causal" && (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                  </div>
                      )}
                      {logo.type === "plain" && (
                        <span className="text-gray-800 font-bold">{logo.name}</span>
                      )}
                      {logo.type === "passionfroot" && (
                        <span className="text-gray-800 font-bold lowercase">{logo.name}</span>
                      )}
                      {logo.type === "dopt" && (
                        <span className="text-gray-800 font-black text-lg tracking-tight">{logo.name}</span>
                      )}
                      {logo.type === "hyperline" && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                          <div className="w-2 h-2 bg-gray-600"></div>
                  </div>
                      )}
                      {logo.type === "ondeck" && (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 border border-white"></div>
                  </div>
                          <span className="text-gray-800 font-medium">{logo.name}</span>
                  </div>
                      )}
                      {logo.type === "bravado" && (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-gray-800 rounded-sm"></div>
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                </div>
                      )}
                      {logo.type === "beacons" && (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                          <span className="text-gray-800 font-bold">{logo.name}</span>
                  </div>
                      )}
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};
export default Hero;