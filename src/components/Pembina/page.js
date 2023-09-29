'use client'
import React, { useEffect } from "react";
import styles from "./anggota.module.css";
import { items } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Pembina = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });

    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const topVisible = rect.top <= window.innerHeight;
        const bottomVisible = rect.bottom <= window.innerHeight;

        if (topVisible && bottomVisible) {
          element.classList.add('aos-animate'); 
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pembinaData = items.pembina;

  return (
    <div className="container">
      
      <h1 className={styles.title}>PEMBINA</h1>
      <div className={styles.separator}></div>
      <div className={styles.container} data-aos="fade-up">
        {pembinaData.map((item) => (
          <div className={styles.homeContainer} key={item.id} data-aos="fade-up">
            <div className={styles.profileCard}>
              <div className={styles.img}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.caption}>
                
                <h3 className={styles.deskripsi}>{item.posisi}</h3>
                <p className={styles.deskripsi}>{item.nip}</p>
              </div>
            </div>
            <h1 className="font-bold text-xl">{item.codedosen}</h1>
            <h3 className={styles.nama}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pembina;
