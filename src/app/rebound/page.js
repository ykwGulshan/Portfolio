"use client";

import styles from "@/src/styles/Rebound.module.css";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import ReboundMockup from "@/public/images/rebound.png";

export default function ReboundCaseStudy() {
  const stats = [
    "5km Matching Radius",
    "Verified Mentors",
    "Attendance Tracking",
    "Offline Learning",
  ];

  const features = [
    "Student Dashboard",
    "Teacher Dashboard",
    "Notes & Resources",
    "Attendance Tracking",
    "Assessments",
    "Smart Matching",
  ];

  const challenges = [
    {
      title: "Trust & Safety",
      desc: "Parents need confidence before allowing offline tutoring interactions.",
    },
    {
      title: "Hyperlocal Matching",
      desc: "Balancing proximity, expertise and availability.",
    },
    {
      title: "Verification",
      desc: "Scaling mentor approval without sacrificing quality.",
    },
    {
      title: "Real World Learning",
      desc: "Supporting offline education rather than replacing it.",
    },
  ];

  return (
    <main className={styles.page}>
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <motion.div
          className={styles.heroLeft}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className={styles.eyebrow}>CASE STUDY</span>

          <h1>REBOUND</h1>

          <h2>
            The Future Of
            <br />
            Hyperlocal Learning
          </h2>

          <p>
            Connecting students with verified nearby mentors through trust-first
            technology and real-world learning.
          </p>

          <div className={styles.stats}>
            {stats.map((item) => (
              <div key={item} className={styles.stat}>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.heroRight}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Image src={ReboundMockup} alt="Rebound" priority />
        </motion.div>
      </section>

      {/* ========================= */}
      {/* PROBLEM */}
      {/* ========================= */}

      <section className={styles.problem}>
        <div className={styles.problemText}>
          <span>THE PROBLEM</span>

          <h2>
            Students travel hours.
            <br />
            Teachers live nearby.
          </h2>

          <p>
            Quality education often exists only a few streets away, yet students
            spend time and money searching elsewhere.
          </p>
        </div>

        <div className={styles.problemCards}>
          <div className={styles.problemCard}>Long Commutes</div>

          <div className={styles.problemCard}>Expensive Tuition</div>

          <div className={styles.problemCard}>Lack Of Trust</div>
        </div>
      </section>

      {/* ========================= */}
      {/* BIG IDEA */}
      {/* ========================= */}

      <section className={styles.idea}>
        <span>THE IDEA</span>

        <h2>
          What if the best teacher
          <br />
          already lived nearby?
        </h2>

        <div className={styles.flow}>
          <div className={styles.node}>Student</div>

          <div className={styles.line}></div>

          <div className={styles.nodePrimary}>Rebound</div>

          <div className={styles.line}></div>

          <div className={styles.node}>Mentor</div>
        </div>
      </section>

      {/* ========================= */}
      {/* TRUST FLOW */}
      {/* ========================= */}

      <section className={styles.trust}>
        <span>TRUST ARCHITECTURE</span>

        <h2>Trust Before Teaching</h2>

        <div className={styles.timeline}>
          <div>Identity</div>
          <div>Academics</div>
          <div>Interview</div>
          <div>Approval</div>
          <div>Matching</div>
        </div>
      </section>

      {/* ========================= */}
      {/* PLATFORM */}
      {/* ========================= */}

      {/* ========================= */}
      {/* PLATFORM OS */}
      {/* ========================= */}

      <section className={styles.platform}>
        <span>PLATFORM</span>

        <h2>
          The Operating System
          <br />
          Behind Rebound
        </h2>

        <p className={styles.platformText}>
          One platform connecting students, mentors, parents and administration
          through a single ecosystem.
        </p>

        <div className={styles.orbitContainer}>
          <div className={styles.centerOrbWrapper}>
            <motion.div
              className={styles.centerOrb}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              REBOUND
            </motion.div>
          </div>

          <motion.div
            className={`${styles.orb} ${styles.student}`}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Student
          </motion.div>

          <motion.div
            className={`${styles.orb} ${styles.teacher}`}
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            Teacher
          </motion.div>

          <motion.div
            className={`${styles.orb} ${styles.parent}`}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
          >
            Parent
          </motion.div>

          <motion.div
            className={`${styles.orb} ${styles.admin}`}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            Admin
          </motion.div>

          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
          <div className={styles.line4}></div>
        </div>
      </section>

      {/* ========================= */}
      {/* PLATFORM SHOWCASE */}
      {/* ========================= */}

      <section className={styles.showcase}>
        <span>EXPERIENCE</span>

        <h2>Inside The Platform</h2>

        <div className={styles.showcaseGrid}>
          <motion.div
            className={styles.showcaseCard}
            whileHover={{
              y: -12,
            }}
          >
            <div className={styles.bigNumber}>01</div>

            <h3>Student Experience</h3>

            <ul>
              <li>Attendance Tracking</li>
              <li>Assessments</li>
              <li>Notes & Resources</li>
              <li>Progress Analytics</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.showcaseCard}
            whileHover={{
              y: -12,
            }}
          >
            <div className={styles.bigNumber}>02</div>

            <h3>Teacher Workspace</h3>

            <ul>
              <li>Student Management</li>
              <li>Class Scheduling</li>
              <li>Performance Reports</li>
              <li>Learning Resources</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.showcaseCard}
            whileHover={{
              y: -12,
            }}
          >
            <div className={styles.bigNumber}>03</div>

            <h3>Parent Visibility</h3>

            <ul>
              <li>Attendance Monitoring</li>
              <li>Performance Insights</li>
              <li>Tutor Updates</li>
              <li>Progress Tracking</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.showcaseCard}
            whileHover={{
              y: -12,
            }}
          >
            <div className={styles.bigNumber}>04</div>

            <h3>Administration Layer</h3>

            <ul>
              <li>Verification System</li>
              <li>Matching Engine</li>
              <li>Operations Control</li>
              <li>Platform Oversight</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ========================= */}
      {/* STATS */}
      {/* ========================= */}

      <section className={styles.platformStats}>
        <div>
          <h3>4</h3>
          <p>Dashboards</p>
        </div>

        <div>
          <h3>6+</h3>
          <p>Core Systems</p>
        </div>

        <div>
          <h3>100%</h3>
          <p>Custom Built</p>
        </div>

        <div>
          <h3>0</h3>
          <p>Templates Used</p>
        </div>
      </section>

      {/* ========================= */}
      {/* BUILD */}
      {/* ========================= */}

      <section className={styles.build}>
        <span>BUILDING REBOUND</span>

        <h2>Built From The Ground Up</h2>

        <div className={styles.techOrbit}>
          <span>Next.js</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>CSS Modules</span>
        </div>
      </section>

      {/* ========================= */}
      {/* CHALLENGES */}
      {/* ========================= */}

      <section className={styles.challenges}>
        <span>CHALLENGES</span>

        <h2>Building For The Real World</h2>

        <div className={styles.challengeGrid}>
          {challenges.map((item) => (
            <div key={item.title} className={styles.challengeCard}>
              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= */}
      {/* IMPACT */}
      {/* ========================= */}

      <section className={styles.impact}>
        <span>IMPACT</span>

        <h2>What Rebound Delivers</h2>

        <div className={styles.metrics}>
          <div>
            <h3>5km</h3>
            <p>Maximum Match Radius</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Verified Mentors</p>
          </div>

          <div>
            <h3>Offline</h3>
            <p>Learning First</p>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* DESIGN */}
      {/* ========================= */}

      <section className={styles.design}>
        <span>DESIGN LANGUAGE</span>

        <h2>Built Around Trust</h2>

        <div className={styles.palette}>
          <div className={styles.blue}></div>
          <div className={styles.purple}></div>
          <div className={styles.dark}></div>
          <div className={styles.light}></div>
        </div>
      </section>

      {/* ========================= */}
      {/* VISION */}
      {/* ========================= */}

      <section className={styles.vision}>
        <h2>
          Every Neighborhood
          <br />
          Has Teachers.
        </h2>

        <p>
          Building the infrastructure layer for community-powered education.
        </p>

        <div className={styles.buttons}>
          <Link href="/" className={styles.primaryBtn}>
            Live Preview
          </Link>

          <Link href="/" className={styles.secondaryBtn}>
            Back To Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
