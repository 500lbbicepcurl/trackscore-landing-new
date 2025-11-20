import { motion } from "framer-motion";
import { Mic, Upload, Zap } from "lucide-react";

const PDFTechSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c1f] mb-4">
              Tech that matters, built for Indian D2C.
            </h2>
            <p className="text-xl text-gray-600">
              Your customers are always connected - why should your tech be any different?
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Instant Voice Cloning Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f7f7f8] rounded-xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#1c1c1f] mb-3">
                    Instant Voice Cloning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Real-time scalysis3 model, for voice cloning, matching like the exact voice input.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-[#1c1c1f] mb-4">
                    Instantly Mirror anyone's Voice
                  </h4>
                  
                  {/* Tabs */}
                  <div className="flex gap-2 mb-4 border-b border-gray-200">
                    <button className="px-4 py-2 text-sm font-medium text-[#266def] border-b-2 border-[#266def]">
                      Audio
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Details
                    </button>
                  </div>

                  {/* Sub-tabs */}
                  <div className="flex gap-2 mb-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#266def] text-white rounded text-sm font-medium">
                      <Mic className="w-4 h-4" />
                      Record
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-sm font-medium">
                      <Upload className="w-4 h-4" />
                      Upload
                    </button>
                  </div>

                  {/* Record Section */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Record a voice-clip
                    </label>
                    <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-700">
                      <Mic className="w-5 h-5" />
                      Start Recording
                    </button>
                  </div>

                  {/* Best Results */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Best Results</p>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="radio" name="results" defaultChecked className="w-4 h-4 text-[#266def]" />
                        <span>0-5s of speech</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="radio" name="results" className="w-4 h-4 text-[#266def]" />
                        <span>No gaps or silence</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="radio" name="results" className="w-4 h-4 text-[#266def]" />
                        <span>Matching pace</span>
                      </label>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Need something to read
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 resize-none"
                      rows={3}
                      placeholder="Record audio to clone a voice. The model will analyze the voice patterns and create a digital replica that can be used for various applications."
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Auto Learning and Non-robotic Stack Row */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Auto Learning Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#f7f7f8] rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#1c1c1f] mb-3">
                  Auto Learning / Improving Conversion Rates & Scripts
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  conversations with a contact or company and create enriched timelines for every interaction.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-[#1c1c1f] mb-4">
                    Smart Address Recovery
                  </h4>
                  
                  {/* Navigation Tabs */}
                  <div className="flex gap-1 mb-4 overflow-x-auto pb-2 border-b border-gray-200">
                    {["Script", "Voice", "Language", "Config", "Knowledge Base", "Results", "Self Learning", "Analytics"].map((tab, idx) => (
                      <button
                        key={idx}
                        className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
                          tab === "Self Learning"
                            ? "text-[#266def] border-b-2 border-[#266def]"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Sub-tabs */}
                  <div className="flex gap-2 mb-6">
                    <button className="px-3 py-1.5 bg-[#266def] text-white rounded text-xs font-medium">
                      Overview
                    </button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      Top Queries by Customers
                    </button>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="text-xs font-medium text-gray-600">TOTAL CONVERSATIONS:</span>
                      <span className="text-sm font-bold text-[#1c1c1f]">69k</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="text-xs font-medium text-gray-600">LEARNED FROM:</span>
                      <span className="text-sm font-bold text-[#1c1c1f]">68,480 conversations</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span className="text-xs font-medium text-gray-600">RESOLVED:</span>
                      <span className="text-sm font-bold text-[#1c1c1f]">429</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    The self-learning model continuously improves based on conversation patterns and outcomes.
                  </p>
                </div>
              </motion.div>

              {/* Non-robotic voice Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#f7f7f8] rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#1c1c1f] mb-3">
                  Non-robotic voice Stack
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  from best-in-class SaaS tools through Attio's world-class API and Zapier integration.
                </p>
                
                {/* Integration Diagram */}
                <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="grid grid-cols-3 gap-4 relative">
                    {/* Top Left - Zapier */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-2">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Top Center - Empty */}
                    <div></div>
                    
                    {/* Top Right - Attio */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-[#266def] rounded-lg flex items-center justify-center mb-2">
                        <div className="w-10 h-10 border-2 border-white rounded"></div>
                      </div>
                    </div>
                    
                    {/* Middle Left */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Center - Main Cube */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-20 h-20 border-2 border-gray-400 rounded-lg relative transform rotate-12">
                        <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform translate-x-1 translate-y-1"></div>
                        <div className="absolute inset-0 border-2 border-gray-200 rounded-lg transform translate-x-2 translate-y-2"></div>
                      </div>
                    </div>
                    
                    {/* Middle Right */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                        <div className="w-10 h-10 border-2 border-white"></div>
                      </div>
                    </div>
                    
                    {/* Bottom Left */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white text-2xl font-bold">*</span>
                      </div>
                    </div>
                    
                    {/* Bottom Center - Empty */}
                    <div></div>
                    
                    {/* Bottom Right */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white text-xl font-bold">M</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#266def" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#266def" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="#266def" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="75%" y1="50%" x2="50%" y2="50%" stroke="#266def" strokeWidth="2" strokeDasharray="4,4" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Ultra-Low Latency Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#f7f7f8] rounded-xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#1c1c1f] mb-3">
                    Ultra-Low Latency systems
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Real-time scalysis3 model, for voice cloning, matching like the exact voice input.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-[#1c1c1f] mb-6">
                    lowest latency
                  </h4>
                  
                  {/* Comparison Chart */}
                  <div className="space-y-4">
                    {/* Scalysis - Better (shorter bar = faster) */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-[#1c1c1f]">Scalysis</span>
                        <span className="text-sm font-bold text-[#266def]">&lt;1.8s</span>
                      </div>
                      <div className="h-8 bg-[#266def] rounded-lg flex items-center justify-end pr-3" style={{ width: '60%' }}>
                        <span className="text-white text-xs font-medium">Less than 1.8s</span>
                      </div>
                    </div>
                    
                    {/* Others - Worse (longer bar = slower) */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-[#1c1c1f]">Smallest, Illabs, Vapi... (others)</span>
                        <span className="text-sm font-bold text-red-600">&gt;3s</span>
                      </div>
                      <div className="h-8 bg-red-600 rounded-lg flex items-center justify-end pr-3 w-full">
                        <span className="text-white text-xs font-medium">Greater than 3s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFTechSection;
