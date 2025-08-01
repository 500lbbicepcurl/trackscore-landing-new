import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, Filter, TrendingUp } from "lucide-react";

const SmartOrderSelection = () => {
  const [filterMode, setFilterMode] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("smart-order-selection");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const orders = [
    { id: "ORD-001", name: "Priya Sharma", city: "Mumbai", payment: "COD", product: "iPhone Case", rtoRisk: 15, decision: "ship" },
    { id: "ORD-002", name: "Rahul Singh", city: "Delhi", payment: "COD", product: "Headphones", rtoRisk: 78, decision: "block" },
    { id: "ORD-003", name: "Anjali Patel", city: "Pune", payment: "Prepaid", product: "Smart Watch", rtoRisk: 5, decision: "ship" },
    { id: "ORD-004", name: "Karan Mehta", city: "Jaipur", payment: "COD", product: "Phone Cover", rtoRisk: 45, decision: "ship" },
    { id: "ORD-005", name: "Sneha Gupta", city: "Bangalore", payment: "COD", product: "Charger", rtoRisk: 82, decision: "block" },
    { id: "ORD-006", name: "Amit Kumar", city: "Chennai", payment: "COD", product: "Earbuds", rtoRisk: 25, decision: "ship" }
  ];

  const filteredOrders = orders.filter(order => {
    if (filterMode === "high-risk") return order.rtoRisk > 70;
    if (filterMode === "safe") return order.rtoRisk < 30;
    return true;
  });

  const getRiskColor = (risk: number) => {
    if (risk < 30) return "text-green-600 bg-green-50";
    if (risk > 70) return "text-red-600 bg-red-50";
    return "text-yellow-600 bg-yellow-50";
  };

  const getDecisionColor = (decision: string) => {
    return decision === "ship" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
  };

  return (
    <section className="py-20 bg-background" id="smart-order-selection">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Smart Order Selection via Personalized RTO Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered binary decision making at scale. Every order gets an instant risk assessment.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-card rounded-lg border max-w-2xl mx-auto">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <Switch 
                checked={filterMode === "high-risk"} 
                onCheckedChange={(checked) => setFilterMode(checked ? "high-risk" : "all")}
              />
              <span className="text-sm">Only show RTO {'>'}70%</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch 
                checked={filterMode === "safe"} 
                onCheckedChange={(checked) => setFilterMode(checked ? "safe" : "all")}
              />
              <span className="text-sm">Only show safe orders</span>
            </div>
          </div>

          {/* Command Center Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Orders Table */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ChevronDown className="h-5 w-5" />
                Live Order Stream
              </h3>
              <div className="space-y-3">
                {filteredOrders.map((order, index) => (
                  <div 
                    key={order.id}
                    className={`p-4 border rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-medium">{order.name}</span>
                          <Badge variant="outline" className="text-xs">{order.city}</Badge>
                          <Badge variant={order.payment === "COD" ? "destructive" : "default"} className="text-xs">
                            {order.payment}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.product}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Decision Engine */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                RTO Risk Assessment
              </h3>
              <div className="space-y-3">
                {filteredOrders.map((order, index) => (
                  <div 
                    key={order.id}
                    className={`p-4 border rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(order.rtoRisk)}`}>
                          {order.rtoRisk}% Risk
                        </div>
                        <Badge className={getDecisionColor(order.decision)}>
                          {order.decision === "ship" ? "✓ Ship" : "✗ Block"}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">{order.id}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Savings Metric */}
          <Card className="p-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="text-3xl font-bold text-green-700 mb-2">₹4.27L</div>
            <p className="text-green-600 font-medium">Total Savings This Month</p>
            <p className="text-sm text-green-500 mt-1">From blocked high-risk orders</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SmartOrderSelection;