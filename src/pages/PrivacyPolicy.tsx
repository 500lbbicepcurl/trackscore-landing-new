
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Users, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-blue-500" />
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At Scalysis, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard your data in connection with our RTO (Return to Origin) 
                  reduction services for e-commerce businesses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 mr-2 text-blue-500" />
                  Data Collection for RTO Reduction
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-800">Order Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide effective RTO reduction services, we collect and analyze:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Order details including product information, quantities, and values</li>
                    <li>Customer delivery addresses and postal codes</li>
                    <li>Payment methods (COD vs. prepaid preferences)</li>
                    <li>Order timestamps and delivery schedules</li>
                    <li>Historical delivery success/failure rates</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-800 mt-6">Customer Behavior Data</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Previous order patterns and frequency</li>
                    <li>Return and cancellation history</li>
                    <li>Geographic delivery success patterns</li>
                    <li>Time-based ordering behaviors</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-blue-500" />
                  How We Use Your Data
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-800">Smart Order Filtering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use machine learning algorithms to analyze your order data and identify patterns that indicate 
                    higher RTO risk. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Identifying high-risk delivery locations and postal codes</li>
                    <li>Detecting suspicious order patterns that may lead to returns</li>
                    <li>Predicting optimal delivery times based on historical success rates</li>
                    <li>Recommending which orders to prioritize for shipment</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-800 mt-6">Performance Analytics</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Generating RTO reduction reports and insights</li>
                    <li>Tracking delivery success improvements over time</li>
                    <li>Providing recommendations for business optimization</li>
                    <li>Benchmarking against industry standards</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-blue-500" />
                  Data Security & Protection
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>End-to-end encryption for all data transmissions</li>
                    <li>Secure cloud storage with regular backups</li>
                    <li>Access controls and authentication protocols</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Data anonymization where possible</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-500" />
                  Data Sharing & Third Parties
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We do not sell or rent your personal data to third parties. We may share data only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With logistics partners to improve delivery success rates</li>
                    <li>With payment processors for fraud prevention</li>
                    <li>When required by law or legal processes</li>
                    <li>With your explicit consent for specific integrations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data and understand how it's being used</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Request deletion of your data (subject to business requirements)</li>
                    <li>Opt-out of certain data processing activities</li>
                    <li>Data portability to other service providers</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your data for as long as necessary to provide our RTO reduction services and comply with 
                  legal obligations. Typically, this includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Active account data: Retained while your account is active</li>
                  <li>Historical order data: Retained for up to 3 years for analytics</li>
                  <li>Aggregated/anonymized data: May be retained indefinitely for research</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@scalysis.com</p>
                    <p><strong>Address:</strong> Tech Park, Electronic City, Bangalore, 560100, India</p>
                    <p><strong>Phone:</strong> +91 9149874123</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                  requirements. We will notify you of any significant changes through email or prominent notices on our website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
