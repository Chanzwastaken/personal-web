"use client";

import { motion } from "framer-motion";
import { coreSkills } from "@/data/core-skills";
import { useEffect, useState } from "react";

export default function WordCloud() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-white/5 rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10" />
            <div className="flex flex-wrap justify-center items-center gap-4 p-8 max-w-4xl">
                {coreSkills.map((skill, index) => {
                    // Map value (0-100) to font size (16px-64px)
                    const fontSize = 16 + (skill.value - 50) * 1;
                    const opacity = 0.5 + (skill.value / 200);

                    return (
                        <motion.span
                            key={skill.text}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: opacity, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.1,
                                opacity: 1,
                                color: "#2dd4bf", // teal-400
                                textShadow: "0 0 20px rgba(45, 212, 191, 0.6)",
                                zIndex: 50
                            }}
                            className="cursor-pointer font-bold text-white/80 transition-colors relative inline-block m-2"
                            style={{ fontSize: `${fontSize}px`, lineHeight: 1.2 }}
                        >
                            {skill.text}
                        </motion.span>
                    );
                })}
            </div>
        </div>
    );
}
