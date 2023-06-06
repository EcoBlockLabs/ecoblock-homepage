import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

import { classNames } from '../../utils/classNames';

const Header: React.FC = () => {
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const { lang } = useTranslation();

  return (
    <div className="container w-full pb-6 z-50 fixed pt-[44px] max-md:px-[16px] flex gap-3 justify-between">
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
      </div>
      <div>
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
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                      )}
                    >
                      Bridge
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                      )}
                    >
                      Block Explorer
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-sm gap-2 flex items-center'
                      )}
                    >
                      Docs
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <style jsx>
        {`
          .menu-translate {
            z-index: 9999;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
