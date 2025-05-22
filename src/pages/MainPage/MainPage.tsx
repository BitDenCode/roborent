import React from "react";
import { Link } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import styles from "../../style/App.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <section id="home" className={styles.section}>Главная</section>
      <section id="about" className={styles.section}>О нас</section>
      <section id="services" className={styles.section}>Наши услуги</section>
      <section id="consult" className={styles.section}>
        Консультация
        <Link to="/consultation">
          <button className={styles.button}>Получить консультацию</button>
        </Link>
      </section>
      <BottomMenu />
    </div>
  );
};

export default MainPage;
