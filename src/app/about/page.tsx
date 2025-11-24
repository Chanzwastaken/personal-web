import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { Code, Palette, Zap, Trophy, Award } from "lucide-react";
import TimelineSection from "@/components/TimelineSection";
import ScrollGesture from "@/components/ScrollGesture";
import CertificationCard from "@/components/CertificationCard";
import TechStack from "@/components/TechStack";
import { education } from "@/data/education";
import { organizations } from "@/data/organizations";
import { certifications } from "@/data/certifications";
import { achievements } from "@/data/achievements";

export default function AboutPage() {
    const categories = ["Languages", "Machine Learning", "Data Engineering", "Visualization"];

    // Transform data for TimelineSection
    const educationItems = education.map(edu => ({
        id: edu.id,
        title: edu.degree,
        subtitle: edu.institution,
        period: edu.period,
        description: edu.description,
        logo: edu.logo
    }));

    const organizationItems = organizations.map(org => ({
        id: org.id,
        title: org.role,
        subtitle: org.organization,
        period: org.period,
        description: org.description,
        logo: org.logo
    }));

    return (
        <div>
            <SectionWrapper className="min-h-screen flex flex-col justify-center relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10">
                            {/* Placeholder for user image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20" />
                            <Image
                                src="/self-pict.jpg"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                About <span className="text-primary">Me</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I’m a final-year Informatics Engineering student at Universitas Mercu Buana with a strong focus on Data Science and Artificial Intelligence. I enjoy turning data into clear insights through analytics, machine learning, and visualization using Python, Power BI, Tableau, and Excel.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                My academic projects and international exchange experiences have shaped my technical skills and broadened my perspective. I’m passionate about AI, problem-solving, and creating data-driven solutions that make a real impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <Palette className="text-blue-400 mb-3" size={24} />
                                <h3 className="font-bold mb-1">Data Viz</h3>
                                <p className="text-sm text-muted-foreground">
                                    Communicating insights through visualization.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <Code className="text-primary mb-3" size={24} />
                                <h3 className="font-bold mb-1">Machine Learning</h3>
                                <p className="text-sm text-muted-foreground">
                                    Building and deploying predictive models.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <Zap className="text-yellow-400 mb-3" size={24} />
                                <h3 className="font-bold mb-1">Artificial Intelligence</h3>
                                <p className="text-sm text-muted-foreground">
                                    Designing smart systems powered by AI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ScrollGesture />
                </div>
            </SectionWrapper>



            {/* Tech Stack Section */}
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tools and technologies I work with.
                    </p>
                </div>
                <TechStack />
            </SectionWrapper>

            {/* Education Section */}
            <SectionWrapper>
                <TimelineSection items={educationItems} title="Education" />
            </SectionWrapper>

            {/* Organizations Section */}
            <SectionWrapper className="bg-black/20">
                <TimelineSection items={organizationItems} title="Organizations" />
            </SectionWrapper>

            {/* Certifications Section */}
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Credentials and professional achievements.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <CertificationCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>
            </SectionWrapper>

            {/* Achievements Section */}
            <SectionWrapper className="bg-black/20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Achievements</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Honors and awards received.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
                                <Trophy size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                                <div className="text-primary font-medium mb-2">{achievement.issuer} • {achievement.date}</div>
                                <p className="text-muted-foreground text-sm">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
