import classNames from 'classnames';

import { Props } from './types';

const ArrowDown = ({ className }: Props) => {
  const cn = classNames('h-3 w-3 ml-1', className);

  return (
    <svg
      className={cn}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export default ArrowDown;
