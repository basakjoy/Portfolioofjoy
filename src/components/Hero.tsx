import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import joyPortrait from "@/assets/owner.jpg";
import FloatingElements from "./FloatingElements";
import { useRef } from "react";

const stats = [
  { value: "+50", label: "Projects completed" },
  { value: "+15", label: "Happy clients" },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="hero-section min-h-screen relative overflow-hidden pt-20">
      <FloatingElements />
      <div className="container mx-auto px-6 lg:px-12 h-full">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)] items-center gap-8">

          {/* Left Content */}
          <motion.div style={{ y: textY, opacity }} className="relative z-10 py-12 lg:py-0">

            {/* Vertical Text — Animated Letter by Letter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 flex-col items-center gap-3"
            >
              {/* Decorative top line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-px h-12 bg-gradient-to-b from-transparent via-foreground/40 to-foreground/80 origin-top"
              />

              {/* Animated letter-by-letter text */}
              {/* <div
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                
                  letterSpacing: "0.45em",
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {"Full Stack Developer".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      background: "linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.5) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div> */}

              {/* Decorative dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                className="w-1.5 h-1.5 rounded-full bg-foreground/60"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-12 mb-12"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <span className="font-display text-4xl lg:text-5xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-display text-7xl lg:text-[9rem] leading-none mb-6"
            >
              <span className="text-gradient">Hello</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground"
            >
              — It's Joy, a full stack developer
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16 lg:mt-24 flex items-center gap-6"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Scroll down
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </a>

              {/* Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1LmpNW-yiQCU_V-HMVu8cu-XsFgLZqhua/view?usp=sharing"
                download
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Year */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:block absolute left-0 bottom-12"
            >
              <span className="vertical-text text-xs tracking-[0.2em] text-muted-foreground">
                2026
              </span>
            </motion.div>

          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: imageY }}
            className="relative h-[60vh] lg:h-[85vh] flex items-end justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg h-full">
              <img
                src={joyPortrait}
                alt="Joy - Full Stack Developer"
                className="w-full h-full object-cover object-top"
              />
              {/* Green tinted overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-primary/5 to-transparent" />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;