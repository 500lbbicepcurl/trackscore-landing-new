import { motion } from "framer-motion";

// Figma image assets - EXACT from Figma nodes
// node-id=5-2746: Instant Voice Cloning
const imgImage5 = "https://www.figma.com/api/mcp/asset/d376b23f-5b0f-4ce7-ab3c-c16b88796351";
// node-id=5-2749: Auto Learning (EXACT from Figma)
const imgImage6 = "https://www.figma.com/api/mcp/asset/eadbf6f2-e403-48e8-9d5f-81ed4c4686cb";
// node-id=5-2777: Ultra-Low Latency
const imgFrame955871 = "https://www.figma.com/api/mcp/asset/201e23c4-2699-48bf-bf51-5d335d9a26c0";
// Other assets
const imgIntegrations5F4Cein7Webp = "https://www.figma.com/api/mcp/asset/67b16520-fe41-43de-8d6b-5b2820b686ad";
const imgVector = "https://www.figma.com/api/mcp/asset/17b09beb-fddd-428d-9458-c42247fb1081";
const imgGroup = "https://www.figma.com/api/mcp/asset/99fe8234-f2f8-4cc2-9908-71c2ce991a10";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/b83a30da-11bd-422f-a236-b6b08c8f0c53";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/4e4a4286-7357-4cad-a19b-a5951b59e116";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/4cb800b1-1404-4248-8b25-273740e0a0c4";

const PDFTechSection = () => {
  return (
    <section className="py-[60px] bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1155px] mx-auto relative">
          {/* Decorative vertical line with icon */}
          <div className="absolute left-[-49px] top-[132px] bottom-[-132px] flex flex-col items-center">
            <div className="w-[49px] h-[49px] relative">
              <img src={imgVector} alt="" className="w-full h-full" />
              <div className="absolute inset-[13.43%]">
                <div className="absolute inset-[17.24%]" style={{ maskImage: `url('${imgGroup}')` }}>
                  <img src={imgGroup1} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="flex-1 w-px bg-gradient-to-b from-[#dde9ff] via-[#266df0] to-[#dde9ff] opacity-[0.016]" />
          </div>

          <div className="flex flex-col gap-20">
            {/* Title Section - EXACT Figma Match (node-id=1-367) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pl-10"
            >
              <h2 
                className="text-[50px] font-bold leading-[57.2px] tracking-[-1.2px] text-[#1d1e20] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                India-ready{" "}
                <br />
                Voice + Scripts
              </h2>
              <p className="text-[22px] font-medium leading-[30.8px] tracking-[-0.3px] text-[#31373d]">
                Your customers are always connected
                <br />
                - why should your tech be any different?
              </p>
            </motion.div>

            {/* Tech Cards */}
            <div className="flex flex-col gap-6">
              {/* Card 1: Instant Voice Cloning - EXACT Figma Match (node-id=5-2746) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_#e4e5e9,0px_0px_0px_1px_rgba(228,229,233,0.6),0px_0px_0px_3.5px_#f9f9fb,0px_0px_0px_4px_#f3f4f7] overflow-hidden"
              >
                <div className="flex gap-20 items-end pl-10 pt-10 pb-0">
                  <div className="flex-1 max-w-[380px] pb-[387px]">
                    <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] text-[#31373d] mb-1">
                      Instant Voice Cloning
                </h3>
                    <p className="text-[18px] font-medium leading-[25.2px] tracking-[-0.2px] text-[#555e67]">
                      Real-time scalysis3 model, for voice cloning,
                      <br />
                      matching like the exact voice input.
                    </p>
                  </div>
                  <div className="h-[441px] w-[652px] relative">
                    <div className="absolute border-l-[3px] border-t-[3px] border-[#dedfe4] h-[441px] rounded-tl-[50px] w-[651px] overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden rounded-tl-[50px]">
                        <img 
                          src={imgImage5} 
                          alt="Voice Cloning" 
                          className="absolute h-[110.41%] left-[-0.06%] top-0 w-[115.18%] object-cover" 
                        />
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 & 3: Auto Learning and Non-robotic Stack */}
              <div className="flex gap-6">
                {/* Auto Learning Card - EXACT Figma Match (node-id=1-382) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white flex-1 h-[540px] max-w-[566px] rounded-[20px] shadow-[0px_0px_0px_0.5px_#e4e5e9,0px_0px_0px_1px_rgba(228,229,233,0.6),0px_0px_0px_3.5px_#f9f9fb,0px_0px_0px_4px_#f3f4f7] overflow-hidden relative"
                >
                  {/* Text Content - EXACT positioning from Figma */}
                  <div className="absolute top-[40px] right-[106px] w-[420px]">
                    <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] text-[#31373d] mb-4">
                      Auto Learning / Improving Conversion Rates & Scripts
                </h3>
                    <p className="text-[18px] font-medium leading-[25.2px] tracking-[-0.2px] text-[#555e67]">
                      conversations with a contact or company and
                      <br />
                      create enriched timelines for every interaction.
                    </p>
                      </div>
                  {/* Dashboard Image - Smart Address Recovery */}
                  <div className="absolute right-0 top-[calc(50%+88.57px)] transform -translate-y-1/2 w-[526px]">
                    <div className="border-l-2 border-t-2 border-[#e3e3e7] h-[359px] rounded-tl-[50px] overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden rounded-tl-[50px]">
                        <img 
                          src={imgImage6} 
                          alt="Smart Address Recovery Dashboard - Auto Learning" 
                          className="absolute h-[103.07%] left-[-0.11%] top-[-0.06%] w-[178.67%] object-cover" 
                        />
                      </div>
                    </div>
                      </div>
                </motion.div>
                    
                {/* Non-robotic Stack Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white flex-1 h-[540px] max-w-[565px] rounded-[20px] shadow-[0px_0px_0px_0.5px_#e4e5e9,0px_0px_0px_1px_rgba(228,229,233,0.6),0px_0px_0px_3.5px_#f9f9fb,0px_0px_0px_4px_#f3f4f7] overflow-hidden relative"
                >
                  <div className="absolute top-10 left-10 right-[230px]">
                    <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] text-[#31373d] mb-4">
                      Non-robotic voice Stack
                    </h3>
                    <p className="text-[18px] font-medium leading-[25.2px] tracking-[-0.2px] text-[#555e67]">
                      from best-in-class SaaS tools
                      <br />
                      through Attio's world-class
                      <br />
                      API and Zapier integration.
                    </p>
                      </div>
                  <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 top-[189px] w-[565px]">
                    <div className="absolute left-[39.5px] right-[39.5px] top-0 bottom-0">
                      <div className="absolute inset-0" style={{ maskImage: `url('${imgGroup2}')` }}>
                        <img src={imgGroup3} alt="" className="w-full h-full" />
                      </div>
                      <img src={imgIntegrations5F4Cein7Webp} alt="Integrations" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
              </motion.div>
            </div>

              {/* Card 4: Ultra-Low Latency - EXACT Figma Match (node-id=5-2777) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_#e4e5e9,0px_0px_0px_1px_rgba(228,229,233,0.6),0px_0px_0px_3.5px_#f9f9fb,0px_0px_0px_4px_#f3f4f7] overflow-hidden"
            >
                <div className="flex gap-20 items-end pl-10 pt-10 pb-0">
                  <div className="flex-1 max-w-[380px] h-[274px] pb-[387px]">
                    <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] text-[#31373d] mb-1">
                    Ultra-Low Latency systems
                  </h3>
                    <p className="text-[18px] font-medium leading-[25.2px] tracking-[-0.2px] text-[#555e67]">
                      Real-time scalysis3 model, for voice cloning,
                      <br />
                      matching like the exact voice input.
                  </p>
                </div>
                  <div className="h-[276px] w-[652px] relative">
                    <div className="absolute border-l-2 border-t-2 border-[#dedfe4] h-[276px] rounded-tl-[50px] w-[651px] overflow-hidden">
                      <div className="absolute inset-0 overflow-hidden rounded-tl-[50px]">
                        <img 
                          src={imgFrame955871} 
                          alt="Latency" 
                          className="absolute h-[158.39%] left-[-1.26%] top-[-29.19%] w-[102.52%] object-cover" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFTechSection;
