import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import PropertySearch from "@/components/PropertySearch";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="font-sans antialiased text-[#0F172A] bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Properties />
      <WhyChoose />
      <Testimonials />
      <PropertySearch />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
