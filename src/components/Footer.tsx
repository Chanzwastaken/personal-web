import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            Chanz's Portfolio Projects
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Data is the new oil.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/Chanzwastaken" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/chandets/" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:chandraabdullah00@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
