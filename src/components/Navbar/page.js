"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'

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
  "Big Data",
  "Cyber Security",
  "Game Tech",
  "GIS",
]

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Navbar
