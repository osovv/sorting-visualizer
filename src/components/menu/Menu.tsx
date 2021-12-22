import React from "react";

type Props = {
	id?: string;
  children: React.ReactNode;
	className?: string;
};

export const Menu: React.FC<Props> = ({children}) => {
  return(
    <div className="bg-base-300 mb-3 menu min-w-[10vw] max-w-[20vw] h-[90vh] m-2 mt-0 flex items-center">
        {children}
    </div>
  );
};

export const MenuEntry: React.FC<Props> = ({id, children, className}) => {
	let className_ = "flex";

  if (className !== undefined) {
    className_ = className_ + " " + className;
  }

  return (
    <div className={className_} id={id}>
        {children}
    </div>
  );
};