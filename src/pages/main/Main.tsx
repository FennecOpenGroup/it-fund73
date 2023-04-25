import { Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Helmet>
        <title>it-fund</title>
      </Helmet>
      <VStack minH={`${height}px`} justify="center">
        <Header />
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
