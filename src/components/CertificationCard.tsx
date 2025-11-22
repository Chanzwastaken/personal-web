"use client";

import { motion } from "framer-motion";
import { Certification } from "@/types";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

interface CertificationCardProps {
    cert: Certification;
    index: number;
}

export default function CertificationCard({ cert, index }: CertificationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                    {cert.logo || cert.imageUrl ? (
                        <Image
                            src={cert.logo || cert.imageUrl || ""}
                            alt={cert.name}
                            fill
                            className="object-cover"
                            unoptimized={!!cert.logo}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary">
                            <Award size={32} />
                        </div>
                    )}
                </div>

                <div className="flex-1">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">
                        {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">{cert.date}</p>
                </div>

                {cert.url && (
                    <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        <ExternalLink size={16} />
                    </a>
                )}
            </div>
        </motion.div>
    );
}
