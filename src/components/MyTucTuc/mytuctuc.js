"use client";
import React, { useState } from "react";
import styles from "./MyTucTuc.module.css";
import "aos/dist/aos.css";
import Image from "next/image";
import Button from "@/common/Button/Button";

function MyTucTuc() {
  // State untuk mengontrol tampilan modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>MyTuc</h1>
          <p className={styles.desc}>
            Tuc-Tuc merupakan alat transportasi yang berada di dalam kampus yang
            dapat digunakan oleh mahasiswa/i Telkom University untuk memudahkan
            mobilisasi atau kegiatan dalam lingkungan kampus. Karena itu kami
            membuat aplikasi MyTuc. MyTuc merupakan aplikasi mobile apps
            berbasis AR yang dibuat untuk memudahkan mahasiswa/i Telkom
            University untuk memantau rute Tel-U Car (TUC). Dimana pada aplikasi
            ini terdapat menu untuk rute, jadwal, tentang, dan bantuan. Serta
            pada aplikasi ini juga disediakan fitur scan AR, dimana rute Tuc-Tuc
            akan ditampilkan secara 3D animasi agar lebih memudahkan mahasiswa/i
            Telkom University untuk memahami rute Tuc-tuc. Dalam pembuatan
            aplikasi ini, kami menggunakan Blender untuk 3D modelling
            bangunan-bangunan yang dilewati oleh TUC. Selain itu, kami juga
            menggunakan Figma untuk desain interface dari aplikasi MyTUC ini.
            Terakhir, kami menggunakan Game Engine Unity untuk mewujudkan
            aplikasi MyTUC ini agar dapat di gunakan di HP masing-masing.
          </p>
          <div className={styles.containerbtn}>
            <div className={styles.Button}>
              <Button text="Download" url="https://bit.ly/DownloadMyTucApp" />
              <button onClick={openModal} className={styles.scanQrButton}>
                Scan QR
              </button>
              <button onClick={openModal} className={styles.scanTI}>
                Target Image
              </button>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/mytuctuc/GIS.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img src="/mytuctuc/QR.jpeg" alt="QR Code" />
            <button onClick={closeModal} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTucTuc;
