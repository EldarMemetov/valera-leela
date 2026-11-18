import styles from "./Logo.module.scss";

function Logo() {
  return (
    <a href="#top" className={styles.logo} data-testid="header-logo">
      Ліла<span className={styles.dot}>.</span>
    </a>
  );
}
export default Logo;
