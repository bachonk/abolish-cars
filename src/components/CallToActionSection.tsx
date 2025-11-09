import { Button } from "@/components/ui/button";
import stickers from "@/assets/stickers.png";

const CallToActionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to
          <span className="block text-success">Take Action?</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Join the movement to create safer, cleaner, more livable cities for everyone.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-warning">Support the Cause</h3>
            <p className="text-white/80 mb-6">
              Get merchandise to spread awareness and support organizations fighting car dependency.
            </p>
            <div className="mb-6">
              <img 
                src={stickers} 
                alt="Abolish Cars sticker design" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-3">
              <Button variant="warning" className="w-full" size="lg" asChild>
                <a href="https://ko-fi.com/s/11e21d6b8b" target="_blank" rel="noopener noreferrer">
                  Buy "Abolish Cars" Stickers
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-success">Learn More</h3>
            <p className="text-white/80 mb-6">
              Explore resources and connect with like-minded advocates working toward car-free cities.
            </p>
            <div className="space-y-3">
              <Button variant="success" className="w-full" size="lg">
                <a href="https://strongtowns.org/" target="_blank" rel="noopener noreferrer">
                Visit Strong Towns
                </a>
              </Button>
              <Button variant="success" className="w-full" size="lg">
                <a href="https://www.youtube.com/c/notjustbikes" target="_blank" rel="noopener noreferrer">
                Check Out Not Just Bikes
                </a>
              </Button>
              <Button variant="success" className="w-full" size="lg">
                <a href="https://www.reddit.com/r/fuckcars/" target="_blank" rel="noopener noreferrer">
                Join r/fuckcars Community
                </a>
              </Button>
            </div>
          </div>
          
        </div>
        
        {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold mb-4">Start in Your Community</h3>
          <p className="text-lg text-white/90 mb-6">
            Real change happens locally. Attend city council meetings, advocate for bike lanes, 
            support public transit funding, and vote for leaders who prioritize people over cars.
          </p>
          <Button variant="danger" size="lg" className="text-xl px-10 py-6">
            Find Local Advocacy Groups
          </Button>
        </div> */}
        
        <footer className="mt-16 pt-8 border-t border-white/20 text-white/60">
          <p className="text-sm">
            This website is a grassroots effort to raise awareness about the dangers of car dependency. 
            <br />
            All statistics and claims are backed by research and credible sources.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default CallToActionSection;