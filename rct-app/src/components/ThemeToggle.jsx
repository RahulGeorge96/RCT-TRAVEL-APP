import React from 'react'

const toggleTheme = (theme, setTheme) => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  document.body.className = newTheme === "dark" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
};


const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <div>
      <button onClick={() => toggleTheme(theme, setTheme)}>
        Change Theme {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ThemeToggle