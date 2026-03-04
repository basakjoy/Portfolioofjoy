import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/basakjoy", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joy-basak-a0b381222/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Joybasak_00", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-2xl font-bold text-primary">
            Joy.
          </a>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Joy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
