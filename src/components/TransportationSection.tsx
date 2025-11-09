const TransportationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-success/10 to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Car Dependency Makes
            <span className="block">Your Commute</span>
            <span className="block text-destructive">WORSE</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-xl shadow-elevation border-l-4 border-muted">
              <p className="text-lg text-card-foreground mb-4">
                Ok, so you care about the environment, but you need some way to get around, right?
              </p>
              <p className="text-xl font-semibold text-foreground">
                Hate to break it to you, but car dependency is actually making your commute worse.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-xl shadow-elevation border-l-4 border-destructive">
              <h3 className="text-2xl font-bold text-destructive mb-3">Lowest Throughput</h3>
              <p className="text-card-foreground">
                Cars have the <strong>lowest throughput</strong> of any mode of transportation.
              </p>
              <div className="mt-3">
                <a href="#" className="text-sm text-destructive hover:underline">source</a>
              </div>
            </div>
            
          </div>
          
          <div className="space-y-6">
            <div className="p-8 bg-card rounded-2xl shadow-elevation">
              <h3 className="text-2xl font-bold text-foreground mb-6">Transportation Capacity Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg">
                  <span className="font-semibold">Single Car Lane</span>
                  <span className="text-2xl font-bold text-destructive">2,000/hour</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-warning/10 rounded-lg">
                  <span className="font-semibold">Bus Lane</span>
                  <span className="text-2xl font-bold text-warning">9,000/hour</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg">
                  <span className="font-semibold">Bike Lane</span>
                  <span className="text-2xl font-bold text-secondary">14,000/hour</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-success/20 rounded-lg">
                  <span className="font-semibold">Train/Metro</span>
                  <span className="text-2xl font-bold text-success">50,000+/hour</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                People moved per hour in the same amount of space
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationSection;