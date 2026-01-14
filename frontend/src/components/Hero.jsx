import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <p className="text-green-400 font-bold text-5xl mb-4 tracking-wide">
          FREE APP
        </p>

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          FOR YOUNG FOOTBALL PLAYERS
        </h1>

        <p className="text-white/90 mt-6 text-lg">
          Join the team of winners and <br />
          show your talent to the world!
        </p>

        {/* Scroll button */}
        <div className="mt-16 flex justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center animate-bounce cursor-pointer">
            <ArrowDown className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
