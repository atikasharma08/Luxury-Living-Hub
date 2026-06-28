import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square } from "lucide-react";

export default function Properties() {
  const properties = [
    {
      title: "Emerald Villa",
      price: "₹2.5 Crore",
      location: "South Delhi",
      type: "Villa",
      specs: [
        { icon: Bed, label: "4 Bed" },
        { icon: Bath, label: "3 Bath" },
        { icon: Square, label: "3200 sq.ft." },
      ],
      image: "/prop-1.png",
    },
    {
      title: "Skyline Heights",
      price: "₹85 Lakhs",
      location: "Aya Nagar, New Delhi",
      type: "Apartment",
      specs: [
        { icon: Bed, label: "2 Bed" },
        { icon: Bath, label: "2 Bath" },
        { icon: Square, label: "1150 sq.ft." },
      ],
      image: "/prop-2.png",
    },
    {
      title: "Prime Commercial Hub",
      price: "₹1.2 Crore",
      location: "Aya Nagar Main Rd",
      type: "Commercial",
      specs: [
        { icon: Bed, label: "0 Bed" },
        { icon: Bath, label: "1 Bath" },
        { icon: Square, label: "800 sq.ft." },
      ],
      image: "/prop-3.png",
    },
  ];

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#0F172A] mb-4">Featured Properties</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#0F172A]/90 backdrop-blur-sm px-4 py-1.5 rounded-sm border border-[#D4AF37]/50">
                  <span className="text-[#D4AF37] font-semibold text-xs tracking-wider uppercase">{prop.type}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-[#0F172A] font-bold group-hover:text-[#1E3A8A] transition-colors">{prop.title}</h3>
                  <span className="font-['Montserrat'] font-bold text-[#D4AF37] text-lg">{prop.price}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin size={16} className="mr-1.5 text-[#D4AF37]" />
                  <span className="text-sm">{prop.location}</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-6">
                  {prop.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <spec.icon size={18} className="mr-2 text-gray-400" />
                      <span className="text-sm font-medium">{spec.label}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] text-white py-3 rounded-sm font-['Montserrat'] font-semibold hover:shadow-lg transition-shadow uppercase text-sm tracking-wide" data-testid={`button-view-details-${idx}`}>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
