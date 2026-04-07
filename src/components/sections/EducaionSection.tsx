import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "B.Tech Computer Science & Engineering",
    institute: "Lovely Professional University (LPU)",
    year: "Current",
    grade: "CGPA: 7.45",
    description:
      "Focusing on software engineering, data science and full-stack development, with an emphasis on building scalable and efficient applications.",
  },
  {
    title: "Intermediate (12th Grade)",
    institute: "Narayana Junior College, Hyderabad",
    year: "2023",
    grade: "Percentage: 97.5%",
    description:
      "Specialized in Mathematics, Physics, and Chemistry with strong academic performance.",
  },
  {
    title: "10th Grade",
    institute: "Telangana State Model School, Nekkonda",
    year: "2021",
    grade: "CGPA: 10.0",
    description:
      "Academic excellence with top grades across all subjects.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">

      {/* SAME BACKGROUND STYLE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="section-number">07.</span>
            My Education
          </h2>
        </FadeInLeft>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-primary/40" />

          {educationData.map((edu, index) => {
            const icons = [GraduationCap, School, BookOpen];
            const Icon = icons[index];

            return (
              <div
                key={index}
                className={`mb-16 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >

                {/* CARD */}
                <div className="w-full md:w-[45%] relative">

                  {/* PERFECTLY ALIGNED ICON */}
                  <div
                    className={`absolute top-6 ${
                      index % 2 === 0
                        ? "-right-13 md:-right-14"
                        : "-left-13 md:-left-14"
                    } w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.8)]`}
                  >
                    <Icon className="text-primary" size={18} />
                  </div>

                  <AnimatedCard
                    index={index}
                    hoverEffect="lift"
                    className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500"
                  >

                    {/* YEAR BADGE */}
                    <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {edu.year}
                    </span>

                    {/* TITLE */}
                    <h3 className="text-lg font-bold mb-2">
                      {edu.title}
                    </h3>

                    {/* INSTITUTE */}
                    <p className="text-primary text-sm mb-2">
                      {edu.institute}
                    </p>

                    {/* GRADE */}
                    <span className="inline-block mb-3 px-3 py-1 text-xs rounded-md bg-primary/10 text-primary">
                      {edu.grade}
                    </span>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>

                  </AnimatedCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};