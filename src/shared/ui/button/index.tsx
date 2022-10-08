import React from 'react';

interface Props {
  id: string;
  onClick: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ onClick, id, children, className }: Props) => {
  let className_ = 'btn btn-primary btn-sm';

  if (className !== undefined) {
    className_ = className_ + ' ' + className;
  }

  return (
    <button
      className={className_}
      onClick={onClick}
      id={id}
      data-testid={`button_${id}`}
    >
      {children}
    </button>
  );
};
