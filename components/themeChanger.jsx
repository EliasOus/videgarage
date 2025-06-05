"use Client";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import style from "./themeChanger.module.css";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme("light");

  function handleChange(event) {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      {/* <input type="checkbox" name="theme" onChange={handleChange}/> */}
      <button className={style.darkButton} onClick={handleChange}>
        <div>
          <FaSun></FaSun>
          <FaMoon></FaMoon>
        </div>
        <span></span>
      </button>
      {/* <span>{theme === "dark" ? "Foncé" : "Claire"}</span> */}
    </>
  );
}
