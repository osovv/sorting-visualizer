import { ElementStatus } from 'entities/element';
import { memo } from 'react';

interface Props {
  id: string;
  width: number;
  height: number;
  className: string;
  status: ElementStatus;
}

const Component = ({ id, width, height, className, status }: Props) => {
  let color: string;
  switch (status) {
    case 'swapping':
      color = 'bg-primary-focus';
      break;
    case 'sorted':
      color = 'bg-accent';
      break;
    case 'comparing':
      color = 'bg-secondary';
      break;
    case 'waiting':
      color = 'bg-base-content';
      break;
  }

  const barClassName = className + ' flex items-end ' + color;

  const styles: React.CSSProperties = {
    height: `${height}%`,
    width: `${width}%`,
  };
  return <div id={id} className={barClassName} style={styles} />;
};

export const Bar = memo<Props>(Component);
