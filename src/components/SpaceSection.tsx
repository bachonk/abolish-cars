import parkingImage from "@/assets/parking-spaces.jpg";

const SpaceSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/20 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Cars Take Up
            <span className="text-accent"> A LOT</span>
            <span className=""> of Space</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Like, a lot of space.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-6 text-lg">
              <div className="p-6 bg-card rounded-xl shadow-elevation border-accent">
                <h3 className="text-2xl font-bold text-accent mb-2">8 Parking Spots for Every Car</h3>
                <p className="text-card-foreground">
                  There are up to 8 parking spaces paved over for every car in the US.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.theguardian.com/us-news/2022/dec/26/us-cities-parking-lots-climate-walkability" className="text-sm text-warning hover:underline">source</a>
                </div>
              </div>
              
              <div className="p-6 bg-card rounded-xl shadow-elevation border-danger">
                <h3 className="text-2xl font-bold text-danger mb-2">More Parking Than Housing</h3>
                <p className="text-card-foreground">
                  In Los Angeles, there is more space dedicated to car parking than there is to housing.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.theguardian.com/us-news/2022/dec/26/us-cities-parking-lots-climate-walkability" className="text-sm text-warning hover:underline">source</a>
                </div>
              </div>
              
              <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl">
                <p className="text-xl">
                  In addition to being <strong className="text-destructive">ugly af</strong>, building all this parking adds <strong>25% to housing costs</strong>
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={parkingImage}
              alt="Aerial view of vast parking lots dominating urban landscape"
              className="w-full rounded-xl shadow-elevation"
            />
            {/* <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg">
              Wasted Space
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;