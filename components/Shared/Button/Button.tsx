import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ReactNode } from 'react';
import classnames from 'classnames';

type ButtonVariant = 'primary' | 'outline-primary' | 'gray-200';
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant?: ButtonVariant;
}

const Button = ({
  className,
  children,
  variant = 'primary',
  ...rest
}: Props) => {
  const variantStyle =
    {
      primary:
        'border border-greenish-cyan-500 bg-greenish-cyan-500 text-white',
      'outline-primary':
        'border border-greenish-cyan-500 text-greenish-cyan-500 bg-white',
      'gray-200': 'border border-gray-200 text-gray-200 bg-gray-200 text-black',
    }[variant] || '';

  const cn = classnames(
    'py-2 px-1.5 rounded text-center hover:opacity-60 text-sm',
    variantStyle,
    className
  );
  return (
    <button {...rest} className={cn}>
      {children}
    </button>
  );
};

export default Button;
