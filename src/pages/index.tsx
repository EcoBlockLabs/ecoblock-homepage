import React from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import SreenDesktop from '../containers/SreenDesktop';

const Index = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SreenDesktop />
    </QueryClientProvider>
  );
};

export default Index;
