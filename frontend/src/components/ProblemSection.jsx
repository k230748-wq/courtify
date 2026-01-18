import { X, Check } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "WhatsApp & phone-call bookings",
    "Double bookings & no live availability",
    "No verified coaches or venues",
    "Cash-only payments",
  ];

  const solutions = [
    "Real-time slot availability",
    "Verified courts & coaches",
    "Instant online payments (PKR-first)",
    "One app for players, coaches & owners"
  ];

  return (
    <section id="problem" className="relative bg-[#06131f] text-white py-28 overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute right-12 top-24 grid grid-cols-6 gap-1 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-green-400 rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-green-400 font-extrabold text-4xl md:text-5xl mb-20 tracking-wide">
          THE PROBLEM & OUR SOLUTION
        </h2>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left: Current Problems */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <X className="text-red-500" size={32} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-white">CURRENT PROBLEMS</h3>
            </div>
            
            <div className="space-y-5">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 group"
                >
                  <X className="text-red-500 mt-1 shrink-0 group-hover:scale-110 transition-transform duration-200" size={20} />
                  <p className="text-white/80 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Courtify Solutions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Check className="text-green-400" size={32} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-white">WITH COURTIFY</h3>
            </div>
            
            <div className="space-y-5">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 group"
                >
                  <Check className="text-green-400 mt-1 shrink-0 group-hover:scale-110 transition-transform duration-200" size={20} />
                  <p className="text-white/80 leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;