import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const About: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className="flex relative w-full h-[100%] max-xl:pb-[120px] items-center max-xl:justify-center max-lg:flex-col-reverse justify-between flex-row-reverse">
      <div className="flex w-full max-xl:w-fit flex-col items-start justify-start space-y-4 max-lg:pt-[50px]">
        <div className="flex max-md:w-full max-md:justify-center">
          <Image
            src="/assets/images/icons/triagle.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex font-Antonio text-[36px] font-light text-white max-sm:text-[24px] max-md:w-full max-md:justify-center">
          {t('what_is')}
        </div>
        <div className="flex font-Inter text-[20px] max-sm:text-[14px] text-primary-200 font-light max-md:w-full max-md:text-center max-w-[600px]">
          {t('eco_layer')}
        </div>
      </div>
      <div className="flex w-full justify-center max-lg:max-w-[100%] max-w-[50%]">
        <Image
          src="/assets/images/globe.png"
          width={422}
          height={422}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default About;
