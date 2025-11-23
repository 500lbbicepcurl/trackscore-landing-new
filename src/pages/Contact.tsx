import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1
              className="text-4xl md:text-5xl font-medium text-[#1d1e20] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact Us
            </h1>
            <p className="text-base text-[#57606a] max-w-2xl mx-auto">
              For any sales inquiries, partnership opportunities, or general questions, please feel free to reach out to us. We're here to help and would love to hear from you.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl border-2 border-[#d1d5db] p-8 md:p-12 shadow-sm"
          >
            <div className="text-center mb-8">
              <h2
                className="text-2xl md:text-3xl font-medium text-[#1d1e20] mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Aditya Kotwal
              </h2>
              <p className="text-sm text-[#57606a]">Sales & Business Development</p>
            </div>

            <div className="space-y-6">
              {/* Phone/WhatsApp */}
              <motion.a
                href="https://wa.me/919149874123"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-[#f8f9fa] rounded-lg border border-[#e4e5e9] hover:border-[#5066d3] hover:bg-[#f0f4ff] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#5066d3] flex items-center justify-center group-hover:bg-[#4055c2] transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-[#57606a] mb-1 uppercase tracking-wide">
                      WhatsApp / Call
                    </p>
                    <p className="text-lg font-medium text-[#1d1e20] group-hover:text-[#5066d3] transition-colors">
                      +91 9149874123
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:aditya.kotwal@scalysis.com"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-[#f8f9fa] rounded-lg border border-[#e4e5e9] hover:border-[#5066d3] hover:bg-[#f0f4ff] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#5066d3] flex items-center justify-center group-hover:bg-[#4055c2] transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-[#57606a] mb-1 uppercase tracking-wide">
                      Email
                    </p>
                    <p className="text-lg font-medium text-[#1d1e20] group-hover:text-[#5066d3] transition-colors">
                      aditya.kotwal@scalysis.com
                    </p>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-8 border-t border-[#e4e5e9] text-center"
            >
              <p className="text-sm text-[#57606a] leading-relaxed">
                For any sales inquiries, partnership opportunities, or general questions, please feel free to reach out to us. We're here to help and would love to hear from you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

