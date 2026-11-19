import styles from "./NavMenu.module.scss";

const links = [
  { label: "Про мене", href: "#about", testId: "nav-link-about" },
  {
    label: "Що таке Ліла",
    href: "#what-is-leela",
    testId: "nav-link-what-is-leela",
  },
  {
    label: "Як відбувається гра",
    href: "#how-it-works",
    testId: "nav-link-how-it-works",
  },
  { label: "Формати", href: "#pricing", testId: "nav-link-pricing" },
  {
    label: "Запис на гру",
    href: "#booking",
    testId: "nav-link-booking",
    isBooking: true,
  },
];

function NavMenu({ className = "", onLinkClick, withBooking = true }) {
  const visibleLinks = withBooking
    ? links
    : links.filter((link) => !link.isBooking);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    onLinkClick?.();
  };

  return (
    <nav className={`${styles.nav} ${className}`}>
      {visibleLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={styles.link}
          onClick={(e) => handleClick(e, link.href)}
          data-testid={link.testId}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default NavMenu;
