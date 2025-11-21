import { motion } from "framer-motion";

// Figma image assets
const imgGroup = "https://www.figma.com/api/mcp/asset/a9eac770-11e1-49ba-ab77-0d7f3faa35ce";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/49bb0f98-f5ee-4e0f-9bd6-1d92aaea6516";
const imgVector2 = "https://www.figma.com/api/mcp/asset/962beb69-9a4e-4f4c-aad9-33d19512ca70";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#266df0] to-[#1e5ad8] border-l border-[#4b8bff] overflow-hidden min-h-[346px]">
      {/* Background decorative image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[708px] h-[346px]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0" style={{ maskImage: `url('${imgGroup}')` }}>
            <img src={imgGroup1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-[402px] top-[192px] w-[49.5px] h-[52.5px]">
            <img src={imgVector2} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[1440px] mx-auto py-20">
          <div className="relative min-h-[346px]">
            {/* Left Content */}
            <div className="absolute left-[143px] top-1/2 transform -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 
                  className="text-[49px] font-bold leading-[57.2px] tracking-[-1.2px] text-[#a0c2ff] mb-8"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Ready to build your
                  <br />
                  <span className="text-white">team's dream D2C Brand?</span>
                </h2>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="bg-white/10 border-[0.5px] border-white rounded-[12px] px-4 py-[13px] backdrop-blur-sm">
                    <span className="text-[#edeef0] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                      Start for free
                    </span>
                  </button>
                  <button className="border-[0.5px] border-white rounded-[12px] px-4 py-[13px]">
                    <span className="text-white text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                      Talk to sales
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
