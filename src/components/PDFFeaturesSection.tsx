import { motion } from "framer-motion";
import { X } from "lucide-react";

const PDFFeaturesSection = () => {
  const features = [
    {
      title: "All Tech Built in-house",
      subtitle: "no dependency.",
      description: "Build lovable products with user insights. Uncover popular features, identify power users, and improve retention through behavior analysis.",
      tags: [
        { text: "No Twilio Vapi dependency?", icon: "🕷️", color: "bg-green-100 text-green-700" },
        { text: "All Built in India", flag: "❤️", color: "bg-red-100 text-red-700" },
        { text: "<2", icon: "⭐", color: "bg-yellow-100 text-yellow-700" }
      ]
    },
    {
      title: "Store Integrations",
      subtitle: "with Shopify.",
      description: "Unlike any other analytics you've used. From Keyboard shortcuts to realtime updates, analyze product data in a speed of thought.",
      hasShopify: true
    },
    {
      title: "All top Shipping",
      subtitle: "service integrated.",
      description: "Bring all your team perspectives, expertise and skills in the same page. Iterate product faster with confidence.",
      hasShippingLogos: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#fbfbfb] rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-1">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  {feature.subtitle}
                </p>
                
                {/* Tags for first card */}
                {feature.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.tags.map((tag, i) => (
                      <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${tag.color || "bg-gray-100 text-gray-700"}`}>
                        {tag.icon && <span className="text-xs">{tag.icon}</span>}
                        <span>{tag.text}</span>
                        {tag.flag && (
                          <>
                            <span className="text-xs">{tag.flag}</span>
                            {tag.count && <span className="text-xs ml-0.5">{tag.count}</span>}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Shopify logo and button for second card */}
                {feature.hasShopify && (
                  <div className="flex items-center gap-3 mb-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 bg-[#96BF48] rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <span className="text-gray-800 font-semibold flex-1">Shopify</span>
                    <button className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-300">
                      Connected
                    </button>
                  </div>
                )}
                
                {/* Shipping logos for third card - rounded squares with shadow */}
                {feature.hasShippingLogos && (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-[9px] font-bold text-gray-800 leading-tight text-center px-1">DELIVERY</span>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-purple-400 to-green-500 rounded-lg flex items-center justify-center shadow-md">
                      <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-green-600 rounded"></div>
                      </div>
                    </div>
                    <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFFeaturesSection;

