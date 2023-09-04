/* eslint no-unsafe-optional-chaining: "error" */
import { InfoIcon } from '@chakra-ui/icons';
import { VStack, Text, HStack, Stack, Checkbox, useMediaQuery, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const Education = React.memo(() => {
  const { height } = useWindowDimensions();

  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');

  const [higherEducation, setHigherEducation] = useState(true);
  const [freeAdditionalTraining, setFreeAdditionalTraining] = useState(false);
  const [paidAdditionalTraining, setPaidAdditionalTraining] = useState(false);
  const [secondaryEducation, setSecondaryEducation] = useState(false);
  const [preparationForStateExams, setPreparationForStateExams] = useState(false);

  const setType = (type: string) => {
    setHigherEducation(type === 'higherEducation');
    setFreeAdditionalTraining(type === 'freeAdditionalTraining');
    setPaidAdditionalTraining(type === 'paidAdditionalTraining');
    setSecondaryEducation(type === 'secondaryEducation');
    setPreparationForStateExams(type === 'preparationForStateExams');
  };

  const [link, setLink] = useState(
    'https://yandex.ru/map-widget/v1/?um=constructor%3Ac008c1b3e8ec241f3ae4e78f2f2afabd837bb0af10283adaf5b0d3a8cb5219b3&amp;source=constructor',
  );

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const refHeader = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>айтифонд | Где получить образование?</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Где получить образование?" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:url" content="https://www.айтифонд.рф/education" />
        <meta property="og:title" content="Где получить образование?" />
        <meta property="og:descripsion" content="Где получить образование??" />
        <meta property="og:image" content="/logo_ref.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="vk:card" content="image/jpg" />
        <meta property="vk:url" content="https://www.айтифонд.рф/education" />
        <meta name="vk:title" content="Где получить образование?" />
        <meta name="vk:descripsion" content="Где получить образование?" />
        <meta name="vk:image" content="/logo_ref.jpg" />
        <meta
          name="keywords"
          content="Фонд развития, информационный-технологий, Ульяновской области, Ульяновск, IT-фонд, IT, ИТ-отрасль, Где получить образование?"
        />
        <meta name="twitter:card" content="image/jpg" />
        <meta property="twitter:url" content="https://www.айтифонд.рф/education" />
        <meta name="twitter:title" content="Где получить образование?" />
        <meta name="twitter:descripsion" content="Где получить образование?" />
        <meta name="twitter:image" content="/logo_ref.jpg" />
      </Helmet>
      <VStack ref={refHeader}>
        <Header />
      </VStack>
      <VStack
        justify="start"
        minH={`${
          refHeader.current &&
          refFooter.current &&
          height - refHeader.current?.clientHeight - refFooter.current?.clientHeight
        }px`}
        px="10%"
        bg={themeIsDark ? '#242323' : 'white'}
      >
        <VStack w="full" pl={[2, 3, 4]} pb={[4, 5, 6]} bg={themeIsDark ? '#242323' : 'transparent'}>
          <Text
            color="brand.blue"
            fontSize={['lg', 'xl', '2xl', '4xl']}
            align="center"
            textTransform="uppercase"
            pt={4}
            fontWeight="800"
          >
            Где получить ИТ-образование?
          </Text>
          <Stack
            direction={isLargerThan960 ? 'row' : 'column'}
            w="full"
            ml={6}
            align="start"
            justify="start"
            spacing={2}
          >
            <iframe src={`${link}`} width="100%" height="400" frameBorder="0" />
            <VStack>
              <Text w="full" align="center" color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['md', 'lg', 'xl']}>
                Опции
              </Text>
              <Grid w="full">
                <GridItem>
                  <HStack spacing={[1, 2]}>
                    <InfoIcon color="blue.500" />
                    <Checkbox
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize="md"
                      size="md"
                      isChecked={higherEducation}
                      onChange={() => {
                        setLink(
                          'https://yandex.ru/map-widget/v1/?um=constructor%3A62fae091190988ce28fbc58300df85c969dbd49cab9b698bfdd1b3a6808d6fdd&amp;source=constructor',
                        );
                        setType('higherEducation');
                      }}
                    >
                      Высшее образование
                    </Checkbox>
                  </HStack>
                </GridItem>
                <GridItem>
                  <HStack spacing={[1, 2]}>
                    <InfoIcon color="yellow.500" />
                    <Checkbox
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['sm', 'md']}
                      size="md"
                      isChecked={paidAdditionalTraining}
                      onChange={() => {
                        setLink(
                          'https://yandex.ru/map-widget/v1/?um=constructor%3A7cd3a1bea72b6b2d51baf004b237ae795b1eff8b1cffb1a6a796c42b22777c5b&amp;source=constructor',
                        );
                        setType('paidAdditionalTraining');
                      }}
                    >
                      Платное доп. образование
                    </Checkbox>
                  </HStack>
                </GridItem>
                <GridItem>
                  <HStack spacing={[1, 2]}>
                    <InfoIcon color="yellow.500" />
                    <Checkbox
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['sm', 'md']}
                      size="md"
                      isChecked={freeAdditionalTraining}
                      onChange={() => {
                        setLink(
                          'https://yandex.ru/map-widget/v1/?um=constructor%3A582840efb5faa5fab3f882d2bb81d3ecc5ada46d94bb036a39b2ec61990f54be&amp;source=constructor',
                        );
                        setType('freeAdditionalTraining');
                      }}
                    >
                      Бесплатное доп. образование
                    </Checkbox>
                  </HStack>
                </GridItem>

                <GridItem>
                  <HStack spacing={[1, 2]}>
                    <InfoIcon color="green.500" />
                    <Checkbox
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['sm', 'md']}
                      size="md"
                      isChecked={secondaryEducation}
                      onChange={() => {
                        setLink(
                          'https://yandex.ru/map-widget/v1/?um=constructor%3Aefb6818b79e8e25b9f80f5bacaf38d1c92700998fd1d8c2e1c0dba02a248412f&amp;source=constructor',
                        );
                        setType('secondaryEducation');
                      }}
                    >
                      Среднее образование
                    </Checkbox>
                  </HStack>
                </GridItem>
                <GridItem>
                  <HStack spacing={[1, 2]}>
                    <InfoIcon color="red.500" />
                    <Checkbox
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['sm', 'md']}
                      size="md"
                      isChecked={preparationForStateExams}
                      onChange={() => {
                        setLink(
                          'https://yandex.ru/map-widget/v1/?um=constructor%3Afdcef2c661a635d1782590c0b9f586112a0d25c3795e927bdce0c5c61934b815&amp;source=constructor',
                        );
                        setType('preparationForStateExams');
                      }}
                    >
                      Подготовка к гос. экзаменам
                    </Checkbox>
                  </HStack>
                </GridItem>
              </Grid>
            </VStack>
          </Stack>
        </VStack>
      </VStack>
      <VStack ref={refFooter}>
        <Footer />
      </VStack>
    </>
  );
});
