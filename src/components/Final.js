"use client";

import styles from "@/src/styles/Final.module.css";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

export default function FinalCTA() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // PARALLAX ORBS

  const orbY1 = useTransform(
    scrollYProgress,
    [0, 1],
    [-120, 120]
  );

  const orbY2 = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  );

  // ROTATION

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-8, 8]
  );

  return (

    <section
      ref={sectionRef}
      className={styles.cta}
    >

      {/* BACKGROUND */}

      <motion.div

        className={styles.orb1}

        style={{
          y: orbY1,
        }}
      />

      <motion.div

        className={styles.orb2}

        style={{
          y: orbY2,
        }}
      />

      {/* GRID */}

      <div className={styles.grid}></div>

      {/* MAIN CONTENT */}

      <motion.div

        className={styles.content}

        initial={{
          opacity: 0,
          y: 80,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
          amount: 0.4,
        }}

        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >

        {/* SMALL LABEL */}

        <motion.span

          className={styles.label}

          initial={{
            opacity: 0,
            letterSpacing: "0.8em",
          }}

          whileInView={{
            opacity: 1,
            letterSpacing: "0.35em",
          }}

          transition={{
            duration: 1,
          }}
        >

          LET&apos;S BUILD SOMETHING

        </motion.span>

        {/* TITLE */}

        <motion.h2

          className={styles.title}

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.15,
            duration: 1,
          }}
        >

          Modern.
          <br />

          <motion.span

            className={styles.gradient}

            style={{
              rotate,
            }}
          >

            Cinematic.
          </motion.span>

          <br />

          Unforgettable.

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
            delay: 0.3,
            duration: 0.9,
          }}
        >

          From premium interfaces to scalable systems,
          I create digital experiences designed to stand out
          and feel alive across every screen.

        </motion.p>

        {/* BUTTONS */}

        <motion.div

          className={styles.actions}

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.45,
            duration: 0.9,
          }}
        >

          {/* PRIMARY */}

          <motion.a

            className={styles.primary}

            whileHover={{
              scale: 1.04,
              y: -3,
            }}

            whileTap={{
              scale: 0.96,
            }}

            href="https://wa.me/91XXXXXXXXXX/?text=Hi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
          >

            Start a Project

          </motion.a>

          {/* SECONDARY */}

          <motion.a

            className={styles.secondary}

            whileHover={{
              scale: 1.04,
              y: -3,
            }}

            whileTap={{
              scale: 0.96,
            }}

            href="#Contact"
          >

            Contact Me

          </motion.a>

        </motion.div>

      </motion.div>

      {/* FLOATING ELEMENTS */}

      <motion.div

        className={styles.float1}

        animate={{
          y: [0, -18, 0],
          rotate: [0, 8, 0],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        UI / UX

      </motion.div>

      <motion.div

        className={styles.float2}

        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}

        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        Motion Design

      </motion.div>

      <motion.div

        className={styles.float3}

        animate={{
          y: [0, -14, 0],
          rotate: [0, 5, 0],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        Full Stack

      </motion.div>

    </section>
  );
}