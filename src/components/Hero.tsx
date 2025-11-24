import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Figma image assets
// node-id=1-1977: Video background image
// Updated to match Figma design
const imgImage1 = "https://www.figma.com/api/mcp/asset/8d084fb7-5469-4247-a5eb-aa8ecf6b7939";
const imgFrame = "https://www.figma.com/api/mcp/asset/bfba363c-276b-41c5-9b2e-1feb106fb751";
const imgGroup = "https://www.figma.com/api/mcp/asset/bfeefd5e-2ac4-4d14-83c2-f5a9838e3e6b";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/4562dd04-c030-4974-b168-227a31ec661d";
const imgVector = "https://www.figma.com/api/mcp/asset/52f6b3bd-aa78-487a-a8f6-4909f58eadd0";
const imgVector1 = "https://www.figma.com/api/mcp/asset/357f75c1-cf83-481a-8bc7-46d6a6899da0";
const imgVector2 = "https://www.figma.com/api/mcp/asset/62ca6f72-2edf-4295-a4cb-17b3bb67881b";
const imgVector3 = "https://www.figma.com/api/mcp/asset/b2af5c32-94db-49eb-97ba-0befaf39deaa";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/b5815f23-36a3-48ba-b2e9-db3f5cd4105a";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-white overflow-hidden pt-20"
    >
      {/* White Background with Visible Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-white">
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

          {/* Badge - EXACT Figma Match (node-id=1-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-1 py-1 bg-[#f3f4f5] rounded-[20px] mb-8"
          >
            <div className="bg-[#383e47] rounded-[20px] px-[10px] py-[2px]">
              <span className="text-white text-[14px] font-medium leading-[19.6px] tracking-[-0.1px]">40%</span>
            </div>
            <span className="text-[#31373d] text-[14px] font-medium leading-[19.6px] tracking-[-0.1px]">
              Reduction in RTO Rates with AI-Powered
            </span>
            <img src={imgFrame} alt="" className="w-[18px] h-[18px]" />
          </motion.div>

          {/* Main Headline - EXACT Figma Match (node-id=1-21) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[60px] md:text-[80px] lg:text-[90px] font-medium leading-[88.32px] tracking-[-3.6px] text-[#1d1e20] mb-6 max-w-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Replace Manual Calling with one{" "}
            <span className="text-[#5066d3]">AI Calling</span> Ecosystem
          </motion.h1>

          {/* Subheadline - EXACT Figma Match (node-id=1-23) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[22px] font-medium leading-[30.8px] tracking-[-0.3px] text-[#31373d] mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built For Indian Ecom.
          </motion.p>

          {/* CTA Buttons - EXACT Figma Match */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 items-center mb-8"
          >
            <a
              href="https://scalysis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d1e20] border border-[#505967] rounded-[12px] px-[16px] py-[13px] inline-block"
            >
              <span className="text-[#edeef0] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                Dashboard
              </span>
            </a>
            <button className="bg-white border border-[#cdd3db] rounded-[12px] px-[17px] py-[13px]">
              <span className="text-[#31373d] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                AI Call
              </span>
            </button>
          </motion.div>

          {/* "get free 100 calls" - EXACT Figma Match (node-id=1-2033) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex items-center justify-center gap-2 text-[#5066d3] text-[16px] font-normal italic mt-2 mb-12"
            style={{ fontFamily: "'Gochi Hand', cursive" }}
          >
            <span className="relative z-10 leading-[57.2px]">get free 100 calls</span>
            <svg
              className="w-32 h-6 text-[#5066d3] relative -ml-2"
              viewBox="0 0 160 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4,4"
            >
              <path d="M 5 15 Q 60 10, 100 15 T 150 15" />
              <path d="M 145 11 L 155 15 L 145 19" fill="currentColor" />
            </svg>
          </motion.div>

        </div>
      </div>

      {/* Video Player Section - After Text Content with Grid Background */}
      <div className="relative w-full mt-12 mb-10 z-0">
        <div className="relative w-full max-w-6xl mx-auto px-6">
          {/* Video Container with Grid Background Visible */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Video with dark purple gradient background */}
            <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-[#1c1833] via-[#262044] to-[#1c192c]">
              {/* Autoplay Video */}
              <video 
                src="/hero-video-trim.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Overlay - EXACT Figma Match (node-id=5-2744) */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.29)] rounded-t-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
