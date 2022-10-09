interface MenuEntryProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const MenuEntry = ({ id, children, className }: MenuEntryProps) => {
  let cn = ' m-auto';

  if (className !== undefined) {
    cn = cn + ' ' + className;
  }

  return (
    <div className={cn} id={id}>
      {children}
    </div>
  );
};
