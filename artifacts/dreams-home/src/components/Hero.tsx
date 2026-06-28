import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom right, rgba(15,23,42,0.80), rgba(15,23,42,0.50))",
        }}
      />

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p variants={itemVariants} className="text-[#D4AF37] font-medium tracking-[0.2em] mb-4 text-sm md:text-base uppercase">
            Luxury Homes &nbsp;•&nbsp; Apartments &nbsp;•&nbsp; Villas &nbsp;•&nbsp; Commercial Properties
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-lg"
          >
            Find Your <span className="italic font-light">Dream Home</span> Today
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(30, 58, 138, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#properties"
              className="w-full sm:w-auto bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] text-white px-8 py-4 rounded-sm font-['Montserrat'] font-semibold tracking-wide uppercase text-sm border border-white/10"
              data-testid="link-explore-properties"
            >
              Explore Properties
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto bg-transparent text-[#D4AF37] px-8 py-4 rounded-sm font-['Montserrat'] font-semibold tracking-wide uppercase text-sm border border-[#D4AF37]"
              data-testid="link-contact"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-1/4 left-[10%] z-20 backdrop-blur-md bg-[#0F172A]/40 border border-[#D4AF37]/50 rounded-lg px-6 py-4 items-center gap-3 shadow-xl"
      >
        <span className="text-3xl">⭐</span>
        <div>
          <p className="text-white font-serif text-xl font-bold">4.9</p>
          <p className="text-white/80 text-xs uppercase tracking-wider">Google Rating</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-1/3 right-[10%] z-20 backdrop-blur-md bg-[#0F172A]/40 border border-[#D4AF37]/50 rounded-lg px-6 py-4 items-center gap-3 shadow-xl"
      >
        <span className="text-3xl">🏆</span>
        <div>
          <p className="text-white font-serif text-xl font-bold">33+</p>
          <p className="text-white/80 text-xs uppercase tracking-wider">Happy Reviews</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        className="hidden md:flex absolute top-1/3 right-[15%] lg:right-[20%] z-20 backdrop-blur-md bg-[#0F172A]/40 border border-[#D4AF37]/50 rounded-lg px-6 py-4 items-center gap-3 shadow-xl"
      >
        <span className="text-3xl">🗝️</span>
        <div>
          <p className="text-white font-serif text-xl font-bold">100+</p>
          <p className="text-white/80 text-xs uppercase tracking-wider">Properties Sold</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
