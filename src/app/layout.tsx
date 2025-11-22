import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chandra's Portfolio Projects",
    description: "Showcase of my projects and skills",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <Background />
                <Navbar />
                <main className="min-h-screen pt-16">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
