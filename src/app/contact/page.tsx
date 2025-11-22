import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div>
            <SectionWrapper>
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-card border border-white/10 rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">Email</h4>
                                        <a href="mailto:chandraabdullah00@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            chandraabdullah00@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">Location</h4>
                                        <p className="text-muted-foreground">
                                            Jakarta, Indonesia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-white/10 rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <ContactForm />
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
