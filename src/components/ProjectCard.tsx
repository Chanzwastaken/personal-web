"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-card rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => onClick(project)}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-white backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/5">
                            +{project.techStack.length - 3}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    View Details <ArrowUpRight size={16} />
                </div>
            </div>
        </motion.div>
    );
}
