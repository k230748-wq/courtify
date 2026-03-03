import { useState } from 'react';
import { X, GraduationCap, CheckCircle2, XCircle } from 'lucide-react';

export default function CoachWaitlistModal({ onClose }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', sport: '',
    experience_years: '', city: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/coach-waitlist/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ success: true, message: data.message });
      } else {
        const msg = Object.values(data).flat().join(' ');
        setResult({ success: false, message: msg });
      }
    } catch {
      setResult({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all bg-white/10 border border-white/20";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-2xl shadow-2xl p-8 border border-white/20 overflow-y-auto max-h-[90vh]"
        style={{ backgroundColor: '#06131f' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center">
            <GraduationCap className="text-green-400" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Join as Coach</h2>
            <p className="text-white/50 text-sm">Get discovered by players on Courtify</p>
          </div>
        </div>

        {result ? (
          <div className="flex flex-col items-center text-center py-6">
            {result.success
              ? <CheckCircle2 className="text-green-400 mb-3" size={48} />
              : <XCircle className="text-red-400 mb-3" size={48} />}
            <p className={`text-lg font-semibold ${result.success ? 'text-green-400' : 'text-red-400'}`}>
              {result.success ? 'Application Received!' : 'Something went wrong'}
            </p>
            <p className="text-white/70 mt-2 mb-6">{result.message}</p>
            <button onClick={onClose} className="px-6 py-2 bg-green-400 text-[#06131f] font-bold rounded-lg hover:bg-green-500 transition-colors">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm mb-1">Your Name *</label>
                <input name="name" value={form.name} onChange={handle} required placeholder="Ahmed Khan" className={inputClass} />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">Phone *</label>
                <input name="phone" value={form.phone} onChange={handle} required placeholder="+92300..." className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">Email *</label>
              <input type="email" name="email" value={form.email} onChange={handle} required placeholder="you@example.com" className={inputClass} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm mb-1">Sport You Coach *</label>
                <input name="sport" value={form.sport} onChange={handle} required placeholder="e.g. Cricket, Football" className={inputClass} />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-1">City *</label>
                <input name="city" value={form.city} onChange={handle} required placeholder="Karachi" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">Years of Experience</label>
              <input type="number" name="experience_years" value={form.experience_years} onChange={handle} min="0" placeholder="e.g. 5" className={inputClass} />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-3 bg-green-400 hover:bg-green-500 text-[#06131f] font-bold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2">
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
