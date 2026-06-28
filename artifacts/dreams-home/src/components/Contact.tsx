import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
  const { toast } = useToast();

  const onSubmit = (data: ContactForm) => {
    toast({
      title: "Message Sent",
      description: "Message sent! We'll get back to you within 24 hours.",
      duration: 5000,
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#1E3A8A]/10 -skew-x-12 transform origin-top -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Phone className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h4 className="text-white font-serif text-xl mb-2">Phone</h4>
                <p className="text-gray-400 mb-4">09958757477</p>
                <a href="tel:09958757477" className="inline-block border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-colors font-['Montserrat'] text-xs font-semibold px-4 py-2 rounded-sm uppercase tracking-wider">
                  Call Now
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h4 className="text-white font-serif text-xl mb-2">Hours</h4>
                <p className="text-gray-400">Mon-Sat:<br/>10 AM - 7 PM</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-[#D4AF37] mb-4" />
              <h4 className="text-white font-serif text-xl mb-2">Address</h4>
              <p className="text-gray-400 mb-6">10 Arcade, Aya Nagar<br/>New Delhi, Delhi 110047</p>
              <div className="w-full h-[250px] rounded-lg overflow-hidden border border-white/10">
                <iframe 
                  src="https://maps.google.com/maps?q=10+Arcade+Aya+Nagar+New+Delhi&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Dreams Home Location"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
          >
            <h3 className="font-serif text-3xl text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-4 placeholder-white/40 focus:border-[#D4AF37] focus:outline-none focus:bg-white/15 transition-colors"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    {...register("phone", { required: "Phone is required" })}
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-4 placeholder-white/40 focus:border-[#D4AF37] focus:outline-none focus:bg-white/15 transition-colors"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-4 placeholder-white/40 focus:border-[#D4AF37] focus:outline-none focus:bg-white/15 transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <textarea 
                  placeholder="How can we help you?" 
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-4 placeholder-white/40 focus:border-[#D4AF37] focus:outline-none focus:bg-white/15 transition-colors resize-none"
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#D4AF37] text-white py-4 rounded-lg font-['Montserrat'] font-semibold text-lg tracking-wider uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-1"
                data-testid="button-submit-contact"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
