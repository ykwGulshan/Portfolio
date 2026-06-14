"use client";

import styles from "./page.module.css";

import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Services from "@/src/components/Services";
import Showcase from "@/src/components/Showcase";
import BackendShowcase from "@/src/components/Backend";
import Process from "@/src/components/Process";
import FinalCTA from "@/src/components/Final";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contacts";
import Footer from "@/src/components/Footer";

import Image from "next/image";
import Globe from "@/public/images/globe.png";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className={styles.hero}>
        {/* LEFT */}

        <motion.div
          className={styles.left}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <span className={styles.smallText}>GULSHAN</span>

          <h1>
            Freelance <br />
            <motion.span
              className={styles.gradientText}
              initial="hidden"
              animate="visible"
            >
              {"Web Developer".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                  }}
                  style={{
                    display: "inline-block",
                    color: "transparent",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <p>
            Upgrade your online presence with a unique, expertly created, and
            reasonably priced website.
          </p>

          {/* BUTTONS */}

          <motion.div
            className={styles.buttons}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
          >
            <a href="#Contact" className={styles.primary}>Get In Touch</a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className={styles.right}
          
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
          <Image
            src={Globe}
            alt="Globe"
            className={styles.globe}
            width={500}
            height={500}
            priority
          />

          <div className={`${styles.tag} ${styles.dev}`}>Development ✦</div>

          <div className={`${styles.tag} ${styles.design}`}>Web Design ✦</div>

          <div className={`${styles.tag} ${styles.brand}`}>Branding ✦</div>
        </motion.div>
      </main>

      <section id="About">
        <About />
      </section>

      <section id="Services">
        <Services />
      </section>

      <section id="Showcase">
        <Showcase />
      </section>

      <section id="BackendShowcase">
        <BackendShowcase />
      </section>

      <section id="Projects">
        <Projects />
      </section>
      <section id="Process">
        <Process />
      </section>

      <section id="FinalCTA">
        <FinalCTA />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      
      <Footer />
    </>
  );
}
