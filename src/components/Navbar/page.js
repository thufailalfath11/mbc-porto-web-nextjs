"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const links = [
  {
    id: 1,
    title: " Beranda",
    url: "/beranda",
  },
  {
    id: 2,
    title: " Tentang",
    url: "/tentang",
  },
  {
    id: 3,
    title: " Profile",
    url: "/profile",
    submenu: [
      {
        id: 31,
        title: "Pembina",
        url: "/profile/pembina",
      },
      {
        id: 32,
        title: "Asisten",
        url: "/profile/asisten",
      },
      {
        id: 33,
        title: "Calon Asisten",
        url: "/profile/caas",
      },
      
    ],
  },
  {
    id: 4,
    title: " Tugas",
    url: "/tugas",
    submenu: [
      {
        id: 41,
        title: "MyTuc",
        url: "/tugas/mytuctuc",
      },
      {
        id: 42,
        title: "Ruins",
        url: "/tugas/ruins",
      },
      {
        id: 43,
        title: "Machine Learning",
        url: "/tugas/mechinelearning",
      },
      {
        id: 44,
        title: "Website",
        url: "/tugas/website",
      },
    ],
  },
  {
    id: 5,
    title: " Kontak",
    url: "/kontak",
  },
];

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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

  const navbarClassName = isScrolled
    ? `${styles.container} ${styles.fixedNavbar}`
    : styles.container;

  return (
    <div className={navbarClassName}>
      <div className={styles.containerlogo}>
        <Link className={styles.logo} href="/beranda">
          MBC
        </Link>
        <Link className={styles.logo2} href="/beranda">
          Porto
        </Link>
      </div>
      <div className={styles.links}>
        {links.map((link) =>
          link.title === " Tugas" || link.title === " Profile" ? (
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
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          )
        )}
      </div>
      <div className="flex justify-center items-center gap-4">
        <DarkModeToggle />
        <div className={styles.currentTime}>{formattedTime}</div>
      </div>
    </div>
  );
};

export default Navbar;
