import { motion } from "framer-motion";

// Local dashboard image
const imgImage3 = "/rto-dashboard-new.png";

// Figma image assets - EXACT from node-id=1-283
const imgFrame = "https://www.figma.com/api/mcp/asset/ae7f5b4e-1884-4c69-8fff-accb1d3e6aaa";
const imgGroup = "https://www.figma.com/api/mcp/asset/1d08a38c-e380-4430-b2ae-c6d9207990a5";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/ee506181-6ee6-48b6-80a2-337b22e16043";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/ebae33fc-02e6-457c-b0f2-e7150280bd87";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/577119e9-7339-4b93-a4b6-3371856d3ce3";

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
              {/* Feature Cards at TOP - EXACT Figma Match (node-id=1-283) */}
              <div className="absolute bottom-[399.11px] left-1/2 transform -translate-x-1/2 w-full max-w-[1076px] pb-[64px] pt-0 px-4 z-10">
                <div className="flex gap-6">
                  {templates.map((template, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex flex-col gap-2 min-w-[250.75px] flex-shrink-0 rounded-xl"
                    >
                      <div className="h-[25px] flex items-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {index === 1 ? (
                            <div className="w-5 h-5 relative">
                              <div className="absolute inset-[7.14%_9.29%]">
                                <img src={imgGroup1} alt="" className="w-full h-full" style={{ maskImage: `url('${imgGroup}')` }} />
                              </div>
                            </div>
                          ) : (
                            <img src={template.icon} alt="" className="w-5 h-5" />
                          )}
                        </div>
                        <h3 className={`text-[18px] font-semibold leading-[25.2px] tracking-[-0.2px] ${
                          template.active ? 'text-[#24292f]' : 'text-[#99a2af]'
                        }`}>
                          {template.title}
                        </h3>
                      </div>
                      <p className={`text-[16px] leading-[24px] tracking-[-0.2px] font-medium ${
                        template.active ? 'text-[#57606a]' : 'text-[#99a2af]'
                      }`}>
                        {template.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Dashboard Image at BOTTOM - Using local image */}
              <div className="absolute left-1/2 top-[calc(50%+102.6px)] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1204px] p-[2px]">
                <div className="h-[396px] w-full max-w-[1071px] mx-auto relative overflow-hidden">
                  {/* Background Image with rounded top corners */}
                  <div className="absolute h-[492px] left-0 rounded-tl-[50px] rounded-tr-[50px] top-0 w-full">
                    <img 
                      src={imgImage3} 
                      alt="Dashboard" 
                      className="absolute inset-0 w-full h-full object-cover rounded-tl-[50px] rounded-tr-[50px]" 
                    />
                  </div>
                  {/* Dark Overlay - EXACT (node-id=5-2744) */}
                  <div className="absolute bg-[rgba(0,0,0,0.29)] h-[492px] left-0 rounded-tl-[50px] rounded-tr-[50px] top-0 w-full" />
                  
                  {/* Inner Dashboard Image - EXACT positioning (node-id=5-2742) */}
                  <div className="absolute h-[360px] left-[46px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_0px_36.1px_0px_rgba(0,0,0,0.64)] top-[36px] w-[980px]">
                    <div className="absolute inset-0 overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
                      <img 
                        src={imgImage3} 
                        alt="Dashboard Detail" 
                        className="absolute h-[163.46%] left-[-23.12%] top-[-63.46%] w-[130.84%] object-cover" 
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
