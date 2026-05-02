import { motion } from "motion/react";
import { useInView } from "motion/rect";
import { useRef } from "react";
import { Code2, Database } from "lucide-react";
import { LangaugeIcons } from "./LanguageIcons";

const programmingLanguages = [
  { name: "HTML", icon: "HTML" },
  { name: "CSS", icon: "CSS" },
  { name: "Javascript", icon: "Javascript" },
  { name: "PHP", icon: "PHP" },
  { name: "React", icon: "React" },
  { name: "Typescript", icon: "Typescript" },
  { name: "Lua", icon: "Lua" }
];

const database = [
  { name: "mySQL", icon: "mySQL" },
  { name: "phpMyAdmin", icon: "phpMyAdmin" },
];

export function SkillSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full" ref={ref}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }} transition={{ duration: 0.6 }} className="mb-8 text-center text-lg md:text-xl">Skills & Technologies</motion.h2>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-[var(--color-primary)]" />
            <h3 className="text-base md:text-lg">Programming Languages</h3>
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
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center hover:border-[var(--color-primary)] transition-colors flex flex-col items-center gap-2"
                >
                  <div className="scale-75">
                    <IconComponent />
                  </div>
                  <span className="text-sm">{lang.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 1.0 }}>
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-5 h-5 text-[var(--color-primary)]" />
            <h3 className="text-base md:text-lg">Database</h3>
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
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center hover:border-[var(--color-primary)] transition-colors flex flex-col items-center gap-2"
                >
                  <div className="scale-75">
                    <IconComponent />
                  </div>
                  <span className="text-sm">{db.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}