import { Spacer, VStack, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import logo from '../../assets/logo-dark.svg';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  // const texts = new LocalizedStrings({
  //   EN: {
  //     fund1: 'In ',
  //     fund2: 'projects were allocated',
  //     fund3: 'million rubles',
  //     fund4: 'people involved in the projects received support',
  //     more: 'Read more',
  //   },
  //   RU: {
  //     fund1: 'За',
  //     fund2: 'проектам было выделено',
  //     fund3: 'млн. руб',
  //     fund4: 'человек участвовавших в проектах получили поддержку',
  //     more: 'Подробнее',
  //   },
  // });

  // const lang = useSelector((state: IRootState) => state.core.lang);

  return (
    <>
      <Helmet>
        <title>it-fund</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} justify="start">
        <Image
          src={logo}
          alt="itfund"
          loading="lazy"
          minW="32px"
          minH="32px"
          maxH="100px"
          htmlWidth="full"
          htmlHeight="full"
        />
        <VStack
          w={['90%', '80%', '70%']}
          minH={`${height / 2.5}px`}
          bg="brand.beige"
          fontWeight="light"
          borderRadius="10px"
          px={[2, 3, 4]}
          py={[4, 6, 8, 10]}
          align="center"
          justify="center"
        ></VStack>
        <HStack w={['90%', '80%', '70%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 5}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 5}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 5}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <HStack w={['90%', '80%', '70%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <HStack w={['90%', '80%', '70%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <HStack w={['90%', '80%', '70%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
