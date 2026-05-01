import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="about" className="min-h-screen flex items-center justfity-center px-6 py-20 bg-gray-900/50">
            <div className="max-w-4xl w-full" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-center text-lg md:text-xl"
                >
                    About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
                >
                    <h3 className="mb-4 text-base md:text-lg text-[var(--color-primary)]">Educational Background</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                        <p>
                            I have dedicated years to mastering the art of software development and design.
                            My journey in technology has been driven by a passion for creating innovative solutions
                            and delivering exceptional user experiences.
                        </p>
                        <p>
                            Throughout my studies, I have developed a strong foundation in both frontend and backend
                            technologies, allowing me to build full-stack applications that are both functional
                            and visually appealing.
                        </p>
                        <p>
                            My educational background has equipped me with the skills to tackle complex problems,
                            work collaboratively in teams, and continuously adapt to the ever-evolving landscape
                            of web development.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}