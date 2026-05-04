import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    contact: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! I will get back to you soon.");
    setFormData({ name: "", subject: "", email: "", contact: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900/30">
      <div className="max-w-2xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-[var(--color-primary)]">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-800/30 to-gray-800/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:bg-gray-900/70 transition-all"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Project/Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Web Development Project"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:bg-gray-900/70 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:bg-gray-900/70 transition-all"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-300">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:bg-gray-900/70 transition-all"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full bg-gradient-to-r from-[var(--color-primary)] to-purple-600 text-white py-4 px-8 rounded-xl flex items-center justify-center gap-3 font-medium hover:shadow-xl hover:shadow-[var(--color-primary)]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
