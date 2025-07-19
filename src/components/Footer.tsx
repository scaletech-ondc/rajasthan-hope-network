import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-compassion text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 rounded-full p-2">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hunger Poverty Relief</h3>
                <p className="text-sm opacity-90">hungerpoverty.org</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              A dedicated non-profit organization fighting hunger and poverty in India, 
              with special focus on Rajasthan. We combine ground work with digital innovation 
              to create lasting impact in affected communities.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
              <div className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
              </div>
              <div className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                <MapPin className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#impact" className="hover:opacity-100 transition-opacity">Our Impact</a></li>
              <li><a href="#volunteer" className="hover:opacity-100 transition-opacity">Volunteer</a></li>
              <li><a href="#donate" className="hover:opacity-100 transition-opacity">Donate</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>contact@hungerpoverty.org</p>
                  <p className="text-xs">emergency@hungerpoverty.org</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>+91 7597 365 803</p>
                  <p className="text-xs">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Jaipur, Rajasthan</p>
                  <p className="text-xs">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Hunger Poverty Relief Organization. All rights reserved. | 
            <span className="mx-1">Registered Non-Profit in India</span> | 
            <a href="#privacy" className="hover:opacity-100 transition-opacity ml-1">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;