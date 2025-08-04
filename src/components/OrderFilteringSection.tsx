import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
const OrderFilteringSection = () => {
  return <section className="bg-white py-[2px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            <div className="bg-white-50 rounded-2xl p-8 shadow-soft">
              <img src="/lovable-uploads/b6eafa43-aefc-4692-a694-5f104f90a2b8.png" alt="Scalysis Unlocks Profitable COD TAM - Smart Order Filtering Infographic" className="w-full h-auto rounded-lg" />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight text-gray-900">
                Smart Order <span className="text-blue-500">Filtering</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Scalysis is built for the $350B 2030 D2C market. High-quality audience filtering to reduce RTO. Trained on your delivery data. Spots loss-making regions and next scaling zones. Used by new-age brands.
              </p>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Tap into profitable COD market</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Avoid RTO audiences</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Scale without inventory blockage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default OrderFilteringSection;