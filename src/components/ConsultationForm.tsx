import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsultationForm.module.css";
import BottomMenu from "./BottomMenu";
import background from "../assets/backgroundtwo.png"


const ConsultationForm = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.formContainer}>
        <h2>Заполните форму</h2>
        <input className={styles.input} type="text" placeholder="Имя" maxLength={30} />
        <input className={styles.input} type="tel" placeholder="Телефон" maxLength={30} />
        <textarea 
          className={styles.textarea} 
          placeholder="Укажите доп. информацию"
          maxLength={200}
          rows={4} 
        />
        <button className={styles.button} onClick={() => navigate("/")}>Оставить заявку</button>
      </div>
      <BottomMenu />  
    </div>
    
  );
};

export default ConsultationForm;
