import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl pointer-events-none"
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-primary uppercase tracking-[0.3em] mb-4 block">
              Let's Connect
            </span>
            <h2 className="heading-display text-5xl lg:text-7xl leading-tight mb-8">
              Have a project
              <br />
              <span className="text-muted-foreground">in mind?</span>
            </h2>

            <a
              href="mailto:basakjoy24@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl lg:text-3xl font-display font-bold hover:text-primary transition-colors"
            >
              Let's talk
              <span className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Email</span>
                  <a href="mailto:basakjoy24@gmail.com" className="font-medium hover:text-primary transition-colors">
                    basakjoy24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Phone</span>
                  <a href="tel:+880-1629095207" className="font-medium hover:text-primary transition-colors">
                    +880-1629095207
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Location</span>
                  <span className="font-medium">Available Worldwide</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="yourname@example.com"
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
