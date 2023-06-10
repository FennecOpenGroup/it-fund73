import {
  VStack,
  Text,
  Stack,
  HStack,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  OrderedList,
  ListItem,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Chart } from 'react-google-charts';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import petrishchev from '../../assets/petrishchev.jpg';
import yarushkina from '../../assets/yarushkina.jpg';
import kostishko from '../../assets/kostishko.jpg';
import kuznezov from '../../assets/kuznezov.jpg';
import pavlov from '../../assets/pavlov.jpg';
import Erofeev from '../../assets/Erofeev.jpg';
import andronova from '../../assets/andronova.jpg';
import Gorbunova from '../../assets/Gorbunova.jpg';

export const AboutUs = React.memo(() => {
  const { height } = useWindowDimensions();
  const toast = useToast();

  return (
    <>
      <Helmet>
        <title>it-fund | О фонде</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} justify="start" px="10%">
        <VStack
          w="full"
          minH={`${height}px`}
          bg="brand.beige"
          px={[2, 3, 4]}
          pb={[4, 6]}
          boxShadow="5px 0px rgb(3,0,15,15%)"
          align="flex-start"
        >
          <VStack w="full" align="start" p={0} m={0}>
            <Text color="brand.dark" fontSize="3xl">
              <br />
              <b>
                <big>Миссия Фонда</big>
              </b>
            </Text>
            <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
            <Text color="brand.dark" fontSize="lg">
              Миссия Фонда – всемерно стимулировать развитие ИТ-экосистемы Ульяновской области, обеспечивать системную
              поддержку образовательных и профориентационных проектов в сфере информационных технологий и создавать
              условия для устойчивого роста ИТ-отрасли региона.
            </Text>
            <Text color="brand.dark" fontSize="3xl">
              <br />
              <b>
                <big>Наши цели</big>
              </b>
            </Text>
            <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
            <Text color="brand.dark" fontSize="lg">
              Основной целью деятельности Фонда является формирование имущества (в том числе финансовых средств) на
              основе добровольных имущественных взносов (в том числе денежных) и иных законных поступлений, и
              направление их на:
              <OrderedList>
                <ListItem>Содействие развитию информационных технологий на территории Ульяновской области.</ListItem>
                <ListItem>Развитие человеческого потенциала отрасли информационных технологий.</ListItem>
                <ListItem>
                  Создание условий для появления передовых технологий, организаций, методов обучения федерального и
                  мирового уровня в сфере информационных технологий.
                </ListItem>
                <ListItem>
                  Развитие проектов, осуществляемых в форме или посредством информационных технологий,
                  телекоммуникационных технологий, в том числе информационно-телекоммуникационной сети Интернет,
                  робототехники, облачных вычислений, больших данных, человеко-машинных интерфейсов, систем управления и
                  так далее.
                </ListItem>
                <ListItem>Развитие Интернет-предпринимательства и экосистемы Интернет-предпринимательства.</ListItem>
              </OrderedList>
            </Text>
            <VStack w="full" align="start" justify="start" p={2} m={0}></VStack>
            <Text color="brand.dark" fontSize="3xl">
              <br />
              <b>
                <big>Цифры и факты</big>
              </b>
            </Text>
            <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Получено субсидий
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              legendToggle
            />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Объём средств софинансирования
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              height="full"
              legendToggle
            />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Проведено конкурсов
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              height="full"
              legendToggle
            />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Подано проектов на конкурсы
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              height="full"
              legendToggle
            />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Общая сумма поданных проектов
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              height="full"
              legendToggle
            />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Поддержано проектов
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              height="full"
              legendToggle
            />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Общая сумма поддержанных проектов
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              height="full"
              legendToggle
            />
            <Text color="brand.dark" fontWeight="bold" fontSize="2xl">
              Охват аудитории проектами
            </Text>
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
              options={{ colors: ['#7775ed'] }}
              width="100%"
              height="full"
              legendToggle
            />
            <Accordion allowMultiple w="full">
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text color="brand.dark" fontSize="3xl">
                      <b>КОМАНДА</b>
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack w="full" align="start" p={0} m={0}>
                    <Text color="brand.dark" fontSize="2xl" fontWeight="900">
                      Попечительский Совет Фонда
                    </Text>
                    <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
                  </VStack>
                  <VStack w="full" align="start" justify="start">
                    <HStack
                      align="start"
                      justify="start"
                      marginTop="25px"
                      p={2}
                      borderRadius="5px"
                      backgroundColor="#dcdcdc"
                      w="full"
                    >
                      <Image src={petrishchev} w="200px" h="200px" borderRadius={5} objectFit="cover" />
                      <VStack align="start" px="20px">
                        <Text color="brand.dark" fontSize="2xl">
                          <b>Петрищев Игорь Олегович</b>
                        </Text>
                        <Text color="brand.dark" fontSize="lg">
                          Ректор ФГБОУ ВО «Ульяновский государственный педагогический университет»
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                  <VStack w="full">
                    <HStack
                      align="start"
                      justify="start"
                      marginTop="25px"
                      p={2}
                      borderRadius="5px"
                      backgroundColor="#dcdcdc"
                      w="full"
                    >
                      <Image src={yarushkina} w="200px" h="200px" borderRadius={5} />
                      <VStack align="start" px="20px">
                        <Text color="brand.dark" fontSize="2xl">
                          <b>Ярушкина Надежда Глебовна</b>
                        </Text>
                        <Text color="brand.dark" fontSize="lg">
                          Ректор ФГБОУ ВО «Ульяновский государственный технический университет», доктор технических
                          наук, профессор
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                  <VStack w="full">
                    <HStack
                      align="start"
                      justify="start"
                      marginTop="25px"
                      p={2}
                      borderRadius="5px"
                      backgroundColor="#dcdcdc"
                      w="full"
                    >
                      <Image src={kostishko} w="200px" h="200px" borderRadius={5} />
                      <VStack align="start" px="20px">
                        <Text color="brand.dark" fontSize="2xl">
                          <b>Костишко Алла Евгеньевна</b>
                        </Text>
                        <Text color="brand.dark" fontSize="lg">
                          Директор Центра Интернет-образования ФГБОУ ВО «Ульяновский государственный университет»
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                  <VStack w="full" align="start" p={0} m={0}>
                    <Text color="brand.dark" fontSize="2xl" fontWeight="900">
                      Правление Фонда
                    </Text>
                    <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
                    <VStack w="full" align="start" justify="start">
                      <HStack
                        align="start"
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor="#dcdcdc"
                        w="full"
                      >
                        <Image src={kuznezov} w="200px" h="200px" borderRadius={5} />
                        <VStack align="start" px="20px">
                          <Text color="brand.dark" fontSize="2xl">
                            <b>Кузнецов Виталий Евгеньевич</b>
                          </Text>
                          <Text color="brand.dark" fontSize="lg">
                            Министр Ульяновской области
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                    <VStack w="full">
                      <HStack
                        align="start"
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor="#dcdcdc"
                        w="full"
                      >
                        <Image src={pavlov} w="200px" h="200px" borderRadius={5} />
                        <VStack align="start" px="20px">
                          <Text color="brand.dark" fontSize="2xl">
                            <b>Павлов Вадим Вячеславович</b>
                          </Text>
                          <Text color="brand.dark" fontSize="lg">
                            Генеральный директор АНО ДО «Агентство технологического развития Ульяновской области»,
                            Советник Губернатора по инновационному и технологическому развитию Ульяновской области
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </VStack>
                  <VStack w="full" align="start" p={0} m={0}>
                    <Text color="brand.dark" fontSize="2xl" fontWeight="900">
                      Сотрудники Фонда
                    </Text>
                    <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
                    <VStack w="full" align="start" justify="start">
                      <HStack
                        align="start"
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor="#dcdcdc"
                        w="full"
                      >
                        <Image src={Erofeev} w="200px" h="200px" borderRadius={5} />
                        <VStack align="start" px="20px">
                          <Text color="brand.dark" fontSize="2xl">
                            <b>Ерофеев Сергей Александрович</b>
                          </Text>
                          <Text color="brand.dark" fontSize="lg">
                            Исполнительный директор
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                    <VStack w="full" align="start" justify="start">
                      <HStack
                        align="start"
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor="#dcdcdc"
                        w="full"
                      >
                        <Image src={andronova} w="200px" h="200px" borderRadius={5} />
                        <VStack align="start" px="20px">
                          <Text color="brand.dark" fontSize="2xl">
                            <b>Андронова Ольга Александровна</b>
                          </Text>
                          <Text color="brand.dark" fontSize="lg">
                            Финансовый директор - главный бухгалтер
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                    <VStack w="full" align="start" justify="start">
                      <HStack
                        align="start"
                        justify="start"
                        marginTop="25px"
                        p={2}
                        borderRadius="5px"
                        backgroundColor="#dcdcdc"
                        w="full"
                      >
                        <Image src={Gorbunova} w="200px" h="200px" borderRadius={5} />
                        <VStack align="start" px="20px">
                          <Text color="brand.dark" fontSize="2xl">
                            <b>Горбунова Светлана Александровна</b>
                          </Text>
                          <Text color="brand.dark" fontSize="lg">
                            Главный специалист
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full">
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text color="brand.dark" fontSize="3xl">
                      <b>ДОКУМЕНТЫ</b>
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple w="full">
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text color="brand.dark" fontSize="3xl">
                      <b>РЕКВИЗИТЫ</b>
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <VStack w="full" spacing={10}>
                    <VStack w="full" justify="start" align="start">
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            Фонд развития информационных технологий Ульяновской области
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            ФРИТУО
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            Ulyanovsk Region Information Technology Development Fund
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            URITDF
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                    </VStack>
                    <VStack w="full" align="start">
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            432017, г. Ульяновск, улица Минаева, дом 11, офис 305
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                    </VStack>
                    <VStack w="full" align="start">
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            7325144801
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            732501001
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            1167300050334
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                    </VStack>
                    <VStack w="full" align="start">
                      <HStack align="start">
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            ОТДЕЛЕНИЕ УЛЬЯНОВСК БАНКА РОССИИ//УФК по Ульяновской области г. Ульяновск (Министерство
                            финансов Ульяновской области, Фонд развития информационных технологий Ульяновской области,
                            л/с 41203136D05)
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            №40102810645370000061
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            017308101
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            03226643730000006800
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                    </VStack>
                    <VStack w="full" align="start">
                      <HStack>
                        <Text color="brand.dark" fontSize="lg" fontWeight="bold">
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
                            fontSize="lg"
                            color="brand.dark"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            Ерофеев Сергей Александрович действует на основании Устава
                          </Text>
                        </CopyToClipboard>
                      </HStack>
                    </VStack>
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
