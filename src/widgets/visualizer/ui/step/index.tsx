import React from 'react';
import { Optional } from 'shared/ui/optional';

interface Props {
  step: number;
  max: number;
  className?: string;
  show: boolean;
}

export const Step: React.FC<Props> = ({
  step,
  max,
  className,
  show,
}: Props) => {
  let cn = 'badge badge-lg badge-primary';

  if (className !== undefined) {
    cn = cn + ' ' + className;
  }

  return (
    <Optional show={show}>
      <span className={cn}>{`Step: ${step} / ${max}`}</span>
    </Optional>
  );
};
