"use client";
import Container from "../../shared/Container/Container.jsx";
import style from "./Pricing.module.scss";

const tiers = [
  {
    id: "group",
    price: "2000",
    currency: "грн",
    priceNote: "з гравця",
    name: "Групова гра",
    tagline: "Свій запит. Спільний простір. Різні погляди.",
    testId: "pricing-tier-group",
    paragraphs: [
      "Кожен учасник приходить зі своєю темою та проходить власний шлях. Ти досліджуєш свій запит, слухаєш інших і помічаєш, що відгукується саме тобі.",
      "Історія іншого гравця стає приводом точніше назвати власні переживання, а запитання іншого учасника — подивитися на ситуацію під іншим кутом. Я супроводжую гру та допомагаю кожному сформулювати власні висновки й наступні кроки.",
    ],
    note: "На початку домовляємося про конфіденційність і повагу до меж. Ти сам обираєш, чим готовий ділитися.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <circle cx="12" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: "individual",
    price: "3000",
    currency: "грн",
    name: "Індивідуальна гра",
    tagline: "Уся увага — твоєму запиту",
    testId: "pricing-tier-individual",
    paragraphs: [
      "Особиста зустріч віч-на-віч, де є простір для відвертої розмови й тем, якими хочеться ділитися приватно.",
      "Ми досліджуємо твою ситуацію через гру, розбираємо реакції та переконання, приділяємо увагу важливим для тебе питанням. Наприкінці підсумовуємо висновки й визначаємо конкретні кроки, які ти далі втілюєш самостійно.",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="12" r="2.5" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      </svg>
    ),
  },
  {
    id: "premium",
    price: "5000",
    currency: "грн",
    name: "Індивідуальна гра із супроводом після гри",
    tagline: "Гра + дві сесії після неї",
    badge: "Найглибше",
    featured: true,
    testId: "pricing-tier-premium",
    intro:
      "Для глибокого опрацювання запиту та підтримки під час перших кроків до змін.",
    steps: [
      {
        label: "На грі",
        text: "досліджуємо твою ситуацію, розбираємо важливі усвідомлення й визначаємо конкретні дії.",
      },
      {
        label: "1 сесія",
        text: "обговорюємо, що відбулося після гри: що ти спробував, із чим зіткнувся, де потрібна підтримка. Повертаємося до питань, які потребують більшої уваги.",
      },
      {
        label: "2–3 сесії",
        text: "розбираємо твій подальший досвід, коригуємо кроки й визначаємо, як рухатися далі.",
      },
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="8.2" cy="8.2" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="15.8" cy="15.8" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="15.8" cy="8.2" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="8.2" cy="15.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Pricing() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={style.pricing}
      id="pricing"
      data-testid="pricing-section"
    >
      <Container>
        <div className={style.inner}>
          <h2 className={style.title} data-testid="pricing-title">
            Формати гри
          </h2>

          <div className={style.cards}>
            {tiers.map((tier) => (
              <article
                key={tier.id}
                className={`${style.card} ${tier.featured ? style.cardFeatured : ""} ${style[`card-${tier.id}`]}`}
                data-testid={tier.testId}
              >
                {tier.badge && (
                  <span className={style.badge}>{tier.badge}</span>
                )}

                <span className={style.icon} aria-hidden="true">
                  {tier.icon}
                </span>

                <p className={style.price}>
                  {tier.price} {tier.currency}
                  {tier.priceNote && (
                    <span className={style.priceNote}> {tier.priceNote}</span>
                  )}
                </p>

                <h3 className={style.name}>{tier.name}</h3>
                <p className={style.tagline}>{tier.tagline}</p>

                <span className={style.divider} />

                <div className={style.body}>
                  {tier.intro && <p>{tier.intro}</p>}

                  {tier.paragraphs?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {tier.steps && (
                    <ul className={style.steps}>
                      {tier.steps.map((step) => (
                        <li key={step.label} className={style.step}>
                          <span className={style.stepLabel}>{step.label}</span>
                          <span className={style.stepText}>{step.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {tier.note && <p className={style.noteText}>{tier.note}</p>}
                </div>

                <button
                  type="button"
                  className={
                    tier.featured ? style.buttonSolid : style.buttonGhost
                  }
                  onClick={scrollToBooking}
                  data-testid={`${tier.testId}-button`}
                >
                  Записатись
                </button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
