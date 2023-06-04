const Footer: React.FC = () => {
  const footer = [
    {
      name: 'Brigde',
      item: ['Bridge item 1', 'Bridge item 1', 'Bridge item 1'],
    },
    {
      name: 'Brigde 2',
      item: ['Bridge item 1', 'Bridge item 1', 'Bridge item 1'],
    },
    {
      name: 'Brigde 3',
      item: ['Bridge item 1', 'Bridge item 1', 'Bridge item 1'],
    },
  ];
  return (
    <div className="flex flex-col justify-between h-[70%] w-full self-end max-w-[970px]">
      <div className=" flex w-full items-center justify-between">
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
      </div>
      <div className="w-full items-center justify-between max-sm:text-center max-md:mt-[120px]">
        <div className="flex w-full justify-between max-sm:flex-col">
          <div>
            <div className="font-Antonio text-[36px] text-white font-bold">
              Let’s Get in Touch
            </div>
          </div>
          <div className="font-Inter text-[16px] text-primary-200 font-light">
            <div>in twiter</div>
          </div>
        </div>
        <div className="flex w-full justify-between max-sm:flex-col">
          <div>
            <div className="flex max-sm:justify-center font-Inter text-[16px] text-primary-200 font-light">
              Ecoblock
            </div>
            <div className="flex max-sm:justify-center font-Inter text-[16px] text-primary-200 font-light">
              Achter de Dom 14, 3512 JP Utrecht, NL
            </div>
          </div>
          <div className="font-Inter text-[16px] text-primary-200 font-light">
            <div></div>
            <div>contact@ecoblock.com</div>
            <div>079 5567 2982</div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="divider font-Poppins font-light text-[14px]">
          © COPYRIGHT 2023 Ecoblock. ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
