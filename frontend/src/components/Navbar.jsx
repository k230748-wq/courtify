import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

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
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
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
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center justify-between
          w-[80vw] max-w-6xl
          px-6 py-2
          rounded-full
          bg-white/10
          backdrop-blur-md
          border border-white/20
          shadow-lg
          text-white
        "
      >
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/ctfy-02.png"
            alt="Courtify logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Links */}
        <ul className="flex items-center justify-center flex-1 gap-10 text-sm font-medium">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                cursor-pointer transition
                ${
                  active === id
                    ? "text-green-400"
                    : "text-white hover:text-green-300"
                }
              `}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Email pill */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 text-sm">
          <Mail size={14} />
          <span>courtify@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
