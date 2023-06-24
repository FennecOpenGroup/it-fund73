import { InfoIcon } from '@chakra-ui/icons';
import { VStack, Text, Button, HStack, Stack, Spacer, Checkbox } from '@chakra-ui/react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Education = React.memo(() => {
  const { height } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Где получить образование?</title>
      </Helmet>
      <Header />
      <VStack justify="start" px="10%">
        <VStack w="full" pl={[2, 3, 4]} pb={[4, 5, 6]}>
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
          <HStack w="full" p={[2, 3, 4]} ml={6} align="start" justify="start" spacing={4}>
            <YMaps>
              <Map width="90%" height={`${height / 3}px`} defaultState={{ center: [54.314195, 48.403122], zoom: 10 }}>
                <Placemark defaultGeometry={[54.352498, 48.387667]} options={{}} />
                <Placemark defaultGeometry={[54.30348, 48.367426]} />
              </Map>
            </YMaps>
            <VStack align="start">
              <Button variant="brand-high-white" fontSize="xl" w="full" p={8}>
                Школьник
              </Button>
              <Button variant="brand-high-white" fontSize="xl" w="full" p={8}>
                Студент
              </Button>
              <Button variant="brand-high-white" fontSize="xl" w="full" p={8}>
                Начинающий специалист
              </Button>
              <Stack border="1px" w="full" p={0} my={2} />
              <Checkbox fontSize="xl" size="lg" defaultChecked>
                Платное
              </Checkbox>
              <Checkbox fontSize="xl" size="lg" defaultChecked>
                Бесплатное
              </Checkbox>
            </VStack>
          </HStack>
          <HStack w="full" spacing={6}>
            <HStack spacing={2}>
              <InfoIcon color="yellow.500" />
              <Text color="brand.dark" fontSize="lg">
                Дополнительное образование
              </Text>
            </HStack>
            <HStack spacing={2}>
              <InfoIcon color="blue.500" />
              <Text color="brand.dark" fontSize="lg">
                Высшее образование
              </Text>
            </HStack>
            <HStack spacing={2}>
              <InfoIcon color="green.500" />
              <Text color="brand.dark" fontSize="lg">
                Среднее образование
              </Text>
            </HStack>
            <HStack spacing={2}>
              <InfoIcon color="red.500" />
              <Text color="brand.dark" fontSize="lg">
                Подготовка к гос. экзаменам
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
      <Spacer minH={`${height / 11.65}px`} />
      <Footer />
    </>
  );
});
