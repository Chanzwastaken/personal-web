"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden py-20 md:py-32">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground animate-fade-in">
                        Data Analyst & AI Engineer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Chandra's <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 animate-pulse-slow">
                            Portfolio Projects
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Welcome, Stranger!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                        <Link
                            href="/projects"
                            className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Featured Projects */}
            <SectionWrapper className="bg-black/20">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground">A selection of my recent work.</p>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        View All Projects <ArrowRight size={16} />
                    </Link>
                </div>
            </SectionWrapper>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}
