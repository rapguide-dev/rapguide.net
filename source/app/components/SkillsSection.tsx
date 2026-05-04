import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database } from "lucide-react";
import { LanguageIcons } from "./LanguageIcons";

const programmingLanguages = [
  { name: "HTML", icon: "HTML" },
  { name: "CSS", icon: "CSS" },
  { name: "Javascript", icon: "Javascript" },
  { name: "PHP", icon: "PHP" },
  { name: "React", icon: "React" },
  { name: "Typescript", icon: "Typescript" },
  { name: "Lua", icon: "Lua" }
];

const databases = [
  { name: "mySQL", icon: "mySQL" },
  { name: "phpMyAdmin", icon: "phpMyAdmin" }
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900/30">
      <div className="max-w-5xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-[var(--color-primary)]">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The powerful tools and technologies I leverage to transform ideas into
            production-ready applications
          </p>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
              <Code2 className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              <p className="text-sm text-gray-500">Languages I use daily</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programmingLanguages.map((lang, index) => {
              const IconComponent = LanguageIcons[lang.icon as keyof typeof LanguageIcons];
              return (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center gap-4 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10"
                  >
                    <IconComponent />
                  </motion.div>
                  <span className="text-sm font-medium relative z-10 group-hover:text-[var(--color-primary)] transition-colors">{lang.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
              <Database className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Databases & Tools</h3>
              <p className="text-sm text-gray-500">Data management solutions</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {databases.map((db, index) => {
              const IconComponent = LanguageIcons[db.icon as keyof typeof LanguageIcons];
              return (
                <motion.div
                  key={db.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center gap-4 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10"
                  >
                    <IconComponent />
                  </motion.div>
                  <span className="text-sm font-medium relative z-10 group-hover:text-[var(--color-primary)] transition-colors">{db.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
