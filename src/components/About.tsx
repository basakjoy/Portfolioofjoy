import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Moving background element */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -right-32 top-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-primary uppercase tracking-[0.3em] mb-4 block">
              About Me
            </span>
            <h2 className="heading-display text-5xl lg:text-7xl leading-tight">
              Crafting digital
              <br />
              <span className="text-muted-foreground">experiences</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
              I'm Joy, a passionate full-stack developer specializing in building 
              modern, scalable web applications. With expertise in{" "}
              <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-primary font-medium">Next.js</span>,{" "}
              <span className="text-primary font-medium">MongoDB</span>, and{" "}
              <span className="text-primary font-medium">Express</span>, I 
              transform ideas into seamless digital products.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
              My approach combines clean code architecture with intuitive user 
              experiences. Every project is an opportunity to push boundaries 
              and deliver exceptional results that exceed expectations.
            </p>

            {/* Experience Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 grid grid-cols-3 gap-8"
            >
              <div>
                <span className="heading-display text-4xl lg:text-5xl font-bold block text-primary">4+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div>
                <span className="heading-display text-4xl lg:text-5xl font-bold block text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Projects Done</span>
              </div>
              <div>
                <span className="heading-display text-4xl lg:text-5xl font-bold block text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
