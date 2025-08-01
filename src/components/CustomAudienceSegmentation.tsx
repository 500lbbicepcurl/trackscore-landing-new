import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Target, MessageSquare, Plus, Download, Filter, Zap } from "lucide-react";

const CustomAudienceSegmentation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("custom-audience-segmentation");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const segments = [
    {
      title: "Reliable Prepaid Buyers",
      tag: "Auto-created",
      users: 9000,
      filters: ["Prepaid", "Delivered last 3 orders", "LTV > ₹3k"],
      performance: { conversion: 92, retention: 78, aov: 4200 },
      color: "green"
    },
    {
      title: "High-Risk COD Customers",
      tag: "AI-Generated",
      users: 2400,
      filters: ["COD Only", "2+ RTOs", "Low engagement"],
      performance: { conversion: 15, retention: 12, aov: 1800 },
      color: "red"
    },
    {
      title: "Premium Product Enthusiasts",
      tag: "Behavioral",
      users: 5600,
      filters: ["High AOV", "Premium category", "Repeat buyer"],
      performance: { conversion: 85, retention: 88, aov: 6500 },
      color: "blue"
    },
    {
      title: "Mobile-First Shoppers",
      tag: "Device-based",
      users: 12000,
      filters: ["Mobile only", "App users", "Quick checkout"],
      performance: { conversion: 68, retention: 65, aov: 2800 },
      color: "purple"
    },
    {
      title: "Festival Season Buyers",
      tag: "Seasonal",
      users: 7800,
      filters: ["Festival purchases", "Bulk orders", "Discount seekers"],
      performance: { conversion: 74, retention: 45, aov: 3400 },
      color: "orange"
    },
    {
      title: "High-Value Cart Abandoners",
      tag: "Retargeting",
      users: 3200,
      filters: ["Cart > ₹5k", "Abandoned 2+ times", "Price conscious"],
      performance: { conversion: 35, retention: 42, aov: 5200 },
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-200 bg-green-50",
      red: "border-red-200 bg-red-50",
      blue: "border-blue-200 bg-blue-50",
      purple: "border-purple-200 bg-purple-50",
      orange: "border-orange-200 bg-orange-50",
      yellow: "border-yellow-200 bg-yellow-50"
    };
    return colors[color] || colors.blue;
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Auto-created": return "default";
      case "AI-Generated": return "destructive";
      case "Behavioral": return "secondary";
      default: return "outline";
    }
  };

  return (
    <section className="py-20 bg-background" id="custom-audience-segmentation">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Custom Audience Segmentation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precise segmentation with automation potential. Create targeted audiences for every use case.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">40.2K</div>
              <p className="text-sm text-muted-foreground">Total Segmented Users</p>
            </Card>
            <Card className="p-4 text-center">
              <Zap className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">6</div>
              <p className="text-sm text-muted-foreground">Active Segments</p>
            </Card>
            <Card className="p-4 text-center">
              <Target className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">78%</div>
              <p className="text-sm text-muted-foreground">Avg Conversion Rate</p>
            </Card>
            <Card className="p-4 text-center">
              <MessageSquare className="h-6 w-6 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Export Integrations</p>
            </Card>
          </div>

          {/* Segment Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {segments.map((segment, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-500 hover:shadow-lg ${getColorClasses(segment.color)} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{segment.title}</h3>
                  <Badge variant={getTagColor(segment.tag)} className="text-xs">
                    {segment.tag}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{segment.users.toLocaleString()} users</span>
                </div>

                {/* Filters */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Active Filters:</h4>
                  <div className="flex flex-wrap gap-1">
                    {segment.filters.map((filter, filterIndex) => (
                      <Badge key={filterIndex} variant="outline" className="text-xs">
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  <div className="text-center p-2 bg-white/50 rounded">
                    <div className="font-semibold">{segment.performance.conversion}%</div>
                    <div className="text-muted-foreground">Conv. Rate</div>
                  </div>
                  <div className="text-center p-2 bg-white/50 rounded">
                    <div className="font-semibold">{segment.performance.retention}%</div>
                    <div className="text-muted-foreground">Retention</div>
                  </div>
                  <div className="text-center p-2 bg-white/50 rounded">
                    <div className="font-semibold">₹{segment.performance.aov}</div>
                    <div className="text-muted-foreground">AOV</div>
                  </div>
                </div>

                {/* Export Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <Target className="h-3 w-3 mr-1" />
                    To FB Ads
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    WhatsApp Flow
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Create Segment CTA */}
          <div className="text-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Segment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Create Custom Segment</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="segmentName">Segment Name</Label>
                    <Input id="segmentName" placeholder="e.g., High-Value Repeat Buyers" />
                  </div>
                  
                  <div>
                    <Label htmlFor="orderValue">Minimum Order Value</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select value range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000">₹1,000+</SelectItem>
                        <SelectItem value="2500">₹2,500+</SelectItem>
                        <SelectItem value="5000">₹5,000+</SelectItem>
                        <SelectItem value="10000">₹10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Methods</SelectItem>
                        <SelectItem value="prepaid">Prepaid Only</SelectItem>
                        <SelectItem value="cod">COD Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeframe">Purchase Timeframe</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">Last 7 days</SelectItem>
                        <SelectItem value="30">Last 30 days</SelectItem>
                        <SelectItem value="90">Last 90 days</SelectItem>
                        <SelectItem value="all">All time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" onClick={() => setIsModalOpen(false)}>
                    Create Segment
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAudienceSegmentation;