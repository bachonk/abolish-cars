import { Button } from "@/components/ui/button";
import heroImage from "@/assets/houston.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Dangerous traffic scene representing car-related dangers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          ABOLISH CARS
        </h1>
        
        <div className="text-xl md:text-2xl text-white/90 mb-8">
          <p className="font-semibold">
            It's time to reduce our dependency on personal automobiles.
          </p>
        </div>
        
        <Button 
          size="lg" 
          variant="danger"
          className="text-lg px-8 py-6"
          onClick={() => {
            document.getElementById('safety-section')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          See the Facts Below
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;