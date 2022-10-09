import { LegendItem } from 'entities/legend_item';
import { memo } from 'react';

type LegendItemProps = LegendItem & {
  id: string;
};

interface Props {
  items: LegendItem[];
}

const Item = ({ id, color, label }: LegendItemProps) => {
  const className = color + ' w-[1rem] h-[1rem] mask mask-circle mr-1';
  return (
    <div id={id} className='mr-auto flex flex-row items-center'>
      <div className={className} />
      <span className='text-base-content'>{label}</span>
    </div>
  );
};

const Component = ({ items }: Props) => {
  return (
    <div id='legend' className='flex flex-col'>
      {items.map((item, index) => (
        <Item
          key={`index_${item.label}`}
          id={`legend_item[${index}]`}
          color={item.color}
          label={item.label}
        />
      ))}
    </div>
  );
};

export const Legend = memo<Props>(Component);
