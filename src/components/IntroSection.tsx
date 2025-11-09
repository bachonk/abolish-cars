const IntroSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-12">
          We all deserve a 
          <span className="block text-primary">safe, convenient way</span>
          <span className="block text-foreground">to move around, but...</span>
        </h2>
        
        <div className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          <p>Let's start with the basics:</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;