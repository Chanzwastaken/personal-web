import { Organization } from "@/types";

export const organizations: Organization[] = [
    {
        id: "1",
        role: "GDSC Member",
        organization: "Google Developer Student Club",
        period: "Nov 2023 - Jan 2025",
        description: [
            "Engaged in GDSC activities, promoting Google developer tools and technology.",
            "Attended workshops and study jams, enhancing technical skills by 30%.",
            "Developed real-world solutions using Google technologies.",
            "Organized workshops, reaching 100+ community members and inspiring tech adoption."
        ],
        logo: "/gdsc.png"
    },
    {
        id: "2",
        role: "Debate Division",
        organization: "Mercu Buana English Club",
        period: "Oct 2023 - Nov 2024",
        description: [
            "Actively participated in the Mercu Buana English Club's Debate Division, competing in internal competition.",
            "Researched and prepared persuasive arguments on a wide range of topics, demonstrating critical thinking and effective communication skills",
            "Developed debate strategies and counter-arguments, improving team performance by 20%.",
            "Enhanced public speaking and communication skills through regular practice and feedback"
        ],
        logo: "/mbec.jpeg"
    }
];
