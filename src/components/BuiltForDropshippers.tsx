import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";

const BuiltForDropshippers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Tools to scale every function",
      subtitle: "Enjoy High Roas Without The RTO Bullsh*t.",
      description: "Indian customers love COD — Scalysis lets you accept every order without fear, then smartly selects only the best ones to ship, protecting your ad spend and maximizing profit.",
      benefits: [
        "Build a 10x Wider Customer Base, Higher Repeats",
        "Protect 100% Of Revenue",
        "No Overblocking, Lean Profits"
      ],
      media: {
        type: "video",
        src: "https://framerusercontent.com/assets/mWYPZsyYGsgYETs0FSJHYv5B8oA.mp4"
      }
    },
    {
      title: "Smart Order Filtering",
      subtitle: "High-quality audience filtering to reduce RTO",
      description: "Scalysis is built for the $350B 2030 D2C market. High-quality audience filtering to reduce RTO. Trained on your delivery data. Spots loss-making regions and next scaling zones. Used by new-age brands.",
      benefits: [
        "Tap into profitable COD market",
        "Avoid RTO audiences",
        "Scale without inventory blockage"
      ],
      media: {
        type: "image",
        src: "/Frame 67.png"
      }
    }
  ];

  const handleTabClick = (index: number) => {
    // Only allow opening tabs, not closing them
    if (activeTab !== index) {
      setActiveTab(index);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold leading-tight mb-4 md:text-5xl">
            Imagine COD <span className="text-blue-500">Without RTO.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Accordion */}
          <div className="space-y-0">
            {tabs.map((tab, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => handleTabClick(index)}
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div 
                        className="w-4 h-4 bg-blue-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {tab.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {activeTab === index ? (
                      <Minus className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                </button>
                
                {activeTab === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-6"
                  >
                    <div className="ml-12 space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        {tab.description}
                      </p>
                      <div className="space-y-3">
                        {tab.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-700">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Media Display */}
          <div className="relative">
            {activeTab >= 0 && tabs[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-8"
              >
                <div className="overflow-hidden">
                  {tabs[activeTab].media.type === "video" ? (
                    <video
                      src={tabs[activeTab].media.src}
                      loop
                      preload="auto"
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-auto rounded-xl"
                      style={{
                        objectFit: "cover",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        objectPosition: "50% 50%"
                      }}
                    />
                  ) : (
                    <img
                      src={tabs[activeTab].media.src}
                      alt={tabs[activeTab].title}
                      className="w-full h-auto"
                      style={{
                        backgroundColor: "transparent"
                      }}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForDropshippers;