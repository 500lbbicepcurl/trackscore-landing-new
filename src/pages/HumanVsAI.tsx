import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const HumanVsAI = () => {
  const [totalCallsDaily, setTotalCallsDaily] = useState<string>("200");
  const [numberOfHumans, setNumberOfHumans] = useState<string>("1");
  const [totalMonthlySalary, setTotalMonthlySalary] = useState<string>("24000");
  const [pickupRate, setPickupRate] = useState<string>("75");
  const [conversionRate, setConversionRate] = useState<string>("80");
  const [showMath, setShowMath] = useState<boolean>(false);

  // Calculate Human costs
  const monthlyAttempts = totalCallsDaily ? Number(totalCallsDaily) * 30 : 0;
  const costPerAttempt = monthlyAttempts > 0 && totalMonthlySalary 
    ? Number(totalMonthlySalary) / monthlyAttempts 
    : 0;
  
  const pickupRateDecimal = pickupRate ? Number(pickupRate) / 100 : 0;
  const conversionRateDecimal = conversionRate ? Number(conversionRate) / 100 : 0;
  const costPerConversion = costPerAttempt > 0 && pickupRateDecimal > 0 && conversionRateDecimal > 0
    ? costPerAttempt / (pickupRateDecimal * conversionRateDecimal)
    : 0;

  // Calculate AI costs
  // AI base price: 4.5rs/minute
  // Cost per attempt = pickup rate × 4.5rs
  // Cost per conversion = cost per attempt / conversion rate
  const aiBasePrice = 4.5;
  const aiCostPerAttempt = pickupRateDecimal > 0 
    ? pickupRateDecimal * aiBasePrice 
    : 0;
  const aiCostPerConversion = aiCostPerAttempt > 0 && conversionRateDecimal > 0
    ? aiCostPerAttempt / conversionRateDecimal
    : 0;

  // Calculate Total Spent on Calls
  const humanTotalSpent = totalMonthlySalary ? Number(totalMonthlySalary) : 0;
  const aiTotalSpent = monthlyAttempts > 0 && aiCostPerAttempt > 0
    ? monthlyAttempts * aiCostPerAttempt
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <style>{`
        .flip-card-container {
          perspective: 1000px;
        }
        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-[#1d1e20] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Human vs <span className="text-[#5066d3]">AI</span>
            </h1>
            <p 
              className="text-lg md:text-xl font-medium text-[#1d1e20]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Cheaper. Better. Scalable.
            </p>
          </motion.div>

          {/* Calculator Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-[#d1d5db] p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side - Inputs */}
              <div className="space-y-5">
                <h2 
                  className="text-2xl font-medium text-[#1d1e20] mb-8"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Human Agent Costs
                </h2>
                
                {/* Total Calls Attempt Daily */}
                <div>
                  <label className="block text-xs font-medium text-[#57606a] mb-2 tracking-wide uppercase">
                    Total Calls Attempt Daily
                  </label>
                  <input
                    type="number"
                    value={totalCallsDaily}
                    onChange={(e) => setTotalCallsDaily(e.target.value)}
                    placeholder="Enter daily call attempts"
                    className="w-full px-4 py-3 border border-[#e4e5e9] rounded-lg focus:outline-none focus:border-[#5066d3] text-[#1d1e20] text-sm bg-white transition-colors"
                  />
                </div>

                {/* Number Of Humans */}
                <div>
                  <label className="block text-xs font-medium text-[#57606a] mb-2 tracking-wide uppercase">
                    Number Of Humans
                  </label>
                  <input
                    type="number"
                    value={numberOfHumans}
                    onChange={(e) => setNumberOfHumans(e.target.value)}
                    placeholder="Enter number of human agents"
                    className="w-full px-4 py-3 border border-[#e4e5e9] rounded-lg focus:outline-none focus:border-[#5066d3] text-[#1d1e20] text-sm bg-white transition-colors"
                  />
                </div>

                {/* Total Monthly Salary disbursed */}
                <div>
                  <label className="block text-xs font-medium text-[#57606a] mb-2 tracking-wide uppercase">
                    Total Monthly Salary disbursed (₹)
                  </label>
                  <input
                    type="number"
                    value={totalMonthlySalary}
                    onChange={(e) => setTotalMonthlySalary(e.target.value)}
                    placeholder="Enter total monthly salary"
                    className="w-full px-4 py-3 border border-[#e4e5e9] rounded-lg focus:outline-none focus:border-[#5066d3] text-[#1d1e20] text-sm bg-white transition-colors"
                  />
                </div>

                {/* Two small boxes side by side */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Pickup Rate */}
                  <div>
                    <label className="block text-xs font-medium text-[#57606a] mb-2 tracking-wide uppercase">
                      Pickup Rate (%)
                    </label>
                    <input
                      type="number"
                      value={pickupRate}
                      onChange={(e) => setPickupRate(e.target.value)}
                      placeholder="e.g., 70"
                      min="0"
                      max="100"
                      className="w-full px-4 py-3 border border-[#e4e5e9] rounded-lg focus:outline-none focus:border-[#5066d3] text-[#1d1e20] text-sm bg-white transition-colors"
                    />
                  </div>

                  {/* Conversion Rate On Pickup */}
                  <div>
                    <label className="block text-xs font-medium text-[#57606a] mb-2 tracking-wide uppercase">
                      Conversion Rate On Pickup (%)
                    </label>
                    <input
                      type="number"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(e.target.value)}
                      placeholder="e.g., 15"
                      min="0"
                      max="100"
                      className="w-full px-4 py-3 border border-[#e4e5e9] rounded-lg focus:outline-none focus:border-[#5066d3] text-[#1d1e20] text-sm bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <h2 
                    className="text-2xl font-medium text-[#1d1e20]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Cost Analysis
                  </h2>
                  <button
                    onClick={() => setShowMath(!showMath)}
                    className="px-4 py-2 bg-[#5066d3] text-white rounded-lg text-xs font-medium hover:bg-[#4055c2] transition-colors tracking-wide uppercase"
                  >
                    {showMath ? "Hide Math" : "Show Math"}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 flex-grow">
                  {/* Human Costs - Flip Card */}
                  <div className="relative flip-card-container">
                    <motion.div
                      className="relative w-full h-full flip-card-inner"
                      animate={{ rotateY: showMath ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 flip-card-front bg-white rounded-xl p-4 border-2 border-[#d1d5db] overflow-hidden flex flex-col">
                        <h3 
                          className="text-sm font-medium text-[#1d1e20] mb-3 flex-shrink-0"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Human Agent Costs
                        </h3>
                        
                        {/* Cost Per Conversion - PRIMARY */}
                        <div className="mb-3 pb-3 border-b border-[#e4e5e9] flex-shrink-0">
                          <div className="text-center">
                            <p className="text-[10px] font-medium text-[#57606a] mb-1.5 tracking-wide uppercase">Cost Per Conversion</p>
                            <p 
                              className="text-2xl font-medium text-[#1d1e20] mb-0.5"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              ₹{costPerConversion.toFixed(2)}
                            </p>
                            <p className="text-[9px] text-[#99a2af]">
                              Cost per attempt ÷ (Pickup rate × Conversion rate)
                            </p>
                          </div>
                        </div>
                        
                        {/* Total Spent on Calls */}
                        <div className="mb-3 pb-3 border-b border-[#e4e5e9] flex-shrink-0">
                          <div className="text-center">
                            <p className="text-[10px] font-medium text-[#57606a] mb-1.5 tracking-wide uppercase">Total Spent on Calls</p>
                            <p 
                              className="text-xl font-medium text-[#1d1e20] mb-0.5"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              ₹{humanTotalSpent.toLocaleString()}
                            </p>
                            <p className="text-[9px] text-[#99a2af]">
                              Total monthly salary
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 flex-grow overflow-y-auto">
                          <div>
                            <div className="flex justify-between items-center mb-0.5">
                              <span className="text-[10px] text-[#57606a] font-medium">Monthly Attempts</span>
                              <span className="text-xs font-medium text-[#1d1e20]">
                                {monthlyAttempts.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-[9px] text-[#99a2af]">
                              Daily attempts × 30 days
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[#e4e5e9]">
                            <div className="flex justify-between items-center mb-0.5">
                              <span className="text-[10px] font-medium text-[#57606a]">Cost Per Attempt</span>
                              <span className="text-xs font-medium text-[#1d1e20]">
                                ₹{costPerAttempt.toFixed(2)}
                              </span>
                            </div>
                            <p className="text-[9px] text-[#99a2af]">
                              Total salary ÷ Monthly attempts
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Back Side - Math Formulas */}
                      <div className="absolute inset-0 flip-card-back bg-[#f9f9fb] rounded-xl p-4 border-2 border-[#d1d5db] overflow-y-auto">
                        <h3 className="text-base font-semibold text-[#1d1e20] mb-3 sticky top-0 bg-[#f9f9fb] pb-2">
                          Human Agent - Math Formulas
                        </h3>
                        
                        <div className="space-y-2 text-sm">
                          <div className="bg-white rounded-lg p-2">
                            <p className="font-semibold text-[#1d1e20] mb-1 text-xs">Monthly Attempts:</p>
                            <p className="text-[10px] text-[#57606a] font-mono">
                              = Daily Attempts × 30
                            </p>
                            <p className="text-[10px] text-[#99a2af] mt-0.5">
                              = {totalCallsDaily} × 30 = {monthlyAttempts.toLocaleString()}
                            </p>
                          </div>

                          <div className="bg-white rounded-lg p-2">
                            <p className="font-semibold text-[#1d1e20] mb-1 text-xs">Cost Per Attempt:</p>
                            <p className="text-[10px] text-[#57606a] font-mono">
                              = Total Monthly Salary ÷ Monthly Attempts
                            </p>
                            <p className="text-[10px] text-[#99a2af] mt-0.5">
                              = ₹{totalMonthlySalary} ÷ {monthlyAttempts.toLocaleString()} = ₹{costPerAttempt.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-white rounded-lg p-2">
                            <p className="font-semibold text-[#1d1e20] mb-1 text-xs">Cost Per Conversion:</p>
                            <p className="text-[10px] text-[#57606a] font-mono">
                              = Cost Per Attempt ÷ (Pickup Rate × Conversion Rate)
                            </p>
                            <p className="text-[10px] text-[#99a2af] mt-0.5">
                              = ₹{costPerAttempt.toFixed(2)} ÷ ({pickupRate}% × {conversionRate}%)
                            </p>
                            <p className="text-[10px] text-[#99a2af]">
                              = ₹{costPerAttempt.toFixed(2)} ÷ ({pickupRateDecimal.toFixed(2)} × {conversionRateDecimal.toFixed(2)})
                            </p>
                            <p className="text-[10px] text-[#1d1e20] font-semibold mt-0.5">
                              = ₹{costPerConversion.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-white rounded-lg p-2">
                            <p className="font-semibold text-[#1d1e20] mb-1 text-xs">Total Spent on Calls:</p>
                            <p className="text-[10px] text-[#57606a] font-mono">
                              = Total Monthly Salary
                            </p>
                            <p className="text-[10px] text-[#99a2af] mt-0.5">
                              = ₹{totalMonthlySalary}
                            </p>
                            <p className="text-[10px] text-[#1d1e20] font-semibold mt-0.5">
                              = ₹{humanTotalSpent.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* AI Costs - Flip Card */}
                  <div className="relative flip-card-container">
                    <motion.div
                      className="relative w-full h-full flip-card-inner"
                      animate={{ rotateY: showMath ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 flip-card-front bg-white rounded-xl p-4 border-2 border-[#5066d3] overflow-hidden flex flex-col">
                        <h3 
                          className="text-sm font-medium text-[#1d1e20] mb-3 flex-shrink-0"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          AI Agent Costs
                        </h3>
                        
                        {/* Cost Per Conversion - PRIMARY */}
                        <div className="mb-3 pb-3 border-b border-[#5066d3]/20 flex-shrink-0">
                          <div className="text-center">
                            <p className="text-[10px] font-medium text-[#57606a] mb-1.5 tracking-wide uppercase">Cost Per Conversion</p>
                            <p 
                              className="text-2xl font-medium text-[#5066d3] mb-0.5"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              ₹{aiCostPerConversion.toFixed(2)}
                            </p>
                            <p className="text-[9px] text-[#99a2af]">
                              Cost per attempt ÷ {conversionRate ? `${conversionRate}%` : 'Conversion rate'}
                            </p>
                          </div>
                        </div>
                        
                        {/* Total Spent on Calls */}
                        <div className="mb-3 pb-3 border-b border-[#5066d3]/20 flex-shrink-0">
                          <div className="text-center">
                            <p className="text-[10px] font-medium text-[#57606a] mb-1.5 tracking-wide uppercase">Total Spent on Calls</p>
                            <p 
                              className="text-xl font-medium text-[#5066d3] mb-0.5"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              ₹{aiTotalSpent.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                            </p>
                            <p className="text-[9px] text-[#99a2af]">
                              Monthly attempts × Cost per attempt
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 flex-grow overflow-y-auto">
                          <div className="bg-[#f9f9fb] rounded-lg p-2 border border-[#e4e5e9]">
                            <p className="text-[9px] text-[#57606a] mb-1 font-medium">
                              Pricing Model:
                            </p>
                            <p className="text-[9px] text-[#5066d3] font-medium mb-0.5">
                              ✓ No charges on non picked up calls
                            </p>
                            <p className="text-[9px] text-[#57606a]">
                              • Base price: ₹4.5/minute
                            </p>
                            <p className="text-[9px] text-[#57606a]">
                              • Cost per attempt = Pickup rate × ₹4.5
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[#5066d3]/20">
                            <div className="flex justify-between items-center mb-0.5">
                              <span className="text-[10px] font-medium text-[#57606a]">Cost Per Attempt</span>
                              <span className="text-xs font-medium text-[#5066d3]">
                                ₹{aiCostPerAttempt.toFixed(2)}
                              </span>
                            </div>
                            <p className="text-[9px] text-[#99a2af]">
                              {pickupRate ? `${pickupRate}%` : 'Pickup rate'} × ₹4.5
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Back Side - Math Formulas */}
                      <div className="absolute inset-0 flip-card-back bg-[#f0f4ff] rounded-xl p-4 border-2 border-[#5066d3] overflow-y-auto">
                        <h3 className="text-base font-semibold text-[#1d1e20] mb-3 sticky top-0 bg-[#f0f4ff] pb-2">
                          AI Agent - Math Formulas
                        </h3>
                        
                        <div className="space-y-2 text-sm">
                          <div className="bg-white/50 rounded-lg p-2">
                            <p className="font-semibold text-[#1d1e20] mb-1 text-xs">Cost Per Attempt:</p>
                            <p className="text-[10px] text-[#57606a] font-mono">
                              = Pickup Rate × ₹4.5
                            </p>
                            <p className="text-[10px] text-[#99a2af] mt-0.5">
                              = {pickupRate}% × ₹4.5
                            </p>
                            <p className="text-[10px] text-[#99a2af]">
                              = {pickupRateDecimal.toFixed(2)} × ₹4.5
                            </p>
                            <p className="text-[10px] text-[#5066d3] font-semibold mt-0.5">
                              = ₹{aiCostPerAttempt.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-white/50 rounded-lg p-2">
                            <p className="font-semibold text-[#1d1e20] mb-1 text-xs">Cost Per Conversion:</p>
                            <p className="text-[10px] text-[#57606a] font-mono">
                              = Cost Per Attempt ÷ Conversion Rate
                            </p>
                            <p className="text-[10px] text-[#99a2af] mt-0.5">
                              = ₹{aiCostPerAttempt.toFixed(2)} ÷ {conversionRate}%
                            </p>
                            <p className="text-[10px] text-[#99a2af]">
                              = ₹{aiCostPerAttempt.toFixed(2)} ÷ {conversionRateDecimal.toFixed(2)}
                            </p>
                            <p className="text-[10px] text-[#5066d3] font-semibold mt-0.5">
                              = ₹{aiCostPerConversion.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-white/50 rounded-lg p-2">
                            <p className="font-semibold text-[#1d1e20] mb-1 text-xs">Total Spent on Calls:</p>
                            <p className="text-[10px] text-[#57606a] font-mono">
                              = Monthly Attempts × Cost Per Attempt
                            </p>
                            <p className="text-[10px] text-[#99a2af] mt-0.5">
                              = {monthlyAttempts.toLocaleString()} × ₹{aiCostPerAttempt.toFixed(2)}
                            </p>
                            <p className="text-[10px] text-[#5066d3] font-semibold mt-0.5">
                              = ₹{aiTotalSpent.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            {/* Headline */}
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-medium text-[#1d1e20] leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                No Unnecessary talks. Pure Execution.
              </h2>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-xl border-2 border-[#d1d5db] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e4e5e9]">
                      <th className="text-left py-3 px-5 text-xs font-medium text-[#57606a] uppercase tracking-wider">Feature</th>
                      <th className="text-center py-3 px-5 text-xs font-medium text-[#5066d3] uppercase tracking-wider">AI Agent</th>
                      <th className="text-center py-3 px-5 text-xs font-medium text-[#57606a] uppercase tracking-wider">Human Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Basic Section */}
                    <tr>
                      <td colSpan={3} className="py-2.5 px-5 text-xs font-medium text-[#1d1e20] bg-[#f9f9fb]">
                        Basic
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Scalable</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3] font-medium">Instant</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#57606a]">Need hire + train them</span>
                      </td>
                    </tr>

                    {/* Performance & Reports Section */}
                    <tr>
                      <td colSpan={3} className="py-2.5 px-5 text-xs font-medium text-[#1d1e20] bg-[#f9f9fb]">
                        Performance & Reports
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Conversion Rate</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3] font-medium">Auto learns</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#57606a]">Same script</span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Report Generation</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3] font-medium">Instant</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#57606a]">Takes time</span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Report Metrics</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3] font-medium">4+ metrics</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#57606a]">None</span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Integration</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3] font-medium">Instant (Shopify & NDR)</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#57606a]">Takes time</span>
                      </td>
                    </tr>

                    {/* Convenience Section */}
                    <tr>
                      <td colSpan={3} className="py-2.5 px-5 text-xs font-medium text-[#1d1e20] bg-[#f9f9fb]">
                        Convenience
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Clean Dashboard</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3]">✓</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#99a2af]">—</span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Schedule Multiple</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3]">✓</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#99a2af]">—</span>
                      </td>
                    </tr>

                    {/* Cost Section */}
                    <tr>
                      <td colSpan={3} className="py-2.5 px-5 text-xs font-medium text-[#1d1e20] bg-[#f9f9fb]">
                        Cost
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Cost Per Conversion</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm font-semibold text-[#5066d3]">
                          ₹{aiCostPerConversion.toFixed(2)}
                        </span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm font-semibold text-[#1d1e20]">
                          ₹{costPerConversion.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Cost Per Attempt</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm font-semibold text-[#5066d3]">
                          ₹{aiCostPerAttempt.toFixed(2)}
                        </span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm font-semibold text-[#1d1e20]">
                          ₹{costPerAttempt.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Cost on Non-Picked Up</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3] font-medium">₹0</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#57606a]">Same per attempt</span>
                      </td>
                    </tr>

                    {/* Effort & Headache Section */}
                    <tr>
                      <td colSpan={3} className="py-2.5 px-5 text-xs font-medium text-[#1d1e20] bg-[#f9f9fb]">
                        Effort & Headache
                      </td>
                    </tr>
                    <tr className="border-b border-[#e4e5e9]">
                      <td className="py-3 px-5 text-sm text-[#1d1e20]">Effort & Headache</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#5066d3] font-medium">Nil</span>
                      </td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-sm text-[#57606a] font-medium">Max</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HumanVsAI;

