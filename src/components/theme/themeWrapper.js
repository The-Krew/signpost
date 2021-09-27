import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";
export default function ThemeContextWrapper(props) {
  let temp = Cookies.get("theme") === "light"? themes.light : themes.dark;
  const [theme, setTheme] = useState(temp);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
          try {
            document.body.classList.remove(themes.dark);
          } catch {}
        Cookies.set("theme", "light");
        document.body.classList.add(theme);
        break;
      case themes.dark:
      default:
        try {
            document.body.classList.remove(themes.light);
        } catch {}
        Cookies.set("theme", "dark");
        document.body.classList.add(theme);
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
