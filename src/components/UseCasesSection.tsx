import { motion } from "framer-motion";

// Dashboard image from Figma node-id=2017-185
// Figma image assets - EXACT from node-id=2017-191 and 2017-185
const imgFrame = "https://www.figma.com/api/mcp/asset/2f855b8d-6205-4fad-bcd2-02f7c39c2145";
const imgGroup = "https://www.figma.com/api/mcp/asset/43cc1d96-273d-4c36-8138-731b395d7a7e";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/fc0427ac-86d0-4981-a6a8-09cebaeb2ffd";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/0bd643f1-9bd4-43f1-93ea-c544b0d44358";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/3b8bb958-2958-4f06-b7c9-1a86d1784c83";
const imgImage3 = "https://www.figma.com/api/mcp/asset/b7b25316-d9fc-4e28-923a-63b621fdd204";

const UseCasesSection = () => {
  const templates = [
    {
      title: "Voice Intent",
      icon: imgFrame,
      description: "Multiple Voice intents to figure out better, how to select the order RTO and cancellation.",
      active: true
    },
    {
      title: "NDR Automations",
      icon: imgGroup,
      description: "Use Attio's intuitive UI and ultra-customizable blocks to craft your ideal workflows.",
      active: false
    },
    {
      title: "Address Recovery Calls",
      icon: imgFrame1,
      description: "Help your business scale with enriched data, custom attributes, and integrations.",
      active: false
    },
    {
      title: "Sentiment Analyst",
      icon: imgFrame2,
      description: "Analyze, track and share reports built on real-time data from across your workspace.",
      active: false
    }
  ];

  return (
    <section className="py-[60px] bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1155px] mx-auto relative">
          <div className="flex flex-col gap-20">
            {/* Title Section - EXACT Figma Match (node-id=1-272) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pl-10"
            >
              <h2 
                className="text-[49px] font-bold leading-[57.2px] tracking-[-1.2px] text-[#1d1e20] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                In Built RTO Engine.
                <br />
                Capture Sentiment For Every Call
              </h2>
              <p className="text-[22px] font-medium leading-[30.8px] tracking-[-0.3px] text-[#31373d] max-w-[480px]">
                Voice helps spot the real intent
              </p>
            </motion.div>

            {/* White Card Container - EXACT Figma Match (node-id=1-278) */}
            <div className="bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_#e4e5e9,0px_0px_0px_1px_rgba(228,229,233,0.6),0px_0px_0px_3.5px_#f9f9fb,0px_0px_0px_4px_#f3f4f7] overflow-hidden relative h-[604.2px]">
              {/* Feature Cards at TOP - EXACT Figma Match (node-id=2017-191) */}
              <div className="absolute bottom-[399.11px] left-1/2 transform -translate-x-1/2 w-full max-w-[1076px] pb-[64px] pt-0 px-0 z-10">
                <div className="flex gap-6">
                  {/* Voice Intent Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-2 min-w-[250.75px] flex-shrink-0 rounded-xl"
                  >
                    <div className="h-[25px] relative">
                      <div className="absolute left-0 top-[calc(50%+0.09px)] transform -translate-y-1/2 w-5 h-5">
                        <img src={imgFrame} alt="" className="block max-w-none size-full" />
                      </div>
                      <div className="absolute left-[calc(50%+15px)] top-[calc(50%+-0.4px)] transform -translate-x-1/2 -translate-y-1/2">
                        <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] whitespace-nowrap text-[#24292f]">
                          Voice Intent
                        </h3>
                      </div>
                    </div>
                    <div className="pr-[18.75px]">
                      <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-[#57606a] whitespace-pre-wrap">
                        Multiple Voice intents to figure out better, how to select the order RTO and cancellation.
                      </p>
                    </div>
                  </motion.div>

                  {/* NDR Automations Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col gap-2 min-w-[250.75px] flex-shrink-0 rounded-xl"
                  >
                    <div className="h-[25px] relative">
                      <div className="absolute left-0 top-[calc(50%+0.09px)] transform -translate-y-1/2 w-5 h-5">
                        <div className="absolute bottom-0 contents left-[2.5%] right-[2.5%] top-0">
                          <div className="absolute inset-[7.14%_9.29%]" style={{ maskImage: `url('${imgGroup}')` }}>
                            <div className="absolute inset-[-4.58%]">
                              <img src={imgGroup1} alt="" className="block max-w-none size-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-[26.5px] top-[calc(50%+-0.4px)] transform -translate-y-1/2 right-[-2.5px]">
                        <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] whitespace-nowrap text-[#99a2af] text-center">
                          NDR Automations
                        </h3>
                      </div>
                    </div>
                    <div className="pr-[1.75px]">
                      <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-[#99a2af] whitespace-nowrap">
                        <span className="block mb-0">Use Attio's intuitive UI and ultra-</span>
                        <span className="block mb-0">customizable blocks to craft your</span>
                        <span className="block">ideal workflows.</span>
                      </p>
                    </div>
                  </motion.div>

                  {/* Address Recovery Calls Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-2 min-w-[250.75px] flex-shrink-0 rounded-xl"
                  >
                    <div className="h-[25px] relative">
                      <div className="absolute left-0 top-[calc(50%+0.09px)] transform -translate-y-1/2 w-[19px] h-[19px]">
                        <img src={imgFrame1} alt="" className="block max-w-none size-full" />
                      </div>
                      <div className="absolute left-[23px] top-[calc(50%+-0.4px)] transform -translate-y-1/2 right-[-4px]">
                        <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] whitespace-nowrap text-[#99a2af] text-center">
                          Address Recovery Calls
                        </h3>
                      </div>
                    </div>
                    <div className="pr-[1.75px]">
                      <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-[#99a2af] whitespace-nowrap">
                        <span className="block mb-0">Help your business scale with</span>
                        <span className="block mb-0">enriched data, custom attributes,</span>
                        <span className="block">and integrations.</span>
                      </p>
                    </div>
                  </motion.div>

                  {/* Sentiment Analyst Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col gap-2 min-w-[250.75px] flex-shrink-0 rounded-xl"
                  >
                    <div className="h-[25px] relative">
                      <div className="absolute left-0 top-[calc(50%+0.09px)] transform -translate-y-1/2 w-5 h-5">
                        <img src={imgFrame2} alt="" className="block max-w-none size-full" />
                      </div>
                      <div className="absolute left-[24px] top-[calc(50%+-0.4px)] transform -translate-y-1/2 right-[-4px]">
                        <h3 className="text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] whitespace-nowrap text-[#99a2af] text-center">
                          Sentiment Analyst
                        </h3>
                      </div>
                    </div>
                    <div className="pr-[7.75px]">
                      <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-[#99a2af] whitespace-nowrap">
                        <span className="block mb-0">Analyze, track and share reports</span>
                        <span className="block mb-0">built on real-time data from</span>
                        <span className="block">across your workspace.</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Dashboard Image at BOTTOM - EXACT Figma Match (node-id=2017-185) */}
              <div className="absolute left-1/2 top-[calc(50%+102.6px)] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1204px] p-[2px]">
                <div className="h-[396px] w-full max-w-[1071px] mx-auto relative overflow-hidden">
                  {/* Background Image with rounded top corners */}
                  <div className="absolute h-[492px] left-0 rounded-tl-[50px] rounded-tr-[50px] top-0 w-full">
                    <img 
                      src={imgImage3} 
                      alt="Dashboard" 
                      className="absolute inset-0 max-w-none object-cover rounded-tl-[50px] rounded-tr-[50px] size-full" 
                    />
                  </div>
                  {/* Dark Overlay - EXACT (node-id=2017-189) */}
                  <div className="absolute bg-[rgba(0,0,0,0.29)] h-[492px] left-0 rounded-tl-[50px] rounded-tr-[50px] top-0 w-full" />
                  
                  {/* Inner Dashboard Image - EXACT positioning (node-id=2017-190) */}
                  <div className="absolute h-[360px] left-[46px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_0px_36.1px_0px_rgba(0,0,0,0.64)] top-[36px] w-[980px]">
                    <div className="absolute inset-0 overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
                      <img 
                        src={imgImage3} 
                        alt="Dashboard Detail" 
                        className="absolute h-[163.46%] left-[-23.12%] max-w-none top-[-63.46%] w-[130.84%]" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
