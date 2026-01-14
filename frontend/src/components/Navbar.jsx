import { Mail } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div
                className="
                    flex items-center justify-between
                    w-[70vw] max-w-5xl
                    px-8 py-4
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    shadow-lg
                    text-white
                "
            >
                {/* Logo / Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                    ⚽
                </div>

                {/* Links */}
                <ul className="flex items-center justify-center flex-1 gap-24 text-large font-medium">
                    <li className="cursor-pointer hover:text-green-400 transition">Work</li>
                    <li className="cursor-pointer hover:text-green-400 transition">About</li>
                    <li className="cursor-pointer hover:text-green-400 transition">Playground</li>
                    <li className="cursor-pointer hover:text-green-400 transition">Resources</li>
                </ul>

                {/* Email pill */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-sm">
                    <Mail size={14} />
                    <span>courtify@gmail.com</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
