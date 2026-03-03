import { useState } from "react";
import { Building2, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import CourtWaitlistModal from "./CourtWaitlistModal";
import CoachWaitlistModal from "./CoachWaitlistModal";

const ForVendorsCTA = () => {
  const [showCourtModal, setShowCourtModal] = useState(false);
  const [showCoachModal, setShowCoachModal] = useState(false);
  const courtOwnerBenefits = [
    "Manage bookings effortlessly",
    "Increase utilization rates",
    "Earn more with less hassle"
  ];

  const coachBenefits = [
    "Get discovered by players",
    "Manage sessions & earnings",
    "Verified coach profile"
  ];

  return (
    <section className="relative bg-[#06131f] text-white py-28 overflow-hidden">
      
      {/* Abstract geometric shapes */}
      <div className="absolute top-20 left-0 w-96 h-96 border-l-4 border-t-4 border-green-400/20 transform -rotate-12" />
      <div className="absolute bottom-20 right-0 w-80 h-80 border-r-4 border-b-4 border-green-400/20 transform rotate-12" />
      
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-linear(45deg, transparent, transparent 35px, #10b981 35px, #10b981 37px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-white">Join Our</span>
            <br />
            <span className="text-green-400">Growing Network</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-1 bg-green-400" />
            <p className="text-white/60 text-lg">Grow your business with Courtify</p>
            <div className="w-16 h-1 bg-green-400" />
          </div>
        </div>

        {/* Two Column CTAs */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Court Owners Card */}
          <div className="group relative">
            {/* Accent border on top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-green-400 via-emerald-400 to-green-400" />
            
            <div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-10 hover:border-green-400/30 transition-all duration-500 h-full flex flex-col">
              
              {/* Icon with background shape */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-400/10 blur-2xl rounded-full" />
                <div className="relative w-20 h-20 bg-linear-to-br from-green-400/20 to-green-400/5 rounded-2xl flex items-center justify-center border border-green-400/20">
                  <Building2 className="text-green-400" size={40} strokeWidth={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-extrabold mb-3 text-white">
                Own a Court?
              </h3>
              
              <div className="w-20 h-1 bg-green-400 mb-6" />

              {/* Benefits List */}
              <ul className="space-y-4 mb-8 grow">
                {courtOwnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={20} strokeWidth={2.5} />
                    <span className="text-white/80 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button onClick={() => setShowCourtModal(true)} className="group/btn w-full bg-green-400 hover:bg-green-500 text-[#06131f] font-bold py-5 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/50 hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-lg">Join as Court Partner</span>
                <ArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Coaches Card */}
          <div className="group relative">
            {/* Accent border on top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-green-400 via-teal-400 to-green-400" />
            
            <div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-10 hover:border-green-400/30 transition-all duration-500 h-full flex flex-col">
              
              {/* Icon with background shape */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-400/10 blur-2xl rounded-full" />
                <div className="relative w-20 h-20 bg-linear-to-br from-green-400/20 to-green-400/5 rounded-2xl flex items-center justify-center border border-green-400/20">
                  <GraduationCap className="text-green-400" size={40} strokeWidth={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-extrabold mb-3 text-white">
                Are You a Coach?
              </h3>
              
              <div className="w-20 h-1 bg-green-400 mb-6" />

              {/* Benefits List */}
              <ul className="space-y-4 mb-8 grow">
                {coachBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={20} strokeWidth={2.5} />
                    <span className="text-white/80 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button onClick={() => setShowCoachModal(true)} className="group/btn w-full bg-green-400 hover:bg-green-500 text-[#06131f] font-bold py-5 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/50 hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-lg">Join as Coach</span>
                <ArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom accent text */}
        <div className="text-center mt-12">
          <p className="text-white/50 text-sm">
            Join hundreds of partners already growing with Courtify
          </p>
        </div>
      </div>

      {showCourtModal && <CourtWaitlistModal onClose={() => setShowCourtModal(false)} />}
      {showCoachModal && <CoachWaitlistModal onClose={() => setShowCoachModal(false)} />}
    </section>
  );
};

export default ForVendorsCTA