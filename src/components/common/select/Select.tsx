import React from "react";

type Option = {
  key: string;
};

type Props = {
  options: Option[];
  placeholder: string;
  onChange: (_s: string) => void;
  className?: string;
};

export const Select: React.FC<Props> = ({
  options,
  placeholder,
  onChange,
  className,
}) => {
  let className_ = "select select-primary select-sm";

  if (className !== undefined) {
    className_ = className_ + " " + className;
  }
  return (
    <select className={className_} onChange={(e) => onChange(e.target.value)}>
      <option disabled={true} selected={true}>
        {placeholder}
      </option>
      {options.map((option, index) => {
        return <option key={index}> {option.key}</option>;
      })}
    </select>
  );
};
