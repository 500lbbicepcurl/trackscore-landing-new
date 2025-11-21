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
    priceUnit: "/per call",
    usage: "Up to 300 calls/month",
    buttonText: "Get Started",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    features: ["300 calls per month (10 calls/day)", "Basic AI calling features", "Standard support", "Call analytics dashboard"]
  }, {
    name: "Growth",
    description: "Scale your operations with higher volume",
    price: "₹5.00",
    priceUnit: "/per call",
    usage: "300-1,500 calls/month",
    buttonText: "Get Started",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    features: ["Everything in Starter, and:", "300-1,500 calls per month (10-50 calls/day)", "All Starter features", "Priority support", "Advanced analytics", "Custom call scripts"]
  }, {
    name: "Scale",
    description: "Best value for high-volume operations",
    price: "₹4.50",
    priceUnit: "/per call",
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
  const comparisonData = [{
    feature: "Base Cost",
    scalysis: "₹4.50-₹5.50/call (Volume-based pricing)",
    ringgAI: "₹13.20/minute (~$0.15) per connected call",
    platform1: "₹7.92/minute (~$0.09)",
    platform2: "₹9.68/minute (~$0.11)",
    platform3: "₹8.80/minute (~$0.10) + ₹3.52 (~$0.04) number/minute",
    platform4: "Voice API pricing varies",
    platform5: ""
  }, {
    feature: "Additional Fees",
    scalysis: "No additional fees (All-inclusive pricing)",
    ringgAI: "No additional fees",
    platform1: "Voice cloning (₹1.76/minute), Multilingual (₹0.88/minute)",
    platform2: "ElevenLabs voices (₹6.16/minute), Claude 3.5 (₹5.28/minute)",
    platform3: "Voice (₹2.64-₹6.16/minute), Transcription (₹0.88/minute), LLM (₹5.28/minute)",
    platform4: "Per-character pricing model",
    platform5: ""
  }, {
    feature: "Enterprise Plans",
    scalysis: "Custom pricing (Dedicated support & SLA)",
    ringgAI: "As low as ₹6.16/min (Dedicated support)",
    platform1: "Custom pricing for dedicated infrastructure",
    platform2: "As low as ₹4.40/minute for 10,000+ minutes",
    platform3: "Volume discounts & dedicated Slack support",
    platform4: "Enterprise pricing available",
    platform5: ""
  }, {
    feature: "Core Use Case",
    scalysis: "E-commerce & D2C (NDR recovery, COD confirmation, customer support)",
    ringgAI: "Enterprise-grade AI call assistants for BFSI, Banking, D2C, healthcare, surveys, compliance",
    platform1: "High-volume outbound calling for sales, scheduling, customer support",
    platform2: "Customizable voice agents for call centers, sales, regulated industries",
    platform3: "Developer-centric platform for building highly customizable voice assistants",
    platform4: "",
    platform5: ""
  }, {
    feature: "Pricing Model",
    scalysis: "Per-call pricing (₹4.50-₹5.50/call (all inclusive))",
    ringgAI: "₹13.20/minute per connected call (all inclusive)",
    platform1: "₹7.92/minute + extra fees for advanced features",
    platform2: "₹9.68/minute (usage-based) + ₹176/month per phone number",
    platform3: "₹8.80/minute + ₹3.52 number/minute (modular pricing)",
    platform4: "Per-character or subscription-based",
    platform5: ""
  }, {
    feature: "Billing Precision",
    scalysis: "Per-second billing (Charged per second, no rounding)",
    ringgAI: "Rounds to full minute (45s = 1 minute charge)",
    platform1: "Rounds to full minute (45s = 1 minute charge)",
    platform2: "Rounds to full minute (45s = 1 minute charge)",
    platform3: "Rounds to full minute (45s = 1 minute charge)",
    platform4: "Per-character or subscription-based",
    platform5: ""
  }, {
    feature: "Free Trial",
    scalysis: "Free credits available (Test with real calls)",
    ringgAI: "₹880 free credits (~$10)",
    platform1: "₹176 free credits (~$2)",
    platform2: "₹880 free credits (~$10)",
    platform3: "₹880 free credits (~$10)",
    platform4: "Limited free tier available",
    platform5: ""
  }, {
    feature: "Voice Quality",
    scalysis: "HD Voice Quality (High-fidelity, multilingual, natural conversations, Indian accents)",
    ringgAI: "High-fidelity, multilingual, natural conversations",
    platform1: "Basic AI voices by default, premium voices at extra cost",
    platform2: "Supports ElevenLabs and custom voices",
    platform3: "Provider-dependent (e.g., ElevenLabs, Deepgram)",
    platform4: "High-quality neural voices",
    platform5: ""
  }, {
    feature: "Voice Cloning",
    scalysis: "FREE (Unlimited voice cloning included)",
    ringgAI: "Not available",
    platform1: "₹1.66/minute (additional cost)",
    platform2: "Via ElevenLabs integration (paid)",
    platform3: "Via provider (paid)",
    platform4: "Available (paid service)",
    platform5: ""
  }, {
    feature: "Indian Phone Numbers",
    scalysis: "FREE (Included in all plans)",
    ringgAI: "Available (paid)",
    platform1: "Available (paid)",
    platform2: "₹166/month per number",
    platform3: "Via Twilio/Vonage (paid)",
    platform4: "N/A (voice API only)",
    platform5: ""
  }, {
    feature: "GPT Analysis",
    scalysis: "FREE (Included in all plans)",
    ringgAI: "Available",
    platform1: "Available",
    platform2: "Claude 3.5 (₹4.98/minute)",
    platform3: "LLM (₹4.98/minute)",
    platform4: "N/A (voice API only)",
    platform5: ""
  }, {
    feature: "Sentiment Analysis",
    scalysis: "FREE (Real-time sentiment tracking included)",
    ringgAI: "Available",
    platform1: "Available",
    platform2: "Available",
    platform3: "Custom implementation required",
    platform4: "N/A",
    platform5: ""
  }, {
    feature: "Auto Improving Scripts",
    scalysis: "Yes (Self-learning AI continuously improves)",
    ringgAI: "Manual optimization required",
    platform1: "Manual optimization required",
    platform2: "Manual optimization required",
    platform3: "Developer-managed",
    platform4: "N/A",
    platform5: ""
  }, {
    feature: "Self Growing Data Book",
    scalysis: "Yes (Knowledge base auto-expands from conversations)",
    ringgAI: "Manual updates required",
    platform1: "Manual updates required",
    platform2: "Manual updates required",
    platform3: "Developer-managed",
    platform4: "N/A",
    platform5: ""
  }, {
    feature: "Data Collected For Learning",
    scalysis: "Yes - Unique Feature (Only Scalysis learns from every conversation)",
    ringgAI: "No",
    platform1: "No",
    platform2: "No",
    platform3: "No",
    platform4: "No",
    platform5: "No"
  }, {
    feature: "Latency",
    scalysis: "<350ms (Ultra-low latency for natural conversations)",
    ringgAI: "<350ms",
    platform1: "400ms",
    platform2: "1000ms+",
    platform3: "800ms",
    platform4: "N/A (voice API only)",
    platform5: ""
  }, {
    feature: "Multilingual Support",
    scalysis: "Yes (Full multilingual support included)",
    ringgAI: "Yes",
    platform1: "Yes (additional cost for some languages)",
    platform2: "Extensive multilingual capabilities",
    platform3: "Yes (depends on provider)",
    platform4: "Yes",
    platform5: ""
  }, {
    feature: "Customization",
    scalysis: "No-code builder (Easy script editor with visual workflow)",
    ringgAI: "No-code drag-and-drop workflow builder",
    platform1: "API-driven with dynamic pathways, requires technical setup",
    platform2: "Flexible agent design with multi-LLM support",
    platform3: "Full-stack developer tools and modular architecture",
    platform4: "API-based customization",
    platform5: ""
  }, {
    feature: "Integrations",
    scalysis: "Shopify, NimbusPost, Shiprocket (E-commerce focused integrations)",
    ringgAI: "CRM, ERP, Custom integrations",
    platform1: "CRM, ERP, custom APIs",
    platform2: "SIP trunking, CRM, knowledge bases",
    platform3: "Twilio, Vonage, custom APIs",
    platform4: "API integrations",
    platform5: ""
  }, {
    feature: "Scalability",
    scalysis: "Unlimited concurrent calls (Enterprise-grade infrastructure)",
    ringgAI: "Unlimited* concurrent calls, enterprise-grade infrastructure",
    platform1: "20,000+ calls/hour, 99.99% uptime",
    platform2: "Millions of calls/month, 99.99% uptime",
    platform3: "Developer-managed concurrency, scalable via API",
    platform4: "High scalability",
    platform5: ""
  }, {
    feature: "Analytics & Reporting",
    scalysis: "Real-time analytics (Comprehensive dashboards with call insights)",
    ringgAI: "Real-time performance metrics and dashboards, Post call custom analytics",
    platform1: "Post-call analytics via API",
    platform2: "Real-time analytics, call summaries, and compliance tracking",
    platform3: "Customizable dashboards and call logs",
    platform4: "Basic analytics",
    platform5: ""
  }, {
    feature: "Compliance",
    scalysis: "GDPR, SOC2 (Enterprise-grade security)",
    ringgAI: "ISO, SOC2",
    platform1: "SOC2, GDPR, HIPAA",
    platform2: "HIPAA, SOC2, GDPR",
    platform3: "GDPR-compliant, supports custom security protocols",
    platform4: "GDPR compliant",
    platform5: ""
  }, {
    feature: "Best For",
    scalysis: "E-commerce & D2C brands (NDR recovery, COD confirmation, customer support automation)",
    ringgAI: "Enterprises | Mid market who wants to go live & scale faster",
    platform1: "Tech teams requiring high-volume outbound calls with basic customization",
    platform2: "Mid-market to enterprise businesses prioritizing compliance and flexibility",
    platform3: "Developers and startups needing full control over voice AI architecture",
    platform4: "Developers building voice applications",
    platform5: ""
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
              <h1 className="text-5xl md:text-6xl font-bold text-[#1d1e20] mb-4" style={{
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
                Choose the plan that fits your needs
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

        {/* Comparison Table Section */}
        <section className="py-20 px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1e20] mb-4" style={{
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
                Core Comparison Breakdown
              </h2>
              <p className="text-xl text-gray-600">
                See how Scalysis compares to other AI voice platforms
              </p>
            </motion.div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 sticky left-0 bg-gray-100 z-10 min-w-[200px]">
                        FEATURES
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[200px]">
                        SCALYSIS
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[200px]">
                        RINGG AI
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[200px]">Elevenlabs</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[200px]">
                        Vapi
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[200px]">
                        Platform 3
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[200px]">
                        Platform 4
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => <tr key={index} className={`border-b border-gray-200 hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-inherit z-10">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <span className="text-blue-600 font-medium">{row.scalysis}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.ringgAI || "-"}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.platform1 || "-"}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.platform2 || "-"}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.platform3 || "-"}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.platform4 || "-"}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Pricing;