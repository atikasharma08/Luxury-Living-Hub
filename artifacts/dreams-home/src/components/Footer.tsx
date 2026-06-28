import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] relative pt-20">
      {/* Top Gold Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1 mb-6">
              <span className="font-serif font-bold text-2xl tracking-widest text-white">DREAMS</span>
              <span className="text-[#D4AF37] text-2xl font-bold">·</span>
              <span className="font-serif font-bold text-2xl tracking-widest text-white">HOME</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your Trusted Property Partner in New Delhi. Expert guidance for luxury residential and commercial real estate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111827] transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111827] transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111827] transition-all">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111827] transition-all">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Properties', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link === 'Home' ? '' : link.toLowerCase()}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center">
                    <span className="text-[#D4AF37] mr-2 text-xs">▹</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-xl text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {['Residential Properties', 'Commercial Spaces', 'Luxury Apartments', 'Premium Villas', 'Documentation', 'Consultation'].map((service) => (
                <li key={service} className="text-gray-400 flex items-center">
                  <span className="text-[#D4AF37] mr-2 text-xs">▹</span> {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-serif text-xl text-white mb-6">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                <p>10 Arcade, Aya Nagar<br/>New Delhi, Delhi 110047</p>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                <p>09958757477</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-lg mt-4">
                <span className="text-[#D4AF37] font-bold font-serif text-xl">4.9</span>
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-gray-300 text-xs ml-1 uppercase">Google Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">© 2024 Dreams Home. All Rights Reserved.</p>
          <p className="text-gray-500">Designed with ❤️ for luxury</p>
        </div>
      </div>
    </footer>
  );
}
