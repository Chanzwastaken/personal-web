import SectionWrapper from "@/components/SectionWrapper";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
    return (
        <div>
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h1>
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
        </div>
    );
}
