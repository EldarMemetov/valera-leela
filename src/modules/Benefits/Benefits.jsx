import Container from "../../shared/Container/Container.jsx";
import style from "./Benefits.module.scss";

const benefits = [
  {
    number: "01",
    text: "Сформулював, чого хочеш саме ти.",
  },
  {
    number: "02",
    text: "Помітив звичні реакції та переконання, які впливають на твій вибір.",
  },
  {
    number: "03",
    text: "Розібрався, що стоїть за відкладанням важливих рішень.",
  },
  {
    number: "04",
    text: "Побачив, на що вже спираєшся і якої підтримки потребуєш.",
  },
  {
    number: "05",
    text: "Визначив конкретні кроки у своєму запиті.",
  },
];

export default function Benefits() {
  return (
    <section
      className={style.benefits}
      id="benefits"
      data-testid="benefits-section"
    >
      <Container>
        <div className={style.inner}>
          <div className={style.intro}>
            <p className={style.overline} data-testid="benefits-overline">
              Що дає гра
            </p>

            <h2 className={style.title} data-testid="benefits-title">
              Зрозуміти, що відбувається, і визначити,{" "}
              <em className={style.titleAccent}>що робити далі</em>
            </h2>

            <p className={style.lead}>У грі ми працюємо над тим, щоб ти:</p>
          </div>

          <div className={style.right}>
            <ol className={style.list} data-testid="benefits-list">
              {benefits.map((item) => (
                <li
                  key={item.number}
                  className={style.item}
                  data-testid={`benefit-item-${item.number}`}
                >
                  <span className={style.itemNumber}>{item.number}</span>
                  <span className={style.itemDot} />
                  <p className={style.itemText}>{item.text}</p>
                </li>
              ))}
            </ol>

            <div className={style.conclusion} data-testid="benefits-conclusion">
              <span className={style.conclusionLine} />
              <p>
                Усвідомлення дають напрям. Твої дії продовжують роботу,
                розпочату в грі.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
