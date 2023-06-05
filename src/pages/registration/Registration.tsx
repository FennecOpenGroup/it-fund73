import { Heading, HStack, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { AboutUsBlock } from '../../components/aboutUsBlock/AboutUsBlock';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Registration = React.memo(() => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Helmet>
        <title>it-fund | Регистрация на конкурс</title>
      </Helmet>
      <VStack minH={`${height}px`} justify="center">
        <Header  />
        <HStack w={['80%', '70%', '60%']} align="start">
          <VStack w="75%" align="start">
            <Heading color="black" fontWeight="bold" fontSize={['xl', '2xl', '3xl', '4xl', '5xl']}>
              Конкурс проектов на 2023
            </Heading>
            <VStack
              w="full"
              minH={`${height / 2.5}px`}
              bg="brand.beige"
              fontWeight="light"
              borderRadius="10px"
              px={[2, 3, 4]}
              py={[4, 6, 8, 10]}
              align="center"
              justify="center"
            ></VStack>
            <VStack
              w="full"
              minH={`${height / 4}px`}
              bg="brand.beige"
              fontWeight="light"
              borderRadius="10px"
              px={[2, 3, 4]}
              py={[4, 6, 8, 10]}
              align="center"
              justify="center"
            ></VStack>
          </VStack>
          <AboutUsBlock />
        </HStack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
