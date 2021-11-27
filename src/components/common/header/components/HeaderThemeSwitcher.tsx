import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

let mapThemeToChecked = (theme: string): boolean => {
  return theme === "dark";
};

export const HeaderThemeSwitcher = () => {
  let [checked, setChecked] = useState(false);

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme !== null) {
      let checked = mapThemeToChecked(theme);
      setChecked(checked);
    } else {
      setChecked(false);
    }

    themeChange(false);
  }, []);

  let onChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="m-5">
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
