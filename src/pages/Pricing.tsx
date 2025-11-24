import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const plans = [{
    name: "Starter",
    description: "Perfect for getting started with AI calling",
    price: "₹5.50",
    priceUnit: "/per minute",
    usage: "Up to 300 calls/month",
    buttonText: "Get Started",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    features: ["300 calls per month (10 calls/day)", "Basic AI calling features", "Standard support", "Call analytics dashboard"]
  }, {
    name: "Growth",
    description: "Scale your operations with higher volume",
    price: "₹5.00",
    priceUnit: "/per minute",
    usage: "300-1,500 calls/month",
    buttonText: "Get Started",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    features: ["Everything in Starter, and:", "300-1,500 calls per month (10-50 calls/day)", "All Starter features", "Priority support", "Advanced analytics", "Custom call scripts"]
  }, {
    name: "Scale",
    description: "Best value for high-volume operations",
    price: "₹4.50",
    priceUnit: "/per minute",
    usage: "1,500-10,000 calls/month",
    buttonText: "Get Started",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    isPopular: true,
    features: ["Everything in Growth, and:", "1,500-10,000 calls per month (50-333 calls/day)", "All Growth features", "Dedicated support", "Advanced integrations", "Custom reporting", "API access"]
  }, {
    name: "Business",
    description: "Enterprise-grade solution with custom pricing",
    price: "Let's Talk",
    priceUnit: "",
    usage: "10,000+ calls/month",
    buttonText: "Contact Sales",
    buttonStyle: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    features: ["Everything in Scale, and:", "10,000+ calls per month (333+ calls/day)", "All Scale features", "Dedicated account manager", "Custom integrations", "SLA guarantees", "White-label options", "Custom pricing"]
  }];
  return <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Pricing Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-semibold text-[#1d1e20] mb-4" style={{
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
                Our average talk time on scalysis is 78 seconds.<br />
                Only charge on picked up
              </h1>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {plans.map((plan, index) => <motion.div key={plan.name} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className={`bg-white rounded-2xl shadow-lg border-2 p-8 relative ${plan.isPopular ? "border-blue-600 shadow-xl scale-105" : "border-gray-200"}`}>
                  {plan.isPopular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
                        MOST POPULAR
                      </span>
                    </div>}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1d1e20] mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-bold text-[#1d1e20]">{plan.price}</span>
                      {plan.priceUnit && <span className="text-gray-600 text-lg">{plan.priceUnit}</span>}
                    </div>
                    <p className="text-gray-500 text-sm">{plan.usage}</p>
                  </div>

                  <button className={`w-full py-3 px-6 rounded-xl font-medium transition-colors mb-6 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Pricing;