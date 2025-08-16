
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, Target, TrendingUp, Shield, Eye, Users, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const OneClickCheckoutTruth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brands = [
    "Gymshark", "SKIMS", "Allbirds", "Liquid Death", "Jones Road", 
    "Fashion Nova", "Kith", "Chubbies", "MrBeast", "Glossier", 
    "ColourPop", "Vuori", "Feastables"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Critical ROAS Warning
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
              >
                Think One-Click Checkouts Are{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Helping
                </span>{" "}
                Your Conversion Rate?
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-red-600 text-white px-8 py-4 rounded-2xl inline-block mb-8 shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <p className="text-2xl md:text-3xl font-bold">
                  They're Probably Killing Your Meta ROAS Instead.
                </p>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Learn why the biggest D2C brands in the world — doing{" "}
                <span className="font-black text-green-600">$100M+</span> — never trust 3rd party checkouts.
                <br />
                <span className="inline-flex items-center mt-4 px-6 py-3 bg-white rounded-xl shadow-lg font-semibold text-gray-900">
                  <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                  Speed ≠ Scale. Smart data flows do.
                </span>
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Scalysis For Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-300 hover:border-gray-500 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
              
              {/* Enhanced Logo Strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
              >
                <div className="flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <p className="text-lg text-gray-700 font-semibold">
                    All of these brands use native Shopify checkout, despite doing $100M+/yr
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {brands.map((brand, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200"
                    >
                      <span className="text-sm font-bold text-gray-800">{brand}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 - The Illusion */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6 shadow-lg">
                  <AlertTriangle className="w-10 h-10 text-yellow-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  THE ILLUSION: <span className="text-yellow-600">"But My Pixel Fires, So It's Fine… Right?"</span>
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-10 mb-12 shadow-xl border border-yellow-200"
              >
                <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                  You've installed your pixel. You see purchases in Events Manager. Everything looks okay…
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
                  <p className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Eye className="w-6 h-6 mr-3 text-red-600" />
                    But underneath, Meta's algorithm is blind:
                  </p>
                  <div className="space-y-4">
                    {[
                      "It sees a purchase.",
                      "But doesn't know which ad, which creative, or which customer.",
                      "You're feeding it orphaned signals with no history."
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="flex items-start group"
                      >
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-red-200 transition-colors duration-300">
                          <XCircle className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="text-lg text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-10 shadow-xl border border-red-200"
              >
                <h3 className="text-2xl font-black text-red-800 mb-6 flex items-center">
                  <AlertTriangle className="w-7 h-7 mr-3" />
                  Why?
                </h3>
                <p className="text-xl text-gray-800 mb-8">
                  Because when your checkout jumps to a third-party domain, you lose:
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {[
                    ["Your session", "Your cookies"],
                    ["Your campaign click data", "Your first-party fbclid/UTMs"]
                  ].map((column, colIndex) => (
                    <div key={colIndex} className="space-y-4">
                      {column.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * (colIndex * 2 + index) }}
                          viewport={{ once: true }}
                          className="flex items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
                        >
                          <XCircle className="w-6 h-6 text-red-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-semibold text-gray-800">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border-l-4 border-red-500 shadow-lg"
                >
                  <p className="font-bold text-gray-900 text-lg mb-2">
                    The result? Meta sees a broken trail:
                  </p>
                  <p className="text-gray-600 italic text-lg">
                    "I think someone bought… I just don't know how or why."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3 - First-Party vs Third-Party */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  WHAT <span className="text-blue-600">FIRST-PARTY</span> VS <span className="text-red-600">THIRD-PARTY</span> REALLY MEANS
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto"></div>
              </motion.div>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-3xl font-black text-green-800">First-party</h3>
                    </div>
                    <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                      Data captured on your own website.
                    </p>
                    <div className="bg-green-100 rounded-2xl p-6 mb-6">
                      <p className="font-bold text-green-900 text-lg">
                        You own it. You stitch it. Meta trusts it.
                      </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <p className="font-bold text-gray-900 mb-4">Examples:</p>
                      <div className="space-y-3">
                        {[
                          "fbclid stored on yourbrand.com",
                          "pixel fired from your domain", 
                          "cookies saved on your store"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-10 border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <XCircle className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-3xl font-black text-red-800">Third-party</h3>
                    </div>
                    <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                      Data captured on someone else's domain.
                    </p>
                    <div className="bg-red-100 rounded-2xl p-6 mb-6">
                      <p className="font-bold text-red-900 text-lg">
                        You can't access cookies, or stitch sessions cleanly.
                      </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Pixel might fire, but Meta treats it as <span className="font-bold text-red-600">"blind purchase."</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-center shadow-2xl"
              >
                <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                  Meta is not dumb. It tracks event match quality. <span className="text-yellow-300">Low quality = poor optimization.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4 - One Flow vs Broken Flows */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                ONE FLOW {">"} BROKEN FLOWS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    Native Checkout Journey
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Ad click → yourbrand.com</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Product viewed → Add to Cart → Initiate Checkout</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Pixel fires at each step — all on one domain</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Server-side tracking fills any gaps</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Meta sees the full journey: ad, session, product, time spent, purchase</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-green-800 font-semibold text-sm">
                      ✅ Data stitched. Audiences refined. Scaling is real.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <XCircle className="w-6 h-6 mr-2" />
                    One-Click Checkout
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span>Ad click → yourbrand.com</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span>Customer clicks Buy Now → redirected to checkout.gokwik.co</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span>New domain. New session. Cookies gone. Pixel confusion.</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span>Purchase might fire — but Meta says: "Where'd they come from?"</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span>You just lost the entire ad funnel context.</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg">
                    <p className="text-red-800 font-semibold text-sm">
                      ❌ And Meta can't learn what's working.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Myth Busting */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  MYTH: "But It Boosts Conversion"
                </h2>
                <p className="text-2xl font-bold text-red-600">
                  Truth: Fast checkout ≠ High ROAS.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-800 mb-6">
                  Conversions aren't won in checkout pages. They're won with:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Target className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="font-semibold">Great ads</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                      <span className="font-semibold">Fast, trustworthy websites</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                      <span className="font-semibold">Product-market fit</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="font-semibold">High prepaid incentive structures</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-6 h-6 text-red-600 mr-3" />
                      <span className="font-semibold">Clean retargeting flows</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <p className="text-lg text-blue-800 mb-4">
                  One-click tools are gimmicks for early-stage, COD-reliant brands.
                </p>
                <p className="text-lg text-blue-800 mb-4">
                  <strong>Serious brands customize within Shopify using:</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <span className="font-semibold">Shopify Scripts</span>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <span className="font-semibold">Shopify Functions</span>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <span className="font-semibold">Checkout Extensibility</span>
                  </div>
                </div>
                <p className="text-lg text-blue-800 mt-6 text-center font-semibold">
                  They never sacrifice their tracking and LTV loops.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Cost Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                THE COST OF BROKEN DATA
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Signal</th>
                      <th className="px-6 py-4 text-center font-semibold text-green-700">Native Shopify</th>
                      <th className="px-6 py-4 text-center font-semibold text-red-700">One-Click Checkout</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Meta Learning</td>
                      <td className="px-6 py-4 text-center text-green-600">✅ Strong</td>
                      <td className="px-6 py-4 text-center text-red-600">❌ Shallow</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pixel Attribution</td>
                      <td className="px-6 py-4 text-center text-green-600">✅ 4-step funnel</td>
                      <td className="px-6 py-4 text-center text-red-600">❌ Only Purchase</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">UTM/click data</td>
                      <td className="px-6 py-4 text-center text-green-600">✅ Carried throughout</td>
                      <td className="px-6 py-4 text-center text-red-600">❌ Lost after redirect</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Abandoned cart tracking</td>
                      <td className="px-6 py-4 text-center text-green-600">✅ Native + Retargetable</td>
                      <td className="px-6 py-4 text-center text-red-600">❌ Broken</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">LTV audience building</td>
                      <td className="px-6 py-4 text-center text-green-600">✅ Clean</td>
                      <td className="px-6 py-4 text-center text-red-600">❌ Corrupt</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Retargeting ROAS</td>
                      <td className="px-6 py-4 text-center text-green-600">✅ High</td>
                      <td className="px-6 py-4 text-center text-red-600">❌ Inefficient</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Confidence in scaling</td>
                      <td className="px-6 py-4 text-center text-green-600">✅ Strong</td>
                      <td className="px-6 py-4 text-center text-red-600">❌ Risky</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 - Why Best Stick to Native */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                WHY THE BEST STICK TO NATIVE CHECKOUT
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Even with millions in ad spend, these brands stay native:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="font-semibold text-gray-800">They want full data ownership.</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="font-semibold text-gray-800">They need Meta to learn, not guess.</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <p className="font-semibold text-gray-800">They care about LTV, not just CTR.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <p className="text-lg text-gray-800">
                  <strong>Shopify Checkout</strong> is PCI-compliant, A/B-testable, extensible, and can be customized — 
                  <span className="text-blue-600 font-semibold"> without breaking tracking.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 - What to Do Instead */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                OKAY, SO WHAT DO I DO INSTEAD?
              </h2>
              
              <div className="bg-green-50 rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-800 mb-6">
                  If you want better prepaid rates, stronger trust, and lower RTO:
                </p>
                <p className="text-xl font-bold text-green-800 mb-6">
                  Use native checkout, but:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span>Add urgency-based incentives</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span>Simplify your UI/UX</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span>Use custom Shopify Functions</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span>Leverage post-purchase upsells</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span>Build COD filters in smart ways (like Scalysis)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-blue-800">
                  Don't trade long-term scale for short-term gimmicks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Scale Profitably on Meta?
              </h2>
              <p className="text-xl mb-4">
                Let your data work FOR you, not against you.
              </p>
              <p className="text-lg mb-8">
                Switch to Native Shopify Checkout. Fix your tracking once. Scale forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                  onClick={() => window.location.href = "/#get-started"}
                >
                  Fix My Tracking Now {"->"}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
                  onClick={() => window.location.href = "/#get-started"}
                >
                  Run Pixel Health Check {"->"}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OneClickCheckoutTruth;
