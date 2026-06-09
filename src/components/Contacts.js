// components/Contact/Contact.jsx

"use client";

import styles from "@/src/styles/Contact.module.css";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

export default function Contact() {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // PARALLAX

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [-120, 120]
  );

  return (

    <section
      ref={sectionRef}
      className={styles.contact}
    >

      {/* BACKGROUND GLOW */}

      <motion.div

        className={styles.glow}

        style={{
          y: glowY,
        }}
      />

      {/* GRID */}

      <div className={styles.grid}></div>

      {/* LEFT */}

      <motion.div

        className={styles.left}

        initial={{
          opacity: 0,
          y: 50,
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
          duration: 0.9,
        }}
      >

        {/* LABEL */}

        <span className={styles.label}>
          CONTACT
        </span>

        {/* TITLE */}

        <h2>
          Let’s create
          <span> something modern.</span>
        </h2>

        {/* TEXT */}

        <p>
          Whether it’s a business website,
          startup landing page, or a complete digital experience,
          I’m open to building something unique and visually powerful.

        </p>

        {/* STATUS */}

        <motion.div

          className={styles.status}

          animate={{
            y: [0, -5, 0],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <span className={styles.dot}></span>

          Available for freelance work

        </motion.div>

      </motion.div>

      {/* RIGHT */}

      <motion.div

        className={styles.card}

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
          amount: 0.3,
        }}

        transition={{
          duration: 1,
        }}
      >

        {/* TOP */}

        <div className={styles.cardTop}>

          <h3>
            Get in touch
          </h3>

          <p>
            Usually replies within a few hours.
          </p>

        </div>

        {/* LINKS */}

        <div className={styles.links}>

          {/* EMAIL */}

          <motion.a

            href="mailto:gulshan.y0511@outlook.com"

            className={styles.linkCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>Email</span>

            <h4>
              gulshan.y0511@outlook.com
            </h4>

          </motion.a>

          {/* PHONE */}

          <motion.a

            href="tel:+91XXXXXXXXXX"

            target="_blank"

            className={styles.linkCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>Phone</span>

            <h4>
              +91 XXXXX XXXXX
            </h4>

          </motion.a>

          {/* WHATSAPP */}

          <motion.a

            href="https://wa.me/91XXXXXXXXXX"

            target="_blank"

            className={styles.linkCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>WhatsApp</span>

            <h4>
              +91 XXXXX XXXXX
            </h4>

          </motion.a>

          {/* GITHUB */}

          <motion.a

            href="https://github.com"

            target="_blank"

            className={styles.linkCard}

            whileHover={{
              y: -6,
            }}
          >

            <span>GitHub</span>

            <h4>
              ykwGulshan
            </h4>

          </motion.a>

        </div>

      </motion.div>

    </section>
  );
}