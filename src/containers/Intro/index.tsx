import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const Intro: React.FC = () => {
  const { t } = useTranslation('home');
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
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
    <div className="flex w-full h-[100%] relative max-xl:pb-[140px] max-xl:w-fit max-lg:flex-col-reverse max-xl:justify-center items-center justify-between">
      <div className="flex w-full flex-col items-start justify-start space-y-4 max-xl:mt-12">
        <div className="flex max-md:w-full max-md:justify-center">
          <Image
            src="/assets/images/icons/triagle.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex font-Antonio text-[36px] text-white font-light max-sm:text-[24px] max-md:w-full max-md:justify-center">
          {t('eth_scaling_solution')}
        </div>
        <div className="flex font-Inter text-[20px] max-sm:text-[14px] text-primary-200 font-light max-md:w-full max-md:text-center max-w-[600px]">
          {t('intro_eco')}
        </div>
        <div className="flex pt-5 gap-4 flex-row max-md:flex-col max-md:w-full">
          <button className="primary-button max-md:justify-center font-medium  flex font-Poppins gap-2 text-[#FFFEFE] bg-primary-300 rounded-xl py-3 px-5">
            {t('build_your_app')}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.16739 10.498C4.7009 10.4039 4.21777 10.4353 3.76739 10.589C3.35546 10.7299 2.98533 10.9716 2.69068 11.2921C2.39603 11.6126 2.18623 12.0017 2.08039 12.424C1.96953 12.8578 1.97063 13.3126 2.08357 13.7458C2.19651 14.179 2.4176 14.5764 2.72612 14.9008C3.03464 15.2252 3.42048 15.466 3.84747 15.6005C4.27447 15.7351 4.72863 15.759 5.16739 15.67V18.89C5.16739 19.1672 5.222 19.4417 5.3281 19.6977C5.4342 19.9538 5.58971 20.1864 5.78575 20.3824C5.98179 20.5783 6.21451 20.7337 6.47062 20.8397C6.72673 20.9457 7.00122 21.0002 7.27839 21H18.8894C19.1666 21.0002 19.4412 20.9456 19.6974 20.8396C19.9536 20.7336 20.1863 20.5781 20.3824 20.382C20.5784 20.186 20.7339 19.9532 20.84 19.697C20.946 19.4408 21.0005 19.1663 21.0004 18.889V7.27802C21.0005 7.00077 20.946 6.7262 20.84 6.47002C20.7339 6.21385 20.5784 5.98108 20.3824 5.78503C20.1863 5.58898 19.9536 5.43349 19.6974 5.32745C19.4412 5.22141 19.1666 5.16689 18.8894 5.16702H15.6694C15.7635 4.70053 15.7321 4.21741 15.5784 3.76702C15.4373 3.35523 15.1955 2.98523 14.875 2.69062C14.5546 2.396 14.1656 2.18612 13.7434 2.08002C13.3096 1.96917 12.8549 1.97026 12.4216 2.0832C11.9884 2.19614 11.591 2.41724 11.2666 2.72575C10.9422 3.03427 10.7014 3.42011 10.5669 3.84711C10.4324 4.2741 10.4084 4.72826 10.4974 5.16702H7.27739C7.00013 5.16689 6.72557 5.22141 6.46939 5.32745C6.21321 5.43349 5.98045 5.58898 5.7844 5.78503C5.58834 5.98108 5.43285 6.21385 5.32681 6.47002C5.22077 6.7262 5.16626 7.00077 5.16639 7.27802L5.16739 10.498Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.501 11.093L12.688 13.906L11 12.219"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="secondary-button max-md:justify-center font-medium flex font-Poppins gap-2 text-primary-300 bg-white rounded-xl py-3 px-5">
            {t('bridge_to_eco')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Image
          src="/assets/images/section1.svg"
          width={432}
          height={412}
          // className="w-full"
        />
      </div>
      <a href="#about" onClick={handleLinkClick}>
        <button className="absolute bottom-0 left-[50%] btn-transform justify-center z-40 font-Antonio font-[18px] font-thin text-white">
          <div>What is EcoBlock</div>
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

export default Intro;
