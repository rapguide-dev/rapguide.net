import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

export function ContactSection() {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true, amount: 0.3 });
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        contact: ""
    });

    const handleSubmit = (e: Record.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your inquiry! I will get back to you soon.");
        setFormData({ name: "", subject: "", email: "", contact: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900/50">
      <div className="max-w-2xl w-full" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-lg md:text-xl"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-4"
        >
          <div>
            <label htmlFor="name" className="block mb-1.5 text-sm text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1.5 text-sm text-gray-300">Project/Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1.5 text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block mb-1.5 text-sm text-gray-300">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[var(--color-primary)] text-white py-2.5 px-5 text-sm rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Submit
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </div>
    </section>
    );
}