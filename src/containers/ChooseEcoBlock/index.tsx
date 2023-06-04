import Image from 'next/image';

const ChooseEcoBlock: React.FC = () => {
  const items = [
    {
      name: 'Ultra-low Costs',
      image: 'ultra_low_costs',
      content:
        'EcoBlock is a layer-2 network that enables Ethereum to scale securely with ultra-low transaction fees through a new security model that relies on a Data Availability Committee (DAC).',
    },
    {
      name: 'High Throughput',
      image: 'high_throughput',
      content:
        'Due to transactions being processed off-chain on EcoBlock, it results in higher transaction speed and faster confirmation time.',
    },
    {
      name: 'Security of Ethereum',
      image: 'security_of_ethereum',
      content:
        'EcoBlock is a layer-2 network that enables Ethereum to scale securely with ultra-low transaction fees through a new security model that relies on a Data Availability Committee (DAC).',
    },
    {
      name: 'EVM Compatibility',
      image: 'evm_compatibility',
      content:
        'EcoBlock is compatible with the EVM to the byte code level, which enables developers build Ethereum apps quickly without surprises',
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
            Explore EcoBlock
          </div>
        </div>
        <div className="flex w-full justify-center font-Inter text-xl text-primary-200 font-light">
          EcoBlock is a layer-2 network that enables Ethereum to scale securely
          with ultra-low transaction fees through a new security model that
          relies on a Data Availability Committee (DAC).
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
                {e.name}
              </div>
              <div className="content font-Inter font-light">{e.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseEcoBlock;
