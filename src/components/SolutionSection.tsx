import walkableStreetImage from "@/assets/walkable-street.jpg";

const SolutionSection = () => {
  return (
    <section 
      className="min-h-screen py-20 px-4 bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: `url(${walkableStreetImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-2xl">
          The Solution
        </h2>
        
        <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-xl">
          It's time to take back space for people, not cars.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;