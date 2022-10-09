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
  let cn = ' m-auto';

  if (className !== undefined) {
    cn = cn + ' ' + className;
  }

  return (
    <div className={cn} id={id}>
      {children}
    </div>
  );
};
