import classNames from 'classnames';

import { Props } from './types';

import { ArrowDownIcon } from '../Svg/Icons';

const ExpandableButton = ({ children, className, ...rest }: Props) => {
  const buttonCn = classNames(
    'inline-flex h-full text-sm items-center mr-4 hover:opacity-60 group',
    className
  );

  const arrowCn = classNames('group-hover:rotate-180 ml-1');

  return (
    <button className={buttonCn} {...rest}>
      {children}
      <ArrowDownIcon className={arrowCn} />
    </button>
  );
};

export default ExpandableButton;
