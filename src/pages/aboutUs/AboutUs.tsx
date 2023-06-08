import { VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const AboutUs = React.memo(() => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Helmet>
        <title>it-fund | О фонде</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} justify="center" px="10%">
        <VStack
          w="full"
          minH={`${height}px`}
          bg="brand.beige"
          pl={[2, 3, 4]}
          pb={[4, 6]}
          boxShadow="5px 0px rgb(3,0,15,15%)"
        ></VStack>
      </VStack>
      <Footer />
    </>
  );
});
