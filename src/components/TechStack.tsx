"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Image from "next/image";
import { Code } from "lucide-react";

export default function TechStack() {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                >
                    <div className="relative w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-125">
                        {skill.logo ? (
                            <Image
                                src={skill.logo}
                                alt={skill.name}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-primary">
                                <Code size={32} />
                            </div>
                        )}
                    </div>
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-primary bg-background/80 px-2 py-1 rounded border border-white/10 whitespace-nowrap z-10 pointer-events-none">
                        {skill.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
