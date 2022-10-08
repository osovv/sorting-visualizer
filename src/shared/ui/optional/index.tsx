import React from 'react';

interface Props {
  show: boolean;
  children: React.ReactNode;
}

export const Optional: React.FC<Props> = ({ show, children }) => {
  if (show) {
    return <>{children}</>;
  }
  return null;
};
