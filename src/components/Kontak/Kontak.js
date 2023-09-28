import React from "react";
import styles from "./kontak.module.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import Link from "next/link";
import { BsLine } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { list } from "postcss";

export default function Kontak() {
  return (
    <form className={styles.containerbadag}>
      <h1 className={styles.title}>Hubungi kami</h1>
      <div className={styles.block}>
        <div className={styles.block}>
          <label htmlFor="frm-email">Email</label>
          <input
            className={styles.input}
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.block}>
          <label htmlFor="frm-phone">No telefon</label>
          <input
            className={styles.input}
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
            required
          />
        </div>
      </div>
      <div className={styles.name}>
        <div>
          <label htmlFor="frm-first">Nama awal</label>
          <input
            className={styles.input}
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Nama akhir</label>
          <input
            className={styles.input}
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className={styles.block}>
        <label htmlFor="frm-message">Pesan</label>
        <textarea
          className={styles.textarea}
          id="frm-message"
          rows="6"
          name="message"
        ></textarea>
      </div>

      <div className={styles.button}>
        <button className={styles.blockbutton} type="submit">
          Kirim
        </button>
      </div>

      <div className={styles.mapcontainer}>
        <div className={styles.map}>
          <iframe
            width="100%"
            height="250"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.339012673631!2d107.62596047211815!3d-6.96927299303129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sen!2sid!4v1689878358905!5m2!1sen!2sid"
          ></iframe>
        </div>
      </div>
      <div>
        <br />
        <ul className={styles.rowlist}>
          <li className={styles.icon}>
            <Link href="https://liff.line.me/1645278921-kWRPP32q/?accountId=sok8073r">
              <BsLine size={50} />
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href="https://github.com/thufailalfath11/mbc-porto-web-nextjs.git">
              <AiFillGithub size={50} />
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href="https://www.instagram.com/mbclab/?hl=id">
              <AiFillInstagram size={50} />
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href=" https://www.linkedin.com/company/mbclaboratory/?hl=id">
              <AiFillLinkedin size={50} />
            </Link>
          </li>
        </ul>
      </div>
    </form>
  );
}
