"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/mkgerovy", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSent(true);
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setError(data["errors"].map((error: any) => error["message"]).join(", "));
                } else {
                    setError("Oops! There was a problem submitting your form");
                }
            }
        } catch (error) {
            setError("Oops! There was a problem submitting your form");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSent) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-green-500/30 rounded-xl p-8 text-center"
            >
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setIsSent(false)}
                    className="mt-6 text-primary hover:text-primary/80 font-medium"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Kendrick Lamar"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="bill@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                />
            </div>

            {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send size={20} />
                    </>
                )}
            </button>
        </form>
    );
}
