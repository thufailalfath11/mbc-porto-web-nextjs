"use client";
import React, { useEffect } from "react";
import styles from "./Tentang.module.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Button from "@/common/Button/Button";
import { items } from "./items";
import { Link, Element } from "react-scroll";

function Tentang() {
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
          <div
            className={styles.item}
            data-aos="fade-up"
          >
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>

              {item.id === 3 && (
                <Button text="Lihat Divisi Kami" url={item.url} />
              )}
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

      {/* Buat tombol-tombol untuk menavigasi ke setiap elemen */}
      <div className={styles.navigation}>
        {items.map((item) => (
          <Link
            key={item.id}
            to={`item${item.id}`}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tentang;
