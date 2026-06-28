import { motion } from "framer-motion";
import { ShieldCheck, Tag, Eye, BadgeCheck, Headphones, Zap } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    { title: "Trusted Experts", icon: ShieldCheck },
    { title: "Best Property Deals", icon: Tag },
    { title: "Transparent Process", icon: Eye },
    { title: "Verified Listings", icon: BadgeCheck },
    { title: "Excellent Support", icon: Headphones },
    { title: "Fast Documentation", icon: Zap },
  ];

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E3A8A]/20 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border-t border-[#D4AF37]/50 rounded-xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
              <reason.icon className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="font-serif text-xl text-white">{reason.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
