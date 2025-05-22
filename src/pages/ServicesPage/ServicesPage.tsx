import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomMenu from "../../components/BottomMenu";
import styles from "./ServicesPage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import teamBq from "../../assets/126.png"; // добавь картинку с этим именем рядом
import teamBw from "../../assets/125.png"; // добавь картинку с этим именем рядом
import teamBe from "../../assets/127.png"; // добавь картинку с этим именем рядом
import teamBr from "../../assets/123.png"; // добавь картинку с этим именем рядом
import teamBt from "../../assets/128.png"; // добавь картинку с этим именем рядом


const robots = [
  {
    name: "Majordomo 3.0",
    image: teamBe,
    shortDesc:
      "Изысканный и вежливый робот-дворецкий — воплощение роскоши и стиля",
    fullDesc: `Встречает гостей, подаёт напитки, напоминает о важных делах, управляет умным домом и поддерживает беседу. Идеальное решение для частных домов, мероприятий и VIP-обслуживания.
Ключевые функции:
• Оснащён "OpenTheDoor AI";
• Управление умными устройствами;
• Поддержание порядка в доме;
• Организация времени и напоминания.`,
  },
  {
    name: "Robodog Niku3000",
    image: teamBq,
    shortDesc:
      "Оснащён датчиками препятствий, голосовым управлением и функцией распознавания лиц",
    fullDesc: `Интерактивный и дружелюбный робот — идеальный компаньон. Оснащён "OpenTheDoor AI", может быть прекрасным собеседником.
Ключевые функции:
• Прекрасно взаимодействует с окружением;
• Раз в квартал автоматически обновляет ПО;
• Долговечность и простота в уходе.`,
  },
  // Добавляй следующие карточки сюда аналогично
  {
    name: "Securitybot 5",
    image: teamBw,
    shortDesc:
      "Оборудован современными системами безопасности",
    fullDesc: `Надежный страж вашего дома или предприятия. Робот обеспечивает круглосуточный мониторинг и защиту. Может патрулировать заданные территории, выявлять подозрительные активности и мгновенно сообщать о них владельцу.
Ключевые функции:
• Круглосуточный мониторинг;
• Камеры высокого разрешения;
• Системы оповещения;
• Датчики движения;
• Автоматическое патрулирование.`,
  },  
  {
    name: "SmartСourier",
    image: teamBr,
    shortDesc:
      "Быстрая, безопасная и эффективная доставка грузов",
    fullDesc: `Самостоятельно строить маршрут, избегает препятствия, распознает пешеходов, автомобили и дорожные условия. Благодаря этому он может доставлять заказы как по тротуарам, так и в пределах закрытых территорий: кампусов, бизнес-центров, складских комплексов и жилых районов.
Ключевые функции:
• Оснащён "OpenTheDoor AI";
• Автономная навигация;
• Грузоподъёмность: до 50 кг;
• Скорость и маневренность.`,
  },
  {
    name: "Security 7",
    image: teamBt,
    shortDesc:
      "Оснащён передовыми сенсорами и системой искусственного интеллекта, позволяющей ему самостоятельно принимать решения",
    fullDesc: `Патрулирует территорию, анализирует обстановку в режиме реального времени, определяет вторжения и передаёт данные в центр управления. Может работать в любых погодных условиях и в труднодоступных местах. Отличный выбор для охраны частных владений и предприятий.
Ключевые функции:
• Оснащён "AI Killer";
• Тепловизор;
• Пуленепробиваемый;
• Лазерный меч.`,
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    navigate("/consultation-form");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Испытайте технологии завтрашнего дня уже сегодня. Просто выберите робота — мы позаботимся обо всём остальном!</h2>

      {robots.map((robot, index) => (
        <div key={index} data-aos="fade-up">
          <div className={styles.caseCard}>
            <div
              className={styles.teamBlock}
              style={{ backgroundImage: `url(${robot.image})` }}
            >
              <div className={styles.topText}>
                <h3 className={styles.name}>{robot.name}</h3>
              </div>

              <div className={styles.bottomText}>
                <p className={styles.bio}>{robot.shortDesc}</p>
              </div>
            </div>

            <div className={styles.fullDescription}>
              <p>{robot.fullDesc}</p>
              <button className={styles.rentButton} onClick={handleClick}>
                Арендовать
              </button>
            </div>
          </div>
        </div>
      ))}

      <BottomMenu />
    </div>
  );
};

export default ServicesPage;