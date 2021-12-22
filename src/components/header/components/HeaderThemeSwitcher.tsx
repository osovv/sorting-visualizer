import React from "react";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const mapThemeToChecked = (theme: string): boolean => {
  return theme === "dark";
};

export const HeaderThemeSwitcher = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      const checked = mapThemeToChecked(theme);
      setChecked(checked);
    } else {
      setChecked(false);
    }

    themeChange(false);
  }, []);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="mt-1 mb-1 mr-2 ml-2">
      🌞
      <input
        type="checkbox"
        checked={checked}
        className={"toggle m-1"}
        onChange={onChange}
        data-toggle-theme="light,dark"
        data-act-class="pl-4"
      />
      🌚
    </div>
  );
};
