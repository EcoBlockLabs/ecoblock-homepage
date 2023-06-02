import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="flex w-full h-[95vh] items-center justify-between">
      <div className="flex w-full flex-col items-start justify-start space-y-4">
        <Image
          src="/assets/images/icons/triagle.svg"
          alt="icon"
          width={24}
          height={24}
        />
        <div className="flex font-Antonio text-4xl text-white">
          Ethereum scaling solution
        </div>
        <div className="flex font-Inter text-xl text-primary-200 font-light max-w-[600px]">
          EcoBlock is a ultra-low costs, high security and lightning-fast
          Ethereum L2 blockchain
        </div>
        <div className="flex pt-5 gap-4 flex-row">
          <button className="flex font-Poppins gap-2 text-[#FFFEFE] bg-primary-300 rounded-xl py-3 px-5">
            Build your app{' '}
            <Image
              src="/assets/images/icons/button-icon.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </button>
          <button className="flex font-Poppins gap-2 text-primary-300 bg-white rounded-xl py-3 px-5">
            Bridge to EcoBlock{' '}
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
          src="/assets/images/section1.png"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default About;
