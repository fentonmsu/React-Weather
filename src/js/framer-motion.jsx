import React from 'react'
import { motion } from "framer-motion";

export const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const sliderVariants = {
  initial: {
    x: "-220%",
  },
  animate: {
    x: "0%",
    transition: {
      // repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};


export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
    },
  },
};

export const hoverVariants = {
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.95,
    rotate: "2.5deg",
  },
};

const framerMotion = () => {
  return (
    <div className="framer-motion-container">
      <motion.h1 variants={textVariants} initial="initial" animate="animate">
        Welcome to Framer Motion
      </motion.h1>

      <motion.p variants={textVariants} initial="initial" animate="animate">
        Here's some animated text.
      </motion.p>

      <motion.button
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Scroll Down
      </motion.button>

      <motion.div
        className="slider"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {/* Your slider content here */}
      </motion.div>
    </div>
  );
};
export default framerMotion;