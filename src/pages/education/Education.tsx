import { InfoIcon } from '@chakra-ui/icons';
import { VStack, Text, Button, HStack, Stack, Spacer, Checkbox, useMediaQuery, Grid, GridItem } from '@chakra-ui/react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const Education = React.memo(() => {
  const { height } = useWindowDimensions();
  // const [isLargerThan1220] = useMediaQuery('(min-width:1220px)');
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
  const [isLargerThan610] = useMediaQuery('(min-width: 610px)');

  const [schoolboy, setSchoolboy] = useState(true);
  const [student, setStudent] = useState(false);
  const [specialist, setSpecialist] = useState(false);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Где получить образование?</title>
      </Helmet>
      <Header />
      <VStack justify="start" px="10%" bg={themeIsDark ? '#242323' : 'white'}>
        <VStack w="full" pl={[2, 3, 4]} pb={[4, 5, 6]} bg={themeIsDark ? '#242323' : 'brand.beige'}>
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

          <Stack
            direction={isLargerThan960 ? 'row' : 'column'}
            w="full"
            p={[2, 3, 4]}
            ml={6}
            align="start"
            justify="start"
            spacing={4}
          >
            <YMaps>
              <Map width="100%" height={`${height / 3}px`} defaultState={{ center: [54.314195, 48.403122], zoom: 10 }}>
                <Placemark defaultGeometry={[54.352498, 48.387667]} options={{}} />
                <Placemark defaultGeometry={[54.30348, 48.367426]} />
              </Map>
            </YMaps>
            {isLargerThan960 ? (
              <VStack align="start">
                <Button
                  variant="brand-high-white"
                  isActive={schoolboy}
                  onClick={() => {
                    setSchoolboy(true);
                    setStudent(false);
                    setSpecialist(false);
                  }}
                  fontSize={['lg', 'xl']}
                  w="full"
                  p={isLargerThan960 ? 6 : 8}
                >
                  Школьник
                </Button>
                <Button
                  variant="brand-high-white"
                  isActive={student}
                  onClick={() => {
                    setSchoolboy(false);
                    setStudent(true);
                    setSpecialist(false);
                  }}
                  fontSize={['lg', 'xl']}
                  w="full"
                  p={isLargerThan960 ? 6 : 8}
                >
                  Студент
                </Button>
                <Button
                  variant="brand-high-white"
                  isActive={specialist}
                  onClick={() => {
                    setSchoolboy(false);
                    setStudent(false);
                    setSpecialist(true);
                  }}
                  fontSize={['lg', 'xl']}
                  p={isLargerThan960 ? 6 : 8}
                >
                  Начинающий специалист
                </Button>
                <Stack border="1px" w="full" p={0} my={2} borderColor={themeIsDark ? 'white' : 'brand.dark'} />
                <Checkbox fontSize="xl" size="lg" defaultChecked color={themeIsDark ? 'white' : 'brand.dark'}>
                  Платное
                </Checkbox>
                <Checkbox fontSize="xl" size="lg" defaultChecked color={themeIsDark ? 'white' : 'brand.dark'}>
                  Бесплатное
                </Checkbox>
              </VStack>
            ) : (
              <VStack w="full">
                <Stack
                  direction={isLargerThan610 ? 'row' : 'column'}
                  w="full"
                  align="center"
                  justify="center"
                  borderColor={themeIsDark ? 'white' : 'brand.dark'}
                >
                  <Button
                    variant="brand-high-white"
                    isActive={schoolboy}
                    onClick={() => {
                      setSchoolboy(true);
                      setStudent(false);
                      setSpecialist(false);
                    }}
                    fontSize={['md', 'lg', 'xl']}
                    p={[2, 4, 6, 8]}
                    w={isLargerThan610 ? 'auto' : 'full'}
                  >
                    Школьник
                  </Button>
                  <Button
                    variant="brand-high-white"
                    isActive={student}
                    onClick={() => {
                      setSchoolboy(false);
                      setStudent(true);
                      setSpecialist(false);
                    }}
                    fontSize={['md', 'lg', 'xl']}
                    p={[2, 4, 6, 8]}
                    w={isLargerThan610 ? 'auto' : 'full'}
                  >
                    Студент
                  </Button>
                  <Button
                    variant="brand-high-white"
                    isActive={specialist}
                    onClick={() => {
                      setSchoolboy(false);
                      setStudent(false);
                      setSpecialist(true);
                    }}
                    fontSize={['md', 'lg', 'xl']}
                    p={[2, 4, 6, 8]}
                    w={isLargerThan610 ? 'auto' : 'full'}
                  >
                    Начинающий специалист
                  </Button>
                </Stack>
                <Stack border="1px" w="full" p={0} my={2} borderColor={themeIsDark ? 'white' : 'brand.dark'} />
                <HStack w="full" align="center" justify="center">
                  <Checkbox color={themeIsDark ? 'white' : 'brand.dark'} fontSize="xl" size="lg" defaultChecked>
                    Платное
                  </Checkbox>
                  <Checkbox color={themeIsDark ? 'white' : 'brand.dark'} fontSize="xl" size="lg" defaultChecked>
                    Бесплатное
                  </Checkbox>
                </HStack>
              </VStack>
            )}
          </Stack>
          {schoolboy && (
            <Grid w="full">
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="yellow.500" />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                    Дополнительное образование
                  </Text>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="blue.500" />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                    Высшее образование
                  </Text>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="green.500" />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                    Среднее образование
                  </Text>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="red.500" />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                    Подготовка к гос. экзаменам
                  </Text>
                </HStack>
              </GridItem>
            </Grid>
          )}
          {student && (
            <VStack w="full" align="start">
              <HStack spacing={[1, 2]}>
                <InfoIcon color="yellow.500" />
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                  Дополнительное образование
                </Text>
              </HStack>
              <HStack spacing={[1, 2]}>
                <InfoIcon color="blue.500" />
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                  Высшее образование
                </Text>
              </HStack>
            </VStack>
          )}
          {specialist && (
            <VStack w="full" align="start">
              <HStack spacing={[1, 2]}>
                <InfoIcon color="yellow.500" />
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                  Дополнительное образование
                </Text>
              </HStack>
              <HStack spacing={[1, 2]}>
                <InfoIcon color="blue.500" />
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                  Высшее образование
                </Text>
              </HStack>
              <HStack spacing={[1, 2]}>
                <InfoIcon color="red.500" />
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                  Работа
                </Text>
              </HStack>
            </VStack>
          )}
        </VStack>
      </VStack>
      <Spacer minH={`${height / 5}px`} bg={themeIsDark ? '#121212' : 'white'} />
      <Footer />
    </>
  );
});
