// components/Process/Process.jsx

"use client";

import styles from "@/src/styles/Process.module.css";

import { motion } from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Understanding the vision, goals, audience, and overall direction of the project.",
  },

  {
    number: "02",
    title: "Design",
    desc: "Crafting modern interfaces with premium layouts, motion, and visual identity.",
  },

  {
    number: "03",
    title: "Development",
    desc: "Building fast, responsive, and scalable experiences with clean architecture.",
  },

  {
    number: "04",
    title: "Launch",
    desc: "Optimizing, deploying, and refining the final product for real-world users.",
  },
];

export default function Process() {

  return (

    <section className={styles.process}>

      {/* BACKGROUND LIGHT */}

      <div className={styles.light}></div>

      {/* TOP */}

      <motion.div

        className={styles.top}

        initial={{
          opacity: 0,
          y: 40,
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
          duration: 0.8,
        }}
      >

        <span className={styles.label}>
          PROCESS
        </span>

        <h2>
          From concept
          <span> to launch.</span>
        </h2>

        <p>
          Every project follows a refined workflow focused
          on clarity, modern design, and smooth development.
        </p>

      </motion.div>

      {/* TIMELINE */}

      <div className={styles.timeline}>

        {/* CENTER LINE */}

        <motion.div

          className={styles.line}

          initial={{
            height: 0,
          }}

          whileInView={{
            height: "100%",
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        {/* STEPS */}

        {processSteps.map((step, index) => (

          <motion.div

            key={index}

            className={`
              ${styles.step}
              ${index % 2 === 0
                ? styles.left
                : styles.right}
            `}

            initial={{
              opacity: 0,
              y: 60,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.3,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
          >

            {/* DOT */}

            <motion.div

              className={styles.dot}

              whileHover={{
                scale: 1.2,
              }}
            />

            {/* CARD */}

            <motion.div

              className={styles.card}

              whileHover={{
                y: -8,
              }}
            >

              {/* NUMBER */}

              <span className={styles.number}>
                {step.number}
              </span>

              {/* TITLE */}

              <h3>
                {step.title}
              </h3>

              {/* DESC */}

              <p>
                {step.desc}
              </p>

            </motion.div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}