import Link from "next/link";
import styles from "./not-found.module.scss";
import Container from "@/shared/Container/Container";

export const metadata = {
  title: "Страница не найдена",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <Container>
        <h1 className={styles.code}>404</h1>
        <p className={styles.text}>Такой страницы не существует</p>
        <Link href="/" className={styles.link}>
          На главную
        </Link>
      </Container>
    </main>
  );
}
