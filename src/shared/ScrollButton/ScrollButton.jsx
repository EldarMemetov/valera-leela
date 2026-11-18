"use client";

import styles from "./ScrollButton.module.scss";

function ScrollButton({
  target = "#booking",
  children = "Записатися",
  onClick,
  className = "",
}) {
  const handleClick = () => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    onClick?.();
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      data-testid="header-scroll-button"
    >
      {children}
    </button>
  );
}

export default ScrollButton;
