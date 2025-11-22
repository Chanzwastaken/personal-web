"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const categories = ["All", "AI Apps", "Data Analysis", "Data Visualization Dashboard", "Others"];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div>
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collection of my work ranging from web applications to data analysis projects.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                selectedCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        No projects found in this category.
                    </div>
                )}
            </SectionWrapper>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}
