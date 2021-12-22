import React from "react";

type Props = {
  step: number;
  max: number;
};

export const Step: React.FC<Props> = ({ step, max }) => {
  return (
    <span className="badge badge-lg badge-primary">{`Step: ${step} / ${max}`}</span>
  );
};
