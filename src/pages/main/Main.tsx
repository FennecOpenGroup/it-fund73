import { HStack, Spacer, VStack, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { NewsContent } from '../../components/newsContent/NewsContent';
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
          justify="start"
          boxShadow="5px 0px rgb(3,0,15,15%)"
        >
          <HStack w="full">
            <VStack w="80%">
              <HStack w="full" spacing={5}>
                <NewsContent name="Тестовое название новости" />
                <NewsContent name="Тестовое название новости" />
              </HStack>
              <HStack w="full" spacing={5}>
                <NewsContent name="Тестовое название новости" />
                <NewsContent name="Тестовое название новости" />
                <NewsContent name="Тестовое название новости" />
              </HStack>
              <HStack w="full" spacing={5}>
                <NewsContent name="Тестовое название новости" />
                <NewsContent name="Тестовое название новости" />
                <NewsContent name="Тестовое название новости" />
              </HStack>
            </VStack>
            <VStack w="20%" spacing={2} borderLeft="2px" minH={`${height}px`}>
              <Text w="90%" color="brand.dark" fontSize="2xl" borderBottom="2px" align="center">
                Новости
              </Text>
              <Link w="90%" color="brand.dark" fontSize="md" borderBottom="1px">
                Очень очень подробный текст, информационной новости
              </Link>
              <Spacer />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
