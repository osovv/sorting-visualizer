import { memo } from 'react';
import { LegendItem as Item } from 'types';

type LegendItemProps = Item & {
  id: string;
};

type Props = {
  items: Item[];
};

const LegendItem = ({ id, color, label }: LegendItemProps) => {
  const className = color + 'w-[1rem] h-[1rem] mask mask-circle mr-1';
  return (
    <div id={id} className='mr-auto flex flex-row items-center'>
      <div className={className}></div>
      <span className='text-base-content'>{label}</span>
    </div>
  );
};

const Component = ({ items }: Props) => {
  return (
    <div id='legend' className='flex flex-col'>
      {items.map((item, index) => (
        <LegendItem
          id={`legend_item[${index}]`}
          key={index}
          color={item.color}
          label={item.label}
        />
      ))}
    </div>
  );
};

export const Legend = memo<Props>(Component);
