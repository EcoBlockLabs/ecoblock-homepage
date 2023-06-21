import { Fragment, useEffect } from 'react';

import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

import { classNames } from '../../utils/classNames';

interface IHeaderProps {
  activeMenuItem?: string;
}

const Header: React.FC<IHeaderProps> = ({ activeMenuItem }) => {
  const router = useRouter();
  const { lang } = useTranslation();
  const { pathname } = router;
  const changeLanguage = (newLang: string) => {
    router.push(pathname, pathname, { locale: newLang });
  };

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

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
      link: '#why',
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

  return (
    <div className="header w-full z-50 fixed h-[72px] items-center max-md:px-[16px] flex gap-3 justify-center">
      <div className="flex container max-2xl:mx-[20px] mx-auto w-full items-center gap-3 justify-between">
        <div className="flex gap-4">
          <div className="max-md:hidden block">
            <Image
              src="/assets/images/white-logo.svg"
              alt="logo"
              width={160}
              height={40}
            />
          </div>
          <div className="max-md:block hidden">
            <Image
              src="/assets/images/icons/white-logo-mobi.svg"
              alt="logo"
              width={34}
              height={40}
            />
          </div>
        </div>
        <div className="hidden xl:flex">
          {listMenu.map((item) => {
            return (
              <a key={item.link} href={item.link} onClick={handleLinkClick}>
                <div key={item.link} className="grid justify-center mr-[60px]">
                  <div
                    className="font-Antonio font-bold text-[14px]"
                    style={{
                      color:
                        `#${activeMenuItem}` === item.link ? 'white' : 'white',
                      opacity: `#${activeMenuItem}` === item.link ? '' : '0.3',
                    }}
                  >
                    {item.label}
                  </div>
                  <div className="flex pt-[4px] justify-center">
                    <Image
                      src={
                        `#${activeMenuItem}` === item.link
                          ? item.iconActive
                          : item.icon
                      }
                      alt="icon"
                      width={16}
                      height={16}
                      style={{
                        opacity:
                          `#${activeMenuItem}` === item.link ? '' : '0.3',
                      }}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2">
                <Image
                  src="/assets/images/languages/eng.png"
                  alt="eng"
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/images/icons/chevron-down.svg"
                  alt="dropdown"
                  width={14}
                  height={10}
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="menu-translate font-Inter font-normal absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          lang === 'en'
                            ? 'bg-cyan-300'
                            : active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                        )}
                        onClick={() => changeLanguage('en')}
                      >
                        <Image
                          src="/assets/images/languages/eng.png"
                          alt="eng"
                          width={24}
                          height={24}
                        />
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          lang === 'cn'
                            ? 'bg-cyan-300'
                            : active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                        )}
                        onClick={() => changeLanguage('cn')}
                      >
                        <Image
                          src="/assets/images/languages/cn.png"
                          alt="cn"
                          width={24}
                          height={24}
                        />
                        中國人
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2">
                <Image
                  src="/assets/images/icons/hamburger.svg"
                  alt="dropdown"
                  width={24}
                  height={24}
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0  z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 font-Inter font-normal ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link passHref href={'https://bridge.ecoblock.tech'}>
                        <a target="_blank" rel="noopener noreferrer">
                          <button
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                            )}
                          >
                            Bridge
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link passHref href={'https://ecoscan.io'}>
                        <a target="_blank" rel="noopener noreferrer">
                          <button
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                            )}
                          >
                            Block Explorer
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={'https://docs.ecoblock.tech'}>
                        <a target="_blank" rel="noopener noreferrer">
                          <button
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                            )}
                          >
                            Docs
                          </button>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <style jsx>
        {`
          .menu-translate {
            z-index: 9999;
          }
          .header {
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 0.98%,
              rgba(255, 255, 255, 0.1) 100%
            );
            backdrop-filter: blur(25px);
             {
              /* position: absolute; */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
