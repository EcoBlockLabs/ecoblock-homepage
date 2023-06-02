import Image from 'next/image';

import Header from '../components/Header';

const BaseLayout: React.FC = ({ children }) => {
  const listMenu = [
    {
      label: 'Introduction',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#introduction',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
    {
      label: 'What is EcoBlock',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#about',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
    {
      label: 'Why choose EcoBlock',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#why-choose',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
    {
      label: 'Explore EcoBlock',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#explore',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
  ];

  return (
    <>
      <div className="flex w-full min-h-[100vh] overflow-hidden">
        <div className="main pr-[12%] w-[100%] min-h-[100vh] bg-no-repeat bg-cover px-8 py-10">
          <Header />
          <div className="flex w-full flex-col min-h-[100%] overflow-y-auto">
            {children}
          </div>
        </div>
        <div className="navigator flex flex-col justify-center fixed top-0 right-0 min-h-[100vh] w-[10%] space-y-10">
          {listMenu.map((item) => (
            <div key={item.link} className="flex gap-4 cursor-pointer">
              <Image src={item.icon} alt="icon" width={16} height={16} />
              <p className="font-Antonio text-primary-100 font-extrabold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .main {
            background-image: url('/assets/images/background.png');
          }
          .navigator {
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 0.98%,
              rgba(255, 255, 255, 0.1) 100%
            );
            backdrop-filter: blur(25px);
          }
        `}
      </style>
    </>
  );
};

export default BaseLayout;
