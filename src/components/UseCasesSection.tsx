import { motion } from "framer-motion";

// Figma image assets - EXACT from node-id=1-249
const imgImage3 = "https://www.figma.com/api/mcp/asset/eefeed19-5d02-4a50-a5c3-292f77790110";
const imgFrame = "https://www.figma.com/api/mcp/asset/b5f62c42-1596-4975-8bce-159c09115621";
const imgGroup = "https://www.figma.com/api/mcp/asset/d1bc4dfa-99f6-4a91-9155-c486bd5bba59";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/7b62ff65-cce3-4e78-8764-2bbbc9b4f6ea";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/71c5364b-6542-4f95-bae5-83c955b66fc3";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/61ee7ac7-0c1e-41f4-8871-009db6d72357";

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
            <div className="bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_#e4e5e9,0px_0px_0px_1px_rgba(228,229,233,0.6),0px_0px_0px_3.5px_#f9f9fb,0px_0px_0px_4px_#f3f4f7] overflow-hidden relative h-[604px]">
              {/* Feature Cards at TOP - EXACT Figma Match */}
              <div className="absolute top-[36px] left-1/2 transform -translate-x-1/2 w-[1075px] max-w-[1076px] z-10">
                <div className="flex gap-6 pb-[64px]">
                  {templates.map((template, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex flex-col gap-2 min-w-[250.75px] rounded-xl"
                    >
                      <div className="h-[25px] flex items-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center">
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

              {/* Dashboard Image at BOTTOM - EXACT Figma Match */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[1071px] h-[396px] p-[2px]">
                <div className="relative h-[492px] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden">
                  {/* Background Image */}
                  <img 
                    src={imgImage3} 
                    alt="Dashboard" 
                    className="absolute inset-0 w-full h-full object-cover rounded-tl-[50px] rounded-tr-[50px]" 
                  />
                  {/* Dark Overlay - EXACT (node-id=5-2744) */}
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.29)] rounded-tl-[50px] rounded-tr-[50px]" />
                  
                  {/* Inner Dashboard Image - EXACT positioning */}
                  <div className="absolute left-[46px] top-[36px] w-[980px] h-[360px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_0px_36.1px_0px_rgba(0,0,0,0.64)] overflow-hidden">
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
