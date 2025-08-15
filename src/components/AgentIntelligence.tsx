import React from "react";
import { motion } from "framer-motion";

const AgentIntelligence = () => {
  const cards = [
    {
      icon: "https://cdn.prod.website-files.com/61bcbae3ae2e8ee49aa790b0/67e32799cb1aa188e2dc1a2b_Vector%20(41).svg",
      title: "Make confident decisions",
      description: "See real-time data across your entire business in a single (unbiased) source of truth."
    },
    {
      icon: "https://cdn.prod.website-files.com/61bcbae3ae2e8ee49aa790b0/67e327996bb8c3e6d77cb941_Group%20(9).svg",
      title: "Move faster",
      description: "Get instant insights with a self-serve, AI-native platform."
    },
    {
      icon: "https://cdn.prod.website-files.com/61bcbae3ae2e8ee49aa790b0/67e3278be3ebc8147acc3c0d_Group%20(8).svg",
      title: "Work smarter",
      description: "Let ML model and automation handle the heavy lifting of analyzing and monitoring performance."
    },
    {
      icon: "https://cdn.prod.website-files.com/61bcbae3ae2e8ee49aa790b0/67e327a9dcdaf05e336f75cb_Group%20(10).svg",
      title: "Drive more revenue",
      description: "Maximize profit with a single source of truth powering every tool and strategy across your business."
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: 'rgb(249, 250, 251, 1)' }}>
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
            <span className="text-blue-600">AI-powered intelligence</span> that works for you.
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 mb-4">
                  <img 
                    src={card.icon} 
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentIntelligence;
