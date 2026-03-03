import { useState, useEffect } from 'react';

export default function WaitList() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/waitlist-count/`)
      .then((r) => r.json())
      .then((d) => setWaitlistCount(d.count))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/waitlist/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        setModalType('success');
        setModalMessage('Successfully joined the waitlist!');
        setShowModal(true);
        setEmail('');
        setPhone('');
        if (waitlistCount !== null) setWaitlistCount((c) => c + 1);
      } else {
        const error = await response.json();
        setModalType('error');
        setModalMessage(error.message || 'Failed to join waitlist');
        setShowModal(true);
      }
    } catch (err) {
      setModalType('error');
      setModalMessage('Network error. Please try again.');
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const shareText = encodeURIComponent('I just joined the Courtify waitlist! 🎾 Book sports courts & coaches near you. Join here:');
  const shareUrl = encodeURIComponent('https://courtify.pk');
  const whatsappLink = `https://wa.me/?text=${shareText}%20${shareUrl}`;

  return (
    <div id='waitlist' className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#06131f', color: '#ffffff' }}>
      <div className="w-full max-w-md">
        <div
          className="rounded-2xl shadow-2xl p-8 border"
          style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(255,255,255,0.2)',
          }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#22c55e' }}>Join Waitlist</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Be the first to know when we launch</p>
            {waitlistCount !== null && (
              <p className="mt-3 text-sm font-medium" style={{ color: '#22c55e' }}>
                🎾 Join {waitlistCount}+ people already on the waitlist
              </p>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  caretColor: '#22c55e',
                }}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  caretColor: '#22c55e',
                }}
                placeholder="+92xxxxxxxxxx"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                backgroundColor: '#22c55e',
                color: '#ffffff',
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Joining...
                </span>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </div>

          <p className="text-center text-sm mt-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={closeModal}
        >
          <div
            className="rounded-xl shadow-2xl p-6 max-w-sm w-full transform transition-all duration-300 scale-100"
            style={{
              backgroundColor: '#06131f',
              borderWidth: '2px',
              borderColor: modalType === 'success' ? '#22c55e' : '#ef4444',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: modalType === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                }}
              >
                {modalType === 'success' ? (
                  <svg className="w-8 h-8" style={{ color: '#22c55e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" style={{ color: '#ef4444' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: modalType === 'success' ? '#22c55e' : '#ef4444' }}
              >
                {modalType === 'success' ? "You're In!" : 'Error'}
              </h3>

              <p className="mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {modalMessage}
              </p>

              {modalType === 'success' && (
                <div className="w-full mb-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                  <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Know someone who plays sports? Share Courtify with them!
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Share on WhatsApp
                  </a>
                </div>
              )}

              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: modalType === 'success' ? '#22c55e' : '#ef4444',
                  color: '#ffffff',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
