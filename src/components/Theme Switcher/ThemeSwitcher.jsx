import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ darkClassName }) => {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
    }
  };

  return (
    <div>
      <button data-testid="themeSwitcherButton" onClick={toggleTheme} className="btn icon-button">
        {isDarkMode ? '☼' : '☾'}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: 'dark',
};

export default ThemeSwitcher;
