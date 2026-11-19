"use client";
import Link from "next/link";
import Logo from "@/shared/Logo/Logo";
import NavMenu from "@/modules/Header/NavMenu/NavMenu";
import {
  TELEGRAM_URL,
  INSTAGRAM_URL,
  PHONE_LABEL,
  PHONE_HREF,
  EMAIL,
} from "@/shared/constants";
import styles from "./Footer.module.scss";

const contacts = [
  {
    label: PHONE_LABEL,
    href: PHONE_HREF,
    testId: "footer-contact-phone",
  },
  {
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    testId: "footer-contact-email",
  },
  {
    label: "Telegram",
    href: TELEGRAM_URL,
    testId: "footer-contact-telegram",
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    testId: "footer-contact-instagram",
  },
];

function Footer() {
  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>
              Трансформаційна гра, щоб глибше зрозуміти себе, дослідити свій
              запит і визначити конкретні кроки до змін.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Навігація</h3>
            <NavMenu className={styles.nav} />
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Контакти</h3>
            <ul className={styles.contactList}>
              {contacts.map((contact) => (
                <li key={contact.href}>
                  <a
                    href={contact.href}
                    className={styles.contactLink}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    data-testid={contact.testId}
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Ліла. Всі права захищено.
          </p>
          <div className={styles.legal}>
            <Link
              href="/privacy-policy"
              className={styles.legalLink}
              data-testid="footer-link-privacy"
            >
              Політика конфіденційності
            </Link>
            <Link
              href="/oferta"
              className={styles.legalLink}
              data-testid="footer-link-oferta"
            >
              Публічна оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
