import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Impact />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
