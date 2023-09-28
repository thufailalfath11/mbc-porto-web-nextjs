"use client";
import React, { useState } from "react";
import styles from "./Ruins.module.css";
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
          <h1 className={styles.title}>Ruins</h1>
          <p className={styles.desc}>DESKRIPSI RUINS</p>
          <div className={styles.containerbtn}>
            <div className={styles.Button}>
              <Button
                text="Download"
                url="https://drive.google.com/drive/folders/1EyHMboyqCc-3ZMuI02SCLBimJw4ScpCd?usp=sharing"
              />
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/Ruins/Ruins.png"
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
    </div>
  );
}

export default MyTucTuc;
