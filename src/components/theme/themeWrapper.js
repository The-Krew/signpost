import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
          try {
              document.body.classList.remove(themes.dark);
          } catch {}
        document.body.classList.add(theme);
        break;
      case themes.dark:
      default:
        try {
            document.body.classList.remove(themes.light);
        } catch {}
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
