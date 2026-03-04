import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blurred circle */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
      />

      {/* Small floating dot */}
      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-3 h-3 rounded-full bg-primary/40"
      />

      {/* Medium ring */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[20%] w-16 h-16 rounded-full border-2 border-primary/20"
      />

      {/* Floating square */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] w-8 h-8 rounded-md bg-primary/15 backdrop-blur-sm"
      />

      {/* Another blurred glow */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/15 blur-3xl"
      />

      {/* Tiny dots trail */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20 - i * 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
          style={{
            top: `${30 + i * 12}%`,
            right: `${10 + i * 8}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
