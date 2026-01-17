"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import profileImg from "@/app/assets/image-avatar.jpg";
import hamIcon from "@/app/assets/icon-menu.svg";
import closeIcon from "@/app/assets/icon-menu-close.svg";
import styles from "./MainLayout.module.scss";
import MobileNav from "@/app/components/main-layout/components/MobileNav";

const MainLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Image
          className={styles.avatar}
          src={profileImg}
          width={50}
          height={50}
          alt="Profile Image"
        />
        <div className={styles.nav__container}>
          <button onClick={handleClick} className={styles.nav__button}>
            {open ? (
              <Image width={30} height={30} src={closeIcon} alt="Close Icon" />
            ) : (
              <Image
                width={30}
                height={30}
                src={hamIcon}
                alt="Hamburger Icon"
              />
            )}
          </button>

          <nav className={styles.tablet__nav}>
            <Link className={styles.link} href="#">
              Home
            </Link>
            <Link className={styles.link} href="#">
              Blog
            </Link>
            <Link className={styles.link} href="#">
              About
            </Link>
            <Link className={styles.link} href="#">
              Newsletter
            </Link>
          </nav>
        </div>
      </div>
      {open && <MobileNav />}
    </header>
  );
};

export default MainLayout;
