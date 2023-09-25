import React from "react";
import styles from "./Tentang.module.css";
import 'aos/dist/aos.css';
import Image from "next/image";
import Button from "@/common/Button/Button"; // Saya asumsikan Anda memiliki komponen Button yang diimpor dari lokasi yang benar
import { items } from "./items"; // Ganti "path-to-your-items-file" dengan lokasi file items.js Anda

function Tentang() {
  return (
    <div className={styles.container}>

      {items.map(item => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url={item.url} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tentang;
