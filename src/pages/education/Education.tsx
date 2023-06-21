import { VStack, Text, HStack, Image, Grid } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import logo from '../../assets/mini-logo.svg';

export const Education = React.memo(() => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Helmet>
        <title>it-fund | Где получить образование?</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} justify="center" px="10%">
        <VStack w="full" minH={`${height}px`} pl={[2, 3, 4]} pb={[4, 5, 6]}>
          <Text
            color="brand.blue"
            fontSize={['lg', 'xl', '2xl', '4xl']}
            align="center"
            textTransform="uppercase"
            pt={4}
            fontWeight="800"
          >
            Где получить образование?
          </Text>
          <VStack w="full" p={[2, 3, 4]} justify="start" align="center">
            <Grid w="full" gap={3} templateRows="auto" templateColumns="repeat(2, 1fr)" mb={4}>
              <HStack p={2} borderRadius="5px" backgroundColor="brand.dark" w="full">
                <Image src={logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
                <Text fontSize="xl">
                  Навигатор: профориентация по конкретным специальностям, курсы, информация о ВУЗах, ССУЗах
                </Text>
              </HStack>
              <HStack p={2} borderRadius="5px" backgroundColor="brand.dark" w="full">
                <Image src={logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
                <Text fontSize="xl">Цифровые навыки: обучение работы с гаджетами и т.д.</Text>
              </HStack>
            </Grid>
            <VStack w="full" align="center" justify="center">
              <HStack p={2} borderRadius="5px" backgroundColor="brand.dark" w="full" maxW="30%">
                <Image src={logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
                <Text fontSize="xl">Образовательный туризм</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
