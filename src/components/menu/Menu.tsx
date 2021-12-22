import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Menu: React.FC<Props> = ({children}) => {
  return(
    <div className="bg-base-300 mb-3 menu min-w-[10vw]  max-w-[20vw] h-[90vh] m-2 mt-0 flex">
        {children}
    </div>
  );
};

export const MenuEntry: React.FC<Props> = ({children}) => {
  return (
    <li>
      {children}
    </li>
  );
};