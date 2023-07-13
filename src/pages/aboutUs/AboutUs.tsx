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
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Chart } from 'react-google-charts';
import { AiOutlineApartment } from 'react-icons/ai';
import { GiVintageRobot } from 'react-icons/gi';
import { MdEmojiPeople, MdBiotech, MdCellTower } from 'react-icons/md';
import { BsFiletypeDocx, BsFillPersonFill, BsMailbox, BsTelephone } from 'react-icons/bs';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import kuznezov from '../../assets/team/kuznezov.jpg';
import Erofeev from '../../assets/team/Erofeev.jpg';
import andronova from '../../assets/team/andronova.jpg';
import ulyanovsk from '../../assets/Ulyanovsk.jpg';
import { IRootState } from '../../interfaces/IRootState';

export const AboutUs = React.memo(() => {
  const { height, width } = useWindowDimensions();

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

  const [charts, setCharts] = useState(false);

  const [isLargerThan1300] = useMediaQuery('(min-width: 1300px)');
  const [isLargerThan1155] = useMediaQuery('(min-width: 1155px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan530] = useMediaQuery('(min-width: 530px)');
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | О фонде</title>
      </Helmet>
      <VStack w="full" p={0} m={0} ref={refHeader}>
        <Header />
      </VStack>
      <VStack minH={`${height}px`} justify="start" px="10%" bg={themeIsDark ? '#242323' : 'white'}>
        <VStack w="full" minH={`${height}px`} pb={[4, 6]} align="flex-start">
          <Image
            src={ulyanovsk}
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
              <Button color="white" variant="brand-link" fontSize={['lg', 'xl']} onClick={() => scrollToRef(refCharts)}>
                Цифры и Факты
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
              <Text color={themeIsDark ? 'white' : 'brand.dark'} fontWeight="800" fontSize={['xl', '2xl', '3xl']}>
                НАШИ ЦЕЛИ
              </Text>
              <VStack align="center" justify="center" px={[0, 4]}>
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']} align="start">
                  Основной целью деятельности Фонда является формирование имущества (в том числе финансовых средств) на
                  основе добровольных имущественных взносов (в том числе денежных) и иных законных поступлений, и
                  направление их на:
                  <VStack w="full" px={isLargerThan770 ? '25%' : '5%'} align="center">
                    <Stack
                      w="full"
                      direction={isLargerThan530 ? 'row' : 'column'}
                      align={isLargerThan530 ? 'start' : 'center'}
                    >
                      <VStack minW={['3em', '4em', '5em']}>
                        <AiOutlineApartment size={isLargerThan770 ? '4em' : '3em'} color="#7775ed" />
                      </VStack>
                      <Text
                        color={themeIsDark ? 'white' : 'brand.dark'}
                        fontSize={['sm', 'md', 'lg']}
                        w="full"
                        align="start"
                      >
                        Содействие развитию информационных технологий на территории Ульяновской области.
                      </Text>
                    </Stack>
                    <Stack
                      w="full"
                      direction={isLargerThan530 ? 'row' : 'column'}
                      align={isLargerThan530 ? 'start' : 'center'}
                    >
                      <VStack minW={['3em', '4em', '5em']}>
                        <MdEmojiPeople size={isLargerThan770 ? '4em' : '3em'} color="#7775ed" />
                      </VStack>
                      <Text
                        color={themeIsDark ? 'white' : 'brand.dark'}
                        fontSize={['sm', 'md', 'lg']}
                        w="full"
                        align="start"
                      >
                        Развитие человеческого потенциала отрасли информационных технологий.
                      </Text>
                    </Stack>
                    <Stack
                      w="full"
                      direction={isLargerThan530 ? 'row' : 'column'}
                      align={isLargerThan530 ? 'start' : 'center'}
                    >
                      <VStack minW={['3em', '4em', '5em']}>
                        <MdBiotech size={isLargerThan770 ? '4em' : '3em'} color="#7775ed" />
                      </VStack>
                      <Text
                        color={themeIsDark ? 'white' : 'brand.dark'}
                        fontSize={['sm', 'md', 'lg']}
                        w="full"
                        align="start"
                      >
                        Создание условий для появления передовых технологий, организаций, методов обучения федерального
                        и мирового уровня в сфере информационных технологий.
                      </Text>
                    </Stack>
                    <Stack
                      w="full"
                      direction={isLargerThan530 ? 'row' : 'column'}
                      align={isLargerThan530 ? 'start' : 'center'}
                    >
                      <VStack minW={['3em', '4em', '5em']}>
                        <GiVintageRobot size={isLargerThan770 ? '4em' : '3em'} color="#7775ed" />
                      </VStack>
                      <Text
                        color={themeIsDark ? 'white' : 'brand.dark'}
                        fontSize={['sm', 'md', 'lg']}
                        w="full"
                        align="start"
                      >
                        Развитие проектов, осуществляемых в форме или посредством информационных технологий,
                        телекоммуникационных технологий, в том числе информационно-телекоммуникационной сети Интернет,
                        робототехники, облачных вычислений, больших данных, человеко-машинных интерфейсов, систем
                        управления и так далее.
                      </Text>
                    </Stack>
                    <Stack
                      w="full"
                      direction={isLargerThan530 ? 'row' : 'column'}
                      align={isLargerThan530 ? 'start' : 'center'}
                    >
                      <VStack minW={['3em', '4em', '5em']}>
                        <MdCellTower size={isLargerThan770 ? '4em' : '3em'} color="#7775ed" />
                      </VStack>
                      <Text
                        color={themeIsDark ? 'white' : 'brand.dark'}
                        fontSize={['sm', 'md', 'lg']}
                        w="full"
                        align="start"
                      >
                        Развитие Интернет-предпринимательства и экосистемы Интернет-предпринимательства.
                      </Text>
                    </Stack>
                  </VStack>
                </Text>
              </VStack>
            </VStack>
            <VStack w="full" align="center" justify="center" pb={5}>
              <Text
                color={themeIsDark ? 'white' : 'brand.dark'}
                fontWeight="800"
                fontSize={['xl', '2xl', '3xl']}
                align="center"
              >
                ПРОЕКТЫ ПОДДЕРЖАННЫЕ ФОНДОМ В 2023 ГОДУ
              </Text>
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
                        fontFamily="Jost"
                        fontWeight="800"
                      >
                        Наименование проектов
                      </Th>
                      <Th
                        isNumeric
                        color={themeIsDark ? 'white' : 'brand.dark'}
                        fontSize={['sm', 'md', 'lg']}
                        fontFamily="Jost"
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
                      <Td>Турнир «ИТ-Марафон» среди студентов и преподавателей СПО</Td>
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
                      <Td>«Инженерно-техническая подготовка в школьном образовании»</Td>
                      <Td isNumeric>25</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </VStack>
            <Accordion allowMultiple w="full">
              <AccordionItem color={themeIsDark ? 'white' : 'brand.dark'}>
                <AccordionButton onClick={() => setCharts(!charts)}>
                  <Box as="span" flex="1" textAlign="left" ref={refCharts}>
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
                  <Box as="span" flex="1" textAlign="left" ref={refTeam}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xl', '2xl', '3xl']}>
                      <b>КОМАНДА</b>
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
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Image src={kuznezov} w={['160px', '200px']} h={['160px', '200px']} borderRadius={5} />
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Кузнецов Виталий Евгеньевич</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Министр Ульяновской области
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                    <VStack w="full">
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Box minW="200px">
                          <BsFillPersonFill size="200px" color="white" />
                        </Box>
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Ягфаров Олег Модорисович</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Директор ОГКУ «Правительство для граждан»
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                    <VStack w="full">
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Box minW="200px">
                          <BsFillPersonFill size="200px" color="white" />
                        </Box>
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Механюк Александр Владимирович</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Директор ГУЗ «МИАЦ»
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                  </VStack>
                  <VStack w="full" align="start" p={0} m={0}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['lg', 'xl', '2xl']} fontWeight="900">
                      Сотрудники Фонда
                    </Text>
                    <Stack borderTop="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                    <VStack w="full" align="start" justify="start">
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Image src={Erofeev} w={['160px', '200px']} h={['160px', '200px']} borderRadius={5} />
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Ерофеев Сергей Александрович</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Исполнительный директор
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                    <VStack w="full" align="start" justify="start">
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Image src={andronova} w={['160px', '200px']} h={['160px', '200px']} borderRadius={5} />
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Андронова Ольга Александровна</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Финансовый директор - главный бухгалтер
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                    <VStack
                      w="full"
                      align={isLargerThan530 ? 'start' : 'center'}
                      justify={isLargerThan530 ? 'start' : 'center'}
                    >
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Box minW="200px">
                          <BsFillPersonFill size="200px" color="white" />
                        </Box>
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Горлов Сергей Петрович</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Директор департамента развития отрасли информационных технологий
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                    <VStack
                      w="full"
                      align={isLargerThan530 ? 'start' : 'center'}
                      justify={isLargerThan530 ? 'start' : 'center'}
                    >
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Box minW="200px">
                          <BsFillPersonFill size="200px" color="white" />
                        </Box>
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Филиппова Ольга Вячеславовна</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Главный специалист департамента развития отрасли информационных технологий
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                    <VStack w="full" align={isLargerThan530 ? 'start' : 'center'} justify="start">
                      <Stack
                        direction={isLargerThan530 ? 'row' : 'column'}
                        align={isLargerThan530 ? 'start' : 'center'}
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor={themeIsDark ? '#313131' : 'brand.beige'}
                        w="full"
                      >
                        <Box minW="160px">
                          <BsFillPersonFill size="200px" color="white" />
                        </Box>
                        <VStack align={isLargerThan530 ? 'start' : 'center'} px={isLargerThan530 ? '20px' : '5px'}>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['lg', 'xl', '2xl']}
                            align="center"
                          >
                            <b>Халимова Руфина Расиховна</b>
                          </Text>
                          <Text
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md', 'lg']}
                            align="center"
                          >
                            Пресс-служба
                          </Text>
                        </VStack>
                      </Stack>
                    </VStack>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full" color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" ref={refDocs}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xl', '2xl', '3xl']}>
                      <b>ДОКУМЕНТЫ</b>
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack w="full" align="start">
                    <HStack w="full" align="start">
                      <Link
                        color={themeIsDark ? 'white' : 'brand.dark'}
                        fontSize={['sm', 'md', 'lg']}
                        href=""
                        isExternal
                        w="full"
                      >
                        <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
                          Порядок конкурсного отбора проектов Фонда ИТ
                        </Text>
                        <HStack spacing={0} pl={4}>
                          <BsFiletypeDocx size="1.5em" />
                          <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']} align="end">
                            106.61 КБ
                          </Text>
                        </HStack>
                      </Link>
                    </HStack>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full" color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" ref={refRecs}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xl', '2xl', '3xl']}>
                      <b>РЕКВИЗИТЫ</b>
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
                  <Box as="span" flex="1" textAlign="left" ref={refContacts}>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xl', '2xl', '3xl']}>
                      <b>КОНТАКТЫ</b>
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
