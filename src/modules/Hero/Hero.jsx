"use client";

import { useRef } from "react";
import Image from "next/image";
import Container from "../../shared/Container/Container.jsx";
import style from "./Hero.module.scss";

const TELEGRAM_URL = "https://t.me/username";

const steps = [
  { number: "01", text: "Формулюємо твій запит" },
  { number: "02", text: "Кидаєш кубик, рухаєшся полем" },
  { number: "03", text: "Досліджуємо те, що відгукується" },
  { number: "04", text: "Визначаємо конкретні дії" },
];

export default function Hero() {
  const heroRef = useRef(null);

  // параллакс + spotlight + 3D-наклон артефакта через CSS-переменные
  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", x.toFixed(3));
    el.style.setProperty("--my", y.toFixed(3));
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={style.hero}
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      data-testid="hero-section"
    >
      {/* глубина: фото */}
      <div className={style.background}>
        <Image
          src="/photo/hero.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={style.backgroundImage}
        />
        <div className={style.overlay} />
      </div>

      {/* свет, следующий за курсором */}
      <div className={style.spotlight} />

      {/* гигантское контурное слово на заднем плане */}
      <span className={style.ghostWord} aria-hidden="true">
        ЛІЛА
      </span>

      {/* вертикальная подпись на краю */}
      <span className={style.edgeLabel} aria-hidden="true">
        гра усвідомлення · 72 клітини
      </span>

      <Container>
        <div className={style.inner}>
          <div className={style.topRow}>
            <div className={style.content}>
              <p className={style.overline} data-testid="hero-overline">
                Трансформаційна гра
              </p>

              <h1 className={style.title} data-testid="hero-title">
                <span className={style.titleLine}>
                  <span className={style.titleLineInner}>Ліла — гра,</span>
                </span>
                <span className={style.titleLine}>
                  <span className={style.titleLineInner}>
                    щоб <em className={style.titleAccent}>глибше</em>
                  </span>
                </span>
                <span className={style.titleLine}>
                  <span className={style.titleLineInner}>зрозуміти себе</span>
                </span>
              </h1>

              <p className={style.description} data-testid="hero-description">
                Досліди свій запит і визнач конкретні кроки до змін. Під час гри
                ми разом розглянемо твою ситуацію та пропишемо дії, з яких ти
                готовий почати.
              </p>

              <div className={style.actions}>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.telegramButton}
                  data-testid="hero-telegram-button"
                >
                  <svg
                    className={style.telegramIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Записатися в Telegram
                </a>
                <button
                  type="button"
                  className={style.secondaryButton}
                  onClick={() => scrollTo("#what-is-leela")}
                  data-testid="hero-learn-more-button"
                >
                  Дізнатися про гру
                  <span className={style.arrowDown}>↓</span>
                </button>
              </div>
            </div>

            {/* артефакт: 3D-карточка игры */}
            <aside className={style.artifact} data-testid="hero-steps-card">
              <div className={style.artifactCard}>
                <div className={style.artifactHeader}>
                  <p className={style.stepsTitle}>Як відбувається гра</p>
                  <svg
                    className={style.diceIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle
                      cx="8.2"
                      cy="8.2"
                      r="1.1"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="1.1"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle
                      cx="15.8"
                      cy="15.8"
                      r="1.1"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle
                      cx="15.8"
                      cy="8.2"
                      r="1.1"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle
                      cx="8.2"
                      cy="15.8"
                      r="1.1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>
                <ol className={style.stepsList}>
                  {steps.map((step, index) => (
                    <li
                      key={step.number}
                      className={style.step}
                      style={{ animationDelay: `${0.6 + index * 0.12}s` }}
                    >
                      <span className={style.stepNumber}>{step.number}</span>
                      <span className={style.stepText}>{step.text}</span>
                    </li>
                  ))}
                </ol>
                <div className={style.artifactGlare} />
              </div>
            </aside>
          </div>

          <ul className={style.facts} data-testid="hero-facts">
            <li className={style.fact}>
              <span className={style.factNumber}>72</span>
              <span className={style.factLabel}>клітини досвіду</span>
            </li>
            <li className={style.factDivider} />
            <li className={style.fact}>
              <span className={style.factNumber}>2+</span>
              <span className={style.factLabel}>роки практики</span>
            </li>
            <li className={style.factDivider} />
            <li className={style.fact}>
              <span className={style.factNumber}>3</span>
              <span className={style.factLabel}>формати гри</span>
            </li>
          </ul>
        </div>
      </Container>

      {/* плёночное зерно поверх всего */}
      <div className={style.grain} aria-hidden="true" />
    </section>
  );
}
