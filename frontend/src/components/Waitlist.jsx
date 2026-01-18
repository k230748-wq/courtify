import { useState } from 'react';

export default function WaitList() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

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
                {modalType === 'success' ? 'Success!' : 'Error'}
              </h3>
              
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {modalMessage}
              </p>
              
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