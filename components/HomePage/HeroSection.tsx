import { Button } from '../Shared';

const HeroSection = () => {
  return (
    <div
      className="pt-8 md:pt-28 px-8 bg-[center_left_8rem] bg-[#f7f8fa] bg-contain bg-no-repeat flex justify-center"
      style={{
        backgroundImage:
          'url(https://assets.staticimg.com/public-web/2.3.33/static/bg-logo.c9dd9d5b.svg)',
      }}
    >
      <div className="flex flex-col md:flex-row justify-between max-w-7xl w-full">
        <div className="flex flex-col items-start h-full">
          <h1 className="text-xl md:text-4xl font-semibold">
            Find the Next Crypto Gem on KuCoin
          </h1>
          <h6 className="md:text-lg font-light mt-2">
            1 Out of 4 Crypto Holders Worldwide Is with KuCoin
          </h6>
          <Button className="mt-10 md:px-10 md:text-lg" variant="PRIMARY">
            Sign Up
          </Button>
          <span className="mt-2 text-sm font-light">
            Up to 500 USDT in bonuses for new users!
          </span>
        </div>

        <div className="flex flex-col justify-center items-center h-full mt-10 md:mt-0">
          <div
            className="h-80 w-80 bg-cover bg-no-repeat pb-12 flex flex-col items-center justify-end"
            style={{
              backgroundImage:
                'url(https://assets.staticimg.com/public-web/2.3.33/static/phone.1a4f2053.svg)',
            }}
          >
            <span>Download App</span>

            <div className="flex justify-evenly w-full px-4">
              <div className="mt-12 flex items-center justify-center bg-white text-xs w-20 h-16 rounded-lg">
                <span>App Store</span>
              </div>
              <div className="mt-12 flex items-center justify-center bg-white text-xs w-20 h-16 rounded-lg">
                <span>Google Play</span>
              </div>
              <div className="mt-12 flex items-center justify-center bg-white text-xs w-20 h-16 rounded-lg">
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
