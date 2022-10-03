import React from 'react';

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const MenuEntry: React.FC<Props> = ({ id, children, className }) => {
  let className_ = ' m-auto';

  if (className !== undefined) {
    className_ = className_ + ' ' + className;
  }

  return (
    <div className={className_} id={id}>
      {children}
    </div>
  );
};
