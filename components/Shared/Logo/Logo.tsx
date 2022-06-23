import Image from 'next/image';

import Props from './types';

const Logo = ({ className }: Props) => (
  <Image
    src="https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.svg"
    alt="logo"
    width={120}
    height={32}
    className={className}
  />
);

export default Logo;
