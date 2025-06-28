
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Users, FileText, Check, Star, Mail } from "lucide-react";

const PrivacyDataProtection = () => {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                🔐 Privacy & Data Protection
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Your Data, Your Control. Always.
              </p>
              <p className="text-gray-700 mt-4">
                At Scalysis, we understand how critical your customer data is — and we treat it with the utmost respect.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Check className="h-6 w-6 mr-2 text-green-500" />
                  What We Promise:
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-500" />
                      1. Merchant-First Data Ownership
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Your store's order, customer, and campaign data belongs to you, not us.</li>
                      <li>• We never resell, repurpose, or share your data with any third party.</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                      <Database className="h-5 w-5 mr-2 text-blue-500" />
                      2. No External API Sharing
                    </h3>
                    <p className="text-gray-700">
                      All AI processing runs inside your data context — no data is sent to external servers or tools outside our core system.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-blue-500" />
                      3. Enterprise-Grade Security
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Data is encrypted both at rest and in transit.</li>
                      <li>• Hosted on compliant, high-security infrastructure (AWS/GCP level).</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-blue-500" />
                      4. Limited Scope Access
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• We request only the permissions needed to analyze your store's performance.</li>
                      <li>• You can revoke access at any time.</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-500" />
                      5. GDPR & India DPDP-Ready
                    </h3>
                    <p className="text-gray-700">
                      We comply with global privacy regulations, including the EU's GDPR and India's Digital Personal Data Protection Act (DPDP).
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-green-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-green-500" />
                  📝 Data Processing Agreement (DPA)
                </h2>
                <p className="text-gray-700 mb-4">
                  We offer a formal Data Processing Agreement upon request, covering:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Purpose limitation
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Data retention
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Subprocessor disclosures
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Merchant rights
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-purple-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-purple-500" />
                  Want More Details?
                </h2>
                <p className="text-gray-700 mb-4">
                  Reach out to us at <strong>privacy@scalysis.ai</strong> for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-purple-500 mr-2" />
                    A signed DPA
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-purple-500 mr-2" />
                    Technical documentation
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-purple-500 mr-2" />
                    Security audit reports
                  </li>
                </ul>
              </section>

              <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  👁 Transparency. Trust. Control.
                </h2>
                <p className="text-xl text-gray-700">
                  That's the foundation of how we build — and why merchants trust Scalysis.
                </p>
              </section>

              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Security Measures</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Technical Safeguards</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Multi-factor authentication for all accounts</li>
                      <li>• Regular security vulnerability assessments</li>
                      <li>• Automated backup and disaster recovery</li>
                      <li>• Role-based access controls</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Compliance Standards</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• SOC 2 Type II compliance</li>
                      <li>• ISO 27001 security standards</li>
                      <li>• PCI DSS for payment data</li>
                      <li>• Regular third-party audits</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <div className="bg-blue-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Questions About Our Privacy Practices?</h3>
                  <p className="mb-4">Our privacy team is here to help you understand exactly how we protect your data.</p>
                  <a 
                    href="mailto:privacy@scalysis.ai" 
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Privacy Team
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyDataProtection;
