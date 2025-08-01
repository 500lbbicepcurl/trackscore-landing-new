import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MousePointer, Eye, Clock, AlertTriangle } from "lucide-react";

const CustomPixelBehavior = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHeatmap, setActiveHeatmap] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("custom-pixel-behavior");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const behaviorTags = [
    { icon: <MousePointer className="h-4 w-4" />, text: "Scrolled but didn't click CTA", risk: "medium" },
    { icon: <Eye className="h-4 w-4" />, text: "Compared variants, left on checkout", risk: "high" },
    { icon: <Clock className="h-4 w-4" />, text: "Viewed COD FAQ, high cancel risk", risk: "high" },
    { icon: <AlertTriangle className="h-4 w-4" />, text: "Multiple tab switches during checkout", risk: "medium" }
  ];

  const clickTrail = [
    { x: 20, y: 15, time: "0:03", action: "Product View" },
    { x: 45, y: 25, time: "0:15", action: "Image Zoom" },
    { x: 30, y: 45, time: "0:32", action: "Price Check" },
    { x: 70, y: 35, time: "0:45", action: "Reviews Scroll" },
    { x: 85, y: 70, time: "1:02", action: "Add to Cart" },
    { x: 50, y: 80, time: "1:15", action: "Checkout Start" },
    { x: 40, y: 85, time: "1:45", action: "COD Selection" },
    { x: 35, y: 90, time: "2:10", action: "Exit" }
  ];

  return (
    <section className="py-20 bg-muted/30" id="custom-pixel-behavior">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Custom Pixel for Behavior Feedback</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep behavioral tracking reveals customer intent before they even checkout.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Website Replay Visualization */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Customer Session Replay</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Live Session</Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setActiveHeatmap(!activeHeatmap)}
                    >
                      {activeHeatmap ? "Hide" : "Show"} Heatmap
                    </Button>
                  </div>
                </div>

                {/* Simulated Website Interface */}
                <div className="relative bg-gray-50 rounded-lg p-8 min-h-[400px] border-2 border-dashed border-gray-200">
                  {/* Header */}
                  <div className="h-8 bg-white rounded mb-4 flex items-center px-4 shadow-sm">
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                    <div className="ml-auto flex gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  {/* Product Section */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-32 bg-white rounded shadow-sm"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="h-12 bg-blue-200 rounded mb-4"></div>

                  {/* Click Trail Visualization */}
                  {clickTrail.map((click, index) => (
                    <div
                      key={index}
                      className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{ 
                        left: `${click.x}%`, 
                        top: `${click.y}%`,
                        backgroundColor: index < 5 ? '#22c55e' : '#ef4444',
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {click.time} - {click.action}
                      </div>
                    </div>
                  ))}

                  {/* Heatmap Overlay */}
                  {activeHeatmap && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-16 left-8 w-32 h-32 bg-red-500 opacity-20 rounded-full blur-xl"></div>
                      <div className="absolute top-32 right-12 w-24 h-24 bg-yellow-500 opacity-30 rounded-full blur-lg"></div>
                      <div className="absolute bottom-20 left-1/2 w-40 h-16 bg-green-500 opacity-25 rounded-full blur-lg"></div>
                    </div>
                  )}
                </div>

                {/* Behavior Tags */}
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">AI Behavioral Tags</h4>
                  {behaviorTags.map((tag, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${
                        tag.risk === "high" ? "bg-red-50 border-red-200" : "bg-yellow-50 border-yellow-200"
                      } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className={`p-1 rounded ${tag.risk === "high" ? "text-red-600" : "text-yellow-600"}`}>
                        {tag.icon}
                      </div>
                      <span className="text-sm">{tag.text}</span>
                      <Badge variant={tag.risk === "high" ? "destructive" : "secondary"} className="ml-auto text-xs">
                        {tag.risk} risk
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* AI Segmentation */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Auto-Segmentation</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-red-700">High Cancel Risk</span>
                  </div>
                  <p className="text-sm text-red-600 mb-3">
                    Customer showed hesitation patterns and abandoned checkout flow
                  </p>
                  <Button variant="destructive" size="sm" className="w-full">
                    Block COD Order
                  </Button>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium mb-2">Recommended Actions</h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div>• Add to retargeting audience</div>
                    <div>• Send abandonment email</div>
                    <div>• Offer prepaid discount</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border rounded-lg">
                  <h4 className="font-medium mb-2 text-sm">Session Data</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>Time on site: 2m 15s</div>
                    <div>Pages viewed: 4</div>
                    <div>Scroll depth: 78%</div>
                    <div>Device: Mobile (Android)</div>
                    <div>Source: Facebook Ads</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPixelBehavior;