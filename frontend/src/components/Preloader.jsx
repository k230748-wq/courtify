import { useEffect } from "react";

const Preloader = ({ duration = 2500, onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <div className="fixed inset-0 bg-linear-to-r from-green-500 via-green-600 to-green-700 flex flex-col items-center justify-center z-50">
      
      {/* Website Name with pulse animation */}
      <h1 className="text-white text-5xl md:text-6xl font-extrabold animate-pulse">
        Courtify
      </h1>

      {/* Bouncing Dots */}
      <div className="flex space-x-3 mt-6">
        <span className="w-4 h-4 bg-white rounded-full animate-bounce"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-600"></span>
      </div>
    </div>
  );
};

export default Preloader;
