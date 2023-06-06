import React from 'react';

import Header from '../../components/Header';
import About from '../About';
import ChooseEcoBlock from '../ChooseEcoBlock';
import ExploreEcoBlock from '../ExploreEcoBlock';
import Footer from '../Footer';
import Intro from '../Intro';

const SreenMobile = () => {
  return (
    <div className="background">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="page mt-[150px]">
          <Intro />
        </div>
        <div className="page">
          <About />
        </div>
        <div className="page">
          <ChooseEcoBlock />
        </div>
        <div className=" my-20">
          <ExploreEcoBlock />
        </div>
        <div className="page">
          <Footer />
        </div>
      </div>
      <style jsx>
        {`
          .background {
            background-image: url('/assets/images/background.svg');
            background-repeat: no-repeat;
          }
          .main {
            overflow-y: scroll;
            height: 100vh;
            padding: 0 20px;
            z-index: 99;
          }
          .header {
            backdrop-filter: blur(50px) !important;
          }
        `}
      </style>
    </div>
  );
};

export default SreenMobile;
