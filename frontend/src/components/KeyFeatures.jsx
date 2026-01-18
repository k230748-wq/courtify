import { Calendar, ShieldCheck, Users, Wallet, Zap } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Real-time Court Booking",
      description: "See live availability and book your favorite courts instantly"
    },
    {
      icon: ShieldCheck,
      title: "Verified Coaches & Venues",
      description: "Play with confidence at authenticated courts with certified coaches"
    },
    
    {
      icon: Wallet,
      title: "Secure Local Payments",
      description: "Pay safely in PKR with multiple trusted payment options"
    },
    {
      icon: Zap,
      title: "Multi-Sport Support",
      description: "From badminton to football, all your favorite sports in one app"
    }
  ];

  return (
    <section id="features" className="relative bg-[#06131f] text-white py-28 overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute right-16 top-32 grid grid-cols-5 gap-1.5 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-green-400 rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-center text-green-400 font-extrabold text-4xl md:text-5xl mb-20 tracking-wide">
          KEY FEATURES
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/40 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-green-400/10 rounded-xl flex items-center justify-center group-hover:bg-green-400/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-green-400" size={28} strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;