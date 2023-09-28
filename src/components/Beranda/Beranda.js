"use client";
import TypingText from "@/common/TypingText/TypingText";
import React, { useEffect, useState } from "react";
import styles from "./Beranda.module.css";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

function Beranda() {
  const initialContent1 = "SELAMAT DATANG DI TUGAS BESAR CAAS MBC";
  const initialContent2 = "WE ATTACK, WE PROTECT!";
  const [showAbout, setShowAbout] = useState(false);
  const [showLatBelakang, setShowLatBelakang] = useState(false);
  const [scrollDownAnimation, setScrollDownAnimation] = useState(false);
  const [startTyping, setStartTyping] = useState(false); // State untuk mengontrol TypingText kedua

  useEffect(() => {
    AOS.init({
      duration: 1500,
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
    }, initialContent1.length * 160);

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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "70vh", // Center vertically in the viewport
            textAlign: "center",
          }}
        >
          <div>
            <TypingText content={initialContent1} />
            {startTyping && <TypingText content={initialContent2} />}
          </div>
        </span>
      </div>

      <section id="about">
        <div className={styles.about}>
          {showAbout && (
            <div
              className="md:grid md:grid-cols-2 gap-8 justify-center items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
              data-aos="fade-up"
            >
              <Image
                src="/about-image.png"
                width={500}
                height={500}
                data-aos="fade-right"
                className={styles.image}
              />

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2
                  className="text-4xl font-bold mb-2 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
                  data-aos="fade-up"
                >
                  Karya Tubes Kami
                </h2>

                <p className={`${styles.desk} ${styles.paragraphMargin}`} data-aos="fade-up">
                  Halo Sobat MBCporto! Di sini, Anda akan menemukan berbagai
                  proyek yang telah kami kerjakan dengan penuh dedikasi dan
                  semangat. kami senang berbagi perjalanan kreatif dan
                  pencapaian kami dalam mengatasi tantangan yang telah kami
                  hadapi. Mari kita menjelajahi portfolio ini bersama dan lihat
                  bagaimana kami telah mewujudkan ide-ide dalam hasil Tubes
                  kami.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="about">
        <div className={styles.about}>
          {showAbout && (
            <div
              className="md:grid md:grid-cols-2 gap-8 justify-center items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
              data-aos="fade-up"
            >
              <Image
                src="/1.png"
                width={500}
                height={500}
                data-aos="fade-left"
                className={styles.image}
              />

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2
                  className="text-4xl font-bold mb-2 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
                  data-aos="fade-up"
                >
                  Latar Belakang
                </h2>

                <p className={`${styles.desk} ${styles.paragraphMargin}`} data-aos="fade-up">
                  Website ini merupakan hasil kolaboratif dari Tim CAAS di
                  MBCLab yang terdiri dari anggota-anggota berbakat dari
                  berbagai latar devisi, yang bersatu untuk menjalankan
                  serangkaian proyek Tugas Besar CAAS MBClab yang penuh
                  semangat. Melalui kerjasama kami, kami telah berhasil
                  menghasilkan karya-karya yang mencerminkan kolaborasi lintas
                  disiplin, kreativitas, dan tekad kami dalam mencapai prestasi
                  luar biasa. Kami berharap karya-karya kami menginspirasi dan
                  menunjukkan potensi yang kami tawarkan melalui kerjasama tim
                  kami. Terima kasih telah mengunjungi halaman kami dan selamat
                  menikmati eksplorasi kami dalam dunia riset dan inovasi di
                  MBCLab.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Beranda;
