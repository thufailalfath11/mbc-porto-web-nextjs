'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkMode/DarkModeToggle'

const links = [
  {
    id: 1,
    title: "| Beranda",
    url: "/beranda",
  },
  {
    id: 2,
    title: "| Tentang",
    url: "/tentang",
  },
  {
    id: 3,
    title: "| Divisi",
    url: "/divisi",
  },
  {
    id: 4,
    title: "| Kontak",
    url: "/kontak",
  },
]

const subMenu = [
  "BigData",
  "CyberSecurity",
  "GameTech",
  "GIS",
]

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  useEffect(() => {
    // Fungsi yang akan dipanggil saat halaman digulir
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener ke window untuk mendengarkan event scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen Navbar di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = isScrolled ? `${styles.container} ${styles.fixedNavbar}` : styles.container;

  return (
    <div className={navbarClassName}>
      <Link className={styles.logo} href='/beranda'>MBC Porto</Link>
      <div className={styles.links}>
        {links.map(link => (
          link.title === "| Divisi" ? (
            <div
              key={link.id}
              className={styles.submenu}
              onMouseEnter={toggleSubMenu}
              onMouseLeave={toggleSubMenu}
            >
              <span className={styles.linkTitle}>{link.title}</span>
              {showSubMenu && (
                <div className={styles.submenuContent}>
                  {subMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={`/divisi/${item.toLowerCase()}`}
                      className={styles.submenuItem}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          )
        ))}
        
      </div>
      <DarkModeToggle/>
    </div>
  )
}

export default Navbar
