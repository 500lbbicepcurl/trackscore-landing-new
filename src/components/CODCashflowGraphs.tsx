import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Clock, Package } from "lucide-react";

const CODCashflowGraphs = () => {
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

    const element = document.getElementById("cod-cashflow-graphs");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const cashflowData = [
    { date: '01 Dec', shipped: 450000, delivered: 320000, refunded: 98000 },
    { date: '03 Dec', shipped: 520000, delivered: 380000, refunded: 115000 },
    { date: '05 Dec', shipped: 380000, delivered: 290000, refunded: 87000 },
    { date: '07 Dec', shipped: 620000, delivered: 445000, refunded: 142000 },
    { date: '09 Dec', shipped: 580000, delivered: 425000, refunded: 128000 },
    { date: '11 Dec', shipped: 480000, delivered: 365000, refunded: 102000 },
    { date: '13 Dec', shipped: 690000, delivered: 520000, refunded: 156000 },
    { date: '15 Dec', shipped: 540000, delivered: 410000, refunded: 125000 }
  ];

  const courierData = [
    { name: "BlueDart", recovery: 87, orders: 1250, avgDays: 4.2 },
    { name: "Delhivery", recovery: 82, orders: 2100, avgDays: 5.8 },
    { name: "Ekart", recovery: 78, orders: 1800, avgDays: 6.5 },
    { name: "DTDC", recovery: 75, orders: 950, avgDays: 7.1 },
    { name: "Shadowfax", recovery: 89, orders: 800, avgDays: 3.9 }
  ];

  const formatCurrency = (value: number) => {
    return `₹${(value / 100000).toFixed(1)}L`;
  };

  return (
    <section className="py-20 bg-background" id="cod-cashflow-graphs">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visualized COD Cashflow Graphs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track cash flow in real-time. See RTO as a cash leak before it hurts your business.
            </p>
          </div>

          {/* Mini Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <Package className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <div className="text-2xl font-bold text-blue-700 mb-1">₹2.7L</div>
              <p className="text-blue-600 text-sm">Current COD in Transit</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <TrendingDown className="h-8 w-8 mx-auto mb-3 text-red-600" />
              <div className="text-2xl font-bold text-red-700 mb-1">₹1.1L</div>
              <p className="text-red-600 text-sm">Past 7d COD Stuck</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <Clock className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <div className="text-2xl font-bold text-green-700 mb-1">6.2d</div>
              <p className="text-green-600 text-sm">Avg Days to Recover</p>
            </Card>
          </div>

          {/* Main Cashflow Chart */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">COD Cash Flow Analysis</h3>
              <div className="flex items-center gap-4">
                <Badge variant="outline">Last 15 Days</Badge>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Shipped</span>
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Delivered</span>
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Refunded</span>
                </div>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cashflowData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={formatCurrency} />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), '']}
                    labelStyle={{ color: '#000' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="shipped"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                    name="COD Shipped"
                  />
                  <Area
                    type="monotone"
                    dataKey="delivered"
                    stackId="2"
                    stroke="#22c55e"
                    fill="#22c55e"
                    fillOpacity={0.5}
                    name="COD Delivered"
                  />
                  <Area
                    type="monotone"
                    dataKey="refunded"
                    stackId="3"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.7}
                    name="COD Refunded"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Courier Performance Table */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Cash Recovery Rate by Courier</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Courier Partner</th>
                    <th className="text-left py-3 px-4">Recovery Rate</th>
                    <th className="text-left py-3 px-4">Total Orders</th>
                    <th className="text-left py-3 px-4">Avg Recovery Days</th>
                    <th className="text-left py-3 px-4">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {courierData.map((courier, index) => (
                    <tr 
                      key={courier.name}
                      className={`border-b transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <td className="py-4 px-4 font-medium">{courier.name}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{courier.recovery}%</span>
                          <div className="w-20 h-2 bg-gray-200 rounded">
                            <div 
                              className="h-full bg-green-500 rounded"
                              style={{ width: `${courier.recovery}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{courier.orders.toLocaleString()}</td>
                      <td className="py-4 px-4 text-muted-foreground">{courier.avgDays} days</td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={courier.recovery > 85 ? "default" : courier.recovery > 80 ? "secondary" : "destructive"}
                        >
                          {courier.recovery > 85 ? "Excellent" : courier.recovery > 80 ? "Good" : "Needs Improvement"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CODCashflowGraphs;