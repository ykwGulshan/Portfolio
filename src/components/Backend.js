// components/BackendShowcase/BackendShowcase.jsx

"use client";

import styles from "@/src/styles/Backend.module.css";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

export default function BackendShowcase() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // PARALLAX

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    [-100, 100]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  // ROTATE

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [5, -5]
  );

  return (

    <section
      ref={sectionRef}
      className={styles.backend}
    >

      {/* GRID BACKGROUND */}

      <div className={styles.gridBg}></div>

      {/* LEFT SIDE */}

      <motion.div

        className={styles.left}

        style={{
          y: leftY,
          rotate,
        }}
      >

        {/* MAIN PANEL */}

        <motion.div

          className={styles.serverPanel}

          whileHover={{
            y: -8,
          }}
        >

          {/* HEADER */}

          <div className={styles.panelHeader}>

            <div className={styles.status}>

              <span></span>

              System Active

            </div>

            <div className={styles.live}>
              LIVE
            </div>

          </div>

          {/* METRICS */}

          <div className={styles.metrics}>

            <motion.div

              className={styles.metric}

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
              }}
            >

              <h3>99.9%</h3>

              <span>Uptime</span>

            </motion.div>

            <motion.div

              className={styles.metric}

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
            >

              <h3>24ms</h3>

              <span>Response</span>

            </motion.div>

          </div>

          {/* LOGS */}

          <div className={styles.logs}>

            <motion.div

              className={styles.log}

              animate={{
                x: [0, 10, 0],
              }}

              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >

              API request processed

            </motion.div>

            <motion.div

              className={styles.log}

              animate={{
                x: [0, -8, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >

              Database synced successfully

            </motion.div>

            <motion.div

              className={styles.log}

              animate={{
                x: [0, 12, 0],
              }}

              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >

              Secure authentication active

            </motion.div>

          </div>

        </motion.div>

        {/* FLOATING MINI CARD */}

        <motion.div

          className={styles.floatingCard}

          animate={{
            y: [0, -12, 0],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          Backend Logic

        </motion.div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div

        className={styles.right}

        style={{
          y: rightY,
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
        >

          BACKEND SYSTEMS

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
        >

          Logic powering
          <span> the experience.</span>

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
        >

          Secure authentication, scalable systems,
          smooth APIs, and reliable backend architecture
          built to support modern digital products.

        </motion.p>

        {/* FEATURE LIST */}

        <div className={styles.features}>

          {[
            "Authentication Systems",
            "Realtime Data Handling",
            "API Integrations",
            "Database Architecture",
          ].map((item, index) => (

            <motion.div

              key={index}

              className={styles.feature}

              initial={{
                opacity: 0,
                x: 30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
            >

              <div className={styles.dot}></div>

              {item}

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}