import { motion } from "framer-motion";
import {
  Cpu,
  Building2,
  BarChart,
  Database,
  Zap,
  MessageCircle,
  Car,
  BookOpen,
  CreditCard,
  Github,
  ExternalLink,
} from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const projects = [
  {
    icon: BookOpen,
    title: "Library Management System",
    duration: "Feb 2025",
    description: [
      "Developed Python-based system to manage books and users",
      "Implemented authentication and issue-return tracking",
      "Designed structured data handling and search features",
      "Focused on modular and maintainable code",
    ],
    technologies: ["Python", "File Handling"],
    github: "https://github.com/nithin-ponnuru/Library-Management-System",
    demo: "https://library-management-system-mpihr8i8jdxhuafaspxytk.streamlit.app/",
  },
  {
    icon: CreditCard,
    title: "ATM Management System",
    duration: "Jan 2025",
    description: [
      "Simulated ATM operations including deposit and withdrawal",
      "Implemented secure authentication and validation",
      "Designed console-based transaction system",
      "Focused on reliability and error handling",
    ],
    technologies: ["Python"],
    github: "https://github.com/nithin-ponnuru/ATM-Management-System-using-Python",
    demo: "https://atm-management-system-using-flask.onrender.com/",
  },
   {
    icon: Zap,
    title: "TG-NPDCL Commercial Electricity Billing Analysis",
    duration: "Dec 2025",
    description: [
      "Analyzed commercial electricity consumption and billing data",
      "Identified usage patterns and cost trends using data analytics",
      "Performed visualization and statistical summaries",
      "Delivered actionable insights for consumption optimization",
    ],
    technologies: ["Power BI", "Data Analysis", "Visualization"],
    github: "https://github.com/nithin-ponnuru/TG-NPDCL-Commercial-Electricity-Consumption-Billing-Analysis-Oct-2025-",
    demo: "https://app.powerbi.com/links/n3uDP8pF94?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare&bookmarkGuid=4b4a0028-faab-42c2-ace8-5f2039612e2c",
  },
  {
    icon: Database,
    title: "Predictive Analytics on Telangana Weather Data",
    duration: "Dec 2025",
    description: [
      "Performed data preprocessing and exploratory data analysis on weather datasets",
      "Built predictive models to forecast weather patterns",
      "Applied regression techniques and evaluation metrics",
      "Generated insights for environmental analysis",
    ],
    technologies: ["Python", "Pandas", "Machine Learning"],
    github: "https://github.com/nithin-ponnuru/Predictive-Analytics-on-Telangana-Weather-Data",
    demo: "https://predictive-analytics-on-telangana-weather-data-f2dhp2zqjsspxmx.streamlit.app/",
  },
  {
    icon: Cpu,
    title: "Hybrid Collaborative Filtering for Personalized Product Recommendations",
    duration: "July 2025",
    description: [
      "Developed a hybrid recommendation system combining collaborative and content-based filtering techniques",
      "Processed user-item interaction data using Pandas and NumPy",
      "Improved personalization accuracy through feature engineering and model evaluation",
      "Visualized insights using Matplotlib and Seaborn",
    ],
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/nithin-ponnuru/Hybrid-collaborative-filtering-for-personalized-product-recommendations-",
    demo: "https://nzngjcznapu7hzamwyfxbh.streamlit.app/",
  },
 
  {
    icon: BarChart,
    title: "Dynamic Superstore Sales Performance Dashboard",
    duration: "Apr 2025",
    description: [
      "Built interactive sales dashboard using MS Excel and Power BI concepts",
      "Analyzed KPIs, regional performance, and profitability trends",
      "Used Pivot Tables, slicers, and advanced Excel formulas",
      "Enabled data-driven business decision-making",
    ],
    technologies: ["MS Excel", "Power BI", "Data Visualization"],
    github: "https://github.com/nithin-ponnuru/Dynamic-Superstore-Sales-Performance-Dashboard",
    demo: "https://docs.google.com/spreadsheets/d/1k1sb2dpL4lFntxF0NZAUfqk94CkEjXf7/edit?usp=drive_link&ouid=113170975796990133572&rtpof=true&sd=true",
  },
  {
    icon: MessageCircle,
    title: "Hobby Recommender Chatbot",
    duration: "Apr 2025",
    description: [
      "Built AI-based chatbot to suggest personalized hobbies",
      "Integrated Gemini API for intelligent responses",
      "Designed responsive UI using HTML, CSS, and JavaScript",
      "Enhanced user engagement through AI recommendations",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Gemini API"],
    github: "https://github.com/nithin-ponnuru/Hobby-Recommender-Chatbot",
    demo: "https://hobby-recommender-chatbot.vercel.app/",
  },
  {
    icon: Car,
    title: "Data Analysis on Electric Vehicles Dataset",
    duration: "Apr 2025",
    description: [
      "Conducted exploratory data analysis on EV adoption trends",
      "Cleaned and transformed dataset for statistical insights",
      "Visualized growth patterns and market distribution",
      "Provided sustainability-focused insights",
    ],
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    github: "https://github.com/nithin-ponnuru/Data-Analysis-on-Electric-Vehicles-Dataset-",
    demo: "https://qgckkubezsgu65syxarxtw.streamlit.app/",
  },
   {
    icon: Building2,
    title: "Efficient Page Replacement Algorithm Simulator",
    duration: "Mar 2025",
    description: [
      "Implemented FIFO, LRU, LFU, MFU, and Optimal page replacement algorithms",
      "Simulated memory management techniques for performance comparison",
      "Analyzed page fault rates and algorithm efficiency",
      "Educational tool for understanding OS memory management",
    ],
    technologies: ["Python", "Algorithms", "Operating Systems"],
    github: "https://github.com/nithin-ponnuru/Efficient-Page-Replacement-Algorithm-Simulator",
    demo: "https://efficient-page-replacement-algorithm-simulator-u8zyskfthvhmuy8.streamlit.app/",
  },   

];

export const ProjectsSection = () => {
  const handleGithubClick = (githubUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (githubUrl && githubUrl !== "#") {
      window.open(githubUrl, "_blank");
    }
  };

  const handleDemoClick = (demoUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (demoUrl && demoUrl !== "#") {
      window.open(demoUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="py-24 relative">
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
            <span className="section-number">02.</span>
            Featured Projects
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.title}
              index={index}
              hoverEffect="glow"
              className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500"
            >
              <motion.div
                className="text-primary text-4xl mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <project.icon size={40} />
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{project.duration}</p>

              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                {project.description.map((point: string) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  onClick={(e) => handleGithubClick(project.github, e)}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github size={18} />
                </motion.a>

                <motion.a
                  href={project.demo}
                  onClick={(e) => handleDemoClick(project.demo, e)}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
