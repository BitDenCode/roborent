import React from "react";
import { useNavigate } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import styles from "./ConsultationPage.module.css";

import background from "../../assets/backgroundtwo.png"

const ConsultationPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src="/logo.svg" alt="Роборент" className={styles.logo} />

      <div className={styles.content}>      
        <h1 className={styles.title}>
          Мы поможем вам подобрать <span className={styles.highlight}>идеальное решение</span><br />
          под ваши задачи
        </h1>

        <p className={styles.description}>
          Роботы — это эффективный способ автоматизировать бизнес-процессы или внедрить инновации в свою жизнь. Предлагаем бесплатную консультацию, в ходе которой наши специалисты помогут подобрать подходящее для вас решение.
        </p>

        <button
          className={styles.button}
          onClick={() => navigate("/consultation-form")}
        >
          Получить консультацию
        </button>
      </div>

      <BottomMenu />
    </div>
  );
};

export default ConsultationPage;
