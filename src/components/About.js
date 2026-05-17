// components/About/About.jsx

"use client";

import styles from "@/src/styles/About.module.css";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

export default function About() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // PARALLAX

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [-60, 60]
  );

  return (

    <section
      ref={sectionRef}
      className={styles.about}
    >

      {/* BACKGROUND */}

      <div className={styles.bgGlow}></div>

      {/* LEFT */}

      <motion.div

        className={styles.left}

        style={{
          y: imageY,
        }}
      >

        {/* IMAGE CONTAINER */}

        <motion.div

          className={styles.imageWrapper}

          whileHover={{
            y: -8,
            rotate: -1,
          }}
        >

          {/* YOUR IMAGE */}

          <div className={styles.imagePlaceholder}>
            MY <br />
            PHOTO <br />
            HERE
          </div>

          {/* FLOATING TAG */}

          <motion.div

            className={styles.floating}

            animate={{
              y: [0, -12, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            Based in India 🇮🇳

          </motion.div>

        </motion.div>

      </motion.div>

      {/* RIGHT */}

      <motion.div

        className={styles.right}

        style={{
          y: contentY,
        }}
      >

        {/* LABEL */}

        <motion.span

          className={styles.label}

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >

          ABOUT ME

        </motion.span>

        {/* TITLE */}

        <motion.h2

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          Building modern
          <span> digital experiences.</span>

        </motion.h2>

        {/* TEXT */}

        <motion.p

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.1,
            duration: 0.8,
          }}
        >

          I&apos;m Gulshan, A Full-Stack Web Developer who loves to build
          Modern, Responsive, and Interactive Digital Experiences.

          <br />
          <br />

          I specialize in Backend Development,
          Smooth Motion Design, and Scalable Web Systems
          that combine Aesthetics with Functionality.

        </motion.p>

        {/* INFO GRID */}

        <div className={styles.infoGrid}>

          <motion.div

            className={styles.infoCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>Name</span>

            <h3>Gulshan</h3>

          </motion.div>

          <motion.div

            className={styles.infoCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>Experience</span>

            <h3>Frontend + Full Stack</h3>

          </motion.div>

          <motion.div

            className={styles.infoCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>Email</span>

            <h3>gulshan.y0511@outlook.com</h3>

          </motion.div>

          <motion.div

            className={styles.infoCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>Available For</span>

            <h3>Freelance Projects</h3>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}