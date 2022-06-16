import classnames from 'classnames';

import { Props, Variant } from './types';

const Button = ({
  className,
  children,
  variant = 'PRIMARY',
  ...rest
}: Props) => {
  const variants: Variant = {
    PRIMARY: 'border border-greenish-cyan-500 bg-greenish-cyan-500 text-white',
    OUTLINE: 'border border-greenish-cyan-500 text-greenish-cyan-500 bg-white',
    SECONDARY: 'border border-gray-200 text-gray-200 bg-gray-200 text-black',
  };

  const variantStyle = variants[variant] || '';

  const cn = classnames(
    'py-2 px-1.5 rounded text-center hover:opacity-60 text-sm',
    variantStyle,
    className
  );

  return (
    <button className={cn} {...rest}>
      {children}
    </button>
  );
};

export default Button;
