import { Search, CreditCard, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Find courts & coaches near you with live availability"
    },
    {
      icon: CreditCard,
      title: "Book & Pay",
      description: "Reserve instantly and pay securely in PKR"
    },
    {
      icon: Users,
      title: "Match & Play",
      description: "Connect with players and improve your game"
    }
  ];

  return (
    <section id="how" className="relative bg-[#06131f] text-white py-28 overflow-hidden">
      
      {/* Decorative dots */}
      <div className="absolute left-12 bottom-24 grid grid-cols-6 gap-1 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-green-400 rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-green-400 font-extrabold text-4xl md:text-5xl mb-20 tracking-wide">
          HOW IT WORKS
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center font-bold text-[#06131f] text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-green-400/10 rounded-full group-hover:bg-green-400/20 transition-colors duration-300">
                    <Icon className="text-green-400" size={48} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-4 text-white">
                  {step.title}
                </h3>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-green-400 mx-auto mb-6" />

                {/* Description */}
                <p className="text-white/80 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;