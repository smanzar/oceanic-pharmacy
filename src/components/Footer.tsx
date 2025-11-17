import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 site-footer">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-sm text-white mb-4">
              Subscribe to get updates on our latest products and health tips.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-white hover:text-primary transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/health-tips" className="text-sm text-white hover:text-primary transition-colors">
                  Health Tips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <span className="font-medium">Email:</span> info@pharmacare.com
              </li>
              <li>
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </li>
              <li>
                <span className="font-medium">Address:</span> 123 Medical Plaza, Health City, HC 12345
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-white">
            © {new Date().getFullYear()} PharmaCare. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
