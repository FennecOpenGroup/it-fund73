import { HStack, VStack, Text, MenuButton, Button, Menu, MenuList, MenuItem, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BsChevronDown } from 'react-icons/bs';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Calendar = React.memo(() => {
  const { height } = useWindowDimensions();

  const [january, setJanuary] = useState(false);
  const [february, setFebruary] = useState(false);
  const [march, setMarch] = useState(false);
  const [april, setApril] = useState(false);
  const [may, setMay] = useState(false);
  const [june, setJune] = useState(false);
  const [july, setJuly] = useState(false);
  const [august, setAugust] = useState(false);
  const [september, setSeptember] = useState(false);
  const [october, setOctober] = useState(false);
  const [november, setNovember] = useState(false);
  const [december, setDecember] = useState(false);

  const [year, setYear] = useState(2023);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Когда будут мероприятия?</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} justify="center" px="10%">
        <VStack w="full" minH={`${height}px`} pl={[2, 3, 4]} pb={[4, 6]}>
          <HStack w="full" justify="start" align="center" pr={2}>
            <Text color="brand.dark" fontSize="xl">
              Календарь мероприятий
            </Text>
            <Spacer />
            <Menu>
              <MenuButton px={4} py={2} as={Button} rightIcon={<BsChevronDown />}>
                {year}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setYear(2020)}>2020</MenuItem>
                <MenuItem onClick={() => setYear(2021)}>2021</MenuItem>
                <MenuItem onClick={() => setYear(2022)}>2022</MenuItem>
                <MenuItem onClick={() => setYear(2023)}>2023</MenuItem>
                <MenuItem onClick={() => setYear(2024)}>2024</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <VStack w="full" minH={`${height}px`} border="2px" borderRadius="5px" justify="center" bg="brand.beige">
            <Text color="#BBBBBB" fontSize="2xl" fontWeight="bold">
              На данный момент нет запланированных мероприятий
            </Text>
          </VStack>
          <HStack w="full" justify="center">
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setJanuary(!january);
                setApril(false);
                setAugust(false);
                setDecember(false);
                setFebruary(false);
                setJuly(false);
                setJune(false);
                setMarch(false);
                setMay(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={january}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Январь</p>
                <p style={{ fontSize: '25px' }}>1</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setFebruary(!february);
                setApril(false);
                setAugust(false);
                setDecember(false);
                setJanuary(false);
                setJuly(false);
                setJune(false);
                setMarch(false);
                setMay(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={february}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Февраль</p>
                <p style={{ fontSize: '25px' }}>2</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setMarch(!march);
                setApril(false);
                setAugust(false);
                setDecember(false);
                setJanuary(false);
                setJuly(false);
                setJune(false);
                setFebruary(false);
                setMay(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={march}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Март</p>
                <p style={{ fontSize: '25px' }}>3</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setApril(!april);
                setMarch(false);
                setAugust(false);
                setDecember(false);
                setJanuary(false);
                setJuly(false);
                setJune(false);
                setFebruary(false);
                setMay(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={april}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Апрель</p>
                <p style={{ fontSize: '25px' }}>4</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setMay(!may);
                setMarch(false);
                setAugust(false);
                setDecember(false);
                setJanuary(false);
                setJuly(false);
                setJune(false);
                setFebruary(false);
                setApril(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={may}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Май</p>
                <p style={{ fontSize: '25px' }}>5</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setJune(!june);
                setMarch(false);
                setAugust(false);
                setDecember(false);
                setJanuary(false);
                setJuly(false);
                setMay(false);
                setFebruary(false);
                setApril(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={june}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Июнь</p>
                <p style={{ fontSize: '25px' }}>6</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setJuly(!july);
                setMarch(false);
                setAugust(false);
                setDecember(false);
                setJanuary(false);
                setJune(false);
                setMay(false);
                setFebruary(false);
                setApril(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={july}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Июль</p>
                <p style={{ fontSize: '25px' }}>7</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setAugust(!august);
                setMarch(false);
                setJuly(false);
                setDecember(false);
                setJanuary(false);
                setJune(false);
                setMay(false);
                setFebruary(false);
                setApril(false);
                setNovember(false);
                setOctober(false);
                setSeptember(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={august}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Август</p>
                <p style={{ fontSize: '25px' }}>8</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setSeptember(!september);
                setMarch(false);
                setJuly(false);
                setDecember(false);
                setJanuary(false);
                setJune(false);
                setMay(false);
                setFebruary(false);
                setApril(false);
                setNovember(false);
                setOctober(false);
                setAugust(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={september}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Сентябрь</p>
                <p style={{ fontSize: '25px' }}>9</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setOctober(!october);
                setMarch(false);
                setJuly(false);
                setDecember(false);
                setJanuary(false);
                setJune(false);
                setMay(false);
                setFebruary(false);
                setApril(false);
                setNovember(false);
                setSeptember(false);
                setAugust(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={october}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Октябрь</p>
                <p style={{ fontSize: '25px' }}>10</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setNovember(!november);
                setMarch(false);
                setJuly(false);
                setDecember(false);
                setJanuary(false);
                setJune(false);
                setMay(false);
                setFebruary(false);
                setApril(false);
                setOctober(false);
                setSeptember(false);
                setAugust(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={november}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Ноябрь</p>
                <p style={{ fontSize: '25px' }}>11</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
            <Button
              variant="brand-calendar"
              w="full"
              h="100px"
              onClick={() => {
                setDecember(!december);
                setMarch(false);
                setJuly(false);
                setNovember(false);
                setJanuary(false);
                setJune(false);
                setMay(false);
                setFebruary(false);
                setApril(false);
                setOctober(false);
                setSeptember(false);
                setAugust(false);
              }}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={december}
            >
              <VStack>
                <p style={{ fontSize: '12px' }}>Декабрь</p>
                <p style={{ fontSize: '25px' }}>12</p>
                <p style={{ fontSize: '12px' }}>{year}</p>
              </VStack>
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
