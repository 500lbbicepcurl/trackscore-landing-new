import { motion } from "framer-motion";
import { Mic, RefreshCw, PhoneCall, BarChart3 } from "lucide-react";

const UseCasesSection = () => {
  const templates = [
    {
      title: "Voice Intent",
      icon: Mic,
      description: "Multiple Voice intents to figure out better, how to select the order RTO and cancellation."
    },
    {
      title: "NDR Automations",
      icon: RefreshCw,
      description: "Use Attio's intuitive UI and ultra-customizable blocks to craft your ideal workflows."
    },
    {
      title: "Address Recovery Calls",
      icon: PhoneCall,
      description: "Help your business scale with enriched data, custom attributes, and integrations."
    },
    {
      title: "Sentiment Analyst",
      icon: BarChart3,
      description: "Analyze, track and share reports built on real-time data from across your workspace."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="w-8 h-8 border-2 border-gray-300 rounded mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c1f] mb-2">
              Build the Use-Cases that's truly your own.
            </h2>
            <p className="text-xl text-gray-600">
              Pre-Built Templates.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {templates.map((template, index) => {
              const IconComponent = template.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1c1f] mb-2">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {template.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-[#1c1c1f]">Scalysis Dashboard</span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Search..." className="outline-none bg-transparent w-32" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">50 Orders/day</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-[#266def] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span>scalysis</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">OPERATE</div>
                    <div className="space-y-1">
                      <div className="px-3 py-2 bg-[#266def] text-white rounded text-sm font-medium">Dashboard</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">Calls</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">Campaigns</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">NDR</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">Test</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">ANALYTICS</div>
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">RTO</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">Call</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">Voice & AI</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">NDR</div>
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">Volu</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">SETTINGS</div>
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-gray-700 rounded text-sm hover:bg-gray-100">Settings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Table Area */}
              <div className="flex-1 p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">ORDER</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">DATE</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">CUSTOMER</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">PHONE</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">ADDRESS</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">PAYMENT</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">FULFILLMENT</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">REASON</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">CALLING STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">#799876</td>
                        <td className="py-3 px-4 text-gray-600">Saturday at 7:12 am</td>
                        <td className="py-3 px-4 text-gray-900">Kulwinder Kaur</td>
                        <td className="py-3 px-4 text-gray-600">+917847076974</td>
                        <td className="py-3 px-4 text-gray-600">Khetribarpur golagola naya...</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">COD</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Unfulfilled</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Bad Address</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Not initiated</span></td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50 relative">
                        <td className="py-3 px-4 text-gray-900">#799900</td>
                        <td className="py-3 px-4 text-gray-600">Saturday at 7:37 am</td>
                        <td className="py-3 px-4 text-gray-900">Asok kumar Nath</td>
                        <td className="py-3 px-4 text-gray-600">+919434255999</td>
                        <td className="py-3 px-4 text-gray-600">25 Nirupama Devi Road, Ra...</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Prepaid</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Fulfilled</span></td>
                        <td className="py-3 px-4 relative">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Impulsive Orders</span>
                          {/* Popup */}
                          <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-10 p-4">
                            <h4 className="font-bold text-gray-900 mb-1">Impulsive Orders</h4>
                            <p className="text-xs text-gray-600 mb-3">meaning that the orders are impulsive</p>
                            <div className="space-y-2 mb-3">
                              <div className="flex items-center gap-2 text-xs text-gray-700">
                                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                                <span>10 line address</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-700">
                                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                                <span>Unusual Words</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-700">
                                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                                <span>Missing Fields</span>
                              </div>
                            </div>
                            <button className="w-full px-3 py-2 bg-[#266def] text-white rounded text-xs font-medium hover:bg-[#1e5ad8]">
                              View Customer
                            </button>
                          </div>
                        </td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Not initiated</span></td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">#799909</td>
                        <td className="py-3 px-4 text-gray-600">Saturday at 7:48 am</td>
                        <td className="py-3 px-4 text-gray-900">Suraj Suraj</td>
                        <td className="py-3 px-4 text-gray-600">+919651367135</td>
                        <td className="py-3 px-4 text-gray-600">Marteenganj road Chhittep...</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">COD</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Unfulfilled</span></td>
                        <td className="py-3 px-4">-</td>
                        <td className="py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">#799929</td>
                        <td className="py-3 px-4 text-gray-600">Saturday at 8:04 am</td>
                        <td className="py-3 px-4 text-gray-900">tapas kumar mitra</td>
                        <td className="py-3 px-4 text-gray-600">+918348160476</td>
                        <td className="py-3 px-4 text-gray-600">Kumar bagar, BC road, Rani...</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Prepaid</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Fulfilled</span></td>
                        <td className="py-3 px-4">-</td>
                        <td className="py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">#799931</td>
                        <td className="py-3 px-4 text-gray-600">Saturday at 8:11 am</td>
                        <td className="py-3 px-4 text-gray-900">Hari Goud</td>
                        <td className="py-3 px-4 text-gray-600">+916309432007</td>
                        <td className="py-3 px-4 text-gray-600">10-35 gopinagar, Serilingam...</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">COD</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Unfulfilled</span></td>
                        <td className="py-3 px-4">-</td>
                        <td className="py-3 px-4">-</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">#799937</td>
                        <td className="py-3 px-4 text-gray-600">Saturday at 8:15 am</td>
                        <td className="py-3 px-4 text-gray-900">Rahul Pradhan</td>
                        <td className="py-3 px-4 text-gray-600">+918389091679</td>
                        <td className="py-3 px-4 text-gray-600">Heera Vastugraam, Thal kit...</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Prepaid</span></td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Fulfilled</span></td>
                        <td className="py-3 px-4">-</td>
                        <td className="py-3 px-4">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span>1-NaN of</span>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

