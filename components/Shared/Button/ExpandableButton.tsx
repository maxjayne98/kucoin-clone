import classNames from 'classnames';

import { Props } from './types';

import ArrowDown from '../Svg/Icons/ArrowDown';

const ExpandableButton = ({ children, className, ...rest }: Props) => {
  const buttonCn = classNames(
    'inline-flex h-full text-sm items-center mr-4 hover:opacity-60 group',
    className
  );

  const arrowCn = classNames('group-hover:rotate-180');

  return (
    <button className={buttonCn} {...rest}>
      {children}
      <ArrowDown className={arrowCn} />
    </button>
  );
};

export default ExpandableButton;
