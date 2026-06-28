import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

type SearchForm = {
  type: string;
  location: string;
  budget: string;
  bedrooms: string;
};

export default function PropertySearch() {
  const { register, handleSubmit } = useForm<SearchForm>();
  const { toast } = useToast();

  const onSubmit = (data: SearchForm) => {
    toast({
      title: "Request Received",
      description: "We'll find your perfect property! Our team will contact you shortly.",
      duration: 5000,
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{ backgroundImage: 'radial-gradient(#CBD5E1 2px, transparent 2px)', backgroundSize: '30px 30px', backgroundColor: '#ffffff' }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] mb-4">Find Your Perfect Property</h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-2">Property Type</label>
                <select 
                  {...register("type")}
                  className="bg-[#F8FAFC] border border-gray-200 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-2">Location</label>
                <select 
                  {...register("location")}
                  className="bg-[#F8FAFC] border border-gray-200 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                >
                  <option value="aya-nagar">Aya Nagar</option>
                  <option value="south-delhi">South Delhi</option>
                  <option value="new-delhi">New Delhi</option>
                  <option value="dwarka">Dwarka</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-2">Budget</label>
                <select 
                  {...register("budget")}
                  className="bg-[#F8FAFC] border border-gray-200 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                >
                  <option value="under-50l">Under 50L</option>
                  <option value="50l-1cr">50L - 1Cr</option>
                  <option value="1cr-2cr">1Cr - 2Cr</option>
                  <option value="2cr-plus">2Cr+</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-2">Bedrooms</label>
                <select 
                  {...register("bedrooms")}
                  className="bg-[#F8FAFC] border border-gray-200 text-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                >
                  <option value="1bhk">1 BHK</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK+</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] text-white py-4 rounded-lg font-['Montserrat'] font-semibold text-lg tracking-wider uppercase hover:shadow-[0_0_20px_rgba(30,58,138,0.4)] transition-all hover:-translate-y-1"
              data-testid="button-search-properties"
            >
              Search Properties
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
