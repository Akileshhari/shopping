import React from 'react'
import { Mail,Phone} from "lucide-react";

function Footer(){
    return (
        <footer className="bg-[#322a3e] text-white py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            
            {/* Column 1 - About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Shopping</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Culture</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Investors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>

              </ul>
  
            </div>
    
            {/* Column 2 - Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Support Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Documents Required</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Annual Returns</a></li>
              </ul>
            </div>
    
            {/* Column 3 - Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cancellation & Return</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Referral Terms & Conditions</a></li>
              </ul>
            </div>
    
            {/* Column 4 - Follow Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Need help?</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 flex justify-center md:justify-start space-x-4"><Mail className="text-gray-400 mr-2" size={18} />info@shopping.com</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 flex justify-center md:justify-start space-x-4"><Phone className="text-gray-400 mr-2" size={20} /> +91 98765 41230</a>
              </div>
              <h3 className="text-lg font-semibold mb-4 mt-4">Download App</h3>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 flex justify-center md:justify-start space-x-4"><img className="h-10 w-auto" src="/footer/pic-1.png" alt="" /></a>

            </div>
    
          </div>
    
          {/* Bottom Section */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Shopping. All Rights Reserved.
          </div>
        </footer>
      )
}

export default Footer