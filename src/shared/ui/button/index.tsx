import React from 'react';

interface Props {
  id: string;
  onClick: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ onClick, id, children, className }: Props) => {
  let cn = 'btn btn-primary btn-sm';

  if (className !== undefined) {
    cn = cn + ' ' + className;
  }

  return (
    <button
      className={cn}
      onClick={onClick}
      id={id}
      data-testid={`button_${id}`}
    >
      {children}
    </button>
  );
};
