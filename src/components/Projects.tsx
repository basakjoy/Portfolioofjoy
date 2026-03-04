import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping experience with Next.js, MongoDB, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.",
    tags: ["Next.js", "MongoDB", "Stripe", "TailwindCSS"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization, user management, and subscription handling built with React and Express.",
    tags: ["React", "Express", "Chart.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Social Media App",
    description: "Full-featured social platform with real-time messaging, post feeds, notifications, and media uploads using MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "#",
  },
  {
    title: "AI Content Generator",
    description: "Intelligent content creation tool leveraging OpenAI APIs with a beautiful Next.js frontend and serverless backend.",
    tags: ["Next.js", "OpenAI", "Vercel", "TypeScript"],
    link: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24"
        >
          <div>
            <span className="text-sm text-primary uppercase tracking-[0.3em] mb-4 block">
              Portfolio
            </span>
            <h2 className="heading-display text-5xl lg:text-7xl">
              Featured <span className="text-muted-foreground">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-6 lg:mt-0">
            A selection of projects that showcase my expertise in building 
            modern, scalable web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} parentInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, parentInView }: { project: typeof projects[0]; index: number; parentInView: boolean }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={parentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      style={{ y: cardY }}
      className="group card-elevated-hover p-8 lg:p-10 border border-transparent hover:border-primary/20"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-7xl font-display font-bold text-primary/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <a
          href={project.link}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <h3 className="heading-display text-2xl lg:text-3xl mb-4">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default Projects;
