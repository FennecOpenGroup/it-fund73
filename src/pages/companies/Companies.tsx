/* eslint no-unsafe-optional-chaining: "error" */
import {
  VStack,
  HStack,
  Text,
  Link,
  List,
  Image,
  Grid,
  Stack,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  OrderedList,
  ListItem,
  ListIcon,
  GridItem,
  useMediaQuery,
  Input,
} from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import { BsGraphUpArrow, BsFillHouseDoorFill, BsBank2 } from 'react-icons/bs';
import { MdPeopleAlt, MdComputer } from 'react-icons/md';
import { FaFileContract, FaFlagCheckered } from 'react-icons/fa';
import { GiTrophyCup, GiMeepleArmy } from 'react-icons/gi';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { IRootState } from '../../interfaces/IRootState';
import simbirsoft from '../../assets/companies/simbirsoft.svg';
import mobirate from '../../assets/companies/mobirate.svg';
import nord from '../../assets/companies/nord.svg';
import IBS from '../../assets/companies/IBS.svg';
import advanshop from '../../assets/companies/advanshop.svg';
import ITECH from '../../assets/companies/ITECH.svg';
import PROF_IT from '../../assets/companies/PROF-IT.svg';
import Apps from '../../assets/companies/65apps.svg';
import ASTRIO from '../../assets/companies/ASTRIO.svg';
import DaoTech from '../../assets/companies/DAO-TECH.svg';
import IRLIX from '../../assets/companies/IRLIX.svg';
import AnyRun from '../../assets/companies/ANY-RUN.svg';
import funbox from '../../assets/companies/funbox.svg';
import LitotaLabs from '../../assets/companies/LilotaLabs.svg';
import MadBrains from '../../assets/companies/MadBrains.svg';
import CSCART from '../../assets/companies/CSCART.svg';
import simtech from '../../assets/companies/simtech.svg';
import asdevel from '../../assets/companies/asdevel.svg';
import ps from '../../assets/companies/ps.svg';
import sonakay from '../../assets/companies/sonakay.svg';
import ecwid from '../../assets/companies/ecwid.svg';
import Supportix from '../../assets/companies/Supportix.svg';
import AISMK from '../../assets/companies/AISMK.svg';
import Oplanet from '../../assets/companies/o-planet.svg';
import Ecomlabs from '../../assets/companies/Ecomlabs.svg';
import scheme_accreditation from '../../assets/schemes/scheme_accreditation.svg';
import scheme_accreditation_dark from '../../assets/schemes/scheme_accreditation_dark.svg';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Companies = React.memo(() => {
  const { height } = useWindowDimensions();

  const [support, setSupport] = useState(false);
  const [accreditation, setAccreditation] = useState(false);
  const [company, setCompany] = useState(false);
  const [search, setSearch] = useState('');
  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => setSearch(event.target.value);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current !== null) {
      window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
    }
  };

  const refHeader = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);
  const refSupport = useRef<HTMLDivElement>(null);
  const refAccreditaion = useRef<HTMLDivElement>(null);
  const refCompany = useRef<HTMLDivElement>(null);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  const [isLargerThan1075] = useMediaQuery('(min-width: 1075px)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>айтифонд | Что происходит в ИТ-отрасли</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Показатели развития ИТ-отрасли. 1 квартал 2023 года" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:url" content="https://www.айтифонд.рф/companies" />
        <meta property="og:title" content="Показатели развития ИТ-отрасли. 1 квартал 2023 года" />
        <meta property="og:descripsion" content="Показатели развития ИТ-отрасли. 1 квартал 2023 года" />
        <meta property="og:image" content="/logo_ref.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="vk:card" content="image/jpg" />
        <meta property="vk:url" content="https://www.айтифонд.рф/companies" />
        <meta name="vk:title" content="Показатели развития ИТ-отрасли. 1 квартал 2023 года" />
        <meta name="vk:descripsion" content="Показатели развития ИТ-отрасли. 1 квартал 2023 года" />
        <meta name="vk:image" content="/logo_ref.jpg" />
        <meta
          name="keywords"
          content="Фонд развития, информационный-технологий, Ульяновской области, Ульяновск, IT-фонд, IT, ИТ-отрасль"
        />
      </Helmet>
      <VStack ref={refHeader}>
        <Header />
      </VStack>
      <VStack
        justify="center"
        px={isLargerThan770 ? '10%' : '5%'}
        bg={themeIsDark ? '#242323' : 'white'}
        minH={`${
          refHeader.current &&
          refFooter.current &&
          height - refHeader.current?.clientHeight - refFooter.current?.clientHeight
        }px`}
      >
        <Text
          color="brand.blue"
          fontSize={['lg', 'xl', '2xl', '4xl']}
          align="center"
          textTransform="uppercase"
          pt={4}
          fontWeight="800"
        >
          Текущие показатели развития ИТ-отрасли
        </Text>
        <Stack
          w={['40%', '60%', '100%']}
          align="center"
          justify="center"
          direction={isLargerThan1075 ? 'row' : 'column'}
          spacing={0}
        >
          <Button
            variant="brand-link"
            color={themeIsDark ? 'white' : 'brand.dark'}
            fontSize={['sm', 'md', 'lg']}
            py={2}
            onMouseEnter={() => setSupport(true)}
            onMouseLeave={() => setSupport(false)}
            onClick={() => scrollToRef(refSupport)}
          >
            Меры поддержки ИТ-отрасли
          </Button>
          <Button
            variant="brand-link"
            color={themeIsDark ? 'white' : 'brand.dark'}
            fontSize={['sm', 'md', 'lg']}
            py={2}
            onMouseEnter={() => setAccreditation(true)}
            onMouseLeave={() => setAccreditation(false)}
            onClick={() => scrollToRef(refAccreditaion)}
          >
            Аккредитация ИТ-компаний
          </Button>
          <Button
            variant="brand-link"
            color={themeIsDark ? 'white' : 'brand.dark'}
            fontSize={['sm', 'md', 'lg']}
            py={2}
            onMouseEnter={() => setCompany(true)}
            onMouseLeave={() => setCompany(false)}
            onClick={() => scrollToRef(refCompany)}
          >
            ИТ-компании Ульяновской области
          </Button>
        </Stack>
        <VStack w="full" p={[2, 3, 4]} justify="start" align="center">
          <Grid
            w="full"
            minH={isLargerThan960 ? '180px' : '110px'}
            gap={isLargerThan960 ? 3 : 2}
            templateRows="auto"
            templateColumns={isLargerThan960 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'}
            mb={4}
          >
            <HStack p={2} borderRadius="15px" backgroundColor="transparent" minH={isLargerThan960 ? '180px' : '100px'}>
              <VStack minW={['2em', '3em', '4em']}>
                <MdComputer size={isLargerThan960 ? '3em' : '2em'} color={themeIsDark ? 'white' : '#1a1a1a'} />
              </VStack>
              <Stack p={1} m={0} spacing={0} w="full" align="start">
                <Text fontSize={['sm', 'md', 'lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
                  ИТ-организаций <br /> Ульяновской области
                </Text>
                <CountUp
                  style={{ color: '#7775ed', fontSize: `${isLargerThan960 ? '60px' : '30px'}`, fontWeight: 'bold' }}
                  separator=""
                  end={1453}
                  duration={2}
                />
              </Stack>
            </HStack>
            <HStack p={2} borderRadius="15px" backgroundColor="transparent" minH={isLargerThan960 ? '180px' : '100px'}>
              <VStack minW={['2em', '3em', '4em']}>
                <FaFileContract size={isLargerThan960 ? '3em' : '2em'} color={themeIsDark ? 'white' : '#1a1a1a'} />
              </VStack>
              <Stack p={1} m={0} spacing={0} w="full" align="start">
                <Text fontSize={['sm', 'md', 'lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
                  Аккредитованных ИТ-компаний <br /> в Минцифры России{' '}
                </Text>
                <HStack>
                  {isLargerThan960 && (
                    <CountUp
                      style={{ color: '#7775ed', fontSize: '60px', fontWeight: 'bold' }}
                      end={138}
                      duration={2}
                    />
                  )}
                  {!isLargerThan960 && (
                    <CountUp
                      style={{ color: '#7775ed', fontSize: '30px', fontWeight: 'bold' }}
                      end={175}
                      duration={2}
                    />
                  )}
                  <Text fontSize={['sm', 'md', 'lg']} color={themeIsDark ? 'white' : 'brand.dark'}>
                    компаний{' '}
                  </Text>
                </HStack>
              </Stack>
            </HStack>
            <HStack
              p={2}
              borderRadius="15px"
              backgroundColor="transparent"
              w="full"
              minH={isLargerThan960 ? '180px' : '100px'}
              justify="center"
            >
              <VStack minW={['2em', '3em', '4em']}>
                <BsGraphUpArrow size={isLargerThan960 ? '3em' : '2em'} color={themeIsDark ? 'white' : '#1a1a1a'} />
              </VStack>
              <Stack p={0} m={0} spacing={0} w="full" align="start">
                <Text fontSize={['sm', 'md', 'lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
                  Налоговые поступления <br /> в региональный бюджет{' '}
                </Text>
                <HStack>
                  {isLargerThan960 && (
                    <CountUp
                      style={{ color: '#7775ed', fontSize: '60px', fontWeight: 'bold' }}
                      end={328.4}
                      duration={2.2}
                    />
                  )}
                  {!isLargerThan960 && (
                    <CountUp
                      style={{ color: '#7775ed', fontSize: '30px', fontWeight: 'bold' }}
                      end={328.4}
                      duration={2.2}
                    />
                  )}
                  <Text fontSize={['sm', 'md', 'lg']} color={themeIsDark ? 'white' : 'brand.dark'}>
                    млн. руб
                  </Text>
                </HStack>
              </Stack>
            </HStack>
            <HStack
              p={2}
              borderRadius="15px"
              backgroundColor="transparent"
              w="full"
              minH={isLargerThan960 ? '180px' : '100px'}
            >
              <VStack minW={['3em', '4em', '5em']}>
                <MdPeopleAlt size={isLargerThan960 ? '4em' : '3em'} color={themeIsDark ? 'white' : '#1a1a1a'} />
              </VStack>
              <Stack p={0} m={0} spacing={0} w="full" align="start">
                <Text fontSize={['sm', 'md', 'lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
                  Среднесписочная численность <br /> работников{' '}
                </Text>
                <HStack>
                  {isLargerThan960 && (
                    <CountUp
                      style={{ color: '#7775ed', fontSize: '60px', fontWeight: 'bold' }}
                      end={6210}
                      separator=""
                      duration={2}
                    />
                  )}
                  {!isLargerThan960 && (
                    <CountUp
                      style={{ color: '#7775ed', fontSize: '30px', fontWeight: 'bold' }}
                      end={6210}
                      separator=""
                      duration={2}
                    />
                  )}
                  <Text fontSize={['sm', 'md', 'lg']} color={themeIsDark ? 'white' : 'brand.dark'}>
                    человек
                  </Text>
                </HStack>
              </Stack>
            </HStack>
          </Grid>
          <Accordion allowMultiple w="full" m={0}>
            <AccordionItem color={themeIsDark ? 'white' : 'brand.dark'}>
              <AccordionButton>
                <Text
                  w="full"
                  align="start"
                  color={support ? 'brand.blue' : themeIsDark ? 'white' : 'brand.dark'}
                  fontWeight="800"
                  fontSize={['lg', 'xl', '3xl']}
                  textTransform="uppercase"
                  ref={refSupport}
                >
                  Меры поддержки ИТ-отрасли
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack
                  px={isLargerThan960 ? 6 : 2}
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
                    Региональный аспект
                  </Text>
                  <Stack borderTop="1px" color={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                  <VStack w="full" align="center" py={3}>
                    <List>
                      <ListItem>
                        Пониженные региональные налоговые ставки по УСН в размере 1 %, если объектом налогообложения
                        являются доходы, 5 % и 10 %, если объектом налогообложения являются доходы, уменьшенные на
                        величину расходов (Закон Ульяновской области от 03.03.2009 № 13-ЗО).
                      </ListItem>
                      <ListItem>
                        Льготное кредитование до 5 млн рублей с процентной ставкой от 3 % до 5 % годовых при
                        предоставлении залогового имущества и 10 % при отсутствии залогового имущества сроком до 2-х
                        лет. ИТ-компании могут направить льготный займ на пополнение оборотных средств, а также на
                        приобретение информационного, компьютерного и телекоммуникационного оборудования (МКК фонд
                        «ФФПП»).
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <Text fontSize="md" color={themeIsDark ? 'white' : 'brand.dark'}>
                            Единовременная социальная выплата на приобретение жилья для ИТ-специалистов в размере 250
                            тыс. рублей.
                            <Link
                              fontWeight="900"
                              fontSize="xm"
                              color={themeIsDark ? 'white' : 'brand.dark'}
                              isExternal
                              href="https://disk.yandex.ru/d/5WJrecQ0OuzCYQ"
                            >
                              Скачать документацию
                            </Link>
                          </Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        Стипендии Губернатора Ульяновской области «имени Е.Е.Горина» и «имени И.Я.Яковлева» от 3 до 5
                        тыс. рублей.
                      </ListItem>
                      <ListItem>
                        Гранты на разработку отечественного ПО и реализацию образовательных проектов в сфере ИТ
                      </ListItem>
                    </List>
                  </VStack>
                  <Text
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    fontSize={['sm', 'lg', '2xl']}
                    fontWeight="900"
                    textTransform="uppercase"
                  >
                    Федеральные меры поддержки
                  </Text>
                  <Stack borderTop="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                  <VStack w="full" px={4} align="start">
                    <HStack spacing={2}>
                      <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']} fontWeight="900">
                        Налоговые льготы:
                      </Text>
                    </HStack>
                    <OrderedList px={2}>
                      <ListItem>Установлена ставка налога на прибыль 0% до конца 2024 года;</ListItem>
                      <ListItem>Освобождение от НДС, если ПО включён в реестр российского ПО;</ListItem>
                      <ListItem>Снижены тарифы страховых взносов с 14% до 7,6%;</ListItem>
                    </OrderedList>
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']} fontWeight="900">
                      Другие меры поддержки:
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={GiTrophyCup} color="brand.blue" fontSize="1.25em" />
                        Освобождение от налоговых проверок до конца 2024 года;{' '}
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BsFillHouseDoorFill} color="brand.blue" fontSize="1.25em" />
                        Льготная ипотека для ИТ-специалистов до 5% годовых на покупку недвижимости.
                        <Link
                          fontWeight="900"
                          fontSize="xm"
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          isExternal
                          href="https://digital.gov.ru/ru/events/42424/"
                        >
                          Условие программы
                        </Link>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaFlagCheckered} color="brand.blue" fontSize="1.25em" />
                        Упрощение процесса трудоустройства иностранных ИТ-специалистов и получения ими вида на
                        жительство;
                      </ListItem>
                      <ListItem>
                        <ListIcon as={GiMeepleArmy} color="brand.blue" fontSize="1.25em" />
                        Отсрочка от призыва службы в армии от 18 до 30 лет;
                      </ListItem>
                      <ListItem>
                        <ListIcon as={BsBank2} color="brand.blue" fontSize="1.25em" />
                        Льготные кредиты через уполномоченные банки до 5% годовых на разработку и внедрение российских
                        ИТ-решений;
                        <Link
                          fontWeight="900"
                          fontSize="xm"
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          isExternal
                          href="https://digital.gov.ru/ru/activity/directions/942/"
                        >
                          Условие программы
                        </Link>
                      </ListItem>
                      <List>
                        <ListItem>ИТ-гранты на развитие цифровых решений:</ListItem>
                        <ListItem pl="10px">
                          <Link href="https://рфрит.рф/" isExternal>
                            Российский фонд развития информационных технологий (РФРИТ);
                          </Link>
                        </ListItem>
                        <ListItem pl="10px">
                          <Link href="https://www.iidf.ru/startups/" isExternal>
                            Фонд развития интернет-инициатив (ФРИИ);
                          </Link>
                        </ListItem>
                        <ListItem pl="10px">
                          <Link href="https://fasie.ru/" isExternal>
                            Фонд содействия инновациям;
                          </Link>
                        </ListItem>
                        <ListItem pl="10px">
                          <Link href="https://dtech.sk.ru/" isExternal>
                            Фонд «Сколково»;
                          </Link>
                        </ListItem>
                      </List>
                    </List>
                  </VStack>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple w="full" m={0} color={themeIsDark ? 'white' : 'brand.dark'}>
            <AccordionItem>
              <AccordionButton>
                <Text
                  w="full"
                  align="start"
                  color={accreditation ? 'brand.blue' : themeIsDark ? 'white' : 'brand.dark'}
                  fontWeight="800"
                  fontSize={['lg', 'xl', '3xl']}
                  textTransform="uppercase"
                  ref={refAccreditaion}
                >
                  Аккредитация ИТ-компаний
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack px={6} w="full" align="start">
                  <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'lg', '2xl']} fontWeight="900">
                    Дерево решений
                  </Text>
                  <Stack borderTop="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
                </VStack>
                <VStack w="full" align="center" py={3}>
                  <Image src={themeIsDark ? scheme_accreditation_dark : scheme_accreditation} />
                </VStack>
                <Stack borderTop="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" mb={2} p={0} />
                <Button
                  variant="brand-high"
                  fontSize={['xs', 'md', 'lg']}
                  w="full"
                  as={Link}
                  href="https://www.gosuslugi.ru/itindustry/accreditation/acreditation_of_it_companies"
                  isExternal
                >
                  Подать заявление
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple w="full" m={0} color={themeIsDark ? 'white' : 'brand.dark'}>
            <AccordionItem>
              <AccordionButton>
                <Text
                  w="full"
                  align="start"
                  color={company ? 'brand.blue' : themeIsDark ? 'white' : 'brand.dark'}
                  fontWeight="800"
                  fontSize={['lg', 'xl', '3xl']}
                  textTransform="uppercase"
                  ref={refCompany}
                >
                  ИТ-компании Ульяновской области
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                <VStack w="full" px={0}>
                  <Input
                    variant="brand-search"
                    border="2px solid #5F5F5F"
                    w="full"
                    placeholder="Поиск..."
                    value={search}
                    onChange={handleChange}
                    backgroundColor="transparent"
                    fontSize={['md', 'lg', 'xl']}
                    h="45px"
                  />
                  <Grid
                    w="full"
                    templateRows="auto"
                    templateColumns={
                      isLargerThan1200 ? 'repeat(3, 1fr)' : isLargerThan960 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'
                    }
                    gap={2}
                    px={0}
                    py={2}
                  >
                    {search === undefined ||
                      ('simbirsoft'.includes(search.toLocaleLowerCase()) && (
                        <GridItem
                          borderRadius="10px"
                          w="full"
                          bgGradient="linear(to-r, brand.blue, blue.900)"
                          p={[2, 4]}
                        >
                          <HStack align="center">
                            <Image src={simbirsoft} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.simbirsoft.com/"
                              isExternal
                            >
                              SIMBIRSOFT
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            SimbirSoft — глобальная ИТ-компания с опытом в разработке и тестировании ПО с 2001 года,
                            которая объединяет более 1400 сотрудников из 50 городов России. Мы разрабатываем системы для
                            автоматизации работы бизнеса, высоконагруженные системы, мобильные приложения, встроенное ПО
                            и блокчейн-проекты, Machine Learning и Data Science для заказчиков из России, Европы и США.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('mobirate'.includes(search.toLocaleLowerCase()) && (
                        <GridItem
                          borderRadius="10px"
                          w="full"
                          bgGradient="linear(to-r, #dd6c1b, orange.900)"
                          p={[2, 4]}
                        >
                          <HStack align="center">
                            <Image src={mobirate} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.mobirate.com/"
                              isExternal
                            >
                              MOBIRATE
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Mobirate — занимаемся разработкой мобильных игр с 2003 года. За это время было создано более
                            30 игр, самые известные: серия Parking Mania, Dead Ahead, Rovercraft и Big Rig Racing, и
                            привлечено 250+ миллионов игроков. Вся экспертиза: от идеи до релиза, находится в мощных
                            руках наших профессионалов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('mediasoft'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #0bcf6b, green.900)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://mediasoft.team/"
                              isExternal
                            >
                              MEDIASOFT
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            MEDIASOFT — разрабатывает сложные веб-системы, бэкенды, мобильные приложения и
                            highload-проекты для бизнеса с 2014 года. У нас в команде 250+ разработчиков по направлениям
                            backend, frontend, mobile, qa и аналитика.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('nordclan'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #07a0c3, blue.300)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={nord} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://nordclan.com/"
                              isExternal
                            >
                              NORDCLAN
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            NORDCLAN — разрабатывает программное обеспечение под ключ: от аналитики и описания идеи до
                            тестирования готового продукта. Работает со сложными интеграциями и высоконагруженными
                            сервисами. Является партнером крупных интеграторов, реализует выделенные модули собственной
                            командой разработки.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('ibs'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #436cb0, #262351)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={IBS} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://ibs.ru/"
                              isExternal
                            >
                              IBS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            IBS — бизнес - и технологический партнер лидеров российского бизнеса. Компания решает
                            сложные задачи в сфере стратегического развития и повышения операционной эффективности,
                            оказывая услуги в области оптимизации бизнес-процессов, создания систем управления,
                            управления данными, анализа и моделирования, разработки, тестирования и сопровождения
                            программного обеспечения.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('advantshop'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #0b88f2, blue.900)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={advanshop} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.advantshop.net/"
                              isExternal
                            >
                              ADVANTSHOP
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ADVANTSHOP – это единая система для создания интернет-магазина, благодаря которой вы
                            оптимизируете работу для удобства клиентов и поднимете управление бизнес-процессами на новый
                            уровень.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('itech'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #c92727, #f94d4d)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={ITECH} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://itech-group.ru/"
                              isExternal
                            >
                              ITECH
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ITECH — IT-компания полного цикла, мы специализируемся в области веб-разработки,
                            интернет-маркетинга, сопровождения и развития интернет-проектов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('zebrains'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #4bd587, #1f3695)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://zebrains.ru/"
                              isExternal
                            >
                              ZEBRAINS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ZeBrains – разработка программного обеспечения Разработка программного обеспечения на заказ,
                            ИТ-аутсорсинг. Внедряем технические решения для интернет-магазинов, финансовых, страховых,
                            медицинских, ритейл организаций.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('profi-it group'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #112ebd, #2f52ff)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={PROF_IT} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://prof-itgroup.ru/"
                              isExternal
                            >
                              PROF-IT GROUP
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            PROF-IT GROUP – это группа ИТ-компаний, занимающихся комплексной автоматизацией управления
                            крупными предприятиями, проектированием и внедрением инжиниринговых и ИТ-проектов,
                            консалтингом, разработкой прикладного и инновационного программного обеспечения, проектами в
                            сфере цифрового производства и технологий для Умного города.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('astrio'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #c46511, #ff9436)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={ASTRIO} h={['20px', '30px', '40px']} w={['30px', '60px', '80px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://astrio.ru/"
                              isExternal
                            >
                              ASTRIO
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ASTRIO – Профессиональная разработка интернет-магазинов на платформе Magento. Собственная
                            команда сертифицированных Magento разработчиков.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('65apps'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #182670, #4961d8)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={Apps} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://65apps.com/"
                              isExternal
                            >
                              65APPS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            65apps – IT-компания с фокусом на разработку сложных информационных сервисов и мобильных
                            приложений для крупного бизнеса.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('intelsy'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #6d4afa, #3718b5)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://intelsy.ru/"
                              isExternal
                            >
                              INTELSY
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Intelsy – Разработка, развитие и поддержка веб-сервисов и мобильных приложений. Помогаем
                            запускать интернет-магазины, продукты для финтеха, корпоративные сайты, личные кабинеты и
                            автоматизировать бизнес-процессы.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('agatech'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #00b5c1, #44e9f5)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://agatech.ru/"
                              isExternal
                            >
                              AGATECH
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            AGATECH - Веб-студия, интернет маркетинг и академия AGATECH и cитема управления контентом
                            САГА 3.0.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('dao tech'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #eb6e60, #693eb2)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={DaoTech} h={['20px', '30px', '40px']} w={['35px', '60px', '70px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://daotech.ru/ru"
                              isExternal
                            >
                              DAO TECH
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            DAO TECH – это быстро растущая IT компания с большим количеством интересных внешних
                            проектов, строящихся на новейших идеях индустрии и технологиях. Большинство наших клиентов
                            являются крупными компаниями из США, Нидерландов, Германии и Великобритании. DAO TECH также
                            является одной из немногих компаний на российском рынке, которая работает в отрасли Legal
                            tech.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('rodgii'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #4e8bd1, #32639c)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.rogii.ru/"
                              isExternal
                            >
                              RODGII
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ROGII – Технологии для совершенствования бурения скважин. Наши программные продукты
                            позволяют реализовывать любые задачи, возникающие во время геонавигации, мониторинга
                            бурения, сбора и передачи данных с буровой на серверы!
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('funbox'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #216c29, #68dc36)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={funbox} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://funbox.ru/"
                              isExternal
                            >
                              FUNBOX
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            FunBox – Сервисы для сотовых операторов. Более 16 лет мы разрабатываем решения для
                            операторов сотовой связи и их клиентов.Наш первый проект стартовал в декабре 2006 года, и
                            его реализовали всего три человека. Сейчас в нашем портфолио более 300 проектов, а команда
                            превышает 500 человек.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('any.run'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #003881, #33deff)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={AnyRun} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://any.run/why-us/"
                              isExternal
                            >
                              ANY.RUN
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ANY.RUN – Исследование вредоносных программ. Поднимите свою исследовательскую работу на
                            новый уровень с нашей интерактивной песочницей для анализа вредоносных программ, используя
                            наши инновационные технологии для вашей киберзащиты!
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('irlix'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #094e01, #2d8b56)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={IRLIX} h={['20px', '30px', '30px']} w={['20px', '30px', '30px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://irlix.com/"
                              isExternal
                            >
                              IRLIX
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            IRLIX – Создаем цифровые решения для крупного и среднего бизнеса.Создаем персональное
                            решение для вашего бизнеса, устраняя зависимость от иностранного ПО. Разработка продукта под
                            ключ обеспечиваем весь цикл работ по созданию продукта от Вашей идеи до внедрения готового
                            решения.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('mad brains'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #ff5500, #ff9925)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={MadBrains} h={['30px', '60px', '80px']} w={['30px', '60px', '80px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://madbrains.ru/"
                              isExternal
                            >
                              MAD BRAINS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Mad Brains — это российская IT-компания, специализирующаяся на разработке сервисов для
                            мобильных устройств. Компания имеет опыт в реализации интеграционных решений, собственные
                            продукты в сфере мобильной электронной коммерции и входит в 20-ку лучших мобильных
                            разработчиков России и СНГ. Среди наших клиентов Магнит, DNS, Яндекс, Home Credit Bank,
                            QIWI, Pfizer, OneTwoTrip! и другие крупные бренды.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('liotalabs'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #9b0005, #da0007)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={LitotaLabs} h={['30px', '40px', '60px']} w={['30px', '40px', '60px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://litota.ru/#slide8"
                              isExternal
                            >
                              LITOTA LABS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            LITOTA LABS – Разрабатываем программное обеспечение для вашего бизнеса. С 2006 года компания
                            успешно создает и внедряет уникальные ИТ-решения уровня предприятия в сфере букмекерского
                            бизнеса. Стабильно высокое качество услуг разработки позволило компании добиться
                            долгосрочных доверительных отношений с нашими клиентами. Вместе с сотрудниками главного
                            офиса в Ульяновске с нами работает удаленная команда профессионалов из разных уголков мира,
                            таких как Украина, Черногория, Испания, Великобритания и США.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('деловые информацционные системы'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #3056d2, #ff2130)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['lg', 'lg', 'xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.company-dis.ru/"
                              isExternal
                            >
                              ДЕЛОВЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Деловые информационные системы – Повышаем ценность бизнеса с помощью глубокого
                            преобразования бизнес-процессов используя цифровые технологии.Совершенствование и ведение
                            корпоративного портала на основе цифровой платформы 1С-Битрикс. Успешно запущен проект по
                            созданию и внедрению универсальных VR-тренажеров для производственных и строительных
                            предприятий, а также для объектов добычи нефти, газа и угля.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('simtech'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #bf271d, #ff2414)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={simtech} h={['20px', '30px', '30px']} w={['20px', '30px', '30px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://simtech.ru/"
                              isExternal
                            >
                              SIMTECH
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Simtech – Группа компаний азрабатывает программы и веб-сервисы для
                            интернет‑предпринимателей. Помогаем клиентам зарабатывать больше, расширяя функционал их
                            интернет-магазинов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('cscart'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #0194f6, #48649c)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={CSCART} h={['20px', '30px', '30px']} w={['20px', '30px', '30px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.cs-cart.ru/"
                              isExternal
                            >
                              CS CART
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            CS–Cart – Мы занимаемся разработкой решений для интернет-торговли с 2005 года. За это время
                            наши клиенты из 170 стран приобрели более 35 000 копий программы CS–Cart для своих
                            магазинов. Тысячи компаний по всему миру год за годом выбирают решения на платформе CS–Cart
                            для своего интернет-бизнеса, подтверждая высокий уровень технологий и услуг компании. В 2014
                            году CS–Cart был признан E-commerce решением №2 в России и СНГ. А компания Simtech
                            Development, которая входит в нашу группу компаний, была признана E-commerce студией №1 в
                            России.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('промосервис'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #3E7DA2, #17baff)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={ps} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.promservis.ru/"
                              isExternal
                            >
                              ПРОМСЕРВИС
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Миссия Холдинга «ПромСервис» - внести свой вклад в превращение России в современное,
                            эффективное и развитое, удобное и безопасное для проживания и работы государство. Виды
                            деятельности направлены на обоснование и обеспечение энергоресурсосбережения для предприятий
                            и организаций практически всех отраслей экономики. Предприятия Холдинга «ПромСервис»
                            предлагают заказчикам различные комплексные решения в сфере энергоресурсосбережения объектов
                            ЖКХ, отдельных предприятий и городов в целом.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('тауруна'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #e2b25f, #005d84)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://tauruna.ru/"
                              isExternal
                            >
                              ТАУРУНА
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Профессионально разрабатываем действительно работающие и качественные решения «под ключ» для
                            наших клиентов. Хотите избавиться от головной боли по поводу техчасти и сконцентрироваться
                            на развитии бизнеса — приходите к нам! В своей работе мы всегда делаем упор на качество и
                            долгосрочное развитие проекта. Помимо разработки с ‘нуля’, готовы довести до ума уже
                            существующие решения и даже вытащить проблемные проекты.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('ксимад'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #ff2200, #e68a00)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://ksimad.ru/"
                              isExternal
                            >
                              КСИМАД
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ООО “КСИМАД” может создавать ПО для предприятий в автомобильной, медицинской, финансовой,
                            образовательной, медиа и развлекательной сферах. Также по запросу мы можем выполнить работы
                            по установке, тестированию и сопровождению заказных программ и баз данных.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('ecwid'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #040212, #0a023c)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={ecwid} h={['20px', '30px', '30px']} w={['20px', '30px', '30px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.ecwid.ru/"
                              isExternal
                            >
                              ECWID
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы команда, одержимая одной целью — сделать малый бизнес успешным. Мы собираем воедино мощь
                            мировых e-commerce технологий и делаем их простыми и доступными каждому. У нас
                            восхитительная поддержка. Мы постоянно учимся и не останавливаемся на достигнутом. Открыть
                            интернет-магазин стало как никогда просто.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('сонокай'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #646e67, #0b110c)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={sonakay} h={['20px', '30px', '50px']} w={['20px', '30px', '50px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://сонакай.рф/"
                              isExternal
                            >
                              СОНОКАЙ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Сонакай — динамично развивающаяся IT-компания, существующая на рынке с 2013 года. Благодаря
                            многолетнему опыту и накопленным знаниям мы разработали ряд уникальных решений в различных
                            областях мобильной разработки.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('купи батон'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #656565, #55818E)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://buymeapie.com/ru"
                              isExternal
                            >
                              КУПИ БАТОН
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы — команда профессионалов, искренне увлечённых своим делом, любим методики Agile и
                            работаем по Scrum. Наша миссия — улучшать жизни людей с помощью современных технологий.
                            Компания находится в Ульяновске, крупном городе в 900 км от Москвы.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('asd'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #419cb7, #00abff)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={asdevel} h={['20px', '30px', '40px']} w={['20px', '30px', '40px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="http://asdevel.com/asdevel/web/ru"
                              isExternal
                            >
                              ASD
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Advanced Software Development – одна из уникальных российских IT-компаний. Среди многих
                            других “молодых, динамично развивающихся” нас выгодно отличает наличие большого опыта
                            создания высококачественного программного обеспечения для многочисленных клиентов по всему
                            миру, в том числе таких компаний, как Яндекс и LG Electronics. Мы предоставляем полный пакет
                            услуг по разработке бизнес-приложений, игр и прочих программных продуктов - от сырой идеи до
                            реализации и последующей публикации.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('o-planet'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #f50000, #279dc9)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={Oplanet} h={['20px', '30px', '50px']} w={['20px', '30px', '45px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.o-planet.ru/"
                              isExternal
                            >
                              O-PLANET
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            O-Planet - товарный знак, известный в сети с 2000-го года. В 2010-м году было
                            зарегистрировано О-Планет. В этом же году компания выиграла грант на проект разработки
                            POS-систем. Это дало старт развитию компании. Мы - это опытный и творческий коллектив,
                            имеющий множество интересных идей и готовых решений. Наша деятельность напрямую связана с
                            автоматизацией бизнеса. Наша специализация – торговые, производственные предприятия,
                            заведения общепита. Мы - аутсорсинговая компания, а наши клиенты - предприятия из разных
                            городов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('supportix'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #493a3a, #c04545)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={Supportix} h={['20px', '30px', '50px']} w={['20px', '30px', '50px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://supportix.ru/"
                              isExternal
                            >
                              SUPPORTIX
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Cоздаем и сопровождаем сайты. Мы работаем с проектами любой сложности: Информационный
                            портал, корпоративный сайт, интернет-магазин. Остаёмся на всё время жизни проекта и не
                            бросаем своих клиентов. Оказываем полный комплекс услуг по сопровождению веб-ресурсов.
                            Дизайн сайта играет большую роль, это практически лицо сайта. Мы серьёзно подходим к этому и
                            разработаем дизайн любой сложности.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('лайфхакер'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #fc6d57, #f73315)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://lifehacker.ru/"
                              isExternal
                            >
                              ЛАЙФХАКЕР
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Лайфхакер — это издание для тех, кто хочет становиться лучше каждый день. Мы рассказываем
                            обо всём, что улучшает жизнь, доступно отвечаем на сложные вопросы, помогаем читателю решать
                            проблемы и делать повседневность осмысленной. Мы любим спорт, здоровье и путешествия,
                            рассказываем про отношения и финансы, делаем подборки фильмов и книг, пишем про новинки в
                            сфере технологий, устройства и полезные программы, делимся выгодными акциями, скидками и
                            практическими советами для всех сфер жизни.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('idem'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #ff1e53, #141011)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://idem.agency/"
                              isExternal
                            >
                              IDEM
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы создаем сайты, сервисы, айдентику и дизайн для бизнеса. Стремимся создавать проекты с
                            фунциональным дизайном, которые улучшают коммуникацию компаний с клиентами.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('ecom labs'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #38D577, #2b7667)" p={[2, 4]}>
                          <HStack align="center">
                            <Image src={Ecomlabs} h={['20px', '30px', '30px']} w={['20px', '30px', '30px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.ecom-labs.ru/"
                              isExternal
                            >
                              ECOM LABS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            eCom Labs, перспективная компания, которая поможет вам организовать и развить свой online
                            бизнес на базе ПО CS-Cart и Multi-Vendor. В нашей компании работают настоящие профессионалы
                            своего дела, которые имеют опыт работы с CS-Cart более 9 лет и делали проекты различной
                            сложности. Наши специалисты не только помогут вам создать отличный магазин, но также и
                            помогут вам сделать ваш бизнес более успешным. Спектр наших услуг достаточно широк. Мы можем
                            выполнить для вас как небольшую модификацию, так и сайт под ключ. При этом вся работа будет
                            выполнена для вас на высшем уровне.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('кодер.ул'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #FF9100, #e66626)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://coder-ul.ru/"
                              isExternal
                            >
                              КОДЕР.УЛ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Создание корпоративных информационных систем на основе программно-технического комплекса
                            «Энергосхема» собственной разработки. Разработка и внедрение систем Умный Дом. Разработка,
                            внедрение и сопровождение программного обеспечения по требованию заказчика. Проектирование и
                            монтаж структурированных кабельных систем, систем видеонаблюдения. Оборудование серверных
                            помещений
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('seo.ru'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #04bf1d, #93c660)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://seo.ru/"
                              isExternal
                            >
                              SEO.RU
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            SEO.RU использует новейшие технологии и гордится собственной разработкой seotech, на базе
                            которой осуществляется работа со всеми проектами. В результате сегодня компания имеет
                            большой опыт в seo, который является мощнейшим инструментом по увеличению и стабилизации
                            прибыли существующих и потенциальных клиентов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('аис город'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #80BF42, #5c984a)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.aisgorod.ru/"
                              isExternal
                            >
                              АИС ГОРОД
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            АИС Город – разработчик программного обеспечения для автоматизации и мониторинга
                            жилищно-коммунального хозяйства и смежных сфер. Благодаря сотрудничеству с управляющими и
                            ресурсоснабжающими организациями, органами государственной власти и местного самоуправления
                            программные продукты полностью отвечают требованиям законодательства РФ и созданы в
                            соответствии с реальными потребностями всех задействованных сторон.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('rapport technology'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #104DF3, #202566)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['md', 'md', 'xl']}
                              fontWeight="900"
                              color="white"
                              href="https://rapport.tech/ru/"
                              isExternal
                            >
                              RAPPORT TECHNOLOGY
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Помогаем российским корпорациям в цифровой трансформации с помощью мобильных технологий и
                            фасилитации. Мы помогаем компаниям использовать время встречи и экспертизу команды более
                            продуктивно. Детально погружаемся в бизнес-задачу и разрабатываем для вас индивидуальный
                            сценарий сессии. Наш опыт и опыт наших партнеров позволяет предложить оптимальный формат для
                            ваших целей и географии участников.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('июль-софт'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #FF81DA, #1AC14C)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.june-c.ru/"
                              isExternal
                            >
                              ИЮНЬ-СОФТ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Июнь-Софт – разработчик программного обеспечения для автоматизации и мониторинга ЖКХ и
                            смежных сфер. Благодаря сотрудничеству с управляющими и ресурсоснабжающими организациями,
                            органами государственной власти и местного самоуправления программные продукты полностью
                            отвечают требованиям законодательства РФ и созданы в соответствии с реальными потребностями
                            всех задействованных сторон.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('бизнес лидер'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #0F46B3, #2B95FF)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://b-leader.ru/"
                              isExternal
                            >
                              БИЗНЕС ЛИДЕР
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Бизнес Лидер — разработка и внедрение уникальных проектов с 2008 года. Мы группа
                            профессионалов, способная решить любые задачи Вашего бизнеса. Полное погружение в бизнес
                            процессы вашей компании позволит выделить сильные стороны этих процессов, маркетинга и
                            внедрить их в работу сайта. Ваш бизнес ставит перед нами цели, а мы их успешно реализуем.
                            Прозрачность процессов позволяет вам контролировать работу, а персональный менеджер всегда с
                            вами на связи.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('тендерплан'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #A25AFF, #514AB2)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://tenderplan.ru/"
                              isExternal
                            >
                              ТЕНДЕРПЛАН
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Тендерплан — система поиска тендеров, торгов и госзакупок. Детальная аналитика, управление
                            закупками и людьми — всё в одной системе!
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('razdolie'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #093080, #0066C0)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://razdolie.ru/"
                              isExternal
                            >
                              RAZDOLIE
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Успешно работаем на рынке автоматизации, информационных услуг и консалтинга с 2000 года.
                            Нашим основным направлением деятельности является оказание услуг по внедрению и
                            сопровождению программ «1С:Предприятие». Также наша компания занимается поставкой других
                            программных продуктов фирмы 1С
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('rizon'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #568900, #82FF39)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://rizon.pro/"
                              isExternal
                            >
                              RIZON
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Web-агентство Rizon - российский разработчик digital-решений для государственных структур и
                            бизнеса. Компания ведет свою деятельность на IT-рынке с 2010 года. На сегодняшний день нами
                            успешно реализовано более 350 проектов. Наша основная специализация — это digital-решения
                            для государственных и медицинских учреждений. Все проекты созданы нашими специалистами с
                            индивидуальным подходом без применения шаблонных решений.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('ritg'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #97A8AC, #3AC2E4)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://ritg.ru/"
                              isExternal
                            >
                              RITG
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Компания Russian IT Group существует на рынке уже 17 лет. И хотя она фактически была
                            основана в 2006 году, идея ее зарождения возникла еще в 2002 году.Совместные усилия и
                            высокий уровень ответственности в проектной деятельности способствует из года в год повышать
                            процент успешно реализованных проектов в оговоренные с клиентом сроки. Профессионалы,
                            работающие в RITG (РИТГ), взвешенно и эффективно подходят к решению задач, что является
                            основой положительной обратной связи со стороны клиентов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('forest valley'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #38E160, #049E60)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://fv.dev/"
                              isExternal
                            >
                              FOREST VALLEY
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            FOREST VALLEY-Важная составляющая успеха вашего бизнеса. Разрабатываем программы, пишем
                            мобильные приложения, усиливаем команду заказчика.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('умко'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #67A2D0, #24699E)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="http://www.umko.ru/"
                              isExternal
                            >
                              УМКО
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Управляйте предприятием эффективно. А мы Вам в этом поможем. Ведь наши специалисты накопили
                            огромный опыт с 2002 года, года основания компании. «1С: Франчайзинг» - продажа программного
                            обеспечения фирмы «1С». «Сертифицированный Сервисный партнер 1С» - сопровождение программных
                            продуктов по стандартам 1С:ИТС официально разработанных Фирмой 1С на регулярной основе.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('девять линий'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #113D5E, #37C662)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://ninelines.agency/"
                              isExternal
                            >
                              ДЕВЯТЬ ЛИНИЙ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы занимаемся frontend и backend разработкой. При этом мы стараемся заниматься реализацией
                            дизайна, а не версткой или программированием. Часто отходим от такого понятия, как
                            «эффективные часы», не скупимся на тестирование и слушаем наших партнеров во всем, что
                            касается дизайн-идей.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('amalgama'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #2C5277, #60778E)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://amalgamasimulation.ru/"
                              isExternal
                            >
                              AMALGAMA
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Создаем сложные имитационные модели и системы планирования для поддержки принятия решений.
                            Наши имитационные модели и планировщики успешно используются в горно-рудной промышленности,
                            машиностроении, металлургии, цепочках поставок и других отраслях.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('b2b family'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #EF616F, #F67842)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://b2bfamily.com/"
                              isExternal
                            >
                              B2B FAMILY
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Сервис-инсайдердля роста продаж. Удвойте продажи, фокусируясь на клиентах, которые
                            заинтересованы в покупке.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('cart-power'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #FA2F2F, #004DFF)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://cart-power.ru/"
                              isExternal
                            >
                              CART-POWER
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Оказываем полный спектр услуг по разработке и развитию eCommerce проектов любого размера и
                            сложности на платформе CS-Cart.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('rugadget'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #7D8A8A, #465066)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="http://www.rugadget.ru/"
                              isExternal
                            >
                              RUGADGET
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            РуГаджет – компания-разработчик электроники и программного обеспечения. Наши основные
                            компетенции – разработка электронных устройств для медицины, промышленности, ритейла,
                            интернета вещей и других отраслей. Мы выполняем полный цикл работ от проработки идей и
                            концепций до прототипирования и подготовки к серийному производству.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('эвм торг сервис'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #66A9D5, #0181D7)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="http://ets73.ru/index.html"
                              isExternal
                            >
                              ЭВМ ТОРГ СЕРВИС
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ООО ЭВМ-ТОРГ-СЕРВИС с 1992 г. занимается разработкой, внедрением и сопровождением
                            программного обеспечения. Совместно с ООО ИТ (главный разработчик), разработали и внедряем
                            программное обеспечение АС Системный Учет, позволяющее комплексно автоматизировать
                            предприятия любой формы собственности и вида деятельности. Программное обеспечение внедрено
                            и сопровождается более чем в 150 предприятиях г. Ульяновска и Ульяновской области. С 2002
                            года плодотворно сотрудничаем с корпорацией Парус и фирмой 1С по автоматизации бюджетных
                            учреждений.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('promo it'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #DA2424, #666C77)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://promo-z.ru/"
                              isExternal
                            >
                              PROMO IT
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы предоставляем услуги по разработке программного обеспечения на заказ для крупных компаний
                            IT-сектора и других отраслей, где современные технологии приносят прибыль и пользу бизнесу.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('redlab'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #E4403A, #D00E21)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://redlab.dev/"
                              isExternal
                            >
                              REDLAB
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            RedLab — глобальная ИТ-компания, которая занимается созданием ПО и формированием выделенных
                            команд разработки. Мы входим в ГК Litota Group c 2019 года и объединяем лучших экспертов со
                            всего мира, для которых создание ИТ-продуктов — не просто работа, а дело всей жизни.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('altron'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #1A61B3, #5EBAEF)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="http://altronagency.tilda.ws/"
                              isExternal
                            >
                              ALTRON
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Альтрон - агентство оптимальных digital-решений для роста Вашего бизнеса и прибыли. Мы
                            разрабатываем масштабные цифровые продукты и ускоряем их запуск, наши технологии и проектный
                            опыт позволяет решать задачи финтех-, IT-, телеком-компаний и многих других сфер.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('accent'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #1A3EB3, #0054E5)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://accentweb.ru/"
                              isExternal
                            >
                              ACCENT
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Веб-студия «Акцент» - комплексный интернет-маркетинг в действии. Наша компания предоставляет
                            комплексные услуги интернет-маркетинга с 2012 года. Огромный опыт, квалифицированные
                            сотрудники, передовые технологии рынка и эксклюзивные собственные разработки позволяют нам
                            на самом высоком уровне оказывать своим клиентам весь комплекс услуг по развитию бизнеса в
                            интернете.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('skif computers'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #CA0000, #C06464)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://skifcomputers.ru/"
                              isExternal
                            >
                              SKIF COMPUTERS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Нам пришлось пережить достаточно многое: провести бессонные ночи в работе, изучить и успешно
                            применить на практике бесконечно большое количество программно-технических решений с разных
                            сфер IT — индустрии, принять и осознать азы максимально удобного взаимодействия между нами,
                            клиентами, партнерами и поставщиками.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('союз 317'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #5E18B9, #DF062A)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://soyuz317.ru/"
                              isExternal
                            >
                              СОЮЗ 317
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы создаем продукты, которые кардинально меняют работу в сфере обращения с отходами в
                            России. Наши решения помогают наладить прозрачную и эффективную работу с ТКО,
                            автоматизировать все процессы: от учёта данных и фиксирования фактов вывоза до
                            автоматического построения маршрутов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('simdev'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #5447C7, #775AB0)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://simdev.ru/index.html"
                              isExternal
                            >
                              SIMDEV
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            SIMDEV - Разработка адаптивных сайтов с индивидуальным дизайном. Наши сайты отлично выглядят
                            на любом устройтсве, и оптимизированы для голосового поиска.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('fraemwork team'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #8F8DA1, #61606F)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://framework.team/ "
                              isExternal
                            >
                              FRAMEWORK TEAM
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Разработка сложных веб-проектов: Backend + Frontend. Стек технологий: PHP - Laravel,
                            Symfony, Yii 2 Node.js - Express.js Js - React.js, Vue.js, Angular DB - PostgreSQL, MySql,
                            MongoDB
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('zebra corporate digital'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #EB9500, #FF6600)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['lg', 'xl', 'xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.new-file.ru/ru"
                              isExternal
                            >
                              ZEBRA CORPORATE DIGITAL
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы — лидеры российского рынка корпоративных сайтов с международным признанием. Мы
                            сопровождаем наших клиентов по всему циклу корпоративных digital-коммуникаций: создаем
                            коммуникационные стратегии, разрабатываем IR- и корпоративные сайты, сопровождаем и
                            развиваем их.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('soft+'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #CE5505, #DC2104)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="http://soft-plus.ru/?tab=business&tad=newss"
                              isExternal
                            >
                              SOFT+
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы, Компания Soft+ с 1999 года помогаем предприятиям на всей территории России работать
                            эффективно и использовать новые разработки для ускорения производительности и снижения
                            финансовых затрат.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('нсп'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #2F8686, #00D0D0)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://ncp-group.ru/"
                              isExternal
                            >
                              НСП
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Компания НСП образована в 2015 году. Мы являемся молодой и быстроразвивающейся компанией. За
                            прошедшие годы мы собрали дружный профессиональный коллектив, создали прочный фундамент
                            материально-технической базы, который позволяет выполнить полный объём работ в области
                            инженерных систем по всей России.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('симбирск +'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #0053D0, #074094)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.simm.ru/"
                              isExternal
                            >
                              СИМБИРСК М+
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Симбирск-М+, как аккредитованная IT компания и региональный сервисный центр предлагает своим
                            клиентам: Подбор, конфигурирование, обслуживание оборудования, серверов, систем хранения
                            данных Создание и обслуживание современной информационной инфраструктуры (Windows, Linux).
                            Аутсорсинг существующей ИТ инфраструктуры.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('citymatics'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #8132AF, #4B0B70)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.citymatics.ru/"
                              isExternal
                            >
                              CITYMATICS
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы создаем и внедряем передовые технологии для развития интеллектуальной инфраструктуры
                            городов и регионов, эффективного управления транспортом и создания комфортных условий
                            проживания горожан. В портфеле компании – решения для интеллектуальных транспортных систем,
                            городского общественного транспорта и цифровых городских сервисов.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('htdev'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #123891, #001F68)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://htdev.ru/"
                              isExternal
                            >
                              HTDEV
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ИТ-партнёр лидеров рынка России и стран СНГ. С 2005 года команда профессионалов HTDev
                            помогает среднему и крупному бизнесу в России и странах СНГ решать сложные задачи и
                            достигать намеченных целей.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('graphene'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #12151C, #050912)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://grphn.ru/"
                              isExternal
                            >
                              GRAPHENE
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Разрабатываем UX/UI дизайн, сайты, маркетплейсы, мобильные приложения, E-com и EdTech
                            решения для среднего и крупного бизнеса. Оказываем техническую поддержку. Только то, что
                            нужно бизнесу. Ничего лишнего.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('promvr'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #2564F7, #1B84FC)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://promvr.net/"
                              isExternal
                            >
                              PROMVR
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ПРОМВИАР – российский инновационный разработчик универсальных VR-тренажеров, входит в реестр
                            Минцифры РФ. Ключевой вид деятельности: разработка и интеграция заказных и универсальных
                            VR-тренажеров. Мы создаем универсальные и заказные VR-тренажеры для производственных,
                            строительных и промышленных предприятий, которые развивают культуру безопасности, стремятся
                            снизить уровень травматизма и заботятся о преемственности критически важных знаний.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('хекслет'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #3B6487, #377EBC)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://ru.hexlet.io/"
                              isExternal
                            >
                              ХЕКСЛЕТ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Хекслет изначально — курсы по программированию, созданные программистами для программистов.
                            Хекслет сейчас — экосистема, в которую входят онлайн-платформа для обучения
                            программированию, колледж и серия опенсорс-проектов
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('айти город'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #48A6F9, #1990BC)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://айти-город.рф/"
                              isExternal
                            >
                              АЙТИ ГОРОД
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Мы предлагаем инновационную универсальную систему - единое информационное пространство,
                            обеспечивающее информационное и технологическое взаимодействие между участниками системы при
                            совершении жилищно-коммунальных платежей. Осуществляем сбор денежных средств за коммунальные
                            услуги, детского питания в образовательных учреждениях, страхование жилья. Предоставляем
                            информационно-техническую поддержку процесса начислений, перерасчетов и оплаты за ЖКУ.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('baev-it'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #3D6B7C, #3C8CD1)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://baev-it.ru/"
                              isExternal
                            >
                              BAEV-IT
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Компания «Baev-IT» работает в сфере информационных технологий более 10 лет. Мы обеспечиваем
                            стабильную работу компьютерной техники и программного обеспечения предприятий города
                            Ульяновска.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('квадрат 2'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #E1DA24, #E2001E)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://kvadrat2.com/"
                              isExternal
                            >
                              КВАДРАТ 2
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Компания «Квадрат 2» с 2016 года помогает директорам, руководителям разных уровней и
                            владельцам средних по размерам производств автоматизировать бизнес-процессы с помощью
                            1С:Предприятие. На начало 2023 года в компании работает более 10 человек опытных
                            специалистов различных профилей.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('агросервис-ит'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #19C725, #C7B019)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://agros-it.ru/"
                              isExternal
                            >
                              АГРОСЕРВИС-ИТ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            ГК «АгроСервис-ИТ» как партнер фирмы «1С» работает в Ульяновском регионе с 2009 года.
                            Изначально мы понимали, насколько сложной и ответственной является задача учета на
                            предприятия агропромышленного комплекса. Поэтому, основные наши усилия направлены на
                            автоматизацию управленческого и бухгалтерского учета в сельском хозяйстве. Сегодня, по
                            прошествии 8 лет, в нашем клиентском портфеле предприятия самых различных отраслей, но
                            сохранение компетенций и знаний в автоматизации управленческого и бухгалтерского учета в
                            растениеводстве и животноводстве являются приоритетными.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('ulbsd'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #C4A346, #DE7600)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://ulbsd.ru/"
                              isExternal
                            >
                              ULBSD
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            В нашем магазине вы можете приобрести сборки операционной системы Ульяновск.BSD для
                            настольных компьютеров. Наши сборки создаются на базе свободно-распространяемой операционной
                            системы FreeBSD.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('айпи телеком'.includes(search.toLocaleLowerCase()) && (
                        <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #D15400, #F38507)" p={[2, 4]}>
                          <HStack align="center">
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://www.iptk.ru/"
                              isExternal
                            >
                              АЙПИ ТЕЛЕКОМ
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Компания «АйПиТелеком» создана в 2002 г. Цель создания компании изначально заключалась в
                            оказании услуг местной традиционной телефонии связи, широкополосный доступ в Интернет,
                            предоставление в аренду цифровых каналов связи для юридических лиц.
                          </Text>
                        </GridItem>
                      ))}
                    {search === undefined ||
                      ('АИСМК'.includes(search.toLocaleLowerCase()) && (
                        <GridItem
                          borderRadius="10px"
                          w="full"
                          bgGradient="linear(to-r, #1624E9, #E11600, #EBB400)"
                          p={[2, 4]}
                        >
                          <HStack align="center">
                            <Image src={AISMK} h={['20px', '30px', '35px']} w={['20px', '30px', '35px']} />
                            <Link
                              fontSize={['xl', '2xl', '3xl']}
                              fontWeight="900"
                              color="white"
                              href="https://aismk.ru/"
                              isExternal
                            >
                              АИСМК
                            </Link>
                          </HStack>
                          <Text fontSize={['sm', 'sm', 'md']}>
                            Команда Алинги – это идейный коллектив профессионалов в области автоматизации процессов
                            менеджмента качества на предприятиях. С 2010 года мы занимаемся внедрением информационных
                            систем, которые обеспечивают контроль качества от момента планирования производства и до
                            постгарантийного обслуживания. Мы гордимся тем, что все инженеры нашей компании растут
                            вместе с нами и реализуют идеи по оптимизации процессов внедрения программного обеспечения и
                            его функциональных возможностей.
                          </Text>
                        </GridItem>
                      ))}
                  </Grid>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </VStack>
      <VStack ref={refFooter}>
        <Footer />
      </VStack>
    </>
  );
});
