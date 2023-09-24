'use client';
import TypingText from "@/common/TypingText/TypingText";
import React, { useEffect, useState } from "react";
import styles from "./Tentang.module.css";
import 'aos/dist/aos.css';
import Image from "next/image";

function Tentang() {
  return (
    <div className={styles.container}>
      <div className={styles.judul}>
        <img src="kerjasama.jpg" className={styles.foto} />
        MBC porto
      </div>

      <div className={styles.rowContainer}>
        <div className={styles.gambarContainer}>
          <img src="/path/to/gambar1.jpg" alt="Gambar 1" />
        </div>
        <div className={styles.teksContainer}>
          <h2>Judul 1</h2>
          <p>Ini adalah teks untuk kontainer 1.</p>
        </div>
      </div>

      <div className={styles.rowContainer}>
        <div className={styles.gambarContainer}>
          <img src="/path/to/gambar2.jpg" alt="Gambar 2" />
        </div>
        <div className={styles.teksContainer}>
          <h2>Judul 2</h2>
          <p>Ini adalah teks untuk kontainer 2.</p>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
