import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MapPin, Target, Download, Filter, TrendingUp, TrendingDown } from "lucide-react";

const PincodeHeatmap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filterMode, setFilterMode] = useState("all");
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("pincode-heatmap");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const pincodeData = [
    { id: 1, pincode: "110001", city: "New Delhi", state: "Delhi", rto: 15, ltv: 4500, orders: 1250, x: 45, y: 25, type: "safe" },
    { id: 2, pincode: "400001", city: "Mumbai", state: "Maharashtra", rto: 12, ltv: 5200, orders: 2100, x: 35, y: 45, type: "safe" },
    { id: 3, pincode: "560001", city: "Bangalore", state: "Karnataka", rto: 18, ltv: 4800, orders: 1850, x: 40, y: 65, type: "safe" },
    { id: 4, pincode: "500001", city: "Hyderabad", state: "Telangana", rto: 22, ltv: 3900, orders: 980, x: 42, y: 58, type: "medium" },
    { id: 5, pincode: "302001", city: "Jaipur", state: "Rajasthan", rto: 68, ltv: 2100, orders: 650, x: 38, y: 35, type: "high" },
    { id: 6, pincode: "226001", city: "Lucknow", state: "UP", rto: 72, ltv: 1800, orders: 420, x: 48, y: 32, type: "high" },
    { id: 7, pincode: "700001", city: "Kolkata", state: "West Bengal", rto: 65, ltv: 2300, orders: 580, x: 58, y: 38, type: "high" },
    { id: 8, pincode: "600001", city: "Chennai", state: "Tamil Nadu", rto: 25, ltv: 4200, orders: 1320, x: 42, y: 75, type: "medium" }
  ];

  const targetingSets = [
    { name: "North COD-safe metros", count: "12 cities", segments: ["Delhi NCR", "Chandigarh", "Amritsar"] },
    { name: "Tier 2 high intent prepaid", count: "28 cities", segments: ["Tier 2 Tech Cities", "College Towns", "IT Hubs"] },
    { name: "South Premium Buyers", count: "15 cities", segments: ["Bangalore", "Chennai", "Hyderabad"] }
  ];

  const getPinColor = (pin) => {
    if (pin.type === "safe") return "bg-green-500";
    if (pin.type === "medium") return "bg-yellow-500";
    return "bg-red-500";
  };

  const filteredPins = pincodeData.filter(pin => {
    if (filterMode === "safe") return pin.rto < 30;
    if (filterMode === "high-risk") return pin.rto > 60;
    return true;
  });

  return (
    <section className="py-20 bg-muted/30" id="pincode-heatmap">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pincode Exclusion + Meta Targeting Heatmap</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive geo-control with performance insights. Block RTO hotspots, find high-LTV zones.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 p-4 bg-card rounded-lg border max-w-4xl mx-auto">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <Switch 
                checked={filterMode === "high-risk"} 
                onCheckedChange={(checked) => setFilterMode(checked ? "high-risk" : "all")}
              />
              <span className="text-sm">Exclude COD RTO {'>'}60%</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch 
                checked={filterMode === "safe"} 
                onCheckedChange={(checked) => setFilterMode(checked ? "safe" : "all")}
              />
              <span className="text-sm">Only prepaid-safe zones</span>
            </div>
            <Button variant="outline" size="sm" className="ml-4">
              <Target className="h-4 w-4 mr-2" />
              Push to Meta Targeting
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Interactive Map */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">India Performance Heatmap</h3>
                
                {/* Simulated India Map */}
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 min-h-[500px] border-2 border-blue-200 overflow-hidden">
                  {/* India outline simulation */}
                  <div className="absolute inset-4 border-2 border-gray-300 rounded-lg bg-white/50"></div>
                  
                  {/* Pincode markers */}
                  {filteredPins.map((pin, index) => (
                    <div
                      key={pin.id}
                      className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-500 hover:scale-125 ${getPinColor(pin)} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                      style={{ 
                        left: `${pin.x}%`, 
                        top: `${pin.y}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                      onClick={() => setSelectedPin(pin)}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                        {pin.city} - {pin.rto}% RTO
                      </div>
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                    <h4 className="text-sm font-medium mb-2">RTO Risk Zones</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Safe (&lt;30%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Medium (30-60%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>High ({'>'}60%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Pin Details */}
                {selectedPin && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{selectedPin.city}, {selectedPin.state}</h4>
                      <Badge variant={selectedPin.type === "safe" ? "default" : selectedPin.type === "medium" ? "secondary" : "destructive"}>
                        {selectedPin.rto}% RTO Rate
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Avg Order Value</span>
                        <div className="font-medium">₹{selectedPin.ltv.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total Orders</span>
                        <div className="font-medium">{selectedPin.orders.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Pincode</span>
                        <div className="font-medium">{selectedPin.pincode}</div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Auto-generated Targeting Sets */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Auto-generated Targeting Sets</h3>
                <div className="space-y-4">
                  {targetingSets.map((set, index) => (
                    <div 
                      key={index}
                      className={`p-4 border rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{set.name}</h4>
                        <Badge variant="outline" className="text-xs">{set.count}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-3">
                        {set.segments.join(" • ")}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Export
                        </Button>
                        <Button size="sm" className="text-xs flex-1">
                          <Target className="h-3 w-3 mr-1" />
                          Push to Meta
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Safe Zones</span>
                    </div>
                    <span className="font-semibold text-green-700">6 cities</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      <span className="text-sm">High Risk</span>
                    </div>
                    <span className="font-semibold text-red-700">3 cities</span>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Potential Savings</div>
                    <div className="text-lg font-bold">₹8.4L/month</div>
                    <div className="text-xs text-muted-foreground">From blocking high-risk zones</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PincodeHeatmap;