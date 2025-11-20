import { motion } from "framer-motion";

const PDFTestimonialSection = () => {
  return (
    <section className="py-20 bg-[#fbfbfb]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-12 shadow-lg"
          >
            <p className="text-2xl md:text-3xl text-gray-800 mb-8 leading-relaxed">
              "Scalysis is the most flexible AI Calling we've ever come across. We've been able to build a world-class go-to-market engine with it."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                T
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Taimur</div>
                <div className="text-gray-600">Co-founder & CEO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PDFTestimonialSection;

