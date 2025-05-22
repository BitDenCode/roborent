import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // если используешь глобальные стили

// Безопасная типизация Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

interface TelegramWebApp {
  ready: () => void;
  close: () => void;
  sendData: (data: string) => void;
  themeParams?: {
    bg_color?: string;
    text_color?: string;
    button_color?: string;
    button_text_color?: string;
  };
  initDataUnsafe?: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
    };
  };
  MainButton?: {
    show: () => void;
    hide: () => void;
    setText: (text: string) => void;
    onClick: (cb: () => void) => void;
  };
}

// Инициализация Telegram WebApp
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  console.log("✅ Telegram WebApp инициализирован.");

  // (опционально) установить фон приложения
  if (tg.themeParams?.bg_color) {
    document.body.style.backgroundColor = tg.themeParams.bg_color;
  }
} else {
  console.warn("❗ Telegram.WebApp не доступен. Приложение запущено вне Telegram.");
}

// React-инициализация
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
