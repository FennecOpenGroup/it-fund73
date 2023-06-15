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
  ListItem,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';
import { BsQuestionCircle } from 'react-icons/bs';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import logo from '../../assets/mini-logo.svg';
import scheme_accreditation from '../../assets/schemes/scheme_accreditation.svg';

export const Companies = React.memo(() => {
  const { height } = useWindowDimensions();

  const [support, setSupport] = useState(false);
  const [accreditation, setAccreditation] = useState(false);
  const [company, setCompany] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Что происходит в отрасли?</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} justify="center" px="10%">
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
        <HStack w="full" align="center" justify="center">
          <Button
            variant="brand-link"
            fontSize="lg"
            onMouseEnter={() => setSupport(true)}
            onMouseLeave={() => setSupport(false)}
          >
            Меры поддержки ИТ-отрасли
          </Button>
          <Button
            variant="brand-link"
            fontSize="lg"
            onMouseEnter={() => setAccreditation(true)}
            onMouseLeave={() => setAccreditation(false)}
          >
            Аккредитация ИТ-компаний
          </Button>
          <Button
            variant="brand-link"
            fontSize="lg"
            onMouseEnter={() => setCompany(true)}
            onMouseLeave={() => setCompany(false)}
          >
            ИТ-компании Ульяновской области
          </Button>
        </HStack>
        <VStack w="full" minH={`${height}px`} p={[2, 3, 4]} justify="start" align="center">
          <Grid w="full" gap={3} templateRows="auto" templateColumns="repeat(2, 1fr)" mb={4}>
            <HStack p={2} borderRadius="5px" backgroundColor="brand.dark" w="full">
              <Image src={logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
              <Stack p={0} m={0} spacing={0} w="full">
                <Text fontSize="xl">ИТ-организаций –</Text>
                <CountUp style={{ color: 'white', fontSize: '42px', fontWeight: 'bold' }} end={1451} duration={2} />
              </Stack>
            </HStack>
            <HStack p={2} borderRadius="5px" backgroundColor="brand.dark" w="full">
              <Image src={logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
              <Stack p={1} m={0} spacing={0} w="full">
                <Text fontSize="xl">Аккредитованных ИТ-компаний в Минцифры России – </Text>
                <CountUp style={{ color: 'white', fontSize: '42px', fontWeight: 'bold' }} end={175} duration={2} />
                <Text fontSize="xl">компаний </Text>
              </Stack>
            </HStack>
            <HStack p={2} borderRadius="5px" backgroundColor="brand.dark" w="full">
              <Image src={logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
              <Stack p={0} m={0} spacing={0} w="full">
                <Text fontSize="xl">Налоговые поступления в региональный бюджет – </Text>
                <CountUp style={{ color: 'white', fontSize: '42px', fontWeight: 'bold' }} end={328.4} duration={2.2} />
                <Text fontSize="xl">млн руб</Text>
              </Stack>
            </HStack>
            <HStack p={2} borderRadius="5px" backgroundColor="brand.dark" w="full">
              <Image src={logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
              <Stack p={0} m={0} spacing={0} w="full">
                <Text fontSize="xl">Среднесписочная численность работников – </Text>
                <CountUp style={{ color: 'white', fontSize: '42px', fontWeight: 'bold' }} end={6205} duration={2} />
                <Text fontSize="xl">человек</Text>
              </Stack>
            </HStack>
          </Grid>
          <Accordion allowMultiple w="full" m={0}>
            <AccordionItem>
              <AccordionButton>
                <Text
                  w="full"
                  align="start"
                  color={support ? 'brand.blue' : 'brand.dark'}
                  fontWeight="800"
                  fontSize="3xl"
                  textTransform="uppercase"
                >
                  Меры поддержки ИТ-отрасли
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack px={6} w="full" align="start">
                  <Text color="brand.dark" fontSize="2xl" fontWeight="900" textTransform="uppercase">
                    Региональный аспект
                  </Text>
                  <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
                  <VStack w="full" align="center" py={3}>
                    <UnorderedList px={8}>
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
                          color="brand.dark"
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
                  <Text color="brand.dark" fontSize="2xl" fontWeight="900" textTransform="uppercase">
                    Федеральные меры поддержки
                  </Text>
                  <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
                  <VStack w="full" px={4} align="start">
                    <HStack spacing={2}>
                      <BsQuestionCircle size="1.5em" color="#7775ed" />
                      <Text color="brand.dark" fontSize="xl" fontWeight="900">
                        Налоговые льготы:
                      </Text>
                    </HStack>
                    <UnorderedList px={8}>
                      <ListItem>Установлена ставка налога на прибыль 0% до конца 2024 года;</ListItem>
                      <ListItem>Освобождение от НДС, если ПО включён в реестр российского ПО;</ListItem>
                      <ListItem>Снижены тарифы страховых взносов с 14% до 7,6%;</ListItem>
                      <ListItem>Освобождение от налоговых проверок до конца 2024 года; </ListItem>
                      <ListItem>
                        Льготная ипотека для ИТ-специалистов до 5% годовых на покупку недвижимости:
                        <Link
                          fontWeight="900"
                          fontSize="xm"
                          color="brand.dark"
                          href="https://xn--h1alcedd.xn--d1aqf.xn--p1ai/instructions/spisok-bankov-uchastnikov-programmy-lgotnaya-ipoteka-dlya-it-spetsialistov/#uznayte-kakie-banki-uchastvuyut-v-programme-ipoteka-dlya-it-spetsialistov"
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
                          color="brand.dark"
                          href="https://digital.gov.ru/ru/activity/directions/942/ "
                        >
                          Условие программы
                        </Link>
                      </ListItem>
                      <ListItem>ИТ-гранты на развитие цифровых решений;</ListItem>
                    </UnorderedList>
                  </VStack>
                  <VStack w="full" px={4} align="start">
                    <HStack spacing={2}>
                      <BsQuestionCircle size="1.5em" color="#7775ed" />
                      <Text color="brand.dark" fontSize="xl" fontWeight="900">
                        Требования к ИТ-специалистам, которые могут претендовать на льготную ипотеку:
                      </Text>
                    </HStack>
                    <UnorderedList px={8}>
                      <ListItem>Гражданин РФ;</ListItem>
                      <ListItem>Возраст до 50 лет включительно;</ListItem>
                      <ListItem>Основное место работы — аккредитованная IT-компания;</ListItem>
                      <ListItem>Средняя зарплата до вычета НДФЛ за последние 3 месяца:</ListItem>
                      <UnorderedList>
                        <ListItem>от 70 000 ₽ — для сотрудников компаний в остальных городах;</ListItem>
                        <ListItem>
                          от 120 000 ₽ — для сотрудников компаний, расположенных в городах‑миллионниках (кроме Москвы);
                        </ListItem>
                        <ListItem>от 150 000 ₽— для сотрудников компаний, расположенных в Москве;</ListItem>
                      </UnorderedList>
                      <ListItem>
                        Упрощение процесса трудоустройства иностранных ИТ-специалистов и получения ими вида на
                        жительство;
                      </ListItem>
                      <ListItem>Отсрочка от призыва службы в армии от 18 до 27 лет;</ListItem>
                    </UnorderedList>
                  </VStack>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple w="full" m={0}>
            <AccordionItem>
              <AccordionButton>
                <Text
                  w="full"
                  align="start"
                  color={accreditation ? 'brand.blue' : 'brand.dark'}
                  fontWeight="800"
                  fontSize="3xl"
                  textTransform="uppercase"
                >
                  Аккредитация ИТ-компаний
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack px={6} w="full" align="start">
                  <Text color="brand.dark" fontSize="2xl" fontWeight="900">
                    Дерево решений
                  </Text>
                  <Stack borderTop="1px" borderColor="brand.dark" w="full" m={0} p={0} />
                </VStack>
                <VStack w="full" align="center" py={3}>
                  <Image src={scheme_accreditation} />
                </VStack>
                <Stack borderTop="1px" borderColor="brand.dark" w="full" mb={2} p={0} />
                <Button
                  variant="brand-high"
                  fontSize="lg"
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
          <Accordion allowMultiple w="full" m={0}>
            <AccordionItem>
              <AccordionButton>
                <Text
                  w="full"
                  align="start"
                  color={company ? 'brand.blue' : 'brand.dark'}
                  fontWeight="800"
                  fontSize="3xl"
                  textTransform="uppercase"
                >
                  ИТ-компании Ульяновской области
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack
                  p={4}
                  w="full"
                  h="300px"
                  borderRadius="10px"
                  bgGradient="linear(to-r, brand.blue, blue.900)"
                  align="start"
                >
                  <Link fontSize="5xl" fontWeight="900" color="white" href="https://www.simbirsoft.com/" isExternal>
                    SimbirSoft
                  </Link>
                  <Text fontSize="lg">
                    SimbirSoft — глобальная ИТ-компания с опытом в разработке и тестировании ПО с 2001 года, которая
                    объединяет более 1400 сотрудников из 50 городов России. Мы разрабатываем системы для автоматизации
                    работы бизнеса, высоконагруженные системы, мобильные приложения, встроенное ПО и блокчейн-проекты,
                    Machine Learning и Data Science для заказчиков из России, Европы и США.
                  </Text>
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
