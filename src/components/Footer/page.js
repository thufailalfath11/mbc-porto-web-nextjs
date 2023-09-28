"use client";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.containerlogo}>
          <Link className={styles.logo} href="/beranda">
            MBC
          </Link>
          <Link className={styles.logo2} href="/beranda">
            Porto
          </Link>
          <div className={styles.copyright}>
            Copyright ©2023 - CAAS MBC 2023. All Rights Reserved.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
