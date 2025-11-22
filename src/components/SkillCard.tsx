"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";
import { Code, Database, Brain, Wrench } from "lucide-react";

interface SkillCardProps {
    skill: Skill;
    index: number;
}

const iconMap: Record<string, any> = {
    "Languages": Code,
    "Machine Learning": Brain,
    "Data Engineering": Database,
    "Visualization": Wrench,
};

export default function SkillCard({ skill, index }: SkillCardProps) {
    const Icon = iconMap[skill.category] || Code;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-12 h-12 flex items-center justify-center overflow-hidden relative">
                    {skill.logo ? (
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                        />
                    ) : (
                        <Icon size={24} />
                    )}
                </div>
                <div>
                    <h3 className="font-bold text-white">{skill.name}</h3>
                    <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
            </div>
        </motion.div>
    );
}
