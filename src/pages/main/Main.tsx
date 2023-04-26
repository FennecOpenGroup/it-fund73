import { Spacer, VStack, HStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { DrawerNews } from '../../components/modals/DrawerNews';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  const isOpenDrawer = useSelector((state: IRootState) => state.core[ModalsEnum.MAIN_DRAWER_NEWS]);
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
        <Heading color="black" fontWeight="bold" fontSize={['xl', '2xl', '3xl', '4xl', '5xl']}>
          Главная
        </Heading>
        <VStack
          w={['80%', '70%', '60%']}
          minH={`${height / 2.5}px`}
          bg="brand.beige"
          fontWeight="light"
          borderRadius="10px"
          px={[2, 3, 4]}
          py={[4, 6, 8, 10]}
          align="center"
          justify="center"
        ></VStack>
        <HStack w={['80%', '70%', '60%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 5}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 5}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 5}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <HStack w={['80%', '70%', '60%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <HStack w={['80%', '70%', '60%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <HStack w={['80%', '70%', '60%']}>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
          <VStack w="full" borderRadius="10px" minH={`${height / 2}px`} bg="brand.beige" p={5}></VStack>
        </HStack>
        <Spacer />
        <Footer />
        <DrawerNews isOpen={!!isOpenDrawer} />
      </VStack>
    </>
  );
});
