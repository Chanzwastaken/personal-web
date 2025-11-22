"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Github, ExternalLink, Layers, Wrench } from "lucide-react";
import { Project } from "@/types";
import { useEffect } from "react";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-card w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl pointer-events-auto flex flex-col md:flex-row"
                        >
                            {/* Image Section */}
                            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors md:hidden"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-3 inline-block">
                                            {project.category}
                                        </span>
                                        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="hidden md:block p-2 rounded-full hover:bg-white/5 transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.longDescription || project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="flex items-center gap-2 font-bold mb-3 text-white">
                                            <Layers size={18} className="text-primary" />
                                            Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="flex items-center gap-2 font-bold mb-3 text-white">
                                            <Wrench size={18} className="text-primary" />
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm rounded-md bg-white/5 text-muted-foreground border border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-white/10">
                                        {project.links?.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                                            >
                                                <Github size={20} />
                                                View Source
                                            </a>
                                        )}
                                        {project.links?.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
