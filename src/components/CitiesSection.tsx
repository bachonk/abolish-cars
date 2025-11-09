import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import milwaukee from "@/assets/milwaukee.png";
import cincinnati from "@/assets/cincinnati-2.png";
import atlanta from "@/assets/atlanta-2.png";


const CitiesSection = () => {
  const isMobile = useIsMobile();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      src: atlanta,
      alt: "Atlanta in the 1920s - beautiful, walkable, and human-centered",
      caption: "The same neighborhood in Atlanta before and after highways and car dependency"
     }, {
      src: cincinnati,
      alt: "Cincinnati in the 1920s - beautiful, walkable, and human-centered",
      caption: "The same street in Cincinnati before and after highways and car dependency"
    }, {
      src: milwaukee,
      alt: "Milwaukee in the 1920s - beautiful, walkable, and human-centered",
      caption: "The same street in Milwaukee before and after highways and car dependency"
    },
  ];

  // Cycle through images on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, carouselImages.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-destructive/5 to-muted/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          And all this has
          <span className="block text-destructive">destroyed our cities</span>
        </h2>
        
        {isMobile ? (
          // Mobile teaser with cycling images
          <div className="w-full mb-16">
            <div className="relative group cursor-pointer" onClick={() => window.open('https://www.instagram.com/p/CmcBrI-OF9_/?hl=en', '_blank')}>
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  className="w-full object-cover transition-all duration-1000 ease-in-out"
                  style={{ height: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-semibold mb-2">{carouselImages[currentImageIndex].caption}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-medium">Tap to see more on Instagram</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
                {/* Image indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Desktop carousel
          <Carousel className="w-full mb-16">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover rounded-lg shadow-lg"
                      style={{ height: '460px' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                      <p className="text-sm md:text-base font-medium">{image.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}

        {!isMobile && (
          <a 
            href="https://www.instagram.com/p/CmcBrI-OF9_/?hl=en" 
            className="inline-flex items-center text-destructive hover:text-destructive/80 font-semibold text-lg"
          >
            Explore: see what American cities used to look like →
          </a>
        )}
      </div>
    </section>
  );
};

export default CitiesSection;