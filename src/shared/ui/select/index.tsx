export interface SelectProps {
  id: string;
  options: string[];
  placeholder: string;
  onChange: (_s: string) => void;
  className?: string;
}

export const Select = ({
  id,
  options,
  placeholder,
  onChange,
  className,
}: SelectProps) => {
  let cn = 'select select-primary select-sm';

  if (className !== undefined) {
    cn = cn + ' ' + className;
  }
  return (
    <select
      id={id}
      className={cn}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={-1}
    >
      <option id={`${id}_placeholder`} disabled={true} value={-1}>
        {placeholder}
      </option>
      {options.map((option, index) => {
        const itemId = `${id}_option[${index}]`;
        return (
          <option key={itemId} id={itemId}>
            {' '}
            {option}
          </option>
        );
      })}
    </select>
  );
};
