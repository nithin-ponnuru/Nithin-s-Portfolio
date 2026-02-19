import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Globe } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    icon: Brain,
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
    ],
  },
  {
    icon: BarChart3,
    title: "Tools & Platforms",
    skills: [
      { name: "Power BI", level: "Advanced" },
      { name: "MS Excel", level: "Advanced" },
      { name: "VMware", level: "Intermediate" },
      { name: "Ubuntu", level: "Intermediate" },
      { name: "Kali Linux", level: "Beginner" },
      { name: "GitHub", level: "Advanced" },
    ],
  },
  {
    icon: Globe,
    title: "Soft Skills",
    skills: [
      { name: "Team Player", level: "Advanced" },
      { name: "Time Management", level: "Advanced" },
      { name: "Adaptability", level: "Advanced" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Effective Communication", level: "Advanced" },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">04.</span>
            Skills & Technologies
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard
              key={category.title}
              index={index}
              hoverEffect="lift"
              className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-secondary" size={24} />
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const levelColor =
                    skill.level === "Advanced"
                      ? "text-primary"
                      : skill.level === "Intermediate"
                      ? "text-secondary"
                      : "text-accent";

                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-muted/30 border border-border/30 transition-all hover:bg-primary/10 hover:border-primary/30"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + skillIndex * 0.05 + 0.3,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-semibold ${levelColor}`}
                      >
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
