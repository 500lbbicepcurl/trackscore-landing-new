
import React from "react";
import { cn } from "@/lib/utils";
import { BoxIcon, ShieldCheckIcon, BarChart, TrendingUp, Database, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const WhatsInsideScalysis = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What's Inside Scalysis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to optimize your D2C operations
          </p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={item} className="p-6 bg-gray-50 rounded-lg">
            <BoxIcon className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-gray-600">Deep insights into your shipping patterns</p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-gray-50 rounded-lg">
            <ShieldCheckIcon className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">RTO Protection</h3>
            <p className="text-gray-600">Advanced filtering to prevent returns</p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-gray-50 rounded-lg">
            <TrendingUp className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growth Tracking</h3>
            <p className="text-gray-600">Monitor and optimize your scaling efforts</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsInsideScalysis;
