import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

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
      <VStack minH={`${height}px`} justify="start" px="10%">
        <VStack
          w="full"
          minH={`${height}px`}
          bg="brand.beige"
          fontWeight="light"
          px={[2, 3, 4]}
          py={[4, 6, 8, 10]}
          align="center"
          justify="center"
          boxShadow="5px 0px rgb(3,0,11,35%)"
        >
          <HStack></HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
