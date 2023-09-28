"use client";
import React from "react";
import styles from "./Tentang.module.css";
import "aos/dist/aos.css";
import Image from "next/image";
import Button from "@/common/Button/Button";
import { items } from "./items";

function Tentang() {
  return (
    <div className={styles.container}>
<<<<<<< Updated upstream
      {items.map((item, index) => (
        <div className={styles.item} key={item.id} style={{ marginTop: '4cm' }}>
=======
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
>>>>>>> Stashed changes
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>

            {item.id === 3 && (
              <Button text="Lihat Divisi Kami" url={item.url} />
            )}
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tentang;
