import { Meta } from './Meta';

const Background: React.FC = ({ children }) => {
  return (
    <>
      <Meta title="EcoBlock - Ethereum Scaling Solution" description="" />
      <div className="main bg-no-repeat flex w-full h-[100vh] relative justify-center">
        {children}
      </div>
    </>
  );
};

export default Background;
