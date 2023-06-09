import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const ExploreEcoBlock: React.FC = () => {
  const exploreItems = [
    {
      image: 'get_starts.png',
      title: 'get_starts',
      content: 'content_start',
      link: 'https://docs.ecoblock.tech',
    },
    {
      image: 'ex_bridge.png',
      title: 'bridge',
      content: 'content_bridge',
      link: 'https://bridge.ecoblock.tech',
    },
    {
      image: 'ex_faq.png',
      title: 'faq',
      content: 'content_faq',
      link: 'https://docs.ecoblock.tech/faq',
    },
  ];
  const { t } = useTranslation('home');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) return;

    event.preventDefault();

    const targetSectionId = event.currentTarget.getAttribute('href');
    if (targetSectionId) {
      const targetSection = document.querySelector(
        targetSectionId
      ) as HTMLElement;
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="flex relative w-full h-[100%] max-md:pb-[120px] items-center justify-between flex-row-reverse max-md:justify-end max-md:flex-col">
      <div className="flex w-[40%] max-md:w-full flex-col items-start justify-start space-y-4 max-md:mb-[40px]">
        <div className="hidden headline w-[100%] max-md:flex "></div>
        <div className="flex max-md:w-full max-md:justify-center">
          <Image
            src="/assets/images/icons/triagle.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex font-Antonio font-light max-md:justify-center max-md:w-full text-[36px] text-white max-sm:text-[24px]">
          {t('eco_tile')}
        </div>
        <div className="flex font-Inter max-md:justify-center max-md:w-full text-[20px] max-md:text-[14px] text-primary-200 font-light max-w-[600px]">
          {t('eco_des')}
        </div>
      </div>
      <div className="w-[60%] max-md:w-full justify-center">
        {exploreItems.map((e) => {
          return (
            <div
              key={e.image}
              className="flex w-[70%] max-2xl:w-[90%] max-md:w-[100%] max-md:flex-col max-md:text-center mb-[40px] max-md:mb-[0]"
            >
              <div className="hidden headline w-[100%] max-md:flex max-md:mb-[20px]" />
              <div className="min-w-[150px] mx-4">
                <Image
                  src={`/assets/images/${e.image}`}
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <div className="font-Antonio text-[24px] max-md:text-[18px] text-white">
                  {t(e.title)}
                </div>
                <div className="flex font-Inter text-[16px] max-md:text-[14px] max-md:justify-center  text-primary-200 font-light max-w-[600px] max-md:w-[100%] my-[10px]">
                  {t(e.content)}
                </div>
                <div className="text-purple-400 font-normal max-md:mb-[40px]	font-Inter text-[16px]">
                  <Link href={e.link}>
                    <a target="_blank" rel="noopener noreferrer">
                      {t('view_docs')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#contact" onClick={handleLinkClick}>
        <button className="absolute bottom-0 left-[50%] btn-transform justify-center z-40 font-Antonio font-[18px] font-thin text-white">
          <div>{t('contact_us')}</div>
          <Image
            src="/assets/images/icons/chevron_down_icon.png"
            width={24}
            height={24}
          />
        </button>
      </a>
    </div>
  );
};

export default ExploreEcoBlock;
