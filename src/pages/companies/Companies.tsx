import { VStack, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Companies = React.memo(() => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Helmet>
        <title>it-fund | Что происходит в отрасли?</title>
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
        >
          <HStack>
            <Text color='brand.dark'>IT-организаций –</Text>
            <CountUp end={1451} duration={5} />
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
