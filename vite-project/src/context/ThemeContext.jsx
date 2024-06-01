import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? Number(savedTheme) : 0;
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const style = [
    {
      backgroundColor: "black",
      color: "white",
    },
    {
      backgroundColor: "white",
      color: "black",
    },
  ];
  
  const toggleTheme = () => {
    const newTheme = theme === 0 ? 1 : 0;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, style }}>
      {children}
    </ThemeContext.Provider>
  );
};
