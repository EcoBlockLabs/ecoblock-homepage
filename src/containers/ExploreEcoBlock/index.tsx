import Image from 'next/image';
import Link from 'next/link';

const ExploreEcoBlock: React.FC = () => {
  const exploreItems = [
    {
      image: 'get_starts',
      title: 'Get Started',
      content:
        'Everything you need to get started building on EcoBlock, all in one place.',
      link: '',
    },
    {
      image: 'ex_bridge',
      title: 'Bridge',
      content:
        'Bridges allow users to deposit or withdraw assets between EcoBlock and Ethereum',
      link: '',
    },
    {
      image: 'ex_faq',
      title: 'FAQ',
      content:
        'Checkout the Frequently Asked Questions to understand more about EcoBlock.',
      link: '',
    },
  ];
  return (
    <div className="flex w-full h-[100%] items-center justify-between flex-row-reverse max-md:justify-end max-md:flex-col">
      <div className="flex w-[40%] max-md:w-full flex-col items-start justify-start space-y-4">
        <div className="hidden headline w-[100%] max-md:flex"></div>
        <div className="flex max-md:w-full max-md:justify-center">
          <Image
            src="/assets/images/icons/triagle.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex font-Antonio max-md:justify-center max-md:w-full text-[36px] text-white max-sm:text-[24px]">
          Explore EcoBlock
        </div>
        <div className="flex font-Inter max-md:justify-center max-md:w-full text-[20px] max-md:text-[14px] text-primary-200 font-light max-w-[600px]">
          Browse through resources that can help you build on the latest
          EcoBlock chain.
        </div>
      </div>
      <div className="w-[60%] max-md:w-full justify-center">
        {exploreItems.map((e) => {
          return (
            <div
              key={e.image}
              className="flex w-[70%] max-2xl:w-[90%] max-md:w-[100%] max-md:flex-col max-md:text-center mb-[40px] max-md:mb-[0]"
            >
              <div className="hidden headline w-[100%] max-md:flex" />
              <div className="min-w-[120px] mx-4">
                <Image
                  src={`/assets/images/${e.image}.svg`}
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <div className="font-Antonio text-[24px] max-md:text-[18px] text-white">
                  {e.title}
                </div>
                <div className="flex font-Inter text-[16px] max-md:text-[14px] max-md:justify-center  text-primary-200 font-light max-w-[600px] my-[10px]">
                  {e.content}
                </div>
                <div className="text-purple-400 font-normal	font-Inter text-[16px]">
                  <Link href={e.link}>VIEW DOCS</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreEcoBlock;
