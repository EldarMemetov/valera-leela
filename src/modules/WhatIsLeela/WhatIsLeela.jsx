"use client";

import { useRef } from "react";
import Image from "next/image";
import Container from "../../shared/Container/Container.jsx";
import style from "./WhatIsLeela.module.scss";

const themes = [
  "бажання",
  "страхи",
  "прив’язаності",
  "радість",
  "вибір",
  "внутрішні опори",
];

export default function WhatIsLeela() {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", x.toFixed(3));
    el.style.setProperty("--my", y.toFixed(3));
  };

  return (
    <section
      className={style.leela}
      id="what-is-leela"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      data-testid="what-is-leela-section"
    >
      <span className={style.ghostNumber} aria-hidden="true">
        72
      </span>

      <Container>
        <div className={style.inner}>
          <div className={style.gallery} data-testid="leela-gallery">
            <div className={style.photoMain}>
              <Image
                src="/photo/leela-1.jpg"
                alt="Ігрове поле Ліли зі зміями та стрілами"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className={style.photoImg}
              />
              <span className={style.photoBadge}>72 клітини</span>
            </div>
            <div className={style.photoSecond}>
              <Image
                src="/photo/leela-2.jpg"
                alt="Кубик та фішки гри Ліла"
                fill
                sizes="(max-width: 768px) 50vw, 240px"
                className={style.photoImg}
              />
            </div>
            <div className={style.photoThird}>
              <Image
                src="/photo/leela-3.jpg"
                alt="Атмосфера гри Ліла"
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className={style.photoImg}
              />
            </div>
          </div>

          <div className={style.content}>
            <p className={style.overline} data-testid="leela-overline">
              Що таке Ліла
            </p>

            <h2 className={style.title} data-testid="leela-title">
              <em className={style.titleAccent}>«Ліла»</em> — трансформаційна
              гра з індійської духовної традиції
            </h2>

            <p className={style.lead}>
              У центрі гри — ти, твоя проблема і те, що відбувається у твоєму
              житті зараз.
            </p>

            <div className={style.themesBlock} data-testid="leela-themes">
              <p className={style.themesText}>
                На ігровому полі — <strong>72 клітини</strong>. Кожна розкриває
                окрему тему людського досвіду:
              </p>
              <div className={style.themes}>
                {themes.map((theme) => (
                  <span key={theme} className={style.theme}>
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <p className={style.text}>
              Ти кидаєш кубик, рухаєшся полем і досліджуєш ці теми через власну
              історію.
            </p>

            <div className={style.symbolism} data-testid="leela-symbolism">
              <div className={style.symbolCard}>
                <span className={style.symbolIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
                <div>
                  <h3 className={style.symbolTitle}>Стріли</h3>
                  <p className={style.symbolText}>ведуть угору</p>
                </div>
              </div>
              <div className={style.symbolCard}>
                <span className={style.symbolIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7l10 10" />
                    <path d="M17 8v9H8" />
                  </svg>
                </span>
                <div>
                  <h3 className={style.symbolTitle}>Змії</h3>
                  <p className={style.symbolText}>повертають назад</p>
                </div>
              </div>
            </div>

            <p className={style.text}>
              Ця символіка стає приводом подивитися на себе: що підтримує твій
              рух, а де ти знову повторюєш знайомий сценарій?
            </p>

            <p className={style.text}>
              Я допомагаю тобі розібратися у своїх реакціях, побачити зв’язки та
              сформулювати власні висновки. Разом ми визначаємо конкретні дії, з
              яких ти готовий почати зміни.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
