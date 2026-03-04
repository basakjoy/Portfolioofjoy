import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "Express.js", level: 88 },
  { name: "TailwindCSS", level: 92 },
  { name: "GraphQL", level: 75 },
];

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "GraphQL",
  "REST APIs", "Git", "Docker", "AWS", "Vercel"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Moving glow */}
      <motion.div
        style={{ x: glowX }}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl pointer-events-none"
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-sm text-primary uppercase tracking-[0.3em] mb-4 block">
            Expertise
          </span>
          <h2 className="heading-display text-5xl lg:text-7xl">
            Skills & <span className="text-muted-foreground">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Skill Bars */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3 content-start"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                className="px-6 py-3 bg-background rounded-full text-sm font-medium border border-border hover:border-primary/40 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
