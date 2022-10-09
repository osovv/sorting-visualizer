import { Optional } from 'shared/ui/optional';

export interface StepProps {
  step: number;
  max: number;
  className?: string;
  show: boolean;
}

export const Step = ({ step, max, className, show }: StepProps) => {
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
