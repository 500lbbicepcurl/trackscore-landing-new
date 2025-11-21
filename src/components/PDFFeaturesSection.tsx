import { motion } from "framer-motion";

// Figma image assets
const imgImage2 = "https://www.figma.com/api/mcp/asset/6c200d88-a7fd-4cbb-9721-65e50b1fe7e6";
// EXACT from node-id=1-2678
const imgDelhiveryLogo20191 = "https://www.figma.com/api/mcp/asset/314ef401-a970-4819-b190-be70b3fcdc8c";
const imgSrLogoWiki1 = "https://www.figma.com/api/mcp/asset/eb7f8141-9707-4787-9f03-7a71c5d08fb1";
const imgUnnamed1 = "https://www.figma.com/api/mcp/asset/232f1061-bff5-4ce3-8914-52bafecafb10";
const imgFrame = "https://www.figma.com/api/mcp/asset/75d75225-5add-4884-8b58-49b33922f575";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/47a5e68a-22fc-4ef6-a96c-392efe5280a2";

const PDFFeaturesSection = () => {
  return (
    <section className="py-[52px] bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Card 1: All Tech Built in-house */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-white to-[#f4f4f5] border border-zinc-200 h-[354px] rounded-lg relative flex-1 max-w-[453px] overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-px opacity-50">
                <img src={imgFrame} alt="" className="w-full h-full object-cover" />
              </div>
              
              {/* Title */}
              <div className="absolute top-4 left-4 right-[231px] z-10">
                <h3 className="text-[30px] font-medium leading-[36px] tracking-[-0.4px] text-zinc-800">
                  All Tech Built in-house
                  <br />
                  no dependency.
                </h3>
              </div>
              
              {/* Tags */}
              <div className="absolute top-[141px] left-4 right-4 z-10 flex gap-4 flex-wrap">
                <div className="bg-white rounded-lg px-[17px] py-2 shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)]">
                  <span className="text-[16px] leading-[24px] tracking-[-0.4px] bg-gradient-to-t from-[#3f3f46] to-black bg-clip-text text-transparent">
                    💸 No Twillo Vapi dependency?
                  </span>
                </div>
                <div className="bg-white rounded-lg px-[13px] py-2 shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)]">
                  <span className="text-[16px] leading-[24px] tracking-[-0.4px] bg-gradient-to-t from-[#3f3f46] to-black bg-clip-text text-transparent">
                    ❤ All Built in India
                  </span>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)]">
                  <span className="text-[16px] leading-[24px] tracking-[-0.4px] bg-gradient-to-t from-[#3f3f46] to-black bg-clip-text text-transparent">
                    ⭐ &lt;2s real life call latency sys
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-zinc-200 px-4 pt-[17px] pb-[35px] z-10">
                <p className="text-[14px] leading-[20px] tracking-[-0.4px] text-zinc-600 font-normal">
                  Build lovable products with user insights. Uncover popular features,
                  <br />
                  identify power users, and improve retention through behavior
                  <br />
                  analysis.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Store Integrations with Shopify */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-b from-white to-[#f4f4f5] border border-zinc-200 rounded-lg relative flex-1 max-w-[453px] overflow-hidden flex flex-col"
            >
              {/* Background pattern */}
              <div className="absolute inset-px opacity-50">
                <img src={imgFrame} alt="" className="w-full h-full object-cover" />
              </div>
              
              {/* Title */}
              <div className="relative z-10 px-4 pt-4">
                <h3 className="text-[30px] font-medium leading-[36px] tracking-[-0.4px] text-zinc-800">
                  Store Integrations
                  <br />
                  with Shopify.
                </h3>
              </div>
              
              {/* Shopify Image */}
              <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-4">
                <div className="h-[74px] w-[297px] rounded-md overflow-hidden">
                  <img src={imgImage2} alt="Shopify" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Description */}
              <div className="relative z-10 bg-white border-t border-zinc-200 px-4 pt-[17px] pb-[55px]">
                <p className="text-[14px] leading-[20px] tracking-[-0.4px] text-zinc-600 font-normal">
                  Unlike any other analytics you've used. From Keyboard shortcuts to
                  <br />
                  realtime updates, analyze product data in a speed of thought.
                </p>
              </div>
            </motion.div>

            {/* Card 3: All top Shipping service integrated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-white to-[#f4f4f5] border border-zinc-200 h-[354px] rounded-lg relative flex-1 max-w-[453px] overflow-hidden flex flex-col"
            >
              {/* Background pattern */}
              <div className="absolute inset-px opacity-50">
                <img src={imgFrame1} alt="" className="w-full h-full object-cover" />
              </div>
              
              {/* Title */}
              <div className="relative z-10 px-4 pt-4">
                <h3 className="text-[30px] font-medium leading-[36px] tracking-[-0.4px] text-zinc-800">
                  All top Shipping
                  <br />
                  service integrated.
                </h3>
              </div>
              
              {/* Shipping Logos - EXACT Figma Match (node-id=1-2678) */}
              <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-4">
                <div className="flex gap-2 items-center justify-center px-[135.67px]">
                  {/* Delhivery - EXACT Match */}
                  <div className="bg-gradient-to-b from-[#d4d4d8] to-white border-2 border-zinc-200 rounded-[8px] w-10 h-10 p-1.5 flex items-center justify-center">
                    <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                      <div className="w-[26px] h-1 relative">
                        <img src={imgDelhiveryLogo20191} alt="Delhivery" className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Shiprocket - EXACT Match */}
                  <div 
                    className="border-2 border-zinc-200 rounded-[8px] w-16 h-10 p-0.5 flex items-center justify-center"
                    style={{ 
                      backgroundImage: "linear-gradient(180deg, rgba(212, 212, 216, 1) 0%, rgba(212, 212, 216, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.698) 0%, rgba(255, 255, 255, 0.698) 100%)" 
                    }}
                  >
                    <div className="w-16 h-10 flex items-center justify-center px-[10.777px] py-[11.894px]">
                      <div className="w-10 h-[41px] relative">
                        <div className="absolute inset-0 overflow-hidden">
                          <img src={imgSrLogoWiki1} alt="Shiprocket" className="absolute h-[129.27%] left-[0.53%] top-[-15.15%] w-[398.61%] object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Third logo - EXACT Match */}
                  <div className="bg-gradient-to-b from-[#d4d4d8] to-white border-2 border-zinc-200 rounded-[8px] w-10 h-10 p-1.5 flex items-center justify-center">
                    <div className="w-7 h-6 relative">
                      <div className="absolute inset-0 overflow-hidden">
                        <img src={imgUnnamed1} alt="Shipping" className="absolute h-[127.27%] left-[-3.85%] top-[-13.64%] w-[107.69%] object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="relative z-10 bg-white border-t border-zinc-200 px-4 pt-[17px] pb-[55px]">
                <p className="text-[14px] leading-[20px] tracking-[-0.4px] text-zinc-600 font-normal">
                  Bring all your team perspectives, expertise and skills in the same
                  <br />
                  page. Iterate product faster with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFFeaturesSection;
