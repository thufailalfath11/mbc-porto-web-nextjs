'use client'
import React, { useState } from "react";
import styles from "./MyTucTuc.module.css";
import 'aos/dist/aos.css';
import Image from "next/image";
import Button from "@/common/Button/Button"; 

function MyTucTuc() {
  // State untuk mengontrol tampilan modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsModalOpen(true);
  }

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>MyTucTuc</h1>
          <p className={styles.desc}>Aplikasi MyTUC adalah mobile apps berbasis AR yang dapat menvisualisasikan 3D object tentang rute dari TUC (Telkom University Car). Dalam pembuatan aplikasi ini, kami menggunakan Blender untuk 3D modelling bangunan-bangunan yang dilewati oleh TUC. Selain itu, kami juga menggunakan Figma untuk desain interface dari aplikasi MyTUC ini. Terakhir, kami menggunakan Game Engine Unity untuk mewujudkan aplikasi MyTUC ini agar dapat di gunakan di HP masing-masing.</p>
          <div className={styles.Button}>
            <Button text="Download" url='https://bit.ly/DownloadMyTucApp' />
            <button onClick={openModal} className={styles.scanQrButton}>Scan QR</button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/mytuctuc/gis.jpeg"
            alt=""
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img src="/mytuctuc/QR.jpeg" alt="QR Code" />
            <button onClick={closeModal} className={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTucTuc;
