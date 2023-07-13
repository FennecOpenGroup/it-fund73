import {
  VStack,
  HStack,
  Text,
  Link,
  Image,
  Grid,
  Stack,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
  OrderedList,
  ListItem,
  GridItem,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import { BsGraphUpArrow } from 'react-icons/bs';
import { MdPeopleAlt, MdComputer } from 'react-icons/md';
import { FaFileContract } from 'react-icons/fa';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { IRootState } from '../../interfaces/IRootState';
import simbirsoft from '../../assets/companies/simbirsoft.svg';
import mobirate from '../../assets/companies/mobirate.svg';
import nord from '../../assets/companies/nord.svg';
import IBS from '../../assets/companies/IBS.svg';
import advanshop from '../../assets/companies/advanshop.svg';
import scheme_accreditation from '../../assets/schemes/scheme_accreditation.svg';
import scheme_accreditation_dark from '../../assets/schemes/scheme_accreditation_dark.svg';

export const Companies = React.memo(() => {
  const [support, setSupport] = useState(false);
  const [accreditation, setAccreditation] = useState(false);
  const [company, setCompany] = useState(false);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current !== null) {
      window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });
    }
  };

  const refSupport = useRef<HTMLDivElement>(null);
  const refAccreditaion = useRef<HTMLDivElement>(null);
  const refCompany = useRef<HTMLDivElement>(null);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Что происходит в отрасли?</title>
      </Helmet>
      <Header />
      <VStack justify="center" px={isLargerThan770 ? '10%' : '5%'} bg={themeIsDark ? '#242323' : 'white'}>
        <Text
          color="brand.blue"
          fontSize={['lg', 'xl', '2xl', '4xl']}
          align="center"
          textTransform="uppercase"
          pt={4}
          fontWeight="800"
        >
          Показатели развития ИТ-отрасли. 1 квартал 2023 года
        </Text>
        <Stack
          w={['40%', '60%', '100%']}
          align="center"
          justify="center"
          direction={isLargerThan960 ? 'row' : 'column'}
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
            minH={isLargerThan770 ? '170' : '105px'}
            gap={3}
            templateRows="auto"
            templateColumns={isLargerThan770 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'}
            mb={4}
          >
            <HStack
              p={2}
              borderRadius="5px"
              backgroundColor="brand.dark"
              w="full"
              minH={isLargerThan770 ? '170' : '110px'}
            >
              <VStack minW={['3em', '4em', '5em']}>
                <MdComputer size={isLargerThan770 ? '4em' : '3em'} color="white" />
              </VStack>
              <Stack p={1} m={0} spacing={0} w="full">
                <Text fontSize={['sm', 'md', 'xl']}>ИТ-организаций –</Text>
                {isLargerThan770 && (
                  <CountUp
                    style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}
                    separator=""
                    end={1451}
                    duration={2}
                  />
                )}
                {!isLargerThan770 && (
                  <CountUp
                    style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                    separator=""
                    end={1451}
                    duration={2}
                  />
                )}
              </Stack>
            </HStack>
            <HStack
              p={2}
              borderRadius="5px"
              backgroundColor="brand.dark"
              w="full"
              minH={isLargerThan770 ? '170' : '110px'}
            >
              <VStack minW={['3em', '4em', '5em']}>
                <FaFileContract size={isLargerThan770 ? '4em' : '3em'} color="white" />
              </VStack>
              <Stack p={1} m={0} spacing={0} w="full">
                <Text fontSize={['sm', 'md', 'xl']}>Аккредитованных ИТ-компаний в Минцифры России – </Text>
                {isLargerThan770 && (
                  <CountUp style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }} end={175} duration={2} />
                )}
                {!isLargerThan770 && (
                  <CountUp style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} end={175} duration={2} />
                )}
                <Text fontSize={['sm', 'md', 'xl']}>компаний </Text>
              </Stack>
            </HStack>
            <HStack
              p={2}
              borderRadius="5px"
              backgroundColor="brand.dark"
              w="full"
              minH={isLargerThan770 ? '170' : '110px'}
            >
              <VStack minW={['3em', '4em', '5em']}>
                <BsGraphUpArrow size={isLargerThan770 ? '4em' : '3em'} color="white" />
              </VStack>
              <Stack p={0} m={0} spacing={0} w="full">
                <Text fontSize={['sm', 'md', 'xl']}>Налоговые поступления в региональный бюджет – </Text>
                {isLargerThan770 && (
                  <CountUp
                    style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}
                    end={328.4}
                    duration={2.2}
                  />
                )}
                {!isLargerThan770 && (
                  <CountUp
                    style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                    end={328.4}
                    duration={2.2}
                  />
                )}
                <Text fontSize={['sm', 'md', 'xl']}>млн руб</Text>
              </Stack>
            </HStack>
            <HStack
              p={2}
              borderRadius="5px"
              backgroundColor="brand.dark"
              w="full"
              minH={isLargerThan770 ? '170' : '110px'}
            >
              <VStack minW={['3em', '4em', '5em']}>
                <MdPeopleAlt size={isLargerThan770 ? '4em' : '3em'} color="white" />
              </VStack>
              <Stack p={0} m={0} spacing={0} w="full">
                <Text fontSize={['sm', 'md', 'xl']}>Среднесписочная численность работников – </Text>
                {isLargerThan770 && (
                  <CountUp
                    style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}
                    end={6210}
                    separator=""
                    duration={2}
                  />
                )}
                {!isLargerThan770 && (
                  <CountUp
                    style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
                    end={6210}
                    separator=""
                    duration={2}
                  />
                )}
                <Text fontSize={['sm', 'md', 'xl']}>человек</Text>
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
                  px={isLargerThan770 ? 6 : 2}
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
                    <UnorderedList>
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
                        Единовременная социальная выплата на приобретение жилья для ИТ-специалистов в размере 250 тыс.
                        рублей.
                        <Link
                          fontWeight="900"
                          fontSize="xm"
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          href="http://energy.ulregion.ru/wp-content/uploads/2023/04/12-04-2023_09-08-58.zip"
                        >
                          Документация
                        </Link>
                      </ListItem>
                      <ListItem>
                        Стипендии Губернатора Ульяновской области «имени Е.Е.Горина» и «имени И.Я.Яковлева» от 3 до 5
                        тыс. рублей.
                      </ListItem>
                      <ListItem>
                        Гранты на разработку отечественного ПО и реализацию образовательных проектов в сфере ИТ
                      </ListItem>
                    </UnorderedList>
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
                    <UnorderedList>
                      <ListItem>Освобождение от налоговых проверок до конца 2024 года; </ListItem>
                      <ListItem>
                        Льготная ипотека для ИТ-специалистов до 5% годовых на покупку недвижимости;
                        <Link
                          fontWeight="900"
                          fontSize="xm"
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          isExternal
                          href="https://спроси.дом.рф/tag/mortgage/"
                        >
                          Условие программы
                        </Link>
                      </ListItem>
                      <ListItem>
                        Упрощение процесса трудоустройства иностранных ИТ-специалистов и получения ими вида на
                        жительство;
                      </ListItem>
                      <ListItem>Отсрочка от призыва службы в армии от 18 до 27 лет;</ListItem>
                      <ListItem>
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
                      <ListItem>ИТ-гранты на развитие цифровых решений:</ListItem>
                      <UnorderedList>
                        <ListItem>
                          <Link href="https://рфрит.рф/" isExternal>
                            Российский фонд развития информационных технологий (РФРИТ);
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link href="https://www.iidf.ru/startups/" isExternal>
                            Фонд развития интернет-инициатив (ФРИИ);
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link href="https://fasie.ru/" isExternal>
                            Фонд содействия инновациям;
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link href="https://dtech.sk.ru/" isExternal>
                            Фонд «Сколково»;
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </UnorderedList>
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
                    <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, brand.blue, blue.900)" p={[2, 4]}>
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
                        SimbirSoft — глобальная ИТ-компания с опытом в разработке и тестировании ПО с 2001 года, которая
                        объединяет более 1400 сотрудников из 50 городов России. Мы разрабатываем системы для
                        автоматизации работы бизнеса, высоконагруженные системы, мобильные приложения, встроенное ПО и
                        блокчейн-проекты, Machine Learning и Data Science для заказчиков из России, Европы и США.
                      </Text>
                    </GridItem>
                    <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #dd6c1b, orange.900)" p={[2, 4]}>
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
                        Mobirate — занимаемся разработкой мобильных игр с 2003 года. За это время было создано более 30
                        игр, самые известные: серия Parking Mania, Dead Ahead, Rovercraft и Big Rig Racing, и привлечено
                        250+ миллионов игроков. Вся экспертиза: от идеи до релиза, находится в мощных руках наших
                        профессионалов.
                      </Text>
                    </GridItem>
                    <GridItem borderRadius="10px" w="full" bgGradient="linear(to-r, #0bcf6b, green.900)" p={[2, 4]}>
                      <HStack align="center">
                        <Text fontSize={['xl', '2xl', '3xl']} fontWeight="900" color="white">
                          {'/*'}
                        </Text>
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
                        MEDIASOFT — разрабатывает сложные веб-системы, бэкенды, мобильные приложения и highload-проекты
                        для бизнеса с 2014 года. У нас в команде 250+ разработчиков по направлениям backend, frontend,
                        mobile, qa и аналитика.
                      </Text>
                    </GridItem>
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
                        IBS — бизнес - и технологический партнер лидеров российского бизнеса. Компания решает сложные
                        задачи в сфере стратегического развития и повышения операционной эффективности, оказывая услуги
                        в области оптимизации бизнес-процессов, создания систем управления, управления данными, анализа
                        и моделирования, разработки, тестирования и сопровождения программного обеспечения.
                      </Text>
                    </GridItem>
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
                  </Grid>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
