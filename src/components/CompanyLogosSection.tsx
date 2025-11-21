import { motion } from "framer-motion";

// Figma image assets - Company logos
const imgGroup = "https://www.figma.com/api/mcp/asset/85f971b2-c35e-4eb3-bab6-3e51298935da";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/9b099dc6-4d38-4b16-813b-43308dda088f";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/c17e7089-a5ef-4a15-9132-93e7230c1958";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/6ae5873e-b820-4502-8f51-8e27f8e6aad1";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/137bbf22-d65e-4b79-bcec-04289cd3e597";
const imgGroup5 = "https://www.figma.com/api/mcp/asset/9906a6fa-9fbb-4e73-8e3c-801a93c14ff3";
const imgGroup6 = "https://www.figma.com/api/mcp/asset/35c1d6f7-b337-4b5f-94b2-8ff20cf8a98e";
const imgGroup7 = "https://www.figma.com/api/mcp/asset/ccbfdaea-bee8-4f6b-b5e0-67656cc0fef3";
const imgGroup8 = "https://www.figma.com/api/mcp/asset/db2c9398-02b7-4f82-8a78-5af049e203dc";
const imgGroup9 = "https://www.figma.com/api/mcp/asset/9af2d0c3-677f-4c0b-9ca3-5f8883fd1e87";
const imgGroup10 = "https://www.figma.com/api/mcp/asset/950e4c98-ae44-4d3b-910e-b87756b015a4";
const imgGroup11 = "https://www.figma.com/api/mcp/asset/b2bbc395-a557-4510-b617-551c71ea57a9";
const imgGroup12 = "https://www.figma.com/api/mcp/asset/fb079926-8873-49d2-a887-ae0ec4e6b58d";
const imgGroup13 = "https://www.figma.com/api/mcp/asset/b3b8e44f-4426-4cc5-a733-7ad7961ff4d6";
const imgGroup14 = "https://www.figma.com/api/mcp/asset/654f0f8d-4b50-4a7b-b81b-7290f54f243a";
const imgGroup15 = "https://www.figma.com/api/mcp/asset/141c0c6b-5bbe-49ec-83aa-a8366c930456";
const imgGroup16 = "https://www.figma.com/api/mcp/asset/7de46a31-ac4e-41b9-9ac0-c861f9272e40";
const imgGroup17 = "https://www.figma.com/api/mcp/asset/16914d14-7f24-4e7e-8d4a-b889006492c2";
const imgGroup18 = "https://www.figma.com/api/mcp/asset/436ea281-b0f6-4fd4-95f7-ed7a7c97552a";
const imgFrame = "https://www.figma.com/api/mcp/asset/0700d331-6c2b-49be-b74f-199d42cd3c11";
const imgGroup19 = "https://www.figma.com/api/mcp/asset/60a33300-910d-4828-bb24-169ee6494ed1";
const imgGroup20 = "https://www.figma.com/api/mcp/asset/235658b5-576e-481b-9a5b-8ab02b303ede";

const CompanyLogosSection = () => {
  return (
    <section className="py-[54px] bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <div className="bg-white px-20 py-[10px]">
            <div className="h-[130px] w-full relative">
              {/* Row 1 Logos */}
              <div className="absolute top-[calc(50%-45px)] transform -translate-y-1/2 w-full">
                {/* Logo 1 */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[40px] w-[110px]">
                  <div className="absolute inset-[5.53%_0.42%_4.62%_0.07%]" style={{ maskImage: `url('${imgGroup}')` }}>
                    <img src={imgGroup1} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 2 */}
                <div className="absolute left-[174px] top-1/2 transform -translate-y-1/2 h-[40px] w-[139px]">
                  <div className="absolute inset-[10.37%_0.46%_4.9%_0.46%]" style={{ maskImage: `url('${imgGroup2}')` }}>
                    <img src={imgGroup3} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 3 */}
                <div className="absolute left-[378px] top-1/2 transform -translate-y-1/2 h-[40px] w-[125px]">
                  <div className="absolute inset-[5%_0.67%_14.92%_0.31%]" style={{ maskImage: `url('${imgGroup4}')` }}>
                    <img src={imgGroup5} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 4 */}
                <div className="absolute left-[567px] top-1/2 transform -translate-y-1/2 h-[40px] w-[146px]">
                  <div className="absolute inset-[2.35%_0.6%_2.36%_0.37%]" style={{ maskImage: `url('${imgGroup6}')` }}>
                    <img src={imgGroup7} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 5 */}
                <div className="absolute left-[778px] top-1/2 transform -translate-y-1/2 h-[40px] w-[81px]">
                  <div className="absolute inset-[18.54%_0.48%_18.53%_0.76%]" style={{ maskImage: `url('${imgGroup8}')` }}>
                    <img src={imgGroup9} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 6 */}
                <div className="absolute left-[923px] top-1/2 transform -translate-y-1/2 h-[40px] w-[157px]">
                  <div className="absolute inset-[16.57%_0.19%_16.57%_0.44%]" style={{ maskImage: `url('${imgGroup10}')` }}>
                    <img src={imgGroup11} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Row 2 Logos */}
              <div className="absolute top-[calc(50%+45px)] transform -translate-y-1/2 w-full">
                {/* Logo 7 */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[40px] w-[111px]">
                  <div className="absolute inset-[16.72%_0.9%_9.23%_0.19%]" style={{ maskImage: `url('${imgGroup12}')` }}>
                    <img src={imgGroup13} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 8 */}
                <div className="absolute left-[190px] top-1/2 transform -translate-y-1/2 h-[40px] w-[191px]">
                  <div className="absolute inset-[27.02%_0.67%_27.02%_0.1%]" style={{ maskImage: `url('${imgGroup14}'), url('${imgGroup15}')` }}>
                    <img src={imgGroup16} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 9 */}
                <div className="absolute left-[460px] top-1/2 transform -translate-y-1/2 h-[40px] w-[151px]">
                  <div className="absolute bottom-[9.96%] left-0 right-[1.19%] top-[7.5%]" style={{ maskImage: `url('${imgGroup17}')` }}>
                    <img src={imgGroup18} alt="Company" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                {/* Logo 10 */}
                <div className="absolute left-[690px] top-1/2 transform -translate-y-1/2 h-[40px] w-[160px]">
                  <img src={imgFrame} alt="Company" className="w-full h-full object-contain" />
                </div>
                
                {/* Logo 11 */}
                <div className="absolute left-[929px] top-1/2 transform -translate-y-1/2 h-[40px] w-[151px]">
                  <div className="absolute inset-[9.92%_0.1%_9.92%_0.56%]" style={{ maskImage: `url('${imgGroup19}')` }}>
                    <img src={imgGroup20} alt="Company" className="w-full h-full object-contain" />
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

export default CompanyLogosSection;

