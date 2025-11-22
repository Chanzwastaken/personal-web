import SectionWrapper from "@/components/SectionWrapper";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function SkillsPage() {
    const categories = ["Languages", "Machine Learning", "Data Engineering", "Visualization"];

    return (
        <div>
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My technical toolkit and proficiency levels.
                    </p>
                </div>

                <div className="space-y-16">
                    {categories.map((category) => {
                        const categorySkills = skills.filter(s => s.category === category);
                        if (categorySkills.length === 0) return null;

                        return (
                            <div key={category}>
                                <h2 className="text-2xl font-bold mb-8 text-primary border-b border-white/10 pb-2 inline-block">
                                    {category}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categorySkills.map((skill, index) => (
                                        <SkillCard key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </SectionWrapper>
        </div>
    );
}
