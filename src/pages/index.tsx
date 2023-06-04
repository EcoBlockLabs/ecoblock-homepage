import React from 'react';

import SreenDesktop from '../containers/SreenDesktop';
import SreenMobile from '../containers/SreenDesktop/ScreenMobile';

const Index = () => {
  return (
    <div>
      <div className="max-md:hidden">
        <SreenDesktop />
      </div>
      <div className="max-md:block hidden">
        <SreenMobile />
      </div>
    </div>
  );
};

export default Index;
