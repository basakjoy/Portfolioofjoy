import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="font-display text-2xl font-bold text-primary">
            J.
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="link-underline text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* <a
              href="/cv.pdf"
              download
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-5 py-2.5 hover:text-primary hover:border-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              CV
            </a> */}
            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              Book A Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
