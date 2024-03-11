// components/PageTransition.js
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Template = ({ children }) => {
  const { asPath } = usePathname();

  const variants1 = {
    scaleDown: {
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.4,
      },
    },
    out: {
      x: "-100%",
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
    in: {
      scale: 0.8,
      y: 100,
      x: "100%",
      transition: {
        duration: 0.4,
      },
    },
    center: {
      x: 0,
      scale: 0.8,
      transformOrigin: "top",
      transition: {
        duration: 0.4,
      },
    },
    scaleUp: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
  };

  const variants = {
    out: {
      opacity: 0,
      y: 40,
    },
    in: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>

    // <div className="effect-3">
    //   <motion.div
    //     variants={variants}
    //     initial="in"
    //     animate={["center", "scaleUp"]}
    //     exit={["scaleDown", "out"]}
    //   >
    //     {children}
    //   </motion.div>
    // </div>

    // <div className="effect-1">
    //   <motion.div
    //     key={asPath}
    //     variants={variants}
    //     animate="in"
    //     initial="out"
    //     exit="out"
    //   >
    //     {children}
    //   </motion.div>
    // </div>
  );
};

export default Template;
