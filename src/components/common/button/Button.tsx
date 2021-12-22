import React from "react";

type Props = {
  id: string;
  onClick: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ onClick, id, children }) => {
  return (
    <button className="btn btn-primary btn-sm" onClick={onClick} id={id}>
      {children}
    </button>
  );
};
