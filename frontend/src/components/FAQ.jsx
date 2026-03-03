import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Courtify?',
    answer: 'Courtify is a platform that lets you discover, book, and manage sports courts across Pakistan. Whether you play cricket, football, badminton, or any other sport, Courtify connects you with the best courts near you.',
  },
  {
    question: 'When will Courtify launch?',
    answer: 'We are working hard to launch as soon as possible. Join our waitlist to be the very first to know when we go live in your city and to secure early access.',
  },
  {
    question: 'Is Courtify free to use?',
    answer: 'Joining the waitlist is completely free. When we launch, booking courts will be straightforward with no hidden fees — you pay only for the court time you book.',
  },
  {
    question: 'Which cities will Courtify be available in?',
    answer: 'We are starting with major Pakistani cities including Karachi, Lahore, and Islamabad, with plans to expand across the country rapidly based on demand.',
  },
  {
    question: 'Can court owners list their courts on Courtify?',
    answer: 'Absolutely! Court owners can join our partner waitlist to list their facility, manage bookings, and increase utilization. Click "Join as Court Partner" above to get started.',
  },
  {
    question: 'Can coaches join Courtify?',
    answer: 'Yes! Coaches can create a verified profile on Courtify to get discovered by players, manage their sessions, and grow their client base. Click "Join as Coach" to sign up.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#06131f' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-white/60 text-lg">Everything you need to know about Courtify</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border transition-all duration-300"
              style={{
                borderColor: openIndex === i ? 'rgba(74,222,128,0.4)' : 'rgba(255,255,255,0.1)',
                backgroundColor: openIndex === i ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.03)',
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => toggle(i)}
              >
                <span className="text-white font-semibold text-base pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="shrink-0 transition-transform duration-300 text-green-400"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
