
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const OrderFilteringSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Infographic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Infographic Container */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-soft">
              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Your Daily Orders
              </h3>
              
              {/* Circular Visualization */}
              <div className="relative flex items-center justify-center mb-8">
                {/* Outer Circle - Clean COD */}
                <div className="relative w-64 h-64 rounded-full bg-blue-100 border-4 border-blue-300 flex items-center justify-center">
                  <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-blue-700 font-semibold text-sm">
                    Clean COD
                  </span>
                  
                  {/* Inner Circle - RTO */}
                  <div className="w-24 h-24 rounded-full bg-red-100 border-4 border-red-300 flex items-center justify-center">
                    <span className="text-red-700 font-semibold text-xs text-center">
                      RTO
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Arrows and Labels */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-300"></div>
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filtering Out</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-300"></div>
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Scalysis</span>
                </div>
              </div>
              
              {/* Caption */}
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                Trains on your delivery data to know which audience converts — seller specific, product specific.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight text-gray-900">
                Smart Order <span className="text-blue-500">Filtering</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our AI analyzes your historical delivery data to identify patterns between high-converting and high-RTO orders, creating seller-specific and product-specific filters that protect your revenue.
              </p>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Automatically filter out risky RTO orders</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Focus shipping on high-intent clean COD orders</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Learns from your specific business patterns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderFilteringSection;
