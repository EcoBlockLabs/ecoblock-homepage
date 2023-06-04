import Image from 'next/image';

import Header from '../components/Header';
import { convertValueType } from '../utils/landing';

interface LayoutProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

const BaseLayout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  setCurrentPage,
}) => {
  const listMenu = [
    {
      id: 0,
      label: 'Introduction',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#introduction',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
    {
      id: 1,
      label: 'What is EcoBlock',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#about',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
    {
      id: 2,
      label: 'Why choose EcoBlock',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#why-choose',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
    {
      id: 3,
      label: 'Explore EcoBlock',
      icon: '/assets/images/icons/chevron-right.svg',
      link: '#explore',
      iconActive: '/assets/images/icons/chevron-right-empty.svg',
    },
  ];
  const type = convertValueType(currentPage);

  const handleClick = (newPage: number) => {
    setTimeout(() => {
      setCurrentPage(newPage);
      // scrollToPage(newPage);
    }, 200);
  };
  return (
    <>
      <div className="flex w-full min-h-[100vh] overflow-hidden">
        <div className="main  w-[100%] min-h-[100vh] bg-no-repeat bg-cover">
          <Header />
          <div className="flex w-full flex-col min-h-[100%] overflow-y-auto">
            <div>{children}</div>
          </div>
        </div>
        <div className="navigator max-lg:hidden flex flex-col justify-center fixed top-0 right-0 min-h-[100vh] w-[151px] pr-4 space-y-10">
          {listMenu.map((item) => (
            <div
              key={item.link}
              onClick={() => handleClick(item.id)}
              className="flex gap-4 cursor-pointer"
            >
              <Image
                src={type === item.label ? item.iconActive : item.icon}
                alt="icon"
                width={16}
                height={16}
              />
              <p
                className={
                  type === item.label
                    ? 'font-Antonio text-white font-extrabold text-base'
                    : 'font-Antonio text-primary-100 font-extrabold text-base'
                }
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .main {
            background-image: url('/assets/images/background.svg');
          }
          .navigator {
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 0.98%,
              rgba(255, 255, 255, 0.1) 100%
            );
            min-width: 150px;
          }
        `}
      </style>
    </>
  );
};

export default BaseLayout;
