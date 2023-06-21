import { useEffect, useState } from 'react';

import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const ChooseEcoBlock: React.FC = () => {
  const { t } = useTranslation('home');

  const items = [
    {
      name: 'ultra_low_costs',
      image: 'ultra_low_costs',
      content: 'explore_utral',
    },
    {
      name: 'high_throughput',
      image: 'high_throughput',
      content: 'explore_high',
    },
    {
      name: 'security_of_ethereum',
      image: 'security_of_ethereum',
      content: 'explore_security',
    },
    {
      name: 'evm_compatibility',
      image: 'evm_compatibility',
      content: 'explore_evm',
    },
  ];

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
    <div className="w-full relative h-[100%] items-center justify-between max-xl:pb-[100px] pt-[100px] max-w-[1288px]">
      <div className="flex w-full mb-[40px] mt-[10px] max-lg:flex-col max-md:text-center">
        <div className="flex w-full flex-col items-start  justify-start space-y-4">
          <div className="max-md:mx-auto">
            <Image
              src="/assets/images/icons/triagle.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </div>
          <div className="flex w-full max-md:mx-auto text-[36px] max-md:justify-center max-sm:text-[24px] font-Antonio font-light text-4xl text-white">
            {t('explore_eco')}
          </div>
        </div>
        <div className="flex w-full justify-center font-Inter text-[20px] max-sm:text-[14px] max-md:pt-[10px] text-primary-200 font-light">
          {t('explore_eco_layer')}
        </div>
      </div>
      <div className="flex justify-center py-[38px] max-md:flex-col grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
        {items.map((e, index) => {
          return (
            <div
              key={index}
              className="relative w-full zoom text-center min-w-[300px] h-[423px] max-xl:h-[339px]"
            >
              <div className="absolute z-10 w-10 h-full bg-transparent left-[-4px] top-0" />
              <div>
                <img src={`/assets/images/${e.image}.png`} alt="icon" />
                <div className="title text-white font-Antonio my-[20px]">
                  {t(e.name)}
                </div>
                <div className="content font-Inter font-light">
                  {t(e.content)}
                </div>
              </div>
              <div className="absolute z-10 w-10 h-full bg-transparent right-[-4px] top-0" />
            </div>
          );
        })}
      </div>
      <a href="#explore" onClick={handleLinkClick}>
        <button className="absolute bottom-0 left-[50%] btn-transform justify-center z-40 font-Antonio font-[18px] font-thin text-white">
          <div>{t('eco_tile')}</div>
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

export default ChooseEcoBlock;
