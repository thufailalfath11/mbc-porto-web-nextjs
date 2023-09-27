import React from "react";
import styles from "./MyTucTuc.module.css";
import 'aos/dist/aos.css';
import Image from "next/image";
import Button from "@/common/Button/Button"; 


function MyTucTuc() {
  return (
    <div className={styles.container}>
  
        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>sdafsdfasdfsd</h1>
            <p className={styles.desc}>sadfsadbfjsadfbsjhdbf</p>
            <Button text="Download" url='https://bit.ly/DownloadMyTucApp' />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/mytuctuc/gis.jpeg"
              alt=""
            />
          </div>
        </div>
    </div>
  );
}

export default MyTucTuc;
