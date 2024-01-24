import { useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    handleToggleDarkMode((prev) => !prev);
  };

  return (
    <div className="header">
      <h1>Notes</h1>
      {isDarkMode ? (
        <MdOutlineLightMode size="1.6rem" className="light-btn" onClick={toggleTheme} />
      ) : (
        <MdDarkMode size="1.6rem" onClick={toggleTheme} />
      )}
    </div>
  );
};

export default Header;
