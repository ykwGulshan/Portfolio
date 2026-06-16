"use client";

import styles from "@/src/styles/Footer.module.css";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

import { motion } from "motion/react";

export default function Footer() {

  return (

    <footer className={styles.footer}>

      {/* TOP LINE */}

      <div className={styles.line}></div>

      {/* MAIN */}

      <div className={styles.container}>

        {/* LEFT */}

        <motion.div

          className={styles.left}

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          {/* LOGO */}

          <motion.div

            className={styles.logo}

            whileHover={{
              rotate: -6,
              scale: 1.05,
            }}
          >

            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
            />

          </motion.div>

          {/* TEXT */}

          <div className={styles.text}>

            <h3>
              Gulshan
            </h3>

            <p>
              Building modern digital experiences
              with motion, design, and clean development.
            </p>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          className={styles.right}

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.1,
            duration: 0.8,
          }}
        >

          {/* LINKS */}

          <div className={styles.links}>

            <motion.a
              href="https://www.instagram.com/gulshan_y0511/"
              whileHover={{
                y: -3,
              }}
            >

              Instagram

            </motion.a>

            <motion.a
              href="https://github.com/ykwGulshan"
              whileHover={{
                y: -3,
              }}
            >

              GitHub

            </motion.a>

            <motion.a
              href="tel:+917210006074"
              whileHover={{
                y: -3,
              }}
            >

              Phone

            </motion.a>

            <motion.a
              href="mailto:gulshan.y0511@outlook.com"
              whileHover={{
                y: -3,
              }}
            >

              Email

            </motion.a>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM */}

      <motion.div

        className={styles.bottom}

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          delay: 0.2,
          duration: 1,
        }}
      >

        <p>
          © 2026 Gulshan. Crafted with Next.js & Motion.
        </p>

      </motion.div>

      {/* GLOW */}

      <div className={styles.glow}></div>

    </footer>
  );
}