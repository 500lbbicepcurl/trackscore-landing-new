// Figma image assets - Company logos from node-id=2017-79
// Updated image URLs from latest Figma fetch
const imgItlLogo11 = "https://www.figma.com/api/mcp/asset/22c0d0ed-387c-45d9-bd10-86690011d4a3";
const imgShiprocket1 = "https://www.figma.com/api/mcp/asset/560916fd-b700-44eb-8f57-b364ea242337";
const imgGroup354391 = "https://www.figma.com/api/mcp/asset/3950dd56-b932-4434-bfec-80399bdd5819";
const imgImage7 = "https://www.figma.com/api/mcp/asset/7d190d76-500a-485f-bddf-eb67b6e295f2";
const imgNimbusPostWebsiteRemovebgPreview1 = "https://www.figma.com/api/mcp/asset/f523f7c7-00ea-4cdd-811f-f0bccb52cf1a";
const imgBrand21 = "https://www.figma.com/api/mcp/asset/b46b7b18-0f96-48b7-8ccd-b56228e0bf65";
const imgAswini1 = "https://www.figma.com/api/mcp/asset/eaf30b92-404b-4902-aa90-ac146df1c1ad";
const imgDimplery1 = "https://www.figma.com/api/mcp/asset/6e3b4094-02a1-4088-9523-59a4ee4efa79";

const CompanyLogosSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* EXACT Figma structure from node-id=2017-79 */}
        <div className="flex items-start justify-center pb-[180px] pt-[54px] px-[180px]">
          <div className="bg-white flex flex-col gap-[10px] items-start justify-center px-[80px] py-[10px] relative shrink-0">
            <div className="bg-white h-[130px] relative shrink-0 w-[1080px]">
              {/* Top Row - 5 logos - EXACT Figma positioning: top-[calc(50%+45px)] */}
              <div className="absolute left-[25px] right-[944px] top-[calc(50%+45px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[111px]">
                  <div className="absolute h-[37px] left-0 top-[3.05px] w-[111px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img 
                        src={imgItlLogo11} 
                        alt="ITL Logo" 
                        className="absolute h-full left-0 max-w-none top-0 w-[192.66%]" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-[190px] right-[699px] top-[calc(50%+45px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[191px]">
                  <div className="absolute h-[42px] left-[31px] top-[0.05px] w-[160px]">
                    <img 
                      src={imgShiprocket1} 
                      alt="Shiprocket" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-[460px] right-[469px] top-[calc(50%+45px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[151px]">
                  <div className="absolute h-[37px] left-[15px] top-[0.05px] w-[120px]">
                    <img 
                      src={imgGroup354391} 
                      alt="Company" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-[690px] right-[230px] top-[calc(50%+45px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[160px]">
                  <div className="absolute h-[27px] left-0 top-[7.05px] w-[160px]">
                    <img 
                      src={imgImage7} 
                      alt="Company" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-[929px] right-0 top-[calc(50%+45px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[151px]">
                  <div className="absolute h-[40px] left-px top-[0.05px] w-[150px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img 
                        src={imgNimbusPostWebsiteRemovebgPreview1} 
                        alt="NimbusPost" 
                        className="absolute h-[209.5%] left-0 max-w-none top-[-31.84%] w-full" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - 3 logos - EXACT Figma positioning: top-[calc(50%+-12.95px)] */}
              <div className="absolute left-[185px] right-[704px] top-[calc(50%+-12.95px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[191px]">
                  <div className="absolute h-[21px] left-[89px] top-[13px] w-[79px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img 
                        src={imgBrand21} 
                        alt="Brand" 
                        className="absolute h-[145%] left-[-0.27%] max-w-none top-[-22.5%] w-[100.53%]" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-[455px] right-[474px] top-[calc(50%+-12.95px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[151px]">
                  <div className="absolute aspect-[791/94] left-[0.66%] right-0 top-[11px]">
                    <img 
                      src={imgAswini1} 
                      alt="Aswini" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-[685px] right-[235px] top-[calc(50%+-12.95px)] transform -translate-y-1/2 flex items-start justify-center overflow-clip">
                <div className="h-[40px] relative shrink-0 w-[160px]">
                  <div className="absolute h-[25px] left-0 top-[7px] w-[160px]">
                    <img 
                      src={imgDimplery1} 
                      alt="Dimplery" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                    />
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
