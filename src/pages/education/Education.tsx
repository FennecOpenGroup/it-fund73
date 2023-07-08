import { InfoIcon } from '@chakra-ui/icons';
import { VStack, Text, Button, HStack, Stack, Checkbox, useMediaQuery, Grid, GridItem } from '@chakra-ui/react';
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

  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
  const [isLargerThan610] = useMediaQuery('(min-width: 610px)');

  const [schoolboy, setSchoolboy] = useState(true);
  const [student, setStudent] = useState(false);
  const [specialist, setSpecialist] = useState(false);
  const [freeAdditionalTraining, setFreeAdditionalTraining] = useState(false);
  const [paidAdditionalTraining, setPaidAdditionalTraining] = useState(false);
  const [higherEducation, setHigherEducation] = useState(false);
  const [secondaryEducation, setSecondaryEducation] = useState(false);

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
        <VStack w="full" pl={[2, 3, 4]} pb={[4, 5, 6]} bg={themeIsDark ? '#242323' : 'transparent'}>
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
              <Map width="100%" height={`${height / 2}px`} defaultState={{ center: [54.314195, 48.403122], zoom: 10 }}>
                {!higherEducation && (
                  <>
                    <Placemark defaultGeometry={[54.30348, 48.367426]} />
                    <Placemark defaultGeometry={[54.240584, 49.59949]} />
                    <Placemark defaultGeometry={[54.349556, 48.386271]} />
                  </>
                )}
                {!secondaryEducation && (
                  <>
                    <Placemark
                      defaultGeometry={[52.724448, 47.630509]}
                      options={{
                        iconColor: '#62c375',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.209897, 49.592295]}
                      options={{
                        iconColor: '#62c375',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.291285, 48.30942]}
                      options={{
                        iconColor: '#62c375',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.855765, 46.33698]}
                      options={{
                        iconColor: '#62c375',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.334434, 48.473982]}
                      options={{
                        iconColor: '#62c375',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.323902, 48.393637]}
                      options={{
                        iconColor: '#62c375',
                      }}
                    />
                  </>
                )}
                {!freeAdditionalTraining && (
                  <>
                    <Placemark
                      defaultGeometry={[54.352498, 48.387667]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.287791, 48.309258]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.25433, 48.323766]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.36731, 48.576228]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.385418, 48.576183]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.258217, 48.339154]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.209897, 49.592295]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.239768, 49.577958]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.378539, 48.598911]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.267283, 48.29961]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.606079, 48.9105]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.281294, 48.262114]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.287791, 48.309258]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.311172, 48.392783]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.290408, 47.257394]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.326155, 48.386783]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.727198, 49.164795]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.299414, 48.320442]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.852053, 46.342451]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.386058, 48.590538]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.303933, 48.377036]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.243193, 48.257255]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.598908, 48.15915]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.38243, 48.582517]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.380112, 48.585508]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.564102, 46.98029]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.348595, 48.540026]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.133881, 47.203064]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.615903, 47.370968]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.111882, 47.619073]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.378004, 48.599216]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.355569, 48.53619]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.305173, 48.341921]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.605521, 48.933803]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.550092, 49.342294]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.383532, 47.063888]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.312642, 48.023971]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.331027, 48.488903]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.256534, 48.329434]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.273977, 46.968486]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.149135, 47.741891]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.577363, 46.943262]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.630744, 47.136768]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.258217, 48.339154]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.229664, 49.559713]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.38212, 48.611236]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.339526, 48.539963]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.650475, 47.106468]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.84213, 46.359402]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.991316, 48.328707]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.535917, 48.95052]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.645842, 47.139768]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.292011, 48.305755]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.374732, 48.587817]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.390394, 48.582112]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.371029, 48.581744]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.664541, 47.103548]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[53.015944, 47.92548]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.312627, 48.39476]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.311965, 48.392945]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                  </>
                )}
                {!paidAdditionalTraining && (
                  <>
                    <Placemark
                      defaultGeometry={[54.279796, 48.292037]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.347939, 48.350419]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.375513, 48.571521]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.320399, 48.397284]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.349556, 48.386271]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.311933, 48.392963]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.368537, 48.594051]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.321728, 48.398838]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.340214, 48.39387]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.320121, 48.390609]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.317458, 48.39988]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.281037, 48.300985]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.382687, 48.61305]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                    <Placemark
                      defaultGeometry={[54.310263, 48.395712]}
                      options={{
                        iconColor: '#f0ad4e',
                      }}
                    />
                  </>
                )}
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
              </VStack>
            )}
          </Stack>
          {schoolboy && (
            <Grid w="full">
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="yellow.500" />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'}>|</Text>
                  <Checkbox
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize="xl"
                    size="lg"
                    defaultChecked
                    onChange={() => setPaidAdditionalTraining(!paidAdditionalTraining)}
                  >
                    Платное
                  </Checkbox>
                  <Checkbox
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize="xl"
                    size="lg"
                    defaultChecked
                    onChange={() => setFreeAdditionalTraining(!freeAdditionalTraining)}
                  >
                    Бесплатное
                  </Checkbox>
                  <Text color={themeIsDark ? 'white' : 'brand.dark'}>|</Text>
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                    Дополнительное образование
                  </Text>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="blue.500" />
                  <Checkbox
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize="xl"
                    size="lg"
                    defaultChecked
                    onChange={() => setHigherEducation(!higherEducation)}
                  />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                    Высшее образование
                  </Text>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="green.500" />
                  <Checkbox
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize="xl"
                    size="lg"
                    defaultChecked
                    onChange={() => setSecondaryEducation(!secondaryEducation)}
                  />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                    Среднее образование
                  </Text>
                </HStack>
              </GridItem>
              <GridItem>
                <HStack spacing={[1, 2]}>
                  <InfoIcon color="red.500" />
                  <Checkbox color={themeIsDark ? 'white' : 'brand.dark'} fontSize="xl" size="lg" defaultChecked />
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
                <Checkbox
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize="xl"
                  size="lg"
                  defaultChecked
                  onChange={() => setPaidAdditionalTraining(!paidAdditionalTraining)}
                >
                  Платное
                </Checkbox>
                <Checkbox
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize="xl"
                  size="lg"
                  defaultChecked
                  onChange={() => setFreeAdditionalTraining(!freeAdditionalTraining)}
                >
                  Бесплатное
                </Checkbox>
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                  Дополнительное образование
                </Text>
              </HStack>
              <HStack spacing={[1, 2]}>
                <InfoIcon color="blue.500" />
                <Checkbox
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize="xl"
                  size="lg"
                  defaultChecked
                  onChange={() => setHigherEducation(!higherEducation)}
                />
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
                <Checkbox
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize="xl"
                  size="lg"
                  defaultChecked
                  onChange={() => setPaidAdditionalTraining(!paidAdditionalTraining)}
                >
                  Платное
                </Checkbox>
                <Checkbox
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize="xl"
                  size="lg"
                  defaultChecked
                  onChange={() => setFreeAdditionalTraining(!freeAdditionalTraining)}
                >
                  Бесплатное
                </Checkbox>
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                  Дополнительное образование
                </Text>
              </HStack>
              <HStack spacing={[1, 2]}>
                <InfoIcon color="blue.500" />
                <Checkbox
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize="xl"
                  size="lg"
                  defaultChecked
                  onChange={() => setHigherEducation(!higherEducation)}
                />
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
      <Footer />
    </>
  );
});
