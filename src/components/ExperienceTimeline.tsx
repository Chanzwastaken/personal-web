"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";
import { Briefcase } from "lucide-react";

interface ExperienceTimelineProps {
    experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
    return (
        <div className="relative space-y-12 pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent -translate-x-1/2 md:translate-x-0" />

            {experiences.map((exp, index) => (
                <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 md:translate-x-1/2 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                    {/* Content */}
                    <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                        <div className={`bg-card border border-white/10 p-6 rounded-xl hover:border-primary/30 transition-colors ${index % 2 === 0 ? "md:mr-12" : "md:ml-12 md:text-left"
                            }`}>
                            <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row"
                                }`}>
                                {exp.logo && (
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5 shrink-0 border border-white/10">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                        }`}>
                                        <Briefcase size={16} className="text-primary" />
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <h4 className="text-lg text-muted-foreground">{exp.company}</h4>
                                </div>
                            </div>
                            <div className="text-muted-foreground text-sm leading-relaxed">
                                {Array.isArray(exp.description) ? (
                                    <ul className="list-disc list-inside space-y-1">
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{exp.description}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Empty space for the other side */}
                    <div className="hidden md:block w-1/2" />
                </motion.div>
            ))}
        </div>
    );
}
