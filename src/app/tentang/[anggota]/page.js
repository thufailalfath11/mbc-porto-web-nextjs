import React from "react";
import styles from "./anggota.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon dari paket FontAwesome
import { faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Anggota = ({ params }) => {
  const data = getData(params.anggota);
  return (
    <div className="container">
      <Navbar/>
    <div className={styles.container}>
      {data.map((item) => (
        <div className={styles.homeContainer} key={item.id}>
          <div className={styles.profileCard}>
            <div className={styles.img}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.caption}>
              <h3 className={styles.nama}>{item.title}</h3>
              <p className={styles.deskripsi}>Front End Developer</p>
              <div className={styles.socialLinks}>
                <i href="#" className={styles.socialLink}>
                  <FontAwesomeIcon icon={faFacebook} /> {/* Ikon Facebook */}
                </i>
                <i href="#" className={styles.socialLink}>
                  <FontAwesomeIcon icon={faInstagram} /> {/* Ikon Instagram */}
                </i>
                <i href="#" className={styles.socialLink}>
                  <FontAwesomeIcon icon={faGithub} /> {/* Ikon GitHub */}
                </i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Anggota;
