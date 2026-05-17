"use client";

import styles from "@/src/styles/Showcase.module.css";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

export default function Showcase() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // PARALLAX

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    [-120, 120]
  );

  // ROTATION

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-6, 6]
  );

  return (

    <section
      ref={sectionRef}
      className={styles.showcase}
    >

      {/* BACKGROUND ORB */}

      <div className={styles.orb}></div>

      {/* LEFT */}

      <motion.div

        className={styles.left}

        style={{
          y: leftY,
        }}
      >

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

          viewport={{
            once: true,
          }}
        >

          FRONTEND EXPERIENCE

        </motion.span>

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

          viewport={{
            once: true,
          }}
        >

          Interfaces that
          <span> feel alive.</span>

        </motion.h2>

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

          viewport={{
            once: true,
          }}
        >

          Smooth interactions, cinematic layouts,
          responsive experiences, and subtle motion
          crafted to make websites feel modern and premium.

        </motion.p>

        {/* STATS */}

        <div className={styles.stats}>

          <motion.div

            className={styles.statCard}

            whileHover={{
              y: -8,
            }}
          >

            <h3>+120%</h3>

            <span>
              User engagement
            </span>

          </motion.div>

          <motion.div

            className={styles.statCard}

            whileHover={{
              y: -8,
            }}
          >

            <h3>0.4s</h3>

            <span>
              Fast interactions
            </span>

          </motion.div>

        </div>

      </motion.div>

      {/* RIGHT */}

      <motion.div

        className={styles.right}

        style={{
          y: rightY,
          rotate,
        }}
      >

        {/* MAIN PANEL */}

        <motion.div

          className={styles.mainPanel}

          whileHover={{
            y: -10,
          }}
        >

          {/* TOP BAR */}

          <div className={styles.topBar}>

            <span></span>
            <span></span>
            <span></span>

          </div>

          {/* CONTENT */}

          <div className={styles.panelContent}>

            <div className={styles.bigNumber}>
              98%
            </div>

            <div className={styles.lines}>

              <motion.div

                className={styles.line1}

                initial={{
                  width: 0,
                }}

                whileInView={{
                  width: "100%",
                }}

                transition={{
                  duration: 1,
                }}
              />

              <motion.div

                className={styles.line2}

                initial={{
                  width: 0,
                }}

                whileInView={{
                  width: "80%",
                }}

                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
              />

              <motion.div

                className={styles.line3}

                initial={{
                  width: 0,
                }}

                whileInView={{
                  width: "60%",
                }}

                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
              />

            </div>

          </div>

        </motion.div>

        {/* FLOATING CARDS */}

        <motion.div

          className={styles.floatingCard1}

          animate={{
            y: [0, -12, 0],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          Smooth Motion

        </motion.div>

        <motion.div

          className={styles.floatingCard2}

          animate={{
            y: [0, 12, 0],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          Modern UI

        </motion.div>

      </motion.div>

    </section>
  );
}