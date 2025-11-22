"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Calendar, Building2 } from "lucide-react";

interface TimelineItem {
    id: string;
    title: string;
    subtitle: string;
    period: string;
    description?: string | string[];
    logo?: string;
}

interface TimelineSectionProps {
    items: TimelineItem[];
    title: string;
}

export default function TimelineSection({ items, title }: TimelineSectionProps) {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary border-b border-white/10 pb-2 inline-block mb-4">
                {title}
            </h3>
            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-8 pb-4">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between mb-4">
                                <div className="flex items-start gap-4">
                                    {item.logo ? (
                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white/10">
                                            <Image
                                                src={item.logo}
                                                alt={item.subtitle}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                            <Building2 size={24} />
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                        <div className="text-primary font-medium">{item.subtitle}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full self-start">
                                    <Calendar size={14} />
                                    <span>{item.period}</span>
                                </div>
                            </div>
                            {item.description && (
                                <div className="text-muted-foreground leading-relaxed">
                                    {Array.isArray(item.description) ? (
                                        <ul className="list-disc list-inside space-y-1">
                                            {item.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.description}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
