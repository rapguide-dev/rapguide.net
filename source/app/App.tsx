import { Navigation } from "./components/Navigation";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <Navigation />
      <main className="pt-16">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[var(--color-primary)] to-purple-500 bg-clip-text text-transparent">
                Rapguide.net
              </h3>
              <p className="text-sm text-gray-400">
                Building digital experiences that matter
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#home" className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors">Home</a>
              <a href="#about" className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors">Skills</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Rash Mir. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}