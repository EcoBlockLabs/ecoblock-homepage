import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Background from '../../layout/Background';
import About from '../About';
import ChooseEcoBlock from '../ChooseEcoBlock';
import ExploreEcoBlock from '../ExploreEcoBlock';
import Footer from '../Footer';
import Intro from '../Intro';

const SreenDesktop = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');

      sectionElements.forEach((section) => {
        if (section.getBoundingClientRect) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 70 && bottom >= 70) {
            setActiveMenuItem(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Background>
      <Header activeMenuItem={activeMenuItem} />
      <div className="container">
        <section
          id="introduction"
          className="page max-lg:h-fit min-h-[100vh] h-full max-md:mt-[140px]"
        >
          <Intro />
        </section>
        <section id="about" className="page max-lg:h-fit h-full min-h-[100vh] ">
          <About />
        </section>
        <section id="why" className="page min-h-[100vh] h-full max-xl:h-auto">
          <ChooseEcoBlock />
        </section>
        <section
          id="explore"
          className="page max-md:h-[auto] max-lg:h-[100%] min-h-[100vh] h-full"
        >
          <ExploreEcoBlock />
        </section>
        <section
          id="contact"
          className="page max-lg:h-fit max-lg:min-h-fit min-h[100vh] h-full"
        >
          <Footer />
        </section>
      </div>
    </Background>
  );
};

export default SreenDesktop;
