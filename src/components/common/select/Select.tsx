type Props = {
  id: string;
  options: string[];
  placeholder: string;
  onChange: (_s: string) => void;
  className?: string;
};

export const Select = ({
  id,
  options,
  placeholder,
  onChange,
  className,
}: Props) => {
  let className_ = 'select select-primary select-sm';

  if (className !== undefined) {
    className_ = className_ + ' ' + className;
  }
  return (
    <select
      id={id}
      className={className_}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={-1}
    >
      <option id={`${id}_placeholder`} disabled={true} value={-1}>
        {placeholder}
      </option>
      {options.map((option, index) => {
        return (
          <option id={`${id}_option[${index}]`} key={index}>
            {' '}
            {option}
          </option>
        );
      })}
    </select>
  );
};
