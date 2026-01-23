import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "problem", label: "The Problem" },
  { id: "why", label: "Why Courtify" },
  { id: "who", label: "Who It’s For" },
  { id: "how", label: "How It Works" },
  { id: "features", label: "Features" },
  { id: "waitlist", label: "Waitlist" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      <div className="relative flex items-center border border-green-200 px-6 py-4 rounded-full text-white text-sm bg-transparent backdrop-blur-md w-[90%] max-w-6xl">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer"
        >
          <img
            src="/ctfy-02.png"
            alt="Courtify"
            className="w-14 h-14 object-contain invert brightness-0"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 ml-8 flex-1 justify-center">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative overflow-hidden h-6 group transition
                ${
                  active === id
                    ? "text-green-400"
                    : "text-white hover:text-green-300"
                }
              `}
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {label}
              </span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden ml-6 md:flex items-center">
          
            <button
              onClick={() => scrollToSection("waitlist")}
              className="border border-green-600 hover:bg-white px-4 py-2 rounded-full transition hover:text-black"
            >
              JOIN WAITLIST
            </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden text-gray-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-24 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-5 py-6 md:hidden rounded-2xl">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-base transition ${
                  active === id
                    ? "text-green-400"
                    : "text-white hover:text-green-300"
                }`}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("waitlist")}
              className="border border-green-600 hover:bg-white px-4 py-2 rounded-full transition hover:text-black"
            >
              JOIN WAITLIST
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
