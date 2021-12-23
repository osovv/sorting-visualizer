import React from "react";


type Props = {
  min: number;
  max: number;
  id: string;
  children: React.ReactNode;
  className?: string;
  onChange: (_i: number) => void
  value: number;
};

export const Slider: React.FC<Props> = ({
  min,
  max,
  id,
  className,
  children,
  value,
  onChange
}) => {
  let className_ = "range range-primary"; 

  if (className !== undefined) {
    className_ = className_ + " " + className;
  }

  return (
    <div>
    <label className="label">
      <span className="label-text font-bold r-[10]">
        {children}
      </span>
    </label>
    <input 
    type="range"
    max={max}
    min={min}
    value={value}
    className={className_}
    id={id}
    onChange={(e) => onChange(parseInt(e.target.value))}
  />
  </div>
  );
};
