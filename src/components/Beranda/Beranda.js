"use client";
import TypingText from "@/common/TypingText/TypingText";
import React, { useEffect, useState } from "react";
import styles from "./Beranda.module.css";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

function Beranda() {
  const initialContent1 = "SELAMAT DATANG DI TUGAS BESAR CAAS MBC";
  const initialContent2 = "Selamat Menikmati";
  const [showAbout, setShowAbout] = useState(false);
  const [showLatBelakang, setShowLatBelakang] = useState(false);
  const [scrollDownAnimation, setScrollDownAnimation] = useState(false);
  const [startTyping, setStartTyping] = useState(false); // State untuk mengontrol TypingText kedua
  const [showScrollArrow, setShowScrollArrow] = useState(false); // State untuk mengontrol visibilitas panah

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });

    // Listen for scroll events and set showAbout to true when scrolled
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShowAbout(true);
      }
      if (window.scrollY > 1000) {
        // Adjust the scroll position as needed
        setShowLatBelakang(true);
      }
    });

    setTimeout(() => {
      setStartTyping(true);
    }, initialContent1.length * 150);

    // Set showScrollArrow to true when typing the second content finishes
    setTimeout(() => {
      setShowScrollArrow(true);
    }, (initialContent1.length + initialContent2.length) * 150);

    return () => {
      window.removeEventListener("scroll", () => {
        setShowAbout(true);
        setShowLatBelakang(true);
      });
    };
  }, []);

  return (
    <div className={styles.konten}>
      <div className={styles.container}>
        <span
          className={`${styles.title} ${
            scrollDownAnimation ? styles.scrollDownAnimation : ""
          }`}
        >
          <TypingText content={initialContent1} />
          <div className="">
            {startTyping && (
              <>
                <TypingText content={initialContent2} />
                {showScrollArrow && (
                  <div className={styles.scrollArrow}>&darr;</div>
                )}
              </>
            )}
          </div>
        </span>
      </div>

      <section id="about">
      <div className={styles.about}>
  {showAbout && (
    <div className="md:grid md:grid-cols-2 gap-8 justify-center items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" data-aos="fade-up">
      <Image src="/about-image.png" width={500} height={500} data-aos="fade-right" />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold mb-2 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600" data-aos="fade-up">
          Tentang Kami
        </h2>
        <p className="text-base lg:text-lg mb-4" data-aos="fade-up">
          I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
        </p>
      </div>
    </div>
  )}
</div>

      </section>
      <section id="about">
      <div className={styles.about}>
        <div
          className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
          data-aos="fade-up"
        >
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold  mb-4 " data-aos="fade-up">
              Latar Belakang
            </h2>
            {showLatBelakang && (
              <p className="text-base lg:text-lg" data-aos="fade-up">
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Node.js, Express,
                PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
                and I am always looking to expand my knowledge and skill set. I
                am a team player and I am excited to work with others to create
                amazing applications.
              </p>
            )}
          </div>
          <Image src="/1.png" width={500} height={500} data-aos="fade-left" />
        </div>
      </div>
      </section>
    </div>
  );
}

export default Beranda;
