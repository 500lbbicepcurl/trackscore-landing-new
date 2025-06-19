
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const FeatureEcosystem = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Complete <span className="text-blue-500">Feature Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to optimize your COD operations and reduce RTO rates.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                "Smart Order Filtering & Risk Assessment",
                "Real-time RTO Prediction Analytics",
                "Automated Pincode Risk Mapping",
                "Customer Behavior Pattern Analysis",
                "Delivery Success Rate Optimization",
                "Comprehensive Reporting Dashboard"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Integrated Solution
                </h3>
                <p className="text-gray-700 mb-6">
                  All features work together seamlessly to provide maximum RTO reduction.
                </p>
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureEcosystem;
