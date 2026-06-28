import { motion } from "framer-motion";
import { Star, Shield, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#0F172A] mb-4">About Dreams Home</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl text-[#0F172A] mb-6">
              Your Trusted Property Partner in New Delhi
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Based in the vibrant neighborhood of Aya Nagar, Dreams Home is New Delhi's premier real estate consultancy. For over a decade, we have been connecting discerning clients with extraordinary properties that match their vision and lifestyle.
              </p>
              <p>
                Whether you are seeking a luxury villa in South Delhi, a modern apartment with skyline views, or a prime commercial space for your growing business, our team of experts provides unhurried, authoritative guidance tailored to your specific needs.
              </p>
              <p>
                With a stellar 4.9/5 Google Rating backed by 33 verified reviews, we pride ourselves on absolute transparency, precision, and an unwavering commitment to client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <Clock className="text-[#D4AF37] w-8 h-8 mb-3" />
                <div className="font-serif text-xl text-white mb-1">15+ Years</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Experience</div>
              </div>
              <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <Users className="text-[#D4AF37] w-8 h-8 mb-3" />
                <div className="font-serif text-xl text-white mb-1">500+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Clients</div>
              </div>
              <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <Shield className="text-[#D4AF37] w-8 h-8 mb-3" />
                <div className="font-serif text-xl text-white mb-1">Expert</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Team</div>
              </div>
              <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <Star className="text-[#D4AF37] w-8 h-8 mb-3" />
                <div className="font-serif text-xl text-white mb-1">4.9★</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/20 to-transparent z-10 pointer-events-none"></div>
              <img
                src="/about-img.png"
                alt="Dreams Home Office"
                className="w-full h-auto object-cover object-center aspect-[4/5]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#D4AF37] opacity-10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#0F172A] opacity-5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
