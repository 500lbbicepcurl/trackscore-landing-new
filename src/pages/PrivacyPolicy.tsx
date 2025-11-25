import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Users, FileText, Phone, Mic } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-[#5066d3] mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#1d1e20] mb-4">Privacy Policy</h1>
              <p className="text-[#31373d] text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-10 text-[#31373d]">
              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-[#5066d3]" />
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  At Scalysis, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard your data in connection with our AI-powered calling 
                  ecosystem and services for D2C (Direct-to-Consumer) businesses. Our services include voice cloning, automated calling, 
                  NDR (Non-Delivery Report) automations, address recovery calls, and sentiment analysis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4 flex items-center">
                  <Database className="h-6 w-6 mr-2 text-[#5066d3]" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-[#1d1e20]">Business Account Information</h3>
                  <p className="leading-relaxed">
                    When you create an account with Scalysis, we collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Company name, business address, and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Payment and billing information</li>
                    <li>Shopify and other e-commerce platform integration credentials</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-[#1d1e20] mt-6">Order and Customer Data</h3>
                  <p className="leading-relaxed">
                    To provide our AI calling services, we collect and process:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Order details including product information, quantities, and values</li>
                    <li>Customer names, phone numbers, and delivery addresses</li>
                    <li>Payment methods (COD vs. prepaid preferences)</li>
                    <li>Order timestamps, delivery schedules, and fulfillment status</li>
                    <li>NDR (Non-Delivery Report) data and reasons</li>
                    <li>Call records, transcripts, and outcomes</li>
                  </ul>

                  <h3 className="text-xl font-medium text-[#1d1e20] mt-6">Voice Data</h3>
                  <p className="leading-relaxed">
                    For our voice cloning and AI calling features, we may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Voice recordings for voice cloning purposes (with explicit consent)</li>
                    <li>Call audio recordings for quality assurance and training</li>
                    <li>Voice patterns and characteristics for voice matching</li>
                  </ul>

                  <h3 className="text-xl font-medium text-[#1d1e20] mt-6">Usage and Analytics Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Platform usage statistics and feature interactions</li>
                    <li>Call performance metrics and conversion rates</li>
                    <li>System logs and error reports</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4 flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-[#5066d3]" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-[#1d1e20]">AI Calling Services</h3>
                  <p className="leading-relaxed">
                    We use your data to provide and improve our AI calling services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Making automated calls to customers for order confirmation, address recovery, and NDR resolution</li>
                    <li>Voice cloning to create personalized calling experiences</li>
                    <li>Sentiment analysis to understand customer responses and improve call scripts</li>
                    <li>Auto-learning algorithms to improve conversion rates and call effectiveness</li>
                  </ul>

                  <h3 className="text-xl font-medium text-[#1d1e20] mt-6">Platform Operations</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processing and managing your orders and customer data</li>
                    <li>Integrating with your e-commerce platforms (Shopify, etc.)</li>
                    <li>Providing dashboard analytics and reporting</li>
                    <li>Managing billing and subscription services</li>
                  </ul>

                  <h3 className="text-xl font-medium text-[#1d1e20] mt-6">Service Improvement</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Training and improving our AI models and voice recognition systems</li>
                    <li>Analyzing usage patterns to enhance platform features</li>
                    <li>Conducting research and development for new features</li>
                    <li>Providing customer support and troubleshooting</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-[#5066d3]" />
                  Data Security & Protection
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>End-to-end encryption for all data transmissions</li>
                    <li>Secure cloud storage with regular backups and redundancy</li>
                    <li>Access controls, authentication protocols, and role-based permissions</li>
                    <li>Regular security audits, vulnerability assessments, and penetration testing</li>
                    <li>Data anonymization and pseudonymization where applicable</li>
                    <li>Compliance with industry standards and regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-[#5066d3]" />
                  Data Sharing & Third Parties
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    We do not sell or rent your personal data to third parties. We may share data only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform (e.g., cloud hosting, payment processing, analytics)</li>
                    <li><strong>E-commerce Integrations:</strong> With your connected e-commerce platforms (Shopify, etc.) as necessary to provide our services</li>
                    <li><strong>Shipping Partners:</strong> With shipping and logistics partners to facilitate order fulfillment and address recovery</li>
                    <li><strong>Legal Requirements:</strong> When required by law, legal processes, or government requests</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share data for specific purposes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4 flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-[#5066d3]" />
                  Voice Data and Call Recordings
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Our services involve voice cloning and call recordings. We handle this data with special care:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Voice cloning requires explicit consent and is only used for the purposes you authorize</li>
                    <li>Call recordings are used for quality assurance, training, and service improvement</li>
                    <li>You can request deletion of voice data and call recordings at any time</li>
                    <li>Voice data is encrypted and stored securely</li>
                    <li>We comply with applicable regulations regarding call recording and voice data</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4">Your Rights</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal data and understand how it's being used</li>
                    <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your data (subject to legal and business requirements)</li>
                    <li><strong>Portability:</strong> Request data portability to other service providers</li>
                    <li><strong>Opt-out:</strong> Opt-out of certain data processing activities, including marketing communications</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for voice cloning or other consent-based processing</li>
                    <li><strong>Object:</strong> Object to processing of your data for certain purposes</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To exercise these rights, please contact us at <a href="mailto:scalysiswork@gmail.com" className="text-[#5066d3] hover:underline">scalysiswork@gmail.com</a>.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4">Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your data for as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Active Account Data:</strong> Retained while your account is active and for a reasonable period after closure</li>
                  <li><strong>Order and Call Data:</strong> Retained for up to 3 years for analytics and service improvement</li>
                  <li><strong>Voice Recordings:</strong> Retained as per your preferences and legal requirements</li>
                  <li><strong>Billing Records:</strong> Retained for 7 years as required by tax and accounting regulations</li>
                  <li><strong>Aggregated/Anonymized Data:</strong> May be retained indefinitely for research and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4">Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage, and improve our services. 
                  You can control cookie preferences through your browser settings. For more information, please refer to our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4">International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your data may be transferred to and processed in countries other than your country of residence. We ensure that 
                  appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4">Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
                  from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4">Contact Us</h2>
                <div className="bg-[#f7f7f8] p-6 rounded-lg">
                  <p className="leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:scalysiswork@gmail.com" className="text-[#5066d3] hover:underline">scalysiswork@gmail.com</a></p>
                    <p><strong>Address:</strong> Near pretty day apartments, sainik colony sector d extension jammu, j&k</p>
                    <p><strong>Phone:</strong> +91 9149874123</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1d1e20] mb-4">Updates to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or 
                  service features. We will notify you of any significant changes through email or prominent notices on our website. 
                  The "Last updated" date at the top of this page indicates when the policy was last revised.
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
