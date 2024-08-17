import React from "react";

function getInitialTheme() {
  const localTheme = window.localStorage.getItem("theme");
  const hasLocalTheme = typeof localTheme === "string";
  // If the user has explicitly chosen light or dark,
  // let's use it.
  if (hasLocalTheme) {
    return localTheme;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light";
}

export const ThemeContext = React.createContext({
  themeName: "light",
  toggleTheme: () => {},
});

export const Theme = ({ children }) => {
  const [themeName, setThemeName] = React.useState("light");

  React.useEffect(() => {
    const initialTheme = getInitialTheme();
    setThemeName(initialTheme);
    document.body.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    if (themeName === "light") {
      localStorage.setItem("theme", "dark");
      setThemeName("dark");
      document.body.dataset.theme = "dark";
    } else {
      localStorage.setItem("theme", "light");
      setThemeName("light");
      document.body.dataset.theme = "light";
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
