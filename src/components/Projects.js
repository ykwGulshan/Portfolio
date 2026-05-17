// components/Projects/Projects.jsx

"use client";

import styles from "@/src/styles/Projects.module.css";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Rebound",
    category: "Education Platform",
    desc:
      "A hyperlocal peer-to-peer tutoring platform with dashboards, attendance tracking, notes, and smart student-teacher systems.",
  },
];

export default function Projects() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // BACKGROUND PARALLAX

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    [-120, 120]
  );

  return (

    <section
      ref={sectionRef}
      className={styles.projects}
    >

      {/* BACKGROUND */}

      <motion.div

        className={styles.bgGlow}

        style={{
          y: bgY,
        }}
      />

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
          PROJECTS
        </span>

        <h2>
          Selected
          <span> work.</span>
        </h2>

        <p>
          A collection of modern interfaces,
          scalable systems, and cinematic digital
          experiences crafted with design and motion in mind.
        </p>

      </motion.div>

      {/* PROJECTS */}

      <div className={styles.projectList}>

        {projects.map((project, index) => (

          <motion.div

            key={index}

            className={styles.projectCard}

            initial={{
              opacity: 0,
              y: 100,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.9,
              delay: index * 0.12,
            }}

            whileHover={{
              y: -12,
            }}
          >

            {/* IMAGE AREA */}

            <div className={styles.imageArea}>

              {/* PLACEHOLDER */}

              <motion.div

                className={styles.imagePlaceholder}

                whileHover={{
                  scale: 1.04,
                }}

                transition={{
                  duration: 0.4,
                }}
              >

                PROJECT
                <br />
                PREVIEW

              </motion.div>

              {/* FLOATING TAG */}

              <motion.div

                className={styles.floatingTag}

                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                {project.category}

              </motion.div>

            </div>

            {/* CONTENT */}

            <div className={styles.content}>

              {/* NUMBER */}

              <span className={styles.number}>
                {project.number}
              </span>

              {/* TITLE */}

              <h3>
                {project.title}
              </h3>

              {/* DESC */}

              <p>
                {project.desc}
              </p>

              {/* BUTTONS */}

              <div className={styles.actions}>

                <motion.button

                  className={styles.primary}

                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.96,
                  }}
                >

                  Live Preview

                </motion.button>

                <motion.button

                  className={styles.secondary}

                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.96,
                  }}
                >

                  Case Study

                </motion.button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}