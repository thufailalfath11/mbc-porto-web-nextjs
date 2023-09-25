'use client'
import React, { useEffect } from "react";
import styles from "./anggota.module.css";
import { items } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust this duration as needed
      once: true, // Whether the animation should only happen once
    });

    // Add a scroll event listener
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const topVisible = rect.top <= window.innerHeight;
        const bottomVisible = rect.bottom <= window.innerHeight;

        if (topVisible && bottomVisible) {
          element.classList.add('aos-animate'); // Trigger the AOS animation
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pembinaData = items.pembina;
  const asistenData = items.asisten;
  const caasData = items.pembina;

  return (
    <div className="container">

      <h1 className={styles.title}>PEMBINA</h1>
      <div className={styles.container} data-aos="fade-up">
        {pembinaData.map((item) => (
          <div className={styles.homeContainer} key={item.id} data-aos="fade-up">
            <div className={styles.profileCard}>
              <div className={styles.img}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.nama}>{item.title}</h3>
                <p className={styles.deskripsi}>Front End Developer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className={styles.title}>ASISTEN</h1>
      <div className={styles.container} data-aos="fade-up">
        {asistenData.map((item) => (
          <div className={styles.homeContainer} key={item.id} data-aos="fade-up">
            <div className={styles.profileCard}>
              <div className={styles.img}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.nama}>{item.title}</h3>
                <p className={styles.deskripsi}>Front End Developer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className={styles.title}>CAAS</h1>
      <div className={styles.container} data-aos="fade-up">
        {caasData.map((item) => (
          <div className={styles.homeContainer} key={item.id} data-aos="fade-up">
            <div className={styles.profileCard}>
              <div className={styles.img}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.nama}>{item.title}</h3>
                <p className={styles.deskripsi}>Front End Developer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
