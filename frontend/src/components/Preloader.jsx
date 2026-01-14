import { useEffect, useState } from "react";

const Preloader = ({ duration = 2500, onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration, onFinish]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{ backgroundColor: "#06131f" }}
    >
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full opacity-20 animate-ping"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#22c55e",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animationDuration: "2s",
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: "600px",
            height: "600px",
            backgroundColor: "#22c55e",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>

      {/* LOGO + RINGS */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{ width: "360px", height: "360px" }}
      >
        {/* Outer ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: "360px",
            height: "360px",
            border: "4px solid rgba(34, 197, 94, 0.2)",
            borderTopColor: "#22c55e",
            borderRightColor: "#22c55e",
            animation: "spin 2s linear infinite",
          }}
        />

        {/* Inner ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: "320px",
            height: "320px",
            border: "3px solid rgba(34, 197, 94, 0.3)",
            borderBottomColor: "#22c55e",
            borderLeftColor: "#22c55e",
            animation: "spinReverse 1.5s linear infinite",
          }}
        />

        {/* Logo */}
        <img
          src="/ctfy-01.png"
          alt="Courtify Logo"
          className="object-contain"
          style={{
            width: "300px",
            height: "300px",
            filter:
              "drop-shadow(0 0 50px rgba(34, 197, 94, 0.9)) drop-shadow(0 0 25px rgba(34, 197, 94, 0.7))",
          }}
        />

        {/* Orbiting particles */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: "#22c55e",
              top: "50%",
              left: "50%",
              animation: "orbit 3s linear infinite",
              animationDelay: `${i * 0.75}s`,
              boxShadow: "0 0 10px rgba(34, 197, 94, 0.8)",
            }}
          />
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div className="flex flex-col items-center mt-14 z-10">
        <div
          className="w-72 h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              backgroundColor: "#22c55e",
              boxShadow: "0 0 15px rgba(34, 197, 94, 0.8)",
            }}
          />
        </div>

        <p className="text-base font-medium mt-4" style={{ color: "#22c55e" }}>
          {progress}%
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(160px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(160px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
