import Container from "../../shared/Container/Container.jsx";
import style from "./HowItWorks.module.scss";

const steps = [
  {
    number: "01",
    title: "Визначаємо, що ти хочеш дослідити",
    text: "Говоримо про ситуацію, з якою ти прийшов. Що турбує? Чого хочеться? Де застряг? Разом формулюємо запит, із яким працюватимемо.",
  },
  {
    number: "02",
    title: "Починаємо гру",
    text: "Я пояснюю правила. Ти кидаєш кубик і рухаєшся полем. Кожна клітина задає тему для дослідження.",
  },
  {
    number: "03",
    title: "Розбираємо те, що відгукується",
    text: "Через запитання й діалог розглядаємо твої переконання, почуття та звичні рішення. Помічаємо, як вони пов’язані із ситуацією, яку ти хочеш змінити.",
  },
  {
    number: "04",
    title: "Переходимо до дій",
    text: "Що ти зробиш інакше? З чого почнеш? Коли? Разом прописуємо конкретні, посильні кроки, які залежать від тебе.",
  },
  {
    number: "05",
    title: "Збираємо головне",
    text: "Підсумовуємо гру: що ти зрозумів про себе, яке рішення прийняв і що береш у своє повсякденне життя.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className={style.how}
      id="how-it-works"
      data-testid="how-it-works-section"
    >
      <Container>
        <div className={style.inner}>
          <div className={style.header}>
            <p className={style.overline} data-testid="how-it-works-overline">
              5 кроків
            </p>

            <h2 className={style.title} data-testid="how-it-works-title">
              Як відбувається <em className={style.titleAccent}>гра</em>
            </h2>
          </div>

          <ol className={style.list} data-testid="how-it-works-list">
            {steps.map((step) => (
              <li
                key={step.number}
                className={style.step}
                data-testid={`how-it-works-step-${step.number}`}
              >
                <span className={style.marker} aria-hidden="true">
                  {step.number}
                </span>

                <div className={style.card}>
                  <h3 className={style.stepTitle}>{step.title}</h3>
                  <p className={style.stepText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
