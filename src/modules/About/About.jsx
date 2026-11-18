"use client";

import { useRef } from "react";
import Image from "next/image";
import Container from "../../shared/Container/Container.jsx";
import style from "./About.module.scss";

const milestones = [
  {
    number: "01",
    label: "Камінг-аут",
    text: "Майже все життя я вважав себе геєм. Але відкритися комусь було дуже страшно. У 28 років уперше розповів про це найближчій подрузі, згодом — іншим друзям. Тоді здавалося, що найскладніше позаду: я нарешті дозволив собі бути собою. Але приблизно через рік моє усвідомлення себе змінилося. Я зрозумів, що бути з чоловіком — не моя історія, й почав усвідомлювати себе як гетеросексуального чоловіка. Подруга, якій я першій відкрився, стала моєю дівчиною.",
  },
  {
    number: "02",
    label: "Служба в ЗСУ",
    text: "Потім була служба в ЗСУ, до якої я долучився не з власної волі. Роль, у якій я найменше себе уявляв, змусила по-новому подивитися на страх, відповідальність, силу та власні межі. Звідси — мій інтерес до здорової маскулінності: як бути опорою, не боятися проявляти свої почуття й поважати інших.",
  },
  {
    number: "03",
    label: "Пошук відповідей",
    text: "Я шукав відповіді в психології, психіатрії, книгах, духовних практиках, нумерології, таро, астрології, нетрадиційній медицині та магії. Щось переосмислив, щось залишив позаду. Навчився розрізняти знання, переконання й особисті інтерпретації. Я навчався в аспірантурі за спеціальністю «Психологія». Зараз глибоко вивчаю буддизм із програм тибетських монахів.",
  },
];

const principles = [
  "Говорити про незручне",
  "Сумніватися",
  "Не мати готових відповідей",
];

export default function About() {
  const sectionRef = useRef(null);

  // параллакс портрета и контурного слова через CSS-переменные
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
      className={style.about}
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      data-testid="about-section"
    >
      <Container>
        <div className={style.inner}>
          <div className={style.visual}>
            <div className={style.frame}>
              <Image
                src="/photo/photo-valera.jpg"
                alt="Валерій — провідник трансформаційної гри Ліла"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={style.photo}
              />
            </div>
            <div className={style.badge} data-testid="about-badge">
              <svg viewBox="0 0 100 100" className={style.badgeText}>
                <defs>
                  <path
                    id="aboutCircle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath href="#aboutCircle">
                    провідник гри · 2+ роки практики ·
                  </textPath>
                </text>
              </svg>
              <span className={style.badgeDot} />
            </div>
            <p className={style.caption}>Валерій — провідник гри «Ліла»</p>
          </div>

          <div className={style.content}>
            <p className={style.overline} data-testid="about-overline">
              Про мене
            </p>

            <h2 className={style.title} data-testid="about-title">
              <span className={style.titleLine}>
                <span className={style.titleLineInner}>
                  Я — Валерій, провідник
                </span>
              </span>
              <span className={style.titleLine}>
                <span className={style.titleLineInner}>
                  трансформаційної гри{" "}
                  <em className={style.titleAccent}>«Ліла»</em>
                </span>
              </span>
            </h2>

            <p className={style.lead}>
              Уже два роки я проводжу гру й допомагаю людям досліджувати їх
              проблеми та переходити від усвідомлень до конкретних дій. До цього
              мене привела власна потреба розібратися: хто я, чого хочу і як
              жити чесно із собою.
            </p>

            <div className={style.milestones}>
              {milestones.map((item) => (
                <div
                  key={item.number}
                  className={style.milestone}
                  data-testid={`about-milestone-${item.number}`}
                >
                  <div className={style.milestoneMarker}>
                    <span className={style.milestoneNumber}>{item.number}</span>
                    <span className={style.milestoneLine} />
                  </div>
                  <div className={style.milestoneBody}>
                    <h3 className={style.milestoneLabel}>{item.label}</h3>
                    <p className={style.milestoneText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className={style.quote} data-testid="about-quote">
              <p>
                Головне, що я зрозумів: універсального методу немає. Інструменти
                й підтримка допомагають, але приймати рішення та діяти
                доводиться самому.
              </p>
            </blockquote>

            <div className={style.closing}>
              <p>
                Я передаю лише те, що випробував на собі, враховуючи, що твій
                досвід відрізняється від мого. Я допомагаю розібратися в тому,
                що відбувається, побачити власні бажання та визначити конкретні
                кроки.
              </p>
              <div className={style.principles} data-testid="about-principles">
                {principles.map((item) => (
                  <span key={item} className={style.principle}>
                    {item}
                  </span>
                ))}
              </div>
              <p className={style.closingNote}>
                Зі мною можна говорити про незручне, сумніватися й не мати
                готових відповідей.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
