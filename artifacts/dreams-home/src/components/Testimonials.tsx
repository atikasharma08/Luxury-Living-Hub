import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Dreams Home helped us find our perfect home in Aya Nagar. Their team was professional and patient throughout the process.",
    author: "Rajesh Sharma",
    rating: 5,
  },
  {
    text: "Excellent service! They handled all documentation smoothly. Got a great deal on our commercial property.",
    author: "Priya Mehta",
    rating: 5,
  },
  {
    text: "Very knowledgeable team. They understood our budget and found us a beautiful apartment quickly.",
    author: "Amit Verma",
    rating: 5,
  },
  {
    text: "Trustworthy consultants. No hidden charges, complete transparency throughout the process.",
    author: "Sunita Kapoor",
    rating: 5,
  },
  {
    text: "Best real estate experience in Delhi! Dreams Home delivered beyond our expectations.",
    author: "Vikram Singh",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-serif text-4xl font-bold text-[#0F172A]">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-serif text-4xl font-bold text-[#0F172A]">/5</span>
          </div>
          <h2 className="font-serif text-3xl text-[#0F172A] mb-2">Google Rating</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">33 Verified Reviews</p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-2/3 lg:w-1/2 p-4"
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 relative">
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-amber-50" />
                  <div className="flex mb-6 relative z-10">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-8 relative z-10">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 relative z-10">
                    <span className="font-serif font-bold text-[#0F172A] text-lg">
                      {testimonials[currentIndex].author}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Google Review
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? "bg-[#D4AF37] w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
