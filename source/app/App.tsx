import { useState, useEffect } from 'react';
import { Github, Facebook, Music2, MessageCircle } from 'lucide-react';

export default function App() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'Backend Developer',
        'Frontend Developer',
        'UI.IX Designer',
        'SAMP Scripter',
    ];

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        if (!isDeleting && displayedText === currentRole) {
            setTimeout(() => setIsDeleting(true), pauseTime);
            return;
        }

        if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayedText(
                isDeleting
                    ? currentRole.substring(0, displayedText.length - 1)
                    : currentRole.substring(0, displayedText.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, roleIndex]);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Animated background */}
            <div className="fixed inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Header with gradient - glassmorphism */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gradient-to-r from-white/90 via-purple-300/90 to-violet-600/90 border-b border-white/20">
                <nav className="max-w-7x1 mx-auto flex justify-between items-center px-6 1g:px-12 py-5" stlye={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    <div className="text-black tracking-wider">Rapguide</div>
                    <ul className="flex gap-10">
                        <li>
                            <a href="#about" className="relative text-black/80 hover:text-violet-900 transition-colors group">About</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-900 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li>
                            <a href="#projects" className="relative text-black/80 hover:text-violet-900 transition-colors group">Projects</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-900 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li>
                            <a href="#contact" className="relative text-black/80 hover:text-violet-900 transition-all group">Contact</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-900 transition all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Seciton - Profile */}
            <section className="relative min-h-screen flex items-center justify-center px-6 1g:px-12 pt-20">
                <div className="max-w-6xl w-full relative z-10">
                    <div className="grid 1g:grid-cols-2 gap-12 items-center">
                        {/* Image Profile */}
                        <div className="flex justify-center 1g:justify-start">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative w-80 h-80 rounded-full border-4 border-violet-500/50 overflow-hidden bg-gradient-to-br from-violet-900/40 to-black flex items-center justify-center">
                                    <div className="text-9xl text-violet-500/30">👨‍💻</div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="space-y-6"></div>
                            <h1 className="mb-4 bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-transparent">Rashmir H. Gemoto</h1>
                            <div className="text-2xl lg:text-3xl text-violet-400 h-12 flex items-center">
                                <span>{displayedText}</span>
                                <span className="inline-block w-0.5 h-8 bg-violet-400 ml-1 animate-pulse"></span>
                            </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            I specialize in building scalable web applications, crafting intuitive user interfaces,
                            and developing engaging gaming experiences. With a passion for clean code and innovative
                            solutions, I bring ideas to life through technology.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group p-4 border border-violet-800/50 hover:border-violet-500 bg-violet-950/20 hover:bg-violet-900/30 transition-all hover:scale-110">
                                <Github className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
                            </a>
                            <a href="https://facebook.com/shojimizaki" target="_blank" rel="noopener noreferer" className="group p-4 border-violet-800/50 hover:border-violet-500 bg-violet-950/20 hover:bg-violet-900/30 transition-all hover:scale-110">
                                <Facebook className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
                            </a>
                            <a href="https://tiktok.com/" target="_blank" rel="noopener norefferer" className="group p-4 border-violet-800/50 hover:border-violet-500 bg-violet-950/20 hover:bg-violet-900/30 transition-all hover:scale-110">
                                <Music2 className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
                            </a>
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="group p-4 border border-violet-800/50 hover:border-violet-500 bg-violet-950/20 hover:bg-violet-900/30 transition-all hover:scale-110">
                                <MessageCircle className="w-6 h-6 text-violet-400 group-hover:text-violet-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 blur-3xl"></div>
                    <div className="relative aspect-square border border-violet-500/30 bg-gradient-to-br from-violet-900/20 to-black p-12 flex items-center justify-center">
                        <div className="w-full h-full border-2 border-violet-500/50 flex items-center justify-center">
                            <div className="text-8xl text-white-500/30">&lt;/&gt;</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="text-violet-400 text-sm tracking-widest">About Me</div>
                    <h2 className="text-white">Passionate About Clean Code & Professional Design</h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>I'm a developer who bridges the gap between design and functionality, creating elegant solutions that users love to interact with.</p>
                        <p>With expertise in modern web technologies, I focus on building responsive, accessible, and performant applications that make a difference.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6">
                        {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Next.js', 'GraphQL'].map((skill) => (
                            <div key={skill} className="px-4 py-3 bg-violet-900/20 border border-violet-700/30 text-blue-300 hover:border-violet-500 hover:bg-violet-900/30 transition-all">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32">
                <div className="max-w-7xl w-full">
                    <div className="text-center mb-20">
                        <div className="text-violet-400 text-sm tracking-widest mb-4">Featured Work</div>
                        <h2 className="text-white">Selected Projects</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Project Alpha", desc: "Real-time collaborative workspace", tech: "React • WebSocket" },
                            { title: "Project Beta", desc: "E-commerce platform", tech: "Next.js • Stripe" },
                            { title: "Project Gamma", desc: "Data visualization dashboard", tech: "D3.js • TypeScript" },
                            { title: "Project Delta", desc: "Mobile-first PWA", tech: "React • Service Workers" },
                            { title: "Project Epsilon", desc: "AI content management", tech: "OpenAI • Node.js" },
                            { title: "Project Zeta", desc: "Design system library", tech: "React • Storybook" }
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden border border-violet-800/50 bg-gradient-to-br from-violet-950/20 to-black hover:border-violet-500 transition-all duration-500 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                                <div className="relative p-8">
                                    <div className="aspect-video bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-black mb-6 flex items-center justify-center overflow-hidden">
                                        <div className="w-20 h-20 border-2 border-violet-500/50 rotate-45 group-hover:rotate-90 group-hover:scale-150 transition-all duration-700 ease-out"></div>
                                    </div>
                                    <h3 className="mb-3 text-violet-200 group-hover:text-white transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                                    <div className="text-xs text-violet-400/60">{project.tech}</div>
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-violet-400">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-32">
                <div className="max w-4xl w-full">
                    <div className="text-center mb-16">
                        <div className="text-violet-400 text-sm tracking-widest mb-4">Contact</div>
                        <h2 className="text-white mb-4">Let's Work Together</h2>
                        <span className="text-violet-500 group-hover:translate-x-1 transition-transform"></span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="mailto:gsendo412@gmail.com" className="group p-8 border border-violet-800/50 hover:border-violet-500">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-violet-300">Email</h3>
                                <span className="text-violet-500 group-hover:translate-x-1 transition:transform"></span>
                            </div>
                            <p className="text-gray-400">gsendo412@gmail.com</p>
                        </a>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="relative py-12 text-center text-gray-500 border-t border-violet-900/30">
                <p className="text-sm">© 2026 Portfolio Website. Created by Rap / Owner.</p>
            </footer>
        </div>
    );
}
