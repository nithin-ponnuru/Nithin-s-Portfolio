import { Trophy, Star } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const achievements = [
  {
    icon: Trophy,
    title: "Telangana State Science Fair Awardee",
    detail:
      "Selected at State-Level Science Fair (10th Standard) and awarded ₹10,000 prize money by Telangana State Government for innovative project presentation.",
  },
  {
    icon: Star,
    title: "Hackathon Final Round Qualifier",
    detail:
      "Selected for the Final Round in B.Tech 1st Year Hackathon, competing among top-performing teams.",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
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
            <span className="section-number">06.</span>
            Achievements
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <AnimatedCard
              key={item.title}
              index={index}
              hoverEffect="lift"
              className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-accent" size={24} />
                </div>

                <div className="flex flex-col">
                  <span className="text-foreground font-semibold text-lg">
                    {item.title}
                  </span>
                  <span className="text-muted-foreground text-sm mt-1">
                    {item.detail}
                  </span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
