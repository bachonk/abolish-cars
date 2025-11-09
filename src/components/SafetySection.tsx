import deathStatsImage from "@/assets/car-crash.png";

const SafetySection = () => {
  return (
    <section id="safety-section" className="py-20 px-4 bg-gradient-to-br from-danger/10 to-warning/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cars Are
              <span className="text-danger"> Deadly</span>
            </h2>
            
            <div className="space-y-6 text-lg">
              <div className="p-6 bg-card rounded-xl shadow-elevation border-danger">
                <h3 className="text-2xl font-bold text-danger mb-2">1.3 Million Deaths Per Year</h3>
                <p className="text-card-foreground">
                  Cars kill 1.3 million people every year, including over 40,000 in the US alone.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.cdc.gov/transportation-safety/global/" target="_blank" className="text-sm hover:underline">source</a>
                </div>
              </div>
              
              <div className="p-6 bg-card rounded-xl shadow-elevation border-danger">
                <h3 className="text-2xl font-bold text-warning mb-2">#1 Cause of Death in Children</h3>
                <p className="text-card-foreground">
                  They are the #1 cause of death for children in most nations – except in the US, where gun deaths are #1. Yikes.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.kff.org/global-health-policy/issue-brief/child-and-teen-firearm-mortality-in-the-u-s-and-peer-countries/" target="_blank" className="text-sm hover:underline">source</a>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl shadow-elevation border-danger">
                <h3 className="text-2xl font-bold text-danger mb-2">Most Dangerous Mode of Transportation</h3>
                <p className="text-card-foreground">
                  Cars are the most dangerous mode of transportation per passenger mile traveled.
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.washingtonpost.com/news/wonk/wp/2015/05/14/the-safest-and-deadliest-ways-to-travel/" target="_blank" className="text-sm hover:underline">source</a>
                </div>
              </div>
              
              {/* <div className="p-6 bg-muted rounded-xl">
                <p className="text-foreground font-semibold">
                  Cars are the <strong>single deadliest way</strong> to get around, both for you and the people around you
                </p>
              </div> */}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={deathStatsImage}
              alt="Statistical chart showing car accident death rates and safety data"
              className="w-full rounded-xl shadow-glow-danger"
            />
            {/* <div className="absolute -top-4 -right-4 bg-primary text-danger-foreground px-4 py-2 rounded-full shadow-lg">
              <a href="https://www.cdc.gov/transportation-safety/global/" target="_blank">Source</a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;