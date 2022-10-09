import React from 'react';

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const MenuEntry: React.FC<Props> = ({
  id,
  children,
  className,
}: Props) => {
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
