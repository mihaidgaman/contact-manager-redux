// disclaimer: better in tailwind
const skins = {
  primary:
    'bg-blue-500 inline-flex  items-center h-full text-center py-2 px-4 text-white rounded hover:bg-blue-700',
  success:
    'bg-green-500 inline-flex items-center h-full text-center py-2 px-4 text-white rounded hover:bg-green-700',
  danger:
    'bg-red-500 inline-flex items-center h-full text-center py-2 px-4 text-white rounded hover:bg-red-700',
};

export const Button = ({
  element = 'button',
  children,
  skin = 'primary',
  className = '',
  ...props
}) => {
  const skinClasses = skins[skin];
  const Element = element;

  return (
    <Element className={`${skinClasses} ${className}`} {...props}>
      {children}
    </Element>
  );
};
