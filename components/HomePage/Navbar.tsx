import { Button, GlobeIcon, Logo, NavbarExpandedMenu } from '../Shared';

const Navbar = () => {
  return (
    <nav className="flex items-center p-5">
      <div className="flex items-center">
        <Button variant="TEXT">
          <Logo />
        </Button>
        <NavbarExpandedMenu />
      </div>

      <div className="flex ml-auto">
        <div className="mr-4">
          <Button className="mr-1" variant="OUTLINE">
            Log In
          </Button>
          <Button className="mr-1">Sign up</Button>
        </div>
        <Button className="mr-1" variant="SECONDARY">
          <GlobeIcon />
        </Button>
        <Button className="mr-1" variant="SECONDARY">
          USD
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
