import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoreValuePoints from "@/components/CoreValuePoints";
import FeatureEcosystem from "@/components/FeatureEcosystem";
import MarketComparisonSlider from "@/components/MarketComparisonSlider";
import CodMarketStats from "@/components/CodMarketStats";
import WhatsInsideScalysis from "@/components/WhatsInsideScalysis";
import SmartOrderSelection from "@/components/SmartOrderSelection";
import BeforeAfterFlip from "@/components/BeforeAfterFlip";
import YouDecideWhatShips from "@/components/YouDecideWhatShips";
import { motion } from "framer-motion";

const FeaturesPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Animation variants for staggered section reveals
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <BeforeAfterFlip />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <CoreValuePoints />
        </motion.div>
 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <FeatureEcosystem />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <MarketComparisonSlider />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <CodMarketStats />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <WhatsInsideScalysis />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <SmartOrderSelection />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <YouDecideWhatShips />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
