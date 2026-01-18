import { Target, Banknote, TrendingUp, Globe, Zap } from "lucide-react";

const WhyCourtify = () => {
  const highlights = [
    {
      icon: Target,
      title: "Sports-First Platform",
      stat: "Built for athletes, not generic bookings"
    },
    {
      icon: Banknote,
      title: "Pakistan-First",
      stat: "PKR payments & local pricing"
    },
    {
      icon: Zap,
      title: "Smart Matchmaking",
      stat: "AI-powered skill pairing"
    },
    {
      icon: Globe,
      title: "Unified Ecosystem",
      stat: "Players · Coaches · Venues"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      stat: "Multi-city · Multi-sport"
    }
  ];

  return (
    <section id="why" className="relative bg-[#06131f] text-white py-28 overflow-hidden">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-green-400 rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full mb-6">
                <span className="text-green-400 font-semibold text-sm tracking-wider">WHY WE'RE DIFFERENT</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Built For</span>
                <br />
                <span className="text-green-400">Sports. Built For</span>
                <br />
                <span className="text-white">Pakistan.</span>
              </h2>

              <div className="w-24 h-1 bg-green-400 mb-8" />

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Generic booking apps weren't made for the sports community. 
                <span className="text-white font-semibold"> Courtify is different.</span>
              </p>

              <p className="text-white/70 leading-relaxed">
                We understand the unique challenges of sports booking in Pakistan—from unreliable payment systems to the need for skill-based player matching. Our platform brings together players, coaches, and venue owners into one seamless ecosystem designed to scale across cities and sports.
              </p>
            </div>

            {/* CTA-style stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-1">100%</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Sports-Focused</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-1">3-in-1</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Platform</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-1">PKR</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Local First</div>
              </div>
            </div>
          </div>

          {/* Right: Visual Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-5">
                    {/* Icon */}
                    <div className="shrink-0 w-16 h-16 bg-green-400/10 rounded-xl flex items-center justify-center group-hover:bg-green-400/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-green-400" size={28} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="grow">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-green-400 text-sm font-medium">
                        {item.stat}
                      </p>
                    </div>

                  </div>

                  {/* Progress line */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyCourtify;