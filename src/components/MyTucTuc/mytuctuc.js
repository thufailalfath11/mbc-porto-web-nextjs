"use client"
import React, { useState, useEffect } from "react";
import styles from "./MyTucTuc.module.css";
import "aos/dist/aos.css";
import Image from "next/image";
import Button from "@/common/Button/Button";
import AOS from "aos";

function MyTucTuc() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    setIsModalOpen2(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div
          className={styles.content}
          data-aos="fade-up" // Efek fade-in saat muncul
        >
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
              <button onClick={openModal2} className={styles.scanQrButton}>
                Target Image
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.imgContainer}
          data-aos="fade-right" // Efek fade-in dari kanan saat muncul
        >
          <Image
            className={styles.img}
            fill={true}
            src="/mytuctuc/GIS.jpg"
            alt=""
          />
        </div>
      </div>

     
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
      {isModalOpen2 && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* Add your modal 2 content here */}
            
            <img src="/mytuctuc/gis.jpeg" alt="QR Code" />
            <button onClick={closeModal2} className={styles.closeButton}>
              Close Modal 2
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTucTuc;
