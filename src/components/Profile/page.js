'use client'
import React, { useEffect, useState } from "react";
import styles from "./anggota.module.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { items } from "./data";

const Profile = () => {
  const pembinaData = items.pembina;
  const asistenData = items.asisten;
  const caasData = items.caas;

  const [pembinaVisible, setPembinaVisible] = useState(false);
  const [asistenVisible, setAsistenVisible] = useState(false);
  const [caasVisible, setCaasVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pembinaTitle = document.getElementById("pembina-title");
      const asistenTitle = document.getElementById("asisten-title");
      const caasTitle = document.getElementById("caas-title");

      const scrolled = window.scrollY;

      if (pembinaTitle && !pembinaVisible && scrolled > pembinaTitle.offsetTop - window.innerHeight / 2) {
        setPembinaVisible(true);
      }

      if (asistenTitle && !asistenVisible && scrolled > asistenTitle.offsetTop - window.innerHeight / 2) {
        setAsistenVisible(true);
      }

      if (caasTitle && !caasVisible && scrolled > caasTitle.offsetTop - window.innerHeight / 2) {
        setCaasVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pembinaVisible, asistenVisible, caasVisible]);

  return (
    <div >
      <h1 className={styles.title}>PEMBINA</h1>
      <div className={`${styles.container}`}>
        {pembinaData.map((item, index) => (
          <div className={`${styles.homeContainer} ${pembinaVisible && styles.fadeIn}`} key={item.id} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className={`${styles.profileCard} ${pembinaVisible && styles.fadeIn}`}>
              <div className={styles.img}>
                {pembinaVisible && <img src={item.image} alt={item.title} />}
              </div>
              <div className={styles.caption}>
                <h3 className={styles.nama}>{item.title}</h3>
                <p className={styles.deskripsi}>Front End Developer</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 id="asisten-title" className={styles.title}>ASISTEN</h1>
      <div className={`${styles.container}`}>
        {asistenData.map((item, index) => (
          <div className={`${styles.homeContainer} ${asistenVisible && styles.fadeIn}`} key={item.id} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className={`${styles.profileCard} ${asistenVisible && styles.fadeIn}`}>
              <div className={styles.img}>
                {asistenVisible && <img src={item.image} alt={item.title} />}
              </div>
              <div className={styles.caption}>
                <h3 className={styles.nama}>{item.title}</h3>
                <p className={styles.deskripsi}>Front End Developer</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 id="caas-title" className={styles.title}>CAAS</h1>
      <div className={`${styles.container}`}>
        {caasData.map((item, index) => (
          <div className={`${styles.homeContainer} ${caasVisible && styles.fadeIn}`} key={item.id} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className={`${styles.profileCard} ${caasVisible && styles.fadeIn}`}>
              <div className={styles.img}>
                {caasVisible && <img src={item.image} alt={item.title} />}
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
