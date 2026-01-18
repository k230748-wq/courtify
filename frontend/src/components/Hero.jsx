import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl">
        <p className="text-green-400 font-bold text-xl md:text-3xl mb-6 tracking-widest uppercase">
          Pakistan's Sports Booking Ecosystem
        </p>

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Book Courts. Find Players. Play Smarter.
        </h1>

        <p className="text-white/90 mt-6 text-lg md:text-xl">
          Real-time court bookings, verified coaches, skill-based matchmaking, and secure PKR payments—all in one platform built for Pakistani sports lovers.
        </p>

        {/* Scroll button */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={scrollToNextSection}
            className="group w-14 h-14 rounded-full border-2 border-white/60 hover:border-green-400 flex items-center justify-center animate-bounce hover:animate-none cursor-pointer transition-all duration-300 hover:bg-green-400/10"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="text-white group-hover:text-green-400 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;