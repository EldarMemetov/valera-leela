"use client";

import { useState, useEffect } from "react";
import Logo from "@/shared/Logo/Logo";
import ScrollButton from "@/shared/ScrollButton/ScrollButton";
import NavMenu from "./NavMenu/NavMenu";
import styles from "./Header.module.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // блокируем скролл страницы, когда открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header} data-testid="header">
        <div className={styles.container}>
          <Logo />

          <NavMenu className={styles.desktopNav} onLinkClick={closeMenu} />

          <div className={styles.actions}>
            <ScrollButton className={styles.cta} />
            <button
              type="button"
              className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={isOpen}
              data-testid="mobile-menu-trigger"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={closeMenu}
        data-testid="mobile-menu-overlay"
      />
      <div
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        data-testid="mobile-menu-drawer"
      >
        <NavMenu className={styles.drawerNav} onLinkClick={closeMenu} />
        <ScrollButton className={styles.drawerCta} onClick={closeMenu} />
      </div>
    </>
  );
}

export default Header;
