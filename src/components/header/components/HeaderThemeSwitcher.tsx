import React from "react";

import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useToggle } from "../../../hooks/custom_hooks";

const mapThemeToChecked = (theme: string): boolean => {
  return theme === "dark";
};

export const HeaderThemeSwitcher = () => {
  const [checked, toggle, turnOn, turnOff] = useToggle(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      const checked = mapThemeToChecked(theme);
      if (checked) {
        turnOn();
      } else {
        turnOff;
      }
    } else {
      turnOn();
    }

    themeChange(false);
  }, []);

  const onChange = () => {
    toggle();
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
