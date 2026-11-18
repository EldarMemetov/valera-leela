"use client";

import { useRef } from "react";
import Image from "next/image";
import Container from "../../shared/Container/Container.jsx";
import style from "./WhatIsLeela.module.scss";

const themes = [
  "бажання",
  "страхи",
  "прив'язаності",
  "радість",
  "вибір",
  "внутрішні опори",
];

export default function WhatIsLeela() {
  const sectionRef = useRef(null);

  // параллакс фото от мыши через CSS-переменные
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
              Гра, у центрі якої — <em className={style.titleAccent}>ти</em>,
              твоя проблема і твоє життя зараз
            </h2>

            <p className={style.lead}>
              «Ліла» — трансформаційна гра з індійської духовної традиції.
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
              історію. Ця символіка стає приводом подивитися на себе: що
              підтримує твій рух, а де ти знову повторюєш знайомий сценарій?
            </p>

            <div className={style.symbolism} data-testid="leela-symbolism">
              <div className={style.symbolCard}>
                <span className={style.symbolIcon}>↗</span>
                <div>
                  <h3 className={style.symbolTitle}>Стріли</h3>
                  <p className={style.symbolText}>ведуть угору</p>
                </div>
              </div>
              <div className={style.symbolCard}>
                <span className={style.symbolIcon}>↘</span>
                <div>
                  <h3 className={style.symbolTitle}>Змії</h3>
                  <p className={style.symbolText}>повертають назад</p>
                </div>
              </div>
            </div>

            <p className={style.text}>
              Я допомагаю тобі розібратися у своїх реакціях, побачити звязки та
              сформулювати власні висновки. Разом ми визначаємо конкретні дії, з
              яких ти готовий почати зміни.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
