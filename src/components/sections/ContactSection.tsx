import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ponnurunithin8@gmail.com",
    href: "mailto:ponnurunithin8@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7569961434",
    href: "tel:+917569961434",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ponnuru-nithin",
    href: "https://www.linkedin.com/in/ponnuru-nithin/"
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/nithin-ponnuru", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ponnuru-nithin/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/nithin.ponnuru/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/nithinponnuru", label: "X (Twitter)" },
];

export const ContactSection = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_0b03wzk",
        "template_7n07vu4",
        formRef.current,
        "xnFKZ8gO_JKI5Q5S1"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
        },
        () => {
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(0 0% 10% / 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">08.</span>
            Get In Touch
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Open for internships, projects, and learning opportunities.
            </motion.p>

            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <AnimatedCard
                  key={info.label}
                  index={index}
                  hoverEffect="lift"
                  className="glass rounded-2xl p-6 border border-primary/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)] hover:border-primary transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs uppercase tracking-wider">
                        {info.label}
                      </span>
                      <div>
                        <a
                          href={info.href}
                          className="text-foreground font-semibold hover:text-primary"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
              {/* RIGHT SIDE FORM */}
              <AnimatedCard
                hoverEffect="lift"
                className="glass rounded-2xl p-8 border border-primary/30 shadow-[0_0_30px_rgba(34,197,94,0.40)] hover:shadow-[0_0_50px_rgba(34,197,94,0.50)] transition-all duration-500"
              >
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg bg-muted border border-border outline-none focus:border-primary"
                  />

                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg bg-muted border border-border outline-none focus:border-primary"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full p-3 rounded-lg bg-muted border border-border outline-none focus:border-primary"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {/* ✅ SUCCESS MESSAGE */}
                  {success && (
                    <p className="text-green-500 text-sm text-center">
                      Thanks for your message! I'll get back to you soon.
                    </p>
                  )}

                </form>
              </AnimatedCard>
        </div>
      </div>
    </section>
  );
};