import { ExpandableButton } from '../Button';
import { DotsVerticalIcon } from '../Svg/Icons';

const NavbarExpandedMenu = () => {
  return (
    <div className="flex items-center">
      <ExpandableButton>
        <DotsVerticalIcon />
      </ExpandableButton>
      <ExpandableButton>Buy Crypto</ExpandableButton>
      <ExpandableButton>Markets</ExpandableButton>
      <ExpandableButton>Trade</ExpandableButton>
      <ExpandableButton>Derivatives</ExpandableButton>
      <ExpandableButton>Earn</ExpandableButton>
      <ExpandableButton>NFT</ExpandableButton>
    </div>
  );
};

export default NavbarExpandedMenu;
