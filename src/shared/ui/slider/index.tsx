import React from 'react';

interface Props {
  min: number;
  max: number;
  id: string;
  children: React.ReactNode;
  className?: string;
  onChange: (_i: number) => void;
  value: number;
}

export const Slider = ({
  min,
  max,
  id,
  className,
  children,
  value,
  onChange,
}: Props) => {
  let className_ = 'range range-primary';

  if (className !== undefined) {
    className_ = className_ + ' ' + className;
  }

  return (
    <div>
      <label htmlFor={id} className='label'>
        <span className='r-[10] label-text font-bold'>{children}</span>
      </label>
      <input
        type='range'
        max={max}
        min={min}
        value={value}
        className={className_}
        id={id}
        data-testid={`slider_${id}`}
        onChange={(e) => onChange(Number.parseInt(e.target.value))}
      />
    </div>
  );
};
