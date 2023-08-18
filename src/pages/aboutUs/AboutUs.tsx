/* eslint no-unsafe-optional-chaining: "error" */
import {
  VStack,
  Text,
  Stack,
  HStack,
  Image,
  useMediaQuery,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useToast,
  Link,
  Button,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Chart } from 'react-google-charts';
import { AiOutlineFile } from 'react-icons/ai';
import { BsFillPersonFill, BsMailbox, BsTelephone } from 'react-icons/bs';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import ulyanovsk from '../../assets/Ulyanovsk.jpg';
import { IRootState } from '../../interfaces/IRootState';
import { coreGetDocs, coreGetTeam } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { API_URL_ADMIN } from '../../constants/env';

export const AboutUs = React.memo(() => {
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const toast = useToast();

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current !== null) {
      window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
    }
  };

  const refHeader = useRef<HTMLDivElement>(null);
  const refHeading = useRef<HTMLDivElement>(null);
  const refTeam = useRef<HTMLDivElement>(null);
  const refDocs = useRef<HTMLDivElement>(null);
  const refRecs = useRef<HTMLDivElement>(null);
  const refContacts = useRef<HTMLDivElement>(null);
  const refCharts = useRef<HTMLDivElement>(null);
  const refProject = useRef<HTMLDivElement>(null);

  const [charts, setCharts] = useState(false);

  const [isLargerThan1300] = useMediaQuery('(min-width: 1300px)');
  const [isLargerThan1155] = useMediaQuery('(min-width: 1155px)');
  const [isLargerThan530] = useMediaQuery('(min-width: 530px)');
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);
  const docs = useSelector((state: IRootState) => state.core.docs);
  const team = useSelector((state: IRootState) => state.core.team);

  useEffect(() => {
    dispatch(coreGetDocs());
    dispatch(coreGetTeam());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund73 | О фонде</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Информация о фонде" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:url" content="https://www.it-fund73.ru/aboutUS" />
        <meta property="og:title" content="Фонд развития информационный технологий Ульяновской области." />
        <meta property="og:descripsion" content="Информация о фонде" />
        <meta property="og:image" content="/logo_ref.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="vk:card" content="image/jpg" />
        <meta property="vk:url" content="https://www.it-fund73.ru/aboutUS" />
        <meta name="vk:title" content="Фонд развития информационный технологий Ульяновской области." />
        <meta name="vk:descripsion" content="Фонд развития информационный технологий Ульяновской области." />
        <meta name="vk:image" content="/logo_ref.jpg" />
        <meta
          name="keywords"
          content="Фонд развития, информационный-технологий, Ульяновской области, Ульяновск, IT-фонд, IT"
        />
        <meta name="twitter:card" content="image/jpg" />
        <meta property="twitter:url" content="https://www.it-fund73.ru/aboutUS" />
        <meta name="twitter:title" content="Фонд развития информационный технологий Ульяновской области." />
        <meta name="twitter:descripsion" content="Фонд развития информационный технологий Ульяновской области." />
        <meta name="twitter:image" content="/logo_ref.jpg" />
      </Helmet>
      <VStack w="full" p={0} m={0} ref={refHeader}>
        <Header />
      </VStack>
      <VStack minH={`${height}px`} justify="start" px="10%" bg={themeIsDark ? '#242323' : 'white'}>
        <VStack w="full" minH={`${height}px`} pb={[4, 6]} align="flex-start">
          <Image
            src={ulyanovsk}
            bgColor="black"
            objectFit="cover"
            top={refHeader.current?.clientHeight}
            left={0}
            w={width}
            h={refHeading.current?.clientHeight}
            filter="brightness(35%)"
            zIndex={0}
            position="absolute"
            loading="lazy"
          />
          <VStack
            w="full"
            minH={`${height / 2}px`}
            justify="center"
            spacing={[2, 5]}
            py={[4, 6, 10]}
            mt={[0, 2, 4]}
            ref={refHeading}
            zIndex={2}
          >
            <HStack>
              <Text fontWeight="800" align="center" fontSize={['lg', 'xl', '2xl', '4xl']} textTransform="uppercase">
                Фонд развития информациионных технологий Ульяновской области
              </Text>
            </HStack>
            <Stack direction={isLargerThan480 ? 'row' : 'column'} w="full" align="center" justify="center">
              <Button
                color="white"
                variant="brand-link"
                fontSize={['lg', 'xl']}
                onClick={() => scrollToRef(refCharts)}
                display="none"
              >
                Цифры и Факты
              </Button>
              <Button
                color="white"
                variant="brand-link"
                fontSize={['lg', 'xl']}
                onClick={() => scrollToRef(refProject)}
              >
                Проектный офис
              </Button>
              <Button color="white" variant="brand-link" fontSize={['lg', 'xl']} onClick={() => scrollToRef(refTeam)}>
                Команда
              </Button>
              <Button color="white" variant="brand-link" fontSize={['lg', 'xl']} onClick={() => scrollToRef(refDocs)}>
                Документы
              </Button>
              <Button color="white" variant="brand-link" fontSize={['lg', 'xl']} onClick={() => scrollToRef(refRecs)}>
                Реквизиты
              </Button>
              <Button
                color="white"
                variant="brand-link"
                fontSize={['lg', 'xl']}
                onClick={() => scrollToRef(refContacts)}
              >
                Контакты
              </Button>
            </Stack>
            <VStack align="center" justify="center">
              <Text fontSize={['sm', 'md', 'lg']} align="center">
                Фонд развития информационный технологий в Ульяновской области является оператором государственный
                поддержки IT-проектов и компаний в регионе с 2016 года.
              </Text>
            </VStack>
            <VStack align="center" justify="center">
              <Text fontSize={['sm', 'md', 'lg']} align="center">
                Миссия Фонда – всемерно стимулировать развитие ИТ-экосистемы Ульяновской области, обеспечивать системную
                поддержку образовательных и профориентационных проектов в сфере информационных технологий и создавать
                условия для устойчивого роста IT-отрасли региона.
              </Text>
            </VStack>
          </VStack>
          <VStack w="full" align="start" mx={['10%', '20%']} pt={[5, 10]} bg={themeIsDark ? '#242323' : 'white'}>
            <VStack
              w="full"
              align="center"
              bgGradient={themeIsDark ? 'none' : 'linear(to-t, #e3f2fb 5%, transparent 95%)'}
              pb={5}
            >
              <HStack align="start" justify="start" pb={5}>
                <Text
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontWeight="800"
                  fontSize={['xl', '2xl', '3xl']}
                  align="center"
                >
                  ПОЛНОМОЧИЯ
                </Text>
              </HStack>
              <HStack align="start" justify="start">
                <VStack
                  px={isLargerThan530 ? 6 : 2}
                  w="full"
                  align="start"
                  color={themeIsDark ? 'white' : 'brand.dark'}
                >
                  <Text
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight="900"
                    textTransform="uppercase"
                  >
                    1. Повышение эффективности региональной системы подготовки кадров для ИТ-сферы
                  </Text>
                  <Stack borderTop="1px" color={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                  <UnorderedList mb={2}>
                    <ListItem>Поддержка и развитие молодых ИТ-специалистов.</ListItem>
                    <ListItem>Развитие потенциала ИТ-образования в ВУЗах и ССУЗах. Ульяновской области.</ListItem>
                    <ListItem>Создание условий для появления передовых методов и технологий ИТ-обучения</ListItem>
                  </UnorderedList>
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md']}>
                    В соответствии с Программой по популяризации ИТ-специальностей в Ульяновской области № б/н от
                    30.03.2023:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      информирование целевой аудитории о востребованности ИТ-профессий, получении ИТ-образования в ВУЗах
                      и ССУЗах Ульяновской области;
                    </ListItem>
                    <ListItem>
                      профориентация потенциальных абитуриентов с целью оказания помощи в выборе вариантов
                      профессиональной деятельности в ИТ-сфере;
                    </ListItem>
                    <ListItem>
                      оказание содействия в организации и проведении социально-значимых мероприятий в сфере ИКТ на
                      международном, всероссийской и межрегиональных уровнях;
                    </ListItem>
                    <ListItem>
                      информирование целевой аудитории о грантовой поддержке и проектной деятельности в ИТ-сфере;
                    </ListItem>
                    <ListItem>
                      организационно-техническое обеспечение деятельности Комиссии по отбору кандидатов на получение
                      стипендии Губернатора Ульяновской области «Имени Ефима Евграфовича Горина»;
                    </ListItem>
                    <ListItem>поощрение лучших представителей ИТ-отрасли Ульяновской области.</ListItem>
                  </UnorderedList>
                  <Text
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight="900"
                    textTransform="uppercase"
                  >
                    2. Ускорение процессов цифровой трансформации отраслей экономики и социальной сферы
                  </Text>
                  <Stack borderTop="1px" color={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md']}>
                    В соответствии со Стратегией развития отрасли информационных и цифровых технологий Ульяновской
                    области до 2030 года от 18.10.2019 № 1293-р:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      формирование предложений по созданию механизмов государственной поддержки, направленных на
                      увеличение ежегодных темпов роста ИТ-отрасли Ульяновской области;
                    </ListItem>
                    <ListItem>
                      осуществление систематического наблюдения и анализа показателей развития ИТ-отрасли Ульяновской
                      области;
                    </ListItem>
                    <ListItem>
                      создание условий для развития производственной кооперации между ИТ-компаниями и промышленными
                      предприятиями Ульяновской области.
                    </ListItem>
                  </UnorderedList>
                  <Text
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight="900"
                    textTransform="uppercase"
                  >
                    3. Увеличение налоговых поступлений
                  </Text>
                  <Stack borderTop="1px" color={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md']}>
                    В соответствии с поручением Правительства Ульяновской области № 89-ПЧ от 22.02.2017 года:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      координация рабочей подгруппы по увеличению налоговых поступлений в консолидированный бюджет
                      Ульяновской области, а также мониторинг задолженности по видам экономической деятельности ОКВЭД 62
                      и 63;
                    </ListItem>
                    <ListItem>
                      мониторинг налоговых поступлений от ИТ-организаций, использующих региональные налоговые льготы по
                      налогу на прибыль и по налогу, взимаемому в связи с применением упрощённой системы
                      налогообложения.
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </HStack>
            </VStack>

            <Accordion allowMultiple w="full">
              <AccordionItem color={themeIsDark ? 'white' : 'brand.dark'} display="none">
                <AccordionButton onClick={() => setCharts(!charts)}>
                  <Box flex="1" textAlign="left" ref={refCharts}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xl', '2xl', '3xl']}>
                      <b>ЦИФРЫ И ФАКТЫ</b>
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                {charts && (
                  <AccordionPanel pb={0}>
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={0}
                    >
                      Получено субсидий
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Получено субсидий Правительства Ульяновской области в млн.руб'],
                          ['2016', 2.753],
                          ['2017', 5.709],
                          ['2018', 22.166],
                          ['2019', 25],
                          ['2020', 12.762],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1500,
                          },
                        }}
                        width="100%"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Получено субсидий Правительства Ульяновской области в млн.руб'],
                          ['2016', 2.753],
                          ['2017', 5.709],
                          ['2018', 22.166],
                          ['2019', 25],
                          ['2020', 12.762],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1500,
                          },
                        }}
                        width="100%"
                        legendToggle
                      />
                    )}
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={4}
                    >
                      Объём средств софинансирования
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Объём средств софинансирования в млн.руб'],
                          ['2016', 1],
                          ['2017', 0.5],
                          ['2018', 2.236],
                          ['2019', 0.299],
                          ['2020', 0.291],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Объём средств софинансирования в млн.руб'],
                          ['2016', 1],
                          ['2017', 0.5],
                          ['2018', 2.236],
                          ['2019', 0.299],
                          ['2020', 0.291],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    )}
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={4}
                    >
                      Проведено конкурсов
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Проведено конкурсов проектов для реализации'],
                          ['2016', 2],
                          ['2017', 2],
                          ['2018', 2],
                          ['2019', 3],
                          ['2020', 1],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Проведено конкурсов проектов для реализации'],
                          ['2016', 2],
                          ['2017', 2],
                          ['2018', 2],
                          ['2019', 3],
                          ['2020', 1],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    )}
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={4}
                    >
                      Подано проектов на конкурсы
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Подано проектов на конкурсы для реализации'],
                          ['2016', 44],
                          ['2017', 53],
                          ['2018', 83],
                          ['2019', 135],
                          ['2020', 124],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Подано проектов на конкурсы для реализации'],
                          ['2016', 44],
                          ['2017', 53],
                          ['2018', 83],
                          ['2019', 135],
                          ['2020', 124],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    )}
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={4}
                    >
                      Общая сумма поданных проектов
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Общая сумма поданных проектов в млн. руб.'],
                          ['2016', 43.425],
                          ['2017', 19.05],
                          ['2018', 94.12],
                          ['2019', 225.313],
                          ['2020', 87.85],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Общая сумма поданных проектов в млн. руб.'],
                          ['2016', 43.425],
                          ['2017', 19.05],
                          ['2018', 94.12],
                          ['2019', 225.313],
                          ['2020', 87.85],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    )}
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={4}
                    >
                      Поддержано проектов
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Поддержано проектов'],
                          ['2016', 12],
                          ['2017', 25],
                          ['2018', 38],
                          ['2019', 58],
                          ['2020', 32],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Поддержано проектов'],
                          ['2016', 12],
                          ['2017', 25],
                          ['2018', 38],
                          ['2019', 58],
                          ['2020', 32],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    )}
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={4}
                    >
                      Общая сумма поддержанных проектов
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Общая сумма поддержанных проектов в млн.руб'],
                          ['2016', 3.052],
                          ['2017', 5.709],
                          ['2018', 21.545],
                          ['2019', 23.751],
                          ['2020', 9.879],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Общая сумма поддержанных проектов в млн.руб'],
                          ['2016', 3.052],
                          ['2017', 5.709],
                          ['2018', 21.545],
                          ['2019', 23.751],
                          ['2020', 9.879],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    )}
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontWeight="bold"
                      fontSize={['lg', 'xl', '2xl']}
                      px={4}
                    >
                      Охват аудитории проектами
                    </Text>
                    {themeIsDark ? (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Охват аудитории проектами, получившими поддержку'],
                          ['2016', 3000],
                          ['2017', 12000],
                          ['2018', 25000],
                          ['2019', 27000],
                          ['2020', 7187],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          backgroundColor: 'transparent',
                          titleTextStyle: {
                            color: 'white',
                          },
                          legendTextStyle: {
                            color: 'white',
                          },
                          hAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          vAxis: {
                            textStyle: {
                              color: 'white',
                            },
                          },
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    ) : (
                      <Chart
                        chartType="AreaChart"
                        data={[
                          ['Год', 'Охват аудитории проектами, получившими поддержку'],
                          ['2016', 3000],
                          ['2017', 12000],
                          ['2018', 25000],
                          ['2019', 27000],
                          ['2020', 7187],
                        ]}
                        options={{
                          colors: ['#7775ed'],
                          animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 3500,
                          },
                        }}
                        width="100%"
                        height="full"
                        legendToggle
                      />
                    )}
                  </AccordionPanel>
                )}
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full" color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left" ref={refProject}>
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['xl', '2xl', '3xl']}
                      fontWeight="bold"
                    >
                      ПРОЕКТНЫЙ ОФИС
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack
                    px={isLargerThan530 ? 6 : 2}
                    w="full"
                    align="start"
                    color={themeIsDark ? 'white' : 'brand.dark'}
                  >
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['sm', 'lg', '2xl']}
                      fontWeight="900"
                      textTransform="uppercase"
                    >
                      Проекты реализуемые Айти Фондом
                    </Text>
                    <Stack borderTop="1px" color={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                    <VStack w="full" align="start" py={3}>
                      <UnorderedList>
                        <ListItem>Грантовая поддержка ИТ-компаний для разработки отечественных ИТ-решений.</ListItem>
                        <ListItem>
                          Поддержка проектов, направленных на повышение уровня доступности ИКТ в Ульяновской области.
                        </ListItem>
                        <ListItem>
                          Внедрение сервиса по цифровизации земель сельхозназначения для Минсельхоза Ульяновской
                          области.
                        </ListItem>
                        <ListItem>
                          Программа по популяризации ИТ-специальностей в Ульяновской области до 2025 года.
                        </ListItem>
                        <ListItem>Конгрессно-выставочные мероприятия для ИТ-компаний.</ListItem>
                        <ListItem>
                          Заседания рабочей подгруппы по увеличению налоговых поступлений ИТ-компаний в
                          консолидированный бюджет Ульяновской области.
                        </ListItem>
                        <ListItem>
                          Проект «Именная стипендия Александра Щербины» для учащихся 3-7 классов в области математики и
                          программирования.
                        </ListItem>
                        <ListItem>Стипендии Губернатора Ульяновской области «Имени Ефима Евграфовича Горина».</ListItem>
                        <ListItem>Форум «Цифровые решения для государства и бизнеса».</ListItem>
                        <ListItem>
                          Проведение мероприятий, приуроченных к профессиональному празднику «День программиста».
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['sm', 'lg', '2xl']}
                      fontWeight="900"
                      textTransform="uppercase"
                    >
                      Проекты поддержанные Айти Фондом в 2023 году
                    </Text>
                    <Stack borderTop="1px" color={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                  </VStack>
                  <TableContainer w="full">
                    <Table
                      w="full"
                      variant="striped"
                      colorScheme="blue"
                      size={isLargerThan1300 ? 'lg' : 'md'}
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      backgroundColor={themeIsDark ? '#242323' : 'white'}
                      overflow="hidden"
                      whiteSpace="normal"
                    >
                      <Thead>
                        <Tr>
                          <Th
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            fontFamily="Museo Cyrl"
                            fontWeight="800"
                          >
                            Наименование проектов
                          </Th>
                          <Th
                            isNumeric
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            fontFamily="Museo Cyrl"
                            fontWeight="800"
                          >
                            Колличество участников
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr textColor="brand.dark">
                          <Td>Международная цифровая олимпиада «Волга-IT»</Td>
                          <Td isNumeric>2000</Td>
                        </Tr>
                        <Tr>
                          <Td>Развитие сообщества Код-классов (клубов по программированию) в Ульяновской области</Td>
                          <Td isNumeric>800</Td>
                        </Tr>
                        <Tr textColor="brand.dark">
                          <Td>ТТурнир «ИТ-Марафон» среди студентов и преподавателей СПО</Td>
                          <Td isNumeric>710</Td>
                        </Tr>
                        <Tr>
                          <Td>Чемпионат ИТ-сферы Ульяновской области среди школьников</Td>
                          <Td isNumeric>400</Td>
                        </Tr>
                        <Tr textColor="brand.dark">
                          <Td>Командный студенческий чемпионат Ульяновской области по программированию</Td>
                          <Td isNumeric>45</Td>
                        </Tr>
                        <Tr>
                          <Td>
                            «Инженерно-техническая подготовка в школьном образовании» – программа повышения квалификации
                            для педагогических работников школ, педагогов дополнительного образования
                          </Td>
                          <Td isNumeric>25</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full" color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left" ref={refTeam}>
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['xl', '2xl', '3xl']}
                      fontWeight="bold"
                    >
                      КОМАНДА
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack w="full" align="start" p={0} m={0}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['lg', 'xl', '2xl']} fontWeight="900">
                      Правление Фонда
                    </Text>
                    <Stack borderTop="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                    <VStack w="full" align="start" justify="start">
                      {team &&
                        Object.keys(team).map(index => {
                          const image = team[Number(index)].attributes.photo;
                          if (team[Number(index)].attributes.team === 'management') {
                            return (
                              <Stack
                                direction={isLargerThan530 ? 'row' : 'column'}
                                align={isLargerThan530 ? 'start' : 'center'}
                                justify="start"
                                marginTop="25px"
                                p={2}
                                borderRadius="5px"
                                backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                                w="full"
                                key={index}
                              >
                                {image.data === null ? (
                                  <Box minW="200px">
                                    <BsFillPersonFill size="200px" color="white" />
                                  </Box>
                                ) : (
                                  <Image
                                    src={`${API_URL_ADMIN}${image.data.attributes.url}`}
                                    w={['160px', '200px']}
                                    h={['160px', '200px']}
                                    borderRadius={5}
                                  />
                                )}
                                <VStack
                                  align={isLargerThan530 ? 'start' : 'center'}
                                  px={isLargerThan530 ? '20px' : '5px'}
                                >
                                  <Text
                                    color={themeIsDark ? 'white' : 'brand.dark'}
                                    fontSize={['lg', 'xl', '2xl']}
                                    align="center"
                                    fontWeight="bold"
                                  >
                                    {team[Number(index)].attributes.name}
                                  </Text>
                                  <Text
                                    color={themeIsDark ? 'white' : 'brand.dark'}
                                    fontSize={['sm', 'md', 'lg']}
                                    align="center"
                                  >
                                    {team[Number(index)].attributes.post}
                                  </Text>
                                </VStack>
                              </Stack>
                            );
                          }
                          return false;
                        })}
                    </VStack>
                  </VStack>
                  <VStack w="full" align="start" p={0} m={0}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['lg', 'xl', '2xl']} fontWeight="900">
                      Сотрудники Фонда
                    </Text>
                    <Stack borderTop="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                    <VStack w="full" align="start" justify="start">
                      {team &&
                        Object.keys(team).map(index => {
                          const image = team[Number(index)].attributes.photo;
                          if (team[Number(index)].attributes.team === 'staff') {
                            return (
                              <Stack
                                direction={isLargerThan530 ? 'row' : 'column'}
                                align={isLargerThan530 ? 'start' : 'center'}
                                justify="start"
                                marginTop="25px"
                                p={2}
                                borderRadius="5px"
                                backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                                w="full"
                                key={index}
                              >
                                {image.data === null ? (
                                  <Box minW="200px">
                                    <BsFillPersonFill size="200px" color="white" />
                                  </Box>
                                ) : (
                                  <Image
                                    src={`${API_URL_ADMIN}${image.data.attributes.url}`}
                                    w={['160px', '200px']}
                                    h={['160px', '200px']}
                                    borderRadius={5}
                                  />
                                )}
                                <VStack
                                  align={isLargerThan530 ? 'start' : 'center'}
                                  px={isLargerThan530 ? '20px' : '5px'}
                                >
                                  <Text
                                    color={themeIsDark ? 'white' : 'brand.dark'}
                                    fontSize={['lg', 'xl', '2xl']}
                                    align="center"
                                    fontWeight="bold"
                                  >
                                    {team[Number(index)].attributes.name}
                                  </Text>
                                  <Text
                                    color={themeIsDark ? 'white' : 'brand.dark'}
                                    fontSize={['sm', 'md', 'lg']}
                                    align="center"
                                  >
                                    {team[Number(index)].attributes.post}
                                  </Text>
                                </VStack>
                              </Stack>
                            );
                          }
                          return false;
                        })}
                    </VStack>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full" color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left" ref={refDocs}>
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['xl', '2xl', '3xl']}
                      fontWeight="bold"
                    >
                      ДОКУМЕНТЫ
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {docs && (
                    <VStack w="full" align="start">
                      {Object.keys(docs).map(index => {
                        const data = docs[Number(index)].attributes;
                        const file = data.file.data['0'].attributes;
                        return (
                          <HStack w="full" align="start" key={index}>
                            <Link
                              color={themeIsDark ? 'white' : 'brand.dark'}
                              fontSize={['sm', 'md', 'lg']}
                              href={`${API_URL_ADMIN}${file.url}`}
                              isExternal
                              w="full"
                              alignItems="flex-start"
                            >
                              <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                                {data.name}
                              </Text>
                              <HStack spacing={0} pl={4}>
                                <AiOutlineFile size="1.5em" />
                                <Text
                                  color={themeIsDark ? 'white' : 'brand.dark'}
                                  fontSize={['sm', 'md', 'lg']}
                                  align="end"
                                >
                                  {file?.size > 1024 ? `${Math.floor(file?.size / 1024)}MB` : `${file?.size}KB`}
                                </Text>
                              </HStack>
                            </Link>
                          </HStack>
                        );
                      })}
                    </VStack>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full" color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left" ref={refRecs}>
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['xl', '2xl', '3xl']}
                      fontWeight="bold"
                    >
                      РЕКВИЗИТЫ
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack w="full" spacing={[5, 10]}>
                    <VStack w="full" justify="start" align="start">
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Полное наименование:
                        </Text>
                        <CopyToClipboard
                          text="Фонд развития информационных технологий Ульяновской области"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            Фонд развития информационных технологий Ульяновской области
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Сокращённое наименование:
                        </Text>
                        <CopyToClipboard
                          text="ФРИТУО"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            ФРИТУО
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Полное наименование Фонда на английском языке:
                        </Text>
                        <CopyToClipboard
                          text="Ulyanovsk Region Information Technology Development Fund"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            Ulyanovsk Region Information Technology Development Fund
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Краткое наименование Фонда на английском языке:
                        </Text>
                        <CopyToClipboard
                          text="URITDF"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            URITDF
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                    </VStack>
                    <VStack w="full" align="start">
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Адрес юридический:
                        </Text>
                        <CopyToClipboard
                          text="432017, г. Ульяновск, улица Минаева, дом 11, офис 305"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            432017, г. Ульяновск, улица Минаева, дом 11, офис 305
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                    </VStack>
                    <VStack w="full" align="start">
                      <HStack>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          ИНН:
                        </Text>
                        <CopyToClipboard
                          text="7325144801"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            7325144801
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          КПП:
                        </Text>
                        <CopyToClipboard
                          text="732501001"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            732501001
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          ОГРН:
                        </Text>
                        <CopyToClipboard
                          text="1167300050334"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            1167300050334
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                    </VStack>
                    <VStack w="full" align="start">
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Банк:
                        </Text>
                        <CopyToClipboard
                          text="ОТДЕЛЕНИЕ УЛЬЯНОВСК БАНКА РОССИИ//УФК по Ульяновской области г. Ульяновск (Министерство финансов Ульяновской области, Фонд развития информационных технологий Ульяновской области, л/с 41203136D05)"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            ОТДЕЛЕНИЕ УЛЬЯНОВСК БАНКА РОССИИ//УФК по Ульяновской области г. Ульяновск (Министерство
                            финансов Ульяновской области, Фонд развития информационных технологий Ульяновской области,
                            л/с 41203136D05)
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Расчётный счёт:
                        </Text>
                        <CopyToClipboard
                          text="№40102810645370000061"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            №40102810645370000061
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                      <HStack>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          БИК:
                        </Text>
                        <CopyToClipboard
                          text="017308101"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            017308101
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Казначейский счет:
                        </Text>
                        <CopyToClipboard
                          text="03226643730000006800"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            03226643730000006800
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                    </VStack>
                    <VStack w="full" align="start">
                      <Stack direction={isLargerThan1155 ? 'row' : 'column'}>
                        <Text
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md', 'lg']}
                          fontWeight="bold"
                        >
                          Исполнительный директор:
                        </Text>
                        <CopyToClipboard
                          text="Ерофеев Сергей Александрович"
                          onCopy={() =>
                            toast({
                              description: 'Вы успешно сохранили текст!',
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                          <Text
                            fontSize={['sm', 'md', 'lg']}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            Ерофеев Сергей Александрович действует на основании Устава
                          </Text>
                        </CopyToClipboard>
                      </Stack>
                    </VStack>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full" color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left" ref={refContacts}>
                    <Text
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['xl', '2xl', '3xl']}
                      fontWeight="bold"
                    >
                      КОНТАКТЫ
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack w="full" align="start">
                    <HStack>
                      <BsMailbox size="1em" color="#7775ed" />
                      <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['md', 'lg']} fontWeight="bold">
                        Email:
                      </Text>
                      <Link
                        href="mailto:it_ulsk@mail.ru"
                        fontSize={['md', 'lg']}
                        color={themeIsDark ? 'white' : 'brand.dark'}
                      >
                        it_ulsk@mail.ru
                      </Link>
                    </HStack>
                    <HStack>
                      <BsTelephone size="1em" color="#7775ed" />
                      <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['md', 'lg']} fontWeight="bold">
                        Телефон:
                      </Text>
                      <Link
                        href="tel:8 (8422) 58-17-47"
                        fontSize={['md', 'lg']}
                        color={themeIsDark ? 'white' : 'brand.dark'}
                      >
                        8 (8422) 58-17-47
                      </Link>
                    </HStack>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
