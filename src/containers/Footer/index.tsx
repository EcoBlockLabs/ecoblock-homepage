import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  // const footer = [
  //   {
  //     name: 'Brigde',
  //     item: ['Bridge item 1', 'Bridge item 1', 'Bridge item 1'],
  //   },
  //   {
  //     name: 'Brigde 2',
  //     item: ['Bridge item 1', 'Bridge item 1', 'Bridge item 1'],
  //   },
  //   {
  //     name: 'Brigde 3',
  //     item: ['Bridge item 1', 'Bridge item 1', 'Bridge item 1'],
  //   },
  // ];

  const icon = [
    'in',
    'twitter',
    'facebook',
    'telegram',
    'discord',
    'instagram',
    'youtube',
  ];
  return (
    <div className="flex flex-col justify-between h-[70%] max-h-[500px] w-full self-end max-w-[970px]">
      {/* <div className=" flex w-full items-center justify-between">
        {footer.map((e) => {
          return (
            <div key={e.name}>
              <div className="font-Antonio text-[24px] text-white">
                {e.name}
              </div>
              {e.item.map((items) => {
                return (
                  <div
                    key={items}
                    className="flex font-Inter text-[16px] text-primary-200 font-light "
                  >
                    {items}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div> */}
      <div className="w-full items-center justify-between max-md:text-center max-md:mt-[120px]">
        <div className="flex w-full mb-[55px] justify-between max-md:flex-col">
          <div className="max-md:justify-center flex-col">
            <div className="font-Antonio text-[36px] text-white font-bold">
              Let’s Get in Touch
            </div>
            <div className="w-[25px] h-[1px] bg-white max-md:m-auto mt-[13px]" />
          </div>
          <div className="font-Inter max-md:mt-[30px] text-[16px] text-primary-200 font-light">
            <div className="flex w-fit max-md:m-auto h-[60px] contact px-[14px] py-[20px]">
              {icon.map((icons, index) => {
                return (
                  <div
                    key={icons}
                    className={
                      index + 1 === icons.length
                        ? 'flex  pr-[0px]'
                        : 'flex pr-[40px] max-md:pr-[24px]'
                    }
                  >
                    <Link href="http://">
                      <Image
                        src={`/assets/images/icons/${icons}.svg`}
                        width={18}
                        height={18}
                        className="w-full"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between max-md:flex-col">
          <div>
            <div className="flex max-md:mb-[9px]  max-md:justify-center font-Inter text-[16px] text-primary-200 font-light">
              Ecoblock
            </div>
            <div className="flex max-md:mb-[37px] max-md:justify-center font-Inter text-[16px] text-primary-200 font-light">
              Achter de Dom 14, 3512 JP Utrecht, NL
            </div>
          </div>
          <div className="font-Inter text-[16px] text-primary-200 font-light">
            <div>contact@ecoblock.com</div>
            {/* <div className="max-md:mt-[16px]">079 5567 2982</div> */}
          </div>
        </div>
      </div>

      <div className="flex w-full max-md:mt-[40px]">
        <div className="divider font-Poppins font-light text-[14px] max-sm:text-center">
          © COPYRIGHT 2023 Ecoblock. ALL RIGHTS RESERVED
        </div>
      </div>
      <style jsx>
        {`
          .contact {
            background: linear-gradient(
              90deg,
              rgba(213, 213, 213, 0) 0.14%,
              rgba(225, 225, 225, 0.21) 49.5%,
              rgba(212, 212, 212, 0) 99.9%
            );
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
