import Image from "next/image";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <a
      href="#top"
      className={styles.logo}
      aria-label="Ліла — на початок сторінки"
      data-testid="header-logo"
    >
      <Image
        src="/photo/logo.png"
        alt="Ліла"
        width={160}
        height={48}
        className={styles.image}
      />
    </a>
  );
}

export default Logo;
