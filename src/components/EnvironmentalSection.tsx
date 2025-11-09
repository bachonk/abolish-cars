import pollutionImage from "@/assets/pollution-impact.jpg";

const EnvironmentalSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              src={pollutionImage}
              alt="City pollution and smog from car emissions showing environmental damage"
              className="w-full rounded-xl shadow-elevation"
            />
            {/* <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-4 py-2 rounded-full shadow-lg">
              <a href="" target="_blank">Source</a>
            </div> */}
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cars
              <span className="text-warning"> Pollute</span>
            </h2>
            
            <div className="space-y-6 text-lg">
              <div className="p-6 bg-card rounded-xl shadow-elevation border-warning">
                <h3 className="text-2xl font-bold text-warning mb-2">#1 Cause of Air Pollution</h3>
                <p className="text-card-foreground">
                  Personal cars are the <strong>#1 cause of transportation-related pollution</strong> globally.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.epa.gov/greenvehicles/fast-facts-transportation-greenhouse-gas-emissions" target="_blank" className="text-sm hover:underline">source</a>
                </div>
              </div>
              
              <div className="p-6 bg-card rounded-xl shadow-elevation border-destructive">
                <h3 className="text-2xl font-bold text-destructive mb-2">Even Electric Cars Pollute</h3>
                <p className="text-card-foreground">
                  <strong>Ultrafine particles</strong> and toxic emissions from vehicles make it a health hazard to be near roadways.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="https://health.howstuffworks.com/wellness/when-it-comes-to-air-pollution-tiniest-particles-might-be-worst.htm" target="_blank" className="text-sm hover:underline">source</a>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-danger text-danger-foreground rounded-xl shadow-glow-danger">
                <p className="font-bold text-lg">
                  Every mile driven contributes to air pollution that affects everyone, especially children and vulnerable populations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalSection;