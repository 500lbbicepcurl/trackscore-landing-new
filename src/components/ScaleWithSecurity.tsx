import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Figma image assets - EXACT from node-id=1-851
const imgGdprReadyBadgeXel6QvfiWebp = "https://www.figma.com/api/mcp/asset/c041bfd2-25e2-46e1-9310-d687ad73d205";
const imgCcpaReadyBadgeIt2PevyyWebp = "https://www.figma.com/api/mcp/asset/7a556f00-189b-4b3f-9a4c-1df75b523262";
const imgIso9001BadgeYsygvgzjWebp = "https://www.figma.com/api/mcp/asset/eb259fbf-884e-4dad-9235-2a61d2856911";
const imgIso27001Badge3Hcqbte2Webp = "https://www.figma.com/api/mcp/asset/a8a51af9-4cc3-4375-9bf0-ba2fbe57cef0";
const ScaleWithSecurity = () => {
  return <section className="relative bg-white py-[160px] min-h-[422px] overflow-hidden">
      {/* Main Content Container - Clean Flex Layout */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          {/* Single Frame - Left to Right Layout */}
          <div className="flex items-center justify-between gap-12">
            
            {/* Left Side - Text & Buttons */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="flex-1 max-w-[570px]">
              {/* Heading */}
              <h2 className="text-[38px] font-bold leading-[44px] tracking-[-0.8px] text-[#1d1e20] mb-6" style={{
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
                Scale with <span className="text-[#727b84]">security.</span>
              </h2>

              {/* Description */}
              <p className="text-[20px] font-medium leading-[28px] tracking-[-0.2px] text-[#31373d] mb-8 max-w-[438px]">
                Scalysis is audited and certified by industry-
                <br />
                leading third-party standards & DND security.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <a href="https://scalysis-app.onrender.com/login" target="_blank" rel="noopener noreferrer" className="bg-[#1d1e20] border border-[#505967] rounded-[12px] px-[16px] py-[13px] hover:bg-[#2a2a2d] transition-colors inline-block">
                  <span className="text-[#edeef0] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                    Start for free
                  </span>
                </a>
                <Link to="/contact" className="border border-[#cdd3db] rounded-[12px] px-[17px] py-[13px] hover:bg-gray-50 transition-colors inline-block">
                  <span className="text-[#31373d] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                    Talk to sales
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Security Badges */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="flex items-center gap-8">
              {/* Top Row - GDPR & CCPA */}
              <div className="flex flex-col gap-8">
                <div className="h-[52px] w-[121.97px]">
                  <img src={imgGdprReadyBadgeXel6QvfiWebp} alt="GDPR Ready" className="w-full h-full object-contain" />
                </div>
                <div className="h-[52px] w-[121.97px]">
                  <img src={imgCcpaReadyBadgeIt2PevyyWebp} alt="CCPA Ready" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Bottom Row - ISO 9001 & ISO 27001 */}
              <div className="flex flex-col gap-8">
                <div className="h-[92px] w-[79px]">
                  <img src={imgIso9001BadgeYsygvgzjWebp} alt="ISO 9001" className="w-full h-full object-contain" />
                </div>
                <div className="h-[92px] w-[92px]">
                  <img src={imgIso27001Badge3Hcqbte2Webp} alt="ISO 27001" className="w-full h-full object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default ScaleWithSecurity;