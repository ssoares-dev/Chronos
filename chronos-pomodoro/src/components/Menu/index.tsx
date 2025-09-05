import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react";
import styles from "./Menu.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark";
    return storageTheme;
  });

  const nextThemeIcon = (theme: AvailableThemes) => {
    return theme === "dark" ? <SunIcon /> : <MoonIcon />;
  }

  function handleToggleTheme(e: React.MouseEvent<HTMLAnchorElement>) {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    e.preventDefault();
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label="Home" title="Home">
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="History"
        title="History"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Settings"
        title="Settings"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Theme"
        title="Theme"
        onClick={handleToggleTheme}
      >
        {nextThemeIcon(theme)}
      </a>
    </div>
  );
}
