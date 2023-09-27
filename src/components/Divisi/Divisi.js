import React from "react";
import styles from "./Divisi.module.css";
import 'aos/dist/aos.css';
import Image from "next/image";
import { items } from "./items";

function Divisi() {
  return (
    <div className={styles.container}>

      {items.map(item => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
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

export default Divisi;