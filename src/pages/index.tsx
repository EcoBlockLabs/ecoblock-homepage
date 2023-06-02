import { useEffect, useState } from 'react';

import About from '../containers/About';
import Intro from '../containers/Intro';
import { useScrollDirection } from '../hooks/useScrollDirection';
import BaseLayout from '../layout/BaseLayout';

const Index = () => {
  const scrollDir = useScrollDirection();

  const [currentPosition, setCurrentPosition] = useState(0);

  console.log('scrollDir', scrollDir);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('window.innerHeight', window.innerHeight);
      if (scrollDir === 'down') {
        window.scrollTo({
          top: currentPosition + window.innerHeight,
          left: 0,
          behavior: 'smooth',
        });
        setCurrentPosition(
          currentPosition < document.body.scrollHeight
            ? currentPosition + window.innerHeight
            : currentPosition
        );
      } else if (scrollDir === 'up') {
        window.scrollTo({
          top: currentPosition - window.innerHeight,
          left: 0,
          behavior: 'smooth',
        });
        setCurrentPosition(
          currentPosition >= window.innerHeight
            ? currentPosition - window.innerHeight
            : 0
        );
      }
    }
  }, [scrollDir, currentPosition]);

  return (
    <BaseLayout>
      <Intro />
      <About />
      <About />
      <About />
      <About />
    </BaseLayout>
  );
};

export default Index;
