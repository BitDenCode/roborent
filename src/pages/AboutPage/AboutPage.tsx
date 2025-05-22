import React, { useEffect } from "react";
import BottomMenu from "../../components/BottomMenu";
import styles from "./AboutPage.module.css";
import background from "../../assets/backgroundtwo.png"
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {

  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    
      <div className={styles.aboutBlock} style={{ backgroundImage: `url(${background})` }}>
        <h2 className={styles.title}>О нас</h2>
        <p className={styles.description}>
          <span className={styles.orange}>ROBORENT</span> это инновационная компания по аренде роботов для бизнеса и частных лиц. Мы предлагаем широкий парк высокотехнологичных роботов, адаптированных под любые задачи.
        </p>

        
          <div className={styles.memberCard} data-aos="fade-up">
            <img src="/avatar1.jpg" alt="Avatar 1" className={styles.avatar} />
            <h3 className={styles.name}>Денис</h3>
            <p className={styles.role}>Developer</p>
            <p className={styles.bio}>
              Разработка и внедрение приложений в Telegram mini App / Telegram Web App для вашего бизнеса.
            </p>
          </div>

          <div className={styles.memberCard} data-aos="fade-up">
            <img src="/avatar2.jpg" alt="Avatar 2" className={styles.avatar} />
            <h3 className={styles.name}>Теслос</h3>
            <p className={styles.role}>Manager</p>
            <p className={styles.bio}>
              Ответственный и целеустремлённый сотрудник, обладающий необходимыми профессиональными знаниями и навыками в своей области. Отличается вниманием к деталям, умением работать в команде и высокой степенью самоорганизации. Проявляет инициативу в решении рабочих задач, стремится к постоянному развитию и повышению эффективности процессов. Надёжный член команды, способный справляться с задачами различного уровня сложности в установленные сроки.
            </p>
          </div>
        
      

      <BottomMenu />
    </div>
  );
};

export default AboutPage;
