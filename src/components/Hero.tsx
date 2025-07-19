import { Button } from "@/components/ui/button";
import { Heart, Users, Database } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <Heart className="h-12 w-12 text-hope" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Fighting Hunger & Poverty
          <span className="block text-hope">in Rajasthan</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          We work on the ground and online, creating comprehensive databases of affected areas 
          and tracking government programs to bring hope and relief to those who need it most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Heart className="mr-2 h-5 w-5" />
            Support Our Mission
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
            <Database className="mr-2 h-5 w-5" />
            View Our Impact
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-hope mb-2">15,000+</div>
            <div className="text-sm opacity-90">Families Helped</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-hope mb-2">50+</div>
            <div className="text-sm opacity-90">Villages Reached</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-hope mb-2">24/7</div>
            <div className="text-sm opacity-90">Database Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;