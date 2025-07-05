
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, Target, TrendingUp, Shield } from "lucide-react";

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
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Think One-Click Checkouts Are Helping Your 
                <span className="text-red-600"> Conversion Rate</span>?
              </h1>
              <p className="text-xl md:text-2xl text-red-700 font-semibold mb-8">
                They're Probably Killing Your Meta ROAS Instead.
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                Learn why the biggest D2C brands in the world — doing $100M+ — never trust 3rd party checkouts.
                <br />
                <strong>Speed ≠ Scale. Smart data flows do.</strong>
              </p>
              
              {/* Logo Strip */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-sm text-gray-600 mb-6 font-medium">
                  All of these brands use native Shopify checkout, despite doing $100M+/yr
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {brands.map((brand, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-3 text-center">
                      <span className="text-sm font-semibold text-gray-700">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - The Illusion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  THE ILLUSION: "But My Pixel Fires, So It's Fine… Right?"
                </h2>
              </div>
              
              <div className="bg-yellow-50 rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  You've installed your pixel. You see purchases in Events Manager. Everything looks okay…
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>But underneath, Meta's algorithm is blind:</strong>
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    It sees a purchase.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    But doesn't know which ad, which creative, or which customer.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    You're feeding it orphaned signals with no history.
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Why?</h3>
                <p className="text-gray-700 mb-4">
                  Because when your checkout jumps to a third-party domain, you lose:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <XCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span>Your session</span>
                    </div>
                    <div className="flex items-center">
                      <XCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span>Your cookies</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <XCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span>Your campaign click data</span>
                    </div>
                    <div className="flex items-center">
                      <XCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span>Your first-party fbclid/UTMs</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <p className="font-semibold text-gray-800">
                    The result? Meta sees a broken trail:
                  </p>
                  <p className="text-gray-600 italic">
                    "I think someone bought… I just don't know how or why."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - First-Party vs Third-Party */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                WHAT FIRST-PARTY VS THIRD-PARTY REALLY MEANS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-green-800">First-party</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Data captured on your own website.
                  </p>
                  <p className="font-semibold text-green-800 mb-4">
                    You own it. You stitch it. Meta trusts it.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Examples:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• fbclid stored on yourbrand.com</li>
                      <li>• pixel fired from your domain</li>
                      <li>• cookies saved on your store</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                  <div className="flex items-center mb-4">
                    <XCircle className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-red-800">Third-party</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Data captured on someone else's domain.
                  </p>
                  <p className="font-semibold text-red-800 mb-4">
                    You can't access cookies, or stitch sessions cleanly.
                  </p>
                  <p className="text-sm text-gray-600">
                    Pixel might fire, but Meta treats it as "blind purchase."
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <p className="text-lg font-semibold text-blue-800">
                  Meta is not dumb. It tracks event match quality. Low quality = poor optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - One Flow vs Broken Flows */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                ONE FLOW > BROKEN FLOWS
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
                  Fix My Tracking Now →
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
                  onClick={() => window.location.href = "/#get-started"}
                >
                  Run Pixel Health Check →
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
