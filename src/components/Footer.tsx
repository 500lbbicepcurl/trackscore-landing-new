import { Link } from "react-router-dom";

// Figma image assets - EXACT from node-id=1-1813
const imgFrame = "https://www.figma.com/api/mcp/asset/3f958940-ea95-4e98-a572-c1129763a08c";
const imgGroup = "https://www.figma.com/api/mcp/asset/74e736ac-065c-4ac7-889d-6a24195dafcc";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/55b5fb09-eb6b-41d9-ade5-3fcbeaeccd51";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/4d1c7a32-6fb4-4a5a-ac2d-404cad8091de";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/5d3acf07-d183-437b-a4ae-0f3eea13e62b";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/41e99304-221e-4736-8c73-0c695436bc6a";
const Footer = () => {
  return <footer className="bg-[#1c1d1f] text-white relative">
      <div className="container mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-[1440px] mx-auto">
          {/* Logo - EXACT Figma Match */}
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <div className="h-[32px] w-[80px] relative">
                <img src={imgFrame} alt="Scalysis" className="w-full h-full object-contain" />
            </div>
            </Link>
          </div>
          
          {/* Footer Links Grid - EXACT Figma Match */}
          <div className="flex gap-[137px] mb-12">
            {/* Product Column */}
            <div className="flex flex-col gap-4 h-[264.38px]">
              <div className="flex items-center justify-between pb-[0.59px]">
                <h3 className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#9098a0]">
                  Product
                </h3>
              </div>
              <div className="flex flex-col gap-[7.01px] h-[227.78px]">
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Changelog
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Customer stories
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Security
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors flex items-center gap-2 pb-[0.59px]">
                  <span>Chrome extension</span>
                  <div className="w-[17px] h-[21px] relative">
                    <div className="absolute inset-[1.05%_2.36%_3.71%_3.53%]">
                      <div className="absolute inset-[34.38%_43.53%_37.05%_21.17%]" style={{
                      maskImage: `url('${imgGroup}')`
                    }}>
                        <div className="absolute inset-[-10.83%_-10.83%_-7.66%_-7.66%]">
                          <img src={imgGroup1} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors flex items-center gap-2 pb-[0.59px]">
                  <span>iOS app</span>
                  <div className="w-[17px] h-[21px] relative">
                    <div className="absolute inset-[1.05%_2.36%_3.71%_3.53%]">
                      <div className="absolute inset-[34.38%_43.53%_37.05%_21.17%]" style={{
                      maskImage: `url('${imgGroup}')`
                    }}>
                        <div className="absolute inset-[-10.83%_-10.83%_-7.66%_-7.66%]">
                          <img src={imgGroup1} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors flex items-center gap-2 pb-[0.59px]">
                  <span>Android app</span>
                  <div className="w-[17px] h-[21px] relative">
                    <div className="absolute inset-[1.05%_2.36%_3.71%_3.53%]">
                      <div className="absolute inset-[34.38%_43.53%_37.05%_21.17%]" style={{
                      maskImage: `url('${imgGroup}')`
                    }}>
                        <div className="absolute inset-[-10.83%_-10.83%_-7.66%_-7.66%]">
                          <img src={imgGroup1} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors flex items-center gap-2 pb-[0.59px]">
                  <span>Zapier</span>
                  <div className="w-[17px] h-[21px] relative">
                    <div className="absolute inset-[1.05%_2.36%_3.71%_3.53%]">
                      <div className="absolute inset-[34.38%_43.53%_37.05%_21.17%]" style={{
                      maskImage: `url('${imgGroup}')`
                    }}>
                        <div className="absolute inset-[-10.83%_-10.83%_-7.66%_-7.66%]">
                          <img src={imgGroup1} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors flex items-center gap-2 pb-[0.59px]">
                  <span>Integromat</span>
                  <div className="w-[17px] h-[21px] relative">
                    <div className="absolute inset-[1.05%_2.36%_3.71%_3.53%]">
                      <div className="absolute inset-[34.38%_43.53%_37.05%_21.17%]" style={{
                      maskImage: `url('${imgGroup}')`
                    }}>
                        <div className="absolute inset-[-10.83%_-10.83%_-7.66%_-7.66%]">
                          <img src={imgGroup1} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
          </div>
          
            {/* Company Column */}
            <div className="flex flex-col gap-4 h-[264.38px] pb-[117.39px]">
              <div className="flex items-center justify-between pb-[0.59px]">
                <h3 className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#9098a0]">
                  Company
                </h3>
              </div>
              <div className="flex flex-col gap-[7.01px] pb-[8.01px]">
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  About
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Careers
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Blog
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors">
                  Startup program
                </Link>
              </div>
          </div>
          
            {/* Scalysis for Column */}
            <div className="flex flex-col gap-4 h-[264.38px] pb-[172.6px]">
              <div className="flex items-center justify-between pb-[0.59px]">
                <h3 className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#9098a0]">
                  Scalysis for
                </h3>
              </div>
              <div className="flex flex-col gap-[7.01px] pb-[8px]">
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Startups
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors">
                  Deal flow
                </Link>
              </div>
          </div>
          
            {/* Support Column */}
            <div className="flex flex-col gap-4 h-[264.38px] pb-[114.6px]">
              <div className="flex items-center justify-between pb-[0.59px]">
                <h3 className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#9098a0]">
                  Support
                </h3>
              </div>
              <div className="flex flex-col gap-[7.01px] h-[113.19px]">
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Help center
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors pb-[0.59px]">
                  Talk to support
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors flex items-center gap-2">
                  <span>API docs</span>
                  <div className="w-[17px] h-[21px] relative">
                    <div className="absolute inset-[1.05%_2.36%_3.71%_3.53%]">
                      <div className="absolute inset-[34.38%_43.53%_37.05%_21.17%]" style={{
                      maskImage: `url('${imgGroup}')`
                    }}>
                        <div className="absolute inset-[-10.83%_-10.83%_-7.66%_-7.66%]">
                          <img src={imgGroup1} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="text-[14px] font-medium leading-[19.6px] tracking-[-0.1px] text-[#666b71] hover:text-white transition-colors flex items-center gap-2">
                  <span>System status</span>
                  <div className="w-[17px] h-[21px] relative">
                    <div className="absolute inset-[1.05%_2.36%_3.71%_3.53%]">
                      <div className="absolute inset-[34.38%_43.53%_37.05%_21.17%]" style={{
                      maskImage: `url('${imgGroup}')`
                    }}>
                        <div className="absolute inset-[-10.83%_-10.83%_-7.66%_-7.66%]">
                          <img src={imgGroup1} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
          </div>
                </Link>
          </div>
        </div>
        
            {/* Ready to build Column */}
            <div className="flex flex-col gap-4 h-[263.38px] pb-[111.38px]">
              <p className="text-[16px] font-medium leading-[24px] tracking-[-0.2px] text-[#9098a0] pr-[179px]">
              Ready to build?
              </p>
              <div className="flex flex-col gap-3">
              <a 
                  href="https://scalysis.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#383e47] border border-[#424954] rounded-[12px] px-[99.24px] py-[13px] hover:bg-[#424954] transition-colors inline-block text-center"
              >
                  <span className="text-[#edeef0] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                Start for free
                  </span>
              </a>
                <Link
                  to="/contact"
                  className="border border-[#383e47] rounded-[12px] px-[100.88px] py-[13px] hover:bg-[#383e47] transition-colors inline-block text-center"
              >
                  <span className="text-[#9098a0] text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                Talk to sales
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Separator - EXACT Figma Match */}
          <div className="border-t border-[#3f3f3f] h-px my-8" />

          {/* Bottom Section - EXACT Figma Match */}
          <div className="relative flex items-center justify-center">
            <p className="text-[11px] font-normal leading-[16.5px] tracking-[-0.1px] text-white opacity-40">
              © 2023 scalysis Ltd. All rights reserved.
            </p>
            <div className="absolute right-[278.92px] flex items-center gap-4">
              <Link to="#" className="text-[11px] font-normal leading-[16.5px] tracking-[-0.1px] text-white opacity-40 hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
              <span className="text-[11px] font-normal leading-[16.5px] tracking-[-0.1px] text-white opacity-40">·</span>
              <Link to="#" className="text-[11px] font-normal leading-[16.5px] tracking-[-0.1px] text-white opacity-40 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <div className="flex items-center gap-0 ml-[25px] opacity-40">
                <a href="#" className="p-[6px]">
                  <div className="w-4 h-[17px] relative">
                    <div className="absolute bottom-[14.26%] left-[6.25%] right-0 top-[14.05%]">
                      <img src={imgGroup2} alt="Twitter" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </a>
                <a href="#" className="p-[6px]">
                  <div className="w-4 h-[17px] relative">
                    <div className="absolute inset-[8.17%_6.25%_9.48%_6.25%]">
                      <img src={imgGroup3} alt="Dribbble" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </a>
                <a href="#" className="p-[6px]">
                  <div className="w-4 h-[17px] relative">
                    <div className="absolute inset-[8.17%_6.25%_9.48%_6.25%]">
                      <img src={imgGroup4} alt="LinkedIn" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </a>
          </div>
        </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;