import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold bg-gradient-to-r from-[var(--color-primary)] to-purple-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection("#home")}
        >
          Rapguide.net
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? "text-[var(--color-primary)]"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
