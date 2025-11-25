import { motion } from "framer-motion";

// Figma image assets
const imgCausalZtqstrfqWebp = "https://www.figma.com/api/mcp/asset/4ac7bfe9-75af-4a63-a2b2-db86dff22aa8";
const imgCausalAvatarA45PmogfWebp = "https://www.figma.com/api/mcp/asset/147680cb-c0d8-44e0-a9d7-5b45a2efac55";

const PDFTestimonialSection = () => {
  return (
    <section className="py-[96px] bg-white h-[557px] relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1155px] mx-auto">
          <div className="flex items-start pt-[96px] pb-[120px]">
            <div className="h-[244px] relative w-full">
              {/* CAUSAL Logo */}
              <div className="absolute left-[118px] top-0 h-[44px] w-[160px]">
                <img src={imgCausalZtqstrfqWebp} alt="CAUSAL" className="w-full h-full object-contain" />
              </div>

              {/* Quote */}
              <div className="absolute left-[472px] top-[-1px] right-0">
                <p className="text-[28px] font-semibold leading-[33.6px] tracking-[-0.4px] text-[#555e67] max-w-[530px]">
                  "Scalysis is the most flexible AI Calling
                  <br />
                  we've ever come across. We've been able to
                  <br />
                  build a world-class go-to-market engine
                  <br />
                  with it."
            </p>
              </div>

              {/* Author */}
              <div className="absolute left-[472px] bottom-0 top-[184px] flex items-center gap-[18px]">
                <div className="w-[60px] h-[60px] rounded-xl overflow-hidden">
                  <img src={imgCausalAvatarA45PmogfWebp} alt="Taimur" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[16px] font-semibold leading-[24px] tracking-[-0.2px] text-[#31373d]">
                    Taimur
                  </p>
                  <p className="text-[16px] font-medium leading-[24px] tracking-[-0.2px] text-[#555e67]">
                    Co-founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFTestimonialSection;
