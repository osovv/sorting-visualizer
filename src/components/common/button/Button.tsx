import React from "react";

type ButtonProps = {
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, id, children }) => {
  return (
    <button className="btn btn-primary btn-sm" onClick={onClick} id={id}>
      {children}
    </button>
  );
};
