import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaRobot, FaRocket } from "react-icons/fa";
import styles from "../style/App.module.css";


const BottomMenu = () => (
  <nav className={styles.bottomMenu}>
    <NavLink to="/home" className={styles.menuItem}>
      <FaHome className={styles.icon} /> <span>Главная</span>
    </NavLink>
    <NavLink to="/about" className={styles.menuItem}>
      <FaInfoCircle className={styles.icon} /> <span>О нас</span>
    </NavLink>
    <NavLink to="/services" className={styles.menuItem}>
      <FaRobot className={styles.icon} /> <span>Аренда</span>
    </NavLink>
    <NavLink to="/consult" className={styles.menuItem}>
      <FaRocket className={styles.icon} /> <span>Консультация</span>
    </NavLink>
  </nav>
);

export default BottomMenu;
