import { FadeInUp, FadeInLeft } from "@/components/animations/MotionWrapper";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">01.</span>
            About Me
          </h2>
        </FadeInLeft>

        <div className="max-w-4xl glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500">

          <FadeInUp delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              B.Tech CSE student at Lovely Professional University (3rd Year) specializing in Data Science, machine learning, and analytics. Experienced in building intelligent recommendation systems, AI-powered applications, and dynamic dashboards using Python, Power BI, and MS Excel to transform raw data into actionable insights.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {/*I’m actively seeking internship and placement opportunities where I can contribute to engineering teams and grow through real-world development.
              I value clean code, performance, and thoughtful product execution.*/}
              I'm actively seeking internship and placement opportunities in Data Science and Analytics roles to leverage analytical skills, drive data-informed decisions, and deliver measurable business impact.

            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
