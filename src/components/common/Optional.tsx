import React from "react";

type OptionalProps = {
  show: boolean;
  children: React.ReactNode;
};

export const Optional: React.FC<OptionalProps> = ({ show, children }) => {
  if (show) {
    return <>{children}</>;
  } else {
    return null;
  }
};
