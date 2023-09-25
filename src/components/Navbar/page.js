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
    title: "| Profile",
    url: "/profile",
  },
  {
    id: 4,
    title: "| Tugas",
    url: "/tugas",
    submenu: [
      {
        id: 41,
        title: "MyTucTuc",
        url: "/tugas/mytuctuc",
      },
      {
        id: 42,
        title: "Ruins",
        url: "/tugas/ruins",
      },
      {
        id: 43,
        title: "Mechine Learning",
        url: "/tugas/mechinelearning",
      },
      {
        id: 43,
        title: "Website",
        url: "/tugas/website",
      },
    ],
  },
  {
    id: 5,
    title: "| Kontak",
    url: "/kontak",
  },
]

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
          link.title === "| Tugas" ? (
            <div
              key={link.id}
              className={styles.submenu}
              onMouseEnter={toggleSubMenu}
              onMouseLeave={toggleSubMenu}
            >
              <span className={styles.linkTitle}>{link.title}</span>
              {showSubMenu && (
                <div className={styles.submenuContent}>
                  {link.submenu.map((item, index) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className={styles.submenuItem}
                    >
                      {item.title}
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
      <DarkModeToggle />
    </div>
  )
}

export default Navbar
