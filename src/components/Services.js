// components/Services/Services.jsx

"use client";

import styles from "@/src/styles/Services.module.css";

import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Modern Websites",
    desc: "Premium interfaces designed to make businesses look trustworthy, modern, and memorable.",
  },

  {
    number: "02",
    title: "Custom Dashboards",
    desc: "Powerful admin systems with analytics, management tools, and smooth user experiences.",
  },

  {
    number: "03",
    title: "Booking Systems",
    desc: "Appointments, forms, scheduling, and automated workflows built for real businesses.",
  },

  {
    number: "04",
    title: "Frontend Experiences",
    desc: "Interactive animations and polished UI that make websites feel alive and premium.",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
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
        <span className={styles.label}>SERVICES</span>

        <h2>
          Crafted for modern
          <span> digital experiences</span>
        </h2>

        <p>
          From elegant landing pages to powerful web applications, I create
          experiences that blend modern design with functional logic.
        </p>
      </motion.div>

      {/* GRID */}

      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
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
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
          >
            {/* GLOW */}

            <div className={styles.glow}></div>

            {/* NUMBER */}

            <span className={styles.number}>{service.number}</span>

            {/* TITLE */}

            <h3>{service.title}</h3>

            {/* DESC */}

            <p>{service.desc}</p>

            {/* BOTTOM LINE */}

            <div className={styles.bottomLine}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
