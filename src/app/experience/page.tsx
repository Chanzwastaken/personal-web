import SectionWrapper from "@/components/SectionWrapper";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
    return (
        <div>
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and career milestones.
                    </p>
                </div>

                <ExperienceTimeline experiences={experiences} />
            </SectionWrapper>
        </div>
    );
}
