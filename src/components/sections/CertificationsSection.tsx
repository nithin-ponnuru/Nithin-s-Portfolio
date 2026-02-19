import { Award } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const certifications = [
  {
    title: "Infosys – Build Generative AI Apps and Solutions with No-Code Tools",
    link: "https://drive.google.com/file/d/1JgMAZDOdh0EDOBiYFYXi7cdGMaorq7Zj/view?usp=drive_link",
  },
  {
    title: "Infosys – ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    link: "https://drive.google.com/file/d/1A5cpP4Hq4v09bzGbfe8skT2qB0mrnGeR/view?usp=drive_link",
  },
  {
    title: "Infosys – Computational Theory: Language Principle & Finite Automata Theory",
    link: "https://drive.google.com/file/d/1lLCgRzm-9a7G8k73YGM7Mtb3gC_T7Qv6/view?usp=drive_link",
  },
  {
    title: "British Airways – Data Science Job Simulation",
    link: "https://drive.google.com/file/d/1vaEJX8j4tMiiHy34aUU1tIqFofZ7Snkw/view?usp=drive_link",
  },
  {
    title: "Delottie – Data Analytics Job Simulation",
    link: "https://drive.google.com/file/d/1ZD1ZfiDrh1PzYdCGu1Ryd1kySprjU6zE/view?usp=drive_link",
  },
  {
    title: "neo colab - Object Oriented Programming",
    link: "https://drive.google.com/file/d/1ev9KjT_yHoHkrPGO3S7CZKhpdqQfyl_y/view?usp=drive_link",
  },
  {
    title: "neo colab - Java Programming",
    link: "https://drive.google.com/file/d/1-JqwtqY40HTck-br85om5NRPRYQaCUhA/view?usp=drive_link",
  },
  {
    title: "LPU - AI & ML for Real-world Problem Solving",
    link: "https://drive.google.com/file/d/1ndXltRDsLQLWHYC09m711z0VeIr6YqDt/view?usp=drive_link",
  },
  {
    title: "TCS - GenAI Powered Data Analytics Job Simulation",
    link: "https://drive.google.com/file/d/1u4NS6ob0ZuCKxaFMMExl6DkgZQww7kC0/view?usp=drive_link",
  },
  {
    title: "TCS - Data Visualisation: Empowering Business with Effective Insights",
    link: "https://drive.google.com/file/d/1di8JzeeTq3M3ujZTAqv8DNpTIZFTkpli/view?usp=drive_link",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(0 0% 10% / 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">05.</span>
            Certifications
          </h2>
        </FadeInLeft>

        <div className="max-w-4xl">
          <AnimatedCard
            hoverEffect="lift"
            className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-primary" size={24} />
              </div>

              <ul className="flex-1 text-muted-foreground text-sm leading-relaxed space-y-3">
                {certifications.map((item) => (
                  <li key={item.title} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-300 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
