import React from "react";

type Props = {
  step: number;
  max: number;
  className?: string;
};

export const Step: React.FC<Props> = ({ step, max, className }) => {
  let className_ = "badge badge-lg badge-primary";

  if (className !== undefined) {
    className_ = className_ + " " + className;
  }

  return <span className={className_}>{`Step: ${step} / ${max}`}</span>;
};
