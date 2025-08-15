import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OldVsNew from "@/components/OldVsNew";
import BuiltForDropshippers from "@/components/BuiltForDropshippers";
import GeminiEffectSection from "@/components/GeminiEffectSection";
import UnifiedPlatform from "@/components/UnifiedPlatform";
import AgentIntelligence from "@/components/AgentIntelligence";
import CoreValuePoints from "@/components/CoreValuePoints";
import FeatureEcosystem from "@/components/FeatureEcosystem";
import MarketComparisonSlider from "@/components/MarketComparisonSlider";
import CodMarketStats from "@/components/CodMarketStats";
import WhatsInsideScalysis from "@/components/WhatsInsideScalysis";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <OldVsNew />
        <BuiltForDropshippers />
        <GeminiEffectSection />
        <UnifiedPlatform />
        <AgentIntelligence />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
