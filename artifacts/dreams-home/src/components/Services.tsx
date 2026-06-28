import { motion } from "framer-motion";
import { Home, Building, Building2, TreePine, FileText, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Residential Properties",
      description: "Find your perfect family home in prime neighborhoods.",
      icon: Home,
    },
    {
      title: "Commercial Properties",
      description: "Strategic locations for your business growth.",
      icon: Building,
    },
    {
      title: "Luxury Apartments",
      description: "Modern living spaces with premium amenities.",
      icon: Building2,
    },
    {
      title: "Premium Villas",
      description: "Exclusive estates with exceptional privacy and design.",
      icon: TreePine,
    },
    {
      title: "Property Documentation",
      description: "Hassle-free legal and registration services.",
      icon: FileText,
    },
    {
      title: "Investment Consultation",
      description: "Expert advice for high-yield real estate investments.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#0F172A] mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:border-t-4 hover:border-t-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0F172A] mb-3 group-hover:text-[#1E3A8A] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
