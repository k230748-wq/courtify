import { Users, MapPin, Trophy } from "lucide-react";

const WhoIsItFor = () => {
  return (
    <section id="who" className="relative bg-[#06131f] text-white py-28 overflow-hidden">
      
      {/* Decorative dots */}
      <div className="absolute left-12 top-24 grid grid-cols-6 gap-1 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-green-400 rounded-full" />
        ))}
      </div>

      {/* Chalk arrows (decorative) */}
      <div className="absolute right-24 top-20 text-white/80 text-6xl rotate-6">
        ⤴︎
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-green-400 font-extrabold text-4xl md:text-5xl mb-20 tracking-wide">
          WHO IS THE APP FOR
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-16 text-center">

          {/* Players */}
          <div>
            <Users className="mx-auto mb-6 text-green-400" size={36} />
            <h3 className="text-2xl font-bold mb-3">PLAYERS</h3>
            <div className="w-12 h-0.5 bg-green-400 mx-auto mb-6" />
            <p className="text-white/80 leading-relaxed text-sm">
              Show your skills, training sessions, matches, and progress.
              Build your profile, connect with other players, and get noticed
              for what you love doing on the court.
            </p>
          </div>

          {/* Court Owners */}
          <div>
            <MapPin className="mx-auto mb-6 text-green-400" size={36} />
            <h3 className="text-2xl font-bold mb-3">COURT OWNERS</h3>
            <div className="w-12 h-0.5 bg-green-400 mx-auto mb-6" />
            <p className="text-white/80 leading-relaxed text-sm">
              Showcase your courts, manage availability, and connect with
              players and coaches. Grow your bookings and build a strong
              local sports community.
            </p>
          </div>

          {/* Coaches */}
          <div>
            <Trophy className="mx-auto mb-6 text-green-400" size={36} />
            <h3 className="text-2xl font-bold mb-3">COACHES</h3>
            <div className="w-12 h-0.5 bg-green-400 mx-auto mb-6" />
            <p className="text-white/80 leading-relaxed text-sm">
              Share your expertise, training programs, and success stories.
              Discover talent, guide players, and establish yourself as a
              trusted professional coach.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
