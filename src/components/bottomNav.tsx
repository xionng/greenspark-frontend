"use client";
import "@/styles/globals.css";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import IconPower from "../../public/icon/nav_power.svg";
import IconBook from "../../public/icon/nav_book.svg";
import IconAppliance from "../../public/icon/nav_appliance.svg";
import IconHome from "../../public/icon/nav_home.svg";
import IconMy from "../../public/icon/nav_my.svg";

import IconClickPower from "../../public/icon/nav_power_click.svg";
import IconClickBook from "../../public/icon/nav_book_click.svg";
import IconClickAppliance from "../../public/icon/nav_appliance_click.svg";
import IconClickHome from "../../public/icon/nav_home_click.svg";
import IconClickMy from "../../public/icon/nav_my_click.svg";

import styles from "./bottomNav.module.css";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname(); // 현재 경로
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    switch (pathname) {
      case "/power":
        setActiveButton("power");
        break;
      case "/book":
        setActiveButton("book");
        break;
      case "/":
        setActiveButton("home");
        break;
      case "/appliances":
        setActiveButton("appliance");
        break;
      case "/my":
        setActiveButton("my");
        break;
      default:
        setActiveButton("home");
    }
  }, [pathname]);

  const handleButtonClick = (button: string, path: string) => {
    setActiveButton(button);
    router.push(path);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBtn} onClick={() => handleButtonClick("power", "/power")}>
        {activeButton === "power" ? (
          <IconClickPower className={styles.icon} />
        ) : (
          <IconPower className={styles.icon} />
        )}
        <p
          className={`${styles.menuName} ${activeButton === "power" ? styles.menuNameActive : ""}`}
        >
          파워
        </p>
      </div>

      <div className={styles.navBtn} onClick={() => handleButtonClick("book", "/book")}>
        {activeButton === "book" ? (
          <IconClickBook className={styles.icon} />
        ) : (
          <IconBook className={styles.icon} />
        )}
        <p className={`${styles.menuName} ${activeButton === "book" ? styles.menuNameActive : ""}`}>
          백과
        </p>
      </div>

      <div className={styles.menuHomeContainer}>
        <div
          className={`${styles.menuHome} ${activeButton === "home" ? styles.menuHomeActive : ""}`}
          onClick={() => handleButtonClick("home", "/")}
        >
          {activeButton === "home" ? (
            <IconClickHome className={styles.homeIcon} />
          ) : (
            <IconHome className={styles.homeIcon} />
          )}
        </div>
      </div>

      <div className={styles.navBtn} onClick={() => handleButtonClick("appliance", "/appliances")}>
        {activeButton === "appliance" ? (
          <IconClickAppliance className={styles.icon} />
        ) : (
          <IconAppliance className={styles.icon} />
        )}
        <p
          className={`${styles.menuName} ${
            activeButton === "appliance" ? styles.menuNameActive : ""
          }`}
        >
          가전
        </p>
      </div>

      <div className={styles.navBtn} onClick={() => handleButtonClick("my", "/my")}>
        {activeButton === "my" ? (
          <IconClickMy className={styles.icon} />
        ) : (
          <IconMy className={styles.icon} />
        )}
        <p className={`${styles.menuName} ${activeButton === "my" ? styles.menuNameActive : ""}`}>
          마이
        </p>
      </div>
    </div>
  );
}
