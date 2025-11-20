import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Youtube, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1f] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Scalysis Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">Scalysis</span>
            </div>
          </div>
          
          {/* Use Case */}
          <div>
            <h3 className="font-semibold mb-4">Use Case</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">AI Call</a></li>
              <li><a href="#" className="hover:text-white">Dashboard</a></li>
            </ul>
          </div>
          
          {/* Tech */}
          <div>
            <h3 className="font-semibold mb-4">Tech</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Help</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">Customer stories</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Chrome extension</a></li>
              <li><a href="#" className="hover:text-white">iOS app</a></li>
              <li><a href="#" className="hover:text-white">Android app</a></li>
              <li><a href="#" className="hover:text-white">Zapier</a></li>
              <li><a href="#" className="hover:text-white">Integromat</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Startup program</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Help center</a></li>
              <li><a href="#" className="hover:text-white">Talk to support</a></li>
              <li><a href="#" className="hover:text-white">API docs</a></li>
              <li><a href="#" className="hover:text-white">System status</a></li>
            </ul>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to build?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://scalysis-app.onrender.com/login" 
                className="bg-[#266def] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e5ad8] transition-colors"
              >
                Start for free
              </a>
              <a 
                href="#" 
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2023 Attio Ltd. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span>·</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;