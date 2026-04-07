import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Globe } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      {
        name: "Python",
        level: "Advanced",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C",
        level: "Intermediate",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "C++",
        level: "Intermediate",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Java",
        level: "Intermediate",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    icon: Brain,
    title: "Web Technologies",
    skills: [
      {
        name: "HTML",
        level: "Advanced",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        level: "Intermediate",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Flask",
        level: "Intermediate",
        iconUrl:
          "https://tse2.mm.bing.net/th/id/OIP.pelvrRMqLRe2X4Kxw0de0QHaJh?pid=Api&P=0&h=180",
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Tools & Platforms",
    skills: [
      {
        name: "Power BI",
        level: "Advanced",
        iconUrl: "https://img.icons8.com/color/48/power-bi.png",
      },
      {
        name: "MS Excel",
        level: "Advanced",
        iconUrl:
          "https://img.icons8.com/color/48/microsoft-excel-2019.png",
      },
      {
        name: "VMware",
        level: "Intermediate",
        iconUrl: "https://img.icons8.com/color/48/vmware.png",
      },
      {
        name: "Kail Linux",
        level: "Intermediate",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg",
      },
      {
        name: "Ubuntu",
        level: "Intermediate",
        iconUrl:
          "https://images.seeklogo.com/logo-png/50/1/ubuntu-logo-png_seeklogo-502363.png",
      },
      {
        name: "GitHub",
        level: "Advanced",
        iconUrl:
          "https://tse1.mm.bing.net/th/id/OIP.rIONbwiwOm_V37ef5VAyDwHaFj?pid=Api&P=0&h=180",
      },
    ],
  },
  {
    icon: Globe,
    title: "Soft Skills",
    skills: [
      { name: "Quick Learner", 
        level: "Advanced", 
        iconUrl: "https://img.freepik.com/premium-vector/fast-learning-logo-design-template_145155-4535.jpg"
      },
      { name: "Time Management", 
        level: "Advanced", 
        iconUrl: "https://img.freepik.com/premium-vector/time-management-vector-logo-template_825834-5486.jpg" 
      },
      { name: "Adaptability", 
        level: "Advanced", 
        iconUrl: "https://static.vecteezy.com/system/resources/previews/018/752/725/original/adaptability-icon-from-life-skills-collection-simple-line-adaptability-icon-for-templates-web-design-and-infographics-vector.jpg" 
      },
      { name: "Problem Solving", 
        level: "Advanced", 
        iconUrl: "https://static.vecteezy.com/system/resources/thumbnails/047/569/509/small_2x/problem-solving-flat-icon-colored-sign-from-machine-learning-collection-creative-problem-solving-icon-illustration-for-web-design-infographics-and-more-vector.jpg" 
      },
      { name: "Effective Communication", 
        level: "Advanced", 
        iconUrl: "https://cdn-icons-png.flaticon.com/512/11127/11127563.png" 
      },
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
                        {skill.iconUrl ? (
                          <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                            onError={(e) =>
                              (e.currentTarget.style.display = "none")
                            }
                          />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        )}

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