import { Award } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const certifications = [
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    provider: "Oracle",
    link: "https://drive.google.com/file/d/1XXLjFTuGTq_AJtzZfNdo1_o5hWweeJk_/view?usp=drive_link",
    image: "/oracle dbms.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    provider: "Oracle",
    link: "https://drive.google.com/file/d/1-DQX8f02o9gubMkaVp-usjwGJDvxqhKZ/view?usp=drive_link",
    image: "/oracle ai.png",
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    provider: "Infosys",
    link: "https://drive.google.com/file/d/1A5cpP4Hq4v09bzGbfe8skT2qB0mrnGeR/view?usp=drive_link",
    image: "/infosys.png",
  },
  {
    title: "Data Visualisation: – Empowering Business with Effective Insights",
    provider: "TCS",
    link: "https://drive.google.com/file/d/1UVDAw1vfRuS5ZFVutzFp67IBSl7bZ08u/view?usp=drive_link",
    image: "/tcs.png",
  },
  {
    title: "Deloitte – Data Analytics",
    provider: "Deloitte",
    link: "https://drive.google.com/file/d/1Um-Ma46cRF3AGPYsSqxVZ5LTlHSx06tE/view?usp=drive_link",
    image: "/deloitte.png",
  },
  {
    title: "Data Structures and Algorithm",
    provider: "neocolab",
    link: "https://drive.google.com/file/d/1sP4JrOrI9CzhA_zPm2tRBG_RbwJys6Ip/view?usp=drive_link",
    image: "/dsa.png",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      
      {/* ✅ KEEP YOUR SAME BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 0% 10% / 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">05.</span>
            Certifications
          </h2>
        </FadeInLeft>

        {/* ✅ GRID ADDED (only change) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((item, index) => (
            <AnimatedCard
              key={index}
              index={index}
              hoverEffect="lift"
              className="glass rounded-2xl p-4 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500"
            >

              {/* ✅ IMAGE */}
              <div className="h-72 mb-4 overflow-hidden rounded-xl bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) =>
                    (e.currentTarget.src = "/fallback.png")
                  }
                />
              </div>

              {/* ICON */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Award className="text-primary" size={20} />
              </div>

              {/* TITLE */}
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-xs text-primary mb-3">
                {item.provider}
              </p>

              {/* BUTTON */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1.5 rounded-full bg-primary text-black text-xs font-semibold hover:scale-105 transition"
              >
                View Certificate
              </a>

            </AnimatedCard>
          ))}

        </div>
      </div>
    </section>
  );
};