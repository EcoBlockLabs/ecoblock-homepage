import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const About: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <div className="flex w-full h-[100%] items-center max-xl:justify-center max-xl:flex-col-reverse justify-between flex-row-reverse">
      <div className="flex w-full max-xl:w-fit flex-col items-start justify-start space-y-4">
        <div className="flex max-md:w-full max-md:justify-center">
          <Image
            src="/assets/images/icons/triagle.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex font-Antonio text-[36px] text-white max-sm:text-[24px] max-md:w-full max-md:justify-center">
          {t('what_is')}
        </div>
        <div className="flex font-Inter max-sm:text-[14px] text-primary-200 font-light max-md:w-full max-md:text-center max-w-[600px]">
          {t('eco_layer')}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Image
          src="/assets/images/globe.svg"
          width={600}
          height={600}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default About;
