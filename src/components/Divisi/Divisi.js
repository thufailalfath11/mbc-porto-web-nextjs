"use client";
import React, { useEffect } from "react";
import styles from "./Divisi.module.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import { items } from "./items";
import { Link, Element } from "react-scroll";

function Divisi() {
  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <Element name={`item${item.id}`} key={item.id}>
          <div className={styles.item} data-aos="fade-up">
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
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              />
            </div>
          </div>
        </Element>
      ))}
    </div>
  );
}

export default Divisi;
