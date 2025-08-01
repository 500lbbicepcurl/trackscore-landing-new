import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Send, Bot, User, Lightbulb, TrendingDown, Package, MessageSquare } from "lucide-react";

const RTOGPTChat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Load initial conversation when visible
          setTimeout(() => {
            loadInitialConversation();
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("rto-gpt-chat");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const loadInitialConversation = () => {
    const initialMessages = [
      {
        id: 1,
        type: "human",
        text: "Why did we lose money last week?",
        timestamp: "2 min ago"
      },
      {
        id: 2,
        type: "bot",
        text: "Based on your data analysis, you lost ₹1.2L last week primarily due to:",
        timestamp: "2 min ago",
        hasChart: true,
        chartData: [
          { name: 'BlueDart RTO', value: 45000, color: '#ef4444' },
          { name: 'Delhivery RTO', value: 38000, color: '#f97316' },
          { name: 'DTDC RTO', value: 25000, color: '#eab308' },
          { name: 'Ekart RTO', value: 12000, color: '#84cc16' }
        ]
      },
      {
        id: 3,
        type: "human",
        text: "Which courier has the worst cancel rate?",
        timestamp: "1 min ago"
      },
      {
        id: 4,
        type: "bot",
        text: "DTDC has the highest RTO rate at 73% this month. Here's the breakdown:",
        timestamp: "1 min ago",
        hasChart: true,
        chartData: [
          { courier: 'DTDC', rate: 73 },
          { courier: 'Ekart', rate: 68 },
          { courier: 'Delhivery', rate: 45 },
          { courier: 'BlueDart', rate: 32 },
          { courier: 'Shadowfax', rate: 28 }
        ]
      }
    ];

    initialMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, index * 800);
    });
  };

  const quickPrompts = [
    "Show me today's RTO trends",
    "Which products have highest return rates?",
    "Compare courier performance this month",
    "Identify high-risk customer patterns",
    "What's my cash flow prediction?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: "human",
      text: inputValue,
      timestamp: "now"
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now(),
        type: "bot",
        text: "I'm analyzing your data across 17 tracked variables and 180k past orders. Give me a moment to generate insights...",
        timestamp: "now"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickPrompt = (prompt) => {
    setInputValue(prompt);
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const renderChart = (message) => {
    if (!message.hasChart) return null;

    if (message.chartData[0]?.color) {
      // Pie chart for losses
      return (
        <div className="h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={message.chartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ₹${(value/1000).toFixed(0)}k`}
              >
                {message.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`₹${(Number(value)/1000).toFixed(0)}k`, 'Loss']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    } else {
      // Bar chart for courier rates
      return (
        <div className="h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={message.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="courier" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'RTO Rate']} />
              <Bar dataKey="rate" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
  };

  return (
    <section className="py-20 bg-muted/30" id="rto-gpt-chat">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">RTO-GPT (Ask Anything)</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chat with your data. Get instant insights powered by 180k+ order analysis.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="flex flex-col h-[600px]">
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">RTO-GPT</h3>
                      <p className="text-xs text-green-600">● Online</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">AI Assistant</Badge>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.type === 'human' ? 'justify-end' : 'justify-start'} transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className={`max-w-[80%] ${message.type === 'human' ? 'bg-blue-600 text-white' : 'bg-gray-100'} rounded-lg p-3`}>
                        <div className="flex items-center gap-2 mb-1">
                          {message.type === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                          <span className="text-xs opacity-70">{message.timestamp}</span>
                        </div>
                        <p className="text-sm">{message.text}</p>
                        {renderChart(message)}
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask anything about your RTO data..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Prompts */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Quick Prompts
                </h3>
                <div className="space-y-2">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs h-auto py-2 px-3"
                      onClick={() => handleQuickPrompt(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Data Insights */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-700 mb-2">Data Intelligence</h4>
                  <p className="text-sm text-blue-600 mb-4">
                    Generated using 17 tracked variables, 180k past orders
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/50 p-2 rounded">
                      <div className="font-semibold">17</div>
                      <div className="text-blue-600">Variables</div>
                    </div>
                    <div className="bg-white/50 p-2 rounded">
                      <div className="font-semibold">180K</div>
                      <div className="text-blue-600">Orders</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Recent Insights */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" />
                  Recent Insights
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="font-medium text-red-700">RTO Spike Alert</div>
                    <div className="text-red-600 text-xs">DTDC showing 23% increase in cancellations</div>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="font-medium text-green-700">Cost Savings</div>
                    <div className="text-green-600 text-xs">₹45k saved this week from smart blocking</div>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="font-medium text-blue-700">New Pattern</div>
                    <div className="text-blue-600 text-xs">Mobile users 34% more likely to accept COD</div>
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

export default RTOGPTChat;