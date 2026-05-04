import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Palette, Server, Gamepad2 } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust server-side applications with modern frameworks and databases"
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with React and modern CSS"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences with attention to detail"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Crafting engaging SA-MP servers and custom game modes"
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-[var(--color-primary)]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 border border-purple-500/10 rounded-full"
        />
      </div>

      <div className="max-w-6xl w-full relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[var(--color-primary)]">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate developer with expertise across the full stack, dedicated to building
            exceptional digital products that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Educational Foundation</h3>
                <div className="h-0.5 w-16 bg-[var(--color-primary)] mb-4" />
              </div>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With years dedicated to mastering software development and design, I've built a solid
                foundation in creating innovative solutions that deliver exceptional user experiences.
              </p>
              <p>
                My education has equipped me with both frontend and backend expertise, enabling me to
                architect full-stack applications that are scalable, maintainable, and user-friendly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
                <div className="h-0.5 w-16 bg-[var(--color-primary)] mb-4" />
              </div>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My professional journey spans diverse domains of web development, from enterprise
                applications to creative digital experiences, always focusing on quality and impact.
              </p>
              <p>
                I bring a holistic approach to every project—combining technical excellence with design
                thinking to create solutions that are not just functional, but truly delightful to use.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-[var(--color-primary)]/50 transition-all group overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/20 transition-all"
                >
                  <item.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </motion.div>
                <h4 className="font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
