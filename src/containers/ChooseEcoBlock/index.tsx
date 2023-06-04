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
  return (
    <div className="w-full h-[100%] items-center justify-between pt-[140px] max-w-[1288px]">
      <div className="flex w-full mb-[80px]">
        <div className="flex w-full flex-col items-start justify-start space-y-4">
          <Image
            src="/assets/images/icons/triagle.svg"
            alt="icon"
            width={24}
            height={24}
          />
          <div className="flex font-Antonio text-4xl text-white">
            {t('explore_eco')}
          </div>
        </div>
        <div className="flex w-full justify-center font-Inter text-xl text-primary-200 font-light">
          {t('explore_eco_layer')}
        </div>
      </div>
      <div className="flex justify-center mt-[38px] ">
        {items.map((e, index) => {
          return (
            <div
              key={index}
              className="w-full bg-primary-200 w-[20%] zoom text-center min-w-[298px]"
            >
              <img src={`/assets/images/${e.image}.svg`} alt="icon" />
              <div className="title text-white font-Antonio my-[20px]">
                {t(e.name)}
              </div>
              <div className="content font-Inter font-light">
                {t(e.content)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseEcoBlock;
