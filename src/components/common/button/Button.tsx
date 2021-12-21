import React from "react";

type ButtonProps = {
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
};

export const Button: React.FC<ButtonProps> = ({ onClick, id, label }) => {
  return (
    <button
      className="btn primary btn-sm text-base-content"
      onClick={onClick}
      id={id}
    >
      {label}
    </button>
  );
};
