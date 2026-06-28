import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "4.9", label: "Google Rating" },
    { value: "100+", label: "Properties Sold" },
  ];

  return (
    <div className="bg-[#0F172A] py-12 relative z-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-[#D4AF37] font-serif text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm md:text-base uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
