import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Phone, 
  Filter, 
  MousePointer, 
  TrendingUp, 
  MapPin, 
  Target, 
  Users, 
  MessageSquare, 
  Brain, 
  Calculator 
} from "lucide-react";

const UnifiedPlatform = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmartOrderSelection = () => {
    navigate('/features');
  };

  const handleCustomPixel = () => {
    navigate('/custom-pixel');
  };

  const handleCashflow = () => {
    navigate('/cashflow');
  };

  const handlePincodeExclusion = () => {
    navigate('/pincode');
  };

  const handleSmartMetaTargeting = () => {
    navigate('/smart-meta');
  };

  const handleCustomAudience = () => {
    navigate('/custom-audience');
  };

  const handleRTOGPT = () => {
    navigate('/rto-gpt');
  };

  const handleDecisionEngine = () => {
    navigate('/decision-engine');
  };

  const handleSavingsCalculator = () => {
    navigate('/savings-calculator');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ditch the point solutions. <span className="text-blue-600">Get one unified platform.</span>
          </h2>
        </motion.div>

        {/* Top 2 Blue Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* AI CALLING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-blue-600 rounded-xl p-8 text-white cursor-pointer hover:bg-blue-700 transition-colors"
            onClick={handleScrollToTop}
          >
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">AI CALLING</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Intelligent customer verification calls that confirm addresses, understand intent, and predict RTO risk in real-time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SMART ORDER SELECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-600 rounded-xl p-8 text-white cursor-pointer hover:bg-blue-700 transition-colors"
            onClick={handleSmartOrderSelection}
          >
            <div className="flex items-center gap-4">
              <Filter className="w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold mb-2">SMART ORDER SELECTION</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Custom ML Model for your store that learns from your delivery data to maximize profit and minimize RTO risk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle 4 Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* CUSTOM PIXEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handleCustomPixel}
          >
            <div className="flex items-center gap-3">
              <MousePointer className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">CUSTOM PIXEL</h3>
            </div>
          </motion.div>

          {/* CASHFLOW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handleCashflow}
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">CASHFLOW</h3>
            </div>
          </motion.div>

          {/* PINCODE EXCLUSION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handlePincodeExclusion}
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">PINCODE EXCLUSION</h3>
            </div>
          </motion.div>

          {/* SMART META TARGETING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handleSmartMetaTargeting}
          >
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">SMART META TARGETING</h3>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4 Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CUSTOM AUDIENCE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handleCustomAudience}
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">CUSTOM AUDIENCE</h3>
            </div>
          </motion.div>

          {/* RTO GPT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handleRTOGPT}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">RTO GPT</h3>
            </div>
          </motion.div>

          {/* DECISION ENGINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handleDecisionEngine}
          >
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">DECISION ENGINE</h3>
            </div>
          </motion.div>

          {/* SAVINGS CALCULATOR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={handleSavingsCalculator}
          >
            <div className="flex items-center gap-3">
              <Calculator className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-600 text-sm">SAVINGS CALCULATOR</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;
