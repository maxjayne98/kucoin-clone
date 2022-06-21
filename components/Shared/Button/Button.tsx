import classnames from 'classnames';

import { Props, Variant } from './types';

const Button = ({
  className,
  children,
  variant = 'PRIMARY',
  ...rest
}: Props) => {
  const variants: Variant = {
    PRIMARY:
      'border rounded border-greenish-cyan-500 bg-greenish-cyan-500 text-white',
    OUTLINE:
      'border rounded border-greenish-cyan-500 text-greenish-cyan-500 bg-white',
    SECONDARY:
      'border rounded border-gray-200 text-gray-200 bg-gray-200 text-black',
    TEXT: '',
  };

  const variantStyle = variants[variant] || '';

  const cn = classnames(
    'inline-flex items-center p-2 text-sm text-center hover:opacity-60',
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
