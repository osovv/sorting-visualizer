import React from 'react';

type Props = {
  show: boolean;
  children: React.ReactNode;
};

export const Optional: React.FC<Props> = ({ show, children }) => {
  if (show) {
    return <>{children}</>;
  } else {
    return null;
  }
};
