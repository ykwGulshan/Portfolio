"use client";

import styles from "@/src/styles/Navbar.module.css";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Services", "Showcase", "Projects"];

  return (
    <motion.header
      className={styles.navbar}
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* LOGO */}

      <motion.div
        className={styles.logo}
        whileHover={{
          scale: 1.03,
        }}
      >
        <Image
          src={Logo}
          alt="Logo"
          width={40}
          height={40}
        />

        <span>Gulshan</span>
      </motion.div>

      {/* DESKTOP LINKS */}

      <nav className={styles.navLinks}>
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={`#${link}`}
            className={styles.link}
            whileHover={{
              y: -2,
            }}
          >
            {link}

            <span className={styles.hover}></span>
          </motion.a>
        ))}
      </nav>

      {/* BUTTON */}

<motion.a
  href="#Contact"
  className={styles.navButton}
  whileTap={{ scale: 0.96 }}
  onClick={() => setOpen(false)}
>
  Let&apos;s Talk
</motion.a>

      {/* MOBILE BUTTON */}

      <motion.div
        className={styles.mobileMenu}
        onClick={() => setOpen(!open)}
        whileTap={{
          scale: 0.92,
        }}
      >
        <span className={open ? styles.topOpen : ""}></span>

        <span className={open ? styles.bottomOpen : ""}></span>
      </motion.div>

      {/* MOBILE DROPDOWN */}

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileDropdown}
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link}`}
                className={styles.mobileLink}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setOpen(false)}
              >
                {link}
              </motion.a>
            ))}
<motion.a
  href="#Contact"
  className={styles.mobileButton}
  whileTap={{ scale: 0.96 }}
  onClick={() => setOpen(false)}
>
  Let&apos;s Talk
</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
