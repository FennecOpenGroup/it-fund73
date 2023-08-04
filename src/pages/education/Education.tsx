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
        <title>it-fund73 | Где получить образование?</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Где получить образование?" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:url" content="https://www.it-fund73.ru/education" />
        <meta property="og:title" content="Где получить образование?" />
        <meta property="og:descripsion" content="Где получить образование??" />
        <meta property="og:image" content="/logo_ref.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="vk:card" content="image/jpg" />
        <meta property="vk:url" content="https://www.it-fund73.ru/education" />
        <meta name="vk:title" content="Где получить образование?" />
        <meta name="vk:descripsion" content="Где получить образование?" />
        <meta name="vk:image" content="/logo_ref.jpg" />
        <meta
          name="keywords"
          content="Фонд развития, информационный-технологий, Ульяновской области, Ульяновск, IT-фонд, IT, ИТ-отрасль, Где получить образование?"
        />
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
            Где получить образование?
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
                          'https://yandex.ru/map-widget/v1/?um=constructor%3Ac008c1b3e8ec241f3ae4e78f2f2afabd837bb0af10283adaf5b0d3a8cb5219b3&amp;source=constructor',
                        );
                        setType('higherEducation');
                      }}
                    />
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md']}>
                      Высшее образование
                    </Text>
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
                          'https://yandex.ru/map-widget/v1/?um=constructor%3A766063ea84f3db1b2657a3e8169a218bed59f109a87eb9412d52e6036da34ad4&amp;source=constructor',
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
                          'https://yandex.ru/map-widget/v1/?um=constructor%3A61ac612b9455141569482d0ac234f671432a0143994fc18375ff447ca2320e4d&amp;source=constructor',
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
                          'https://yandex.ru/map-widget/v1/?um=constructor%3Aa58df875e26477f7de49d724bd885d758bbce1947f7160817ab46fad450b3e1f&amp;source=constructor',
                        );
                        setType('secondaryEducation');
                      }}
                    />
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md']}>
                      Среднее образование
                    </Text>
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
                          'https://yandex.ru/map-widget/v1/?um=constructor%3A858b0927a0167061b6963314df3bfc89ff129cfed0f87804eacb12fbb897af46&amp;source=constructor',
                        );
                        setType('preparationForStateExams');
                      }}
                    />
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md']}>
                      Подготовка к гос. экзаменам
                    </Text>
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
