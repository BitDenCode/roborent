import React from "react";
import { useNavigate } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import styles from "./HomePage.module.css";

import background from "../../assets/background.png";


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Верхний блок с фоном */}
      <div
        className={styles.homePage}
        style={{ backgroundImage: `url(${background})` }}
      >
        <img src="/logo.svg" alt="Логотип" className={styles.logo} />
        <div className={styles.overlay}>
          
          {/*<div className={styles.memberCardo}>*/}
          <p className={styles.mainText}>
            RoboRent — будущее уже рядом
          </p>
          <button className={styles.button} onClick={() => navigate("/consult")}>
            Получить консультацию
          </button>
          <p className={styles.subText}>
            Аренда роботов для бизнеса и дома
          </p>
          
          
          

          
        </div>
         

        <BottomMenu />
      </div>
    </>
  );
};

export default HomePage;
