import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import createScrollSnap from 'scroll-snap';

import BaseLayout from '../../layout/BaseLayout';
import About from '../About';
import ChooseEcoBlock from '../ChooseEcoBlock';
import ExploreEcoBlock from '../ExploreEcoBlock';
import Footer from '../Footer';
import Intro from '../Intro';

const SreenDesktop = () => {
  const container = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = container.current?.childElementCount ?? 0;
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!isScrolling) {
        setIsScrolling(true);
        const containerElement = container.current;
        if (containerElement) {
          const { deltaY } = event;
          // const windowHeight = window.innerHeight;
          const totalPages = containerElement.childElementCount;
          let newCurrentPage = currentPage;

          if (deltaY > 0 && currentPage < totalPages - 1) {
            newCurrentPage += 1;
          } else if (deltaY < 0 && currentPage > 0) {
            newCurrentPage -= 1;
          }

          setTimeout(() => {
            if (newCurrentPage !== currentPage) {
              setCurrentPage(newCurrentPage);
            }
            setIsScrolling(false);
          }, 500);
        }
      }
    };

    const bindScrollSnap = () => {
      const element = container.current;
      createScrollSnap(element!, {
        snapDestinationY: '100%',
      });

      element?.scrollTo({
        top: currentPage * window.innerHeight,
        behavior: 'smooth',
      });
    };

    const containerElement = container.current;
    containerElement?.addEventListener('wheel', handleScroll);

    bindScrollSnap();

    return () => {
      containerElement?.removeEventListener('wheel', handleScroll);
    };
  }, [currentPage, isScrolling]);

  return (
    <>
      <BaseLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div id="container" ref={container}>
          <div className="page first-page ">
            <Intro />
          </div>
          <div className="page second-page ">
            <About />
          </div>
          <div className="page third-page  ">
            <ChooseEcoBlock />
          </div>
          <div className="page fourth-page ">
            <ExploreEcoBlock />
          </div>
          <div className="page five-page  ">
            <Footer />
          </div>
        </div>
        {currentPage > 0 && (
          <button
            className="prev max-md:hidden fixed-button font-Antonio font-[18px] font-thin text-white"
            onClick={goToPreviousPage}
          >
            <Image
              src="/assets/images/icons/chevron_up_icon.png"
              width={24}
              height={24}
            />
            <div>{'Ethereum scaling solution'}</div>
          </button>
        )}
        {currentPage !== 4 && (
          <button
            className="next z-40 fixed-button font-Antonio font-[18px] font-thin text-white"
            onClick={goToNextPage}
          >
            <div>{currentPage === 3 ? 'About Us' : 'What is EcoBlock?'}</div>
            <Image
              src="/assets/images/icons/chevron_down_icon.png"
              width={24}
              height={24}
            />
          </button>
        )}
      </BaseLayout>
    </>
  );
};

export default SreenDesktop;
