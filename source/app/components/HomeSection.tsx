import { motion } from "motion/react";
import { Github, Facebook, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Github, Facebook, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypingAnimation } from "./TypingAnimation";

const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "UI/IX Designer",
    "SA-MP Scripter",
];

export function HomeSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
            [/* Film strip animation background */]
            <div className="absolute inset-0 opacity-5">
                <motion.div animate={{ y: [0, -100, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute left-10 top-0 w-16 h-full border-x-4 border-gray-600">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="h-20 border-b-4 border-gray-600" />
                    ))}
                </motion.div>
                <motion.div animate={{ y: [0, 100, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute right-10 top-0 w-16 h-full border-x-4 border-gray-600">
                    {[...Array(20)].map((_, i) => {
                        <div key={i} className="h-20 border-b-4 border-gray-600" />
                    })}
                </motion.div>
            </div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/50">
                        <ImageWithFallback src="public/images/icon.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Info Section */}
                <div className="space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <h1 className="mb-4 text-xl md:text-2xl">
                            <span className="text-gray-300">I am</span>
                            <span className="text-[var(--color-primary)]">Rash Mir</span>
                        </h1>
                    </motion.div>

                    {/* Typing Animation For Roles */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="flex gap-4 pt-6">
                        <a href="" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-[var(--color-primary)] transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-[var(--color-primary)] transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-[var(--color-primary)] transiiton-colors">
                            <MessageCircle className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
