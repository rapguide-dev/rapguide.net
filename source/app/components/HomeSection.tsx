import { motion } from "motion/react";
import { Github, Facebook, MessageCircle, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypingAnimation } from "./TypingAnimation";

const roles = [
  "Backend Developer",
  "Frontend Developer",
  "UI/UX Designer",
  "SA-MP Scripter"
];

export function HomeSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-600 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-gray-700/50 relative group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Rash Mir - Full Stack Developer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Accent corner */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[var(--color-primary)]/50" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[var(--color-primary)]/50" />
          </div>
        </motion.div>

        {/* Info Section */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-3 font-medium"
              >
                Full Stack Developer
              </motion.p>
            </div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-300">Hi, I'm </span>
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-500 bg-clip-text text-transparent">
                Rash Mir
              </span>
            </h1>
          </motion.div>

          {/* Typing Animation for Roles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypingAnimation texts={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 leading-relaxed max-w-xl"
          >
            I craft exceptional digital experiences through elegant code and thoughtful design.
            Specializing in building scalable web applications and creating intuitive user interfaces
            that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[var(--color-primary)]/50 transition-shadow"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-6 border-t border-gray-800"
          >
            <p className="text-xs text-gray-500 mb-3">Connect with me</p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                {
                  icon: () => (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  ),
                  href: "https://tiktok.com",
                  label: "TikTok"
                },
                { icon: MessageCircle, href: "https://discord.com", label: "Discord" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.05 }}
                  className="p-2.5 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/50 hover:bg-gray-800/50 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
