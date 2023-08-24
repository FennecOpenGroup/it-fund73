/* eslint no-return-assign: "error" */
/* eslint no-unsafe-optional-chaining: "error" */
import { VStack, useMediaQuery, Text, Button } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { IRootState } from '../../interfaces/IRootState';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { ROUTE_MAINPAGE } from '../../constants/routes';

export const notFound = React.memo(() => {
  const { height } = useWindowDimensions();

  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const refHeader = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>айтифонд | Главная</title>
        <meta charSet="UTF-8" />
        <meta name="Главная страница" content="Фонд развития информационный технологий" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:title" content="Фонд развития информационный технологий" />
        <meta property="og:descripsion" content="Фонд развития информационный технологий" />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="60" />
        <meta name="vk:card" content="image/svg" />
        <meta name="vk:title" content="Фонд развития информационный технологий" />
        <meta name="vk:descripsion" content="Фонд развития информационный технологий" />
        <meta name="vk:image" content="/assets/logo.svg" />
      </Helmet>
      <VStack ref={refHeader}>
        <Header />
      </VStack>
      <VStack
        justify="center"
        align="center"
        px={isLargerThan770 ? '10%' : '5%'}
        bg={themeIsDark ? '#242323' : 'white'}
        minH={`${
          refHeader.current &&
          refFooter.current &&
          height - refHeader.current?.clientHeight - refFooter.current?.clientHeight
        }px`}
      >
        <VStack spacing={2} p={[1, 2, 3, 4]}>
          <VStack spacing={0}>
            <Text
              color="brand.blue"
              fontSize={['lg', 'xl', '3xl', '4xl', '5xl']}
              textTransform="uppercase"
              fontWeight="800"
              align="center"
            >
              Cтраница не найдена
            </Text>
            <Button variant="brand-high" as={RouterLink} to={`${ROUTE_MAINPAGE}`}>
              Вернуться на главную
            </Button>
          </VStack>
        </VStack>
      </VStack>
      <VStack ref={refFooter}>
        <Footer />
      </VStack>
    </>
  );
});
