import React from 'react';

type Props = {
  id: string;
  onClick: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<Props> = ({
  onClick,
  id,
  children,
  className,
}) => {
  let className_ = 'btn btn-primary btn-sm';

  if (className !== undefined) {
    className_ = className_ + ' ' + className;
  }

  return (
    <button className={className_} onClick={onClick} id={id}>
      {children}
    </button>
  );
};
