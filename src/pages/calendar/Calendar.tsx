import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Text,
  MenuButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  Spacer,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { Dispatch, useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { coreSetVisibleModal } from '../../actions/coreActions';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { ModalCalendarNewDate } from '../../components/modals/ModalCalendarNewDate';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';
import { RootActions } from '../../types/RootActions';

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

  const [isLargerThan950] = useMediaQuery('(min-width: 950px)');

  const [year, setYear] = useState(2023);

  const changeMounth = (mounth: string) => {
    setJanuary(mounth === 'january');
    setFebruary(mounth === 'february');
    setMarch(mounth === 'march');
    setApril(mounth === 'april');
    setMay(mounth === 'may');
    setJune(mounth === 'june');
    setJuly(mounth === 'july');
    setAugust(mounth === 'august');
    setSeptember(mounth === 'september');
    setOctober(mounth === 'october');
    setNovember(mounth === 'november');
    setDecember(mounth === 'december');
  };

  const dispatch = useDispatch<Dispatch<RootActions>>();

  const isCalenderNewDateSelect = useSelector((state: IRootState) => state.core[ModalsEnum.CALENDAR_NEW_DATE]);
  const handleCalenderNewDateClick = useCallback(
    () => dispatch(coreSetVisibleModal(ModalsEnum.CALENDAR_NEW_DATE)),
    [dispatch],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Когда будут мероприятия?</title>
      </Helmet>
      <Header />
      <VStack justify="start" px="10%">
        <VStack w="full" p={[1, 2, 3]}>
          <HStack w="full" justify="start" align="center" pr={[1, 2]}>
            <Text color="brand.dark" fontSize={['lg', 'xl']}>
              Календарь мероприятий
            </Text>
            <Spacer />
            <Button
              rightIcon={isCalenderNewDateSelect ? <MinusIcon /> : <AddIcon />}
              onClick={handleCalenderNewDateClick}
            >
              Предложить мероприятие
            </Button>
            <Menu>
              <MenuButton h="48px" px={[1, 2, 4]} py={2} as={Button} rightIcon={<BsChevronDown />}>
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
          <VStack
            w={['80%', '100%']}
            minH={`${height / 2}px`}
            border="2px"
            borderRadius="5px"
            justify="center"
            bg="brand.beige"
          >
            <Text color="#BBBBBB" fontSize={['xs', 'lg', '2xl']} fontWeight="bold">
              На данный момент нет запланированных мероприятий
            </Text>
          </VStack>
          <HStack w="full" justify="center">
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('january')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={january}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Январь</p>
                  <p style={{ fontSize: '25px' }}>1</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Январь</p>
                  <p style={{ fontSize: '20px' }}>1</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('february')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={february}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Февраль</p>
                  <p style={{ fontSize: '25px' }}>2</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Февраль</p>
                  <p style={{ fontSize: '20px' }}>2</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('march')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={march}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Март</p>
                  <p style={{ fontSize: '25px' }}>3</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Март</p>
                  <p style={{ fontSize: '20px' }}>3</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('april')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={april}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Апрель</p>
                  <p style={{ fontSize: '25px' }}>4</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Апрель</p>
                  <p style={{ fontSize: '20px' }}>4</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('may')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={may}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Май</p>
                  <p style={{ fontSize: '25px' }}>5</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Май</p>
                  <p style={{ fontSize: '20px' }}>5</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('june')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={june}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Июнь</p>
                  <p style={{ fontSize: '25px' }}>6</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Июнь</p>
                  <p style={{ fontSize: '20px' }}>6</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('july')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={july}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Июль</p>
                  <p style={{ fontSize: '25px' }}>7</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Июль</p>
                  <p style={{ fontSize: '20px' }}>7</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('august')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={august}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Август</p>
                  <p style={{ fontSize: '25px' }}>8</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Август</p>
                  <p style={{ fontSize: '20px' }}>8</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('september')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={september}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Сентябрь</p>
                  <p style={{ fontSize: '25px' }}>9</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Сентябрь</p>
                  <p style={{ fontSize: '20px' }}>9</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('october')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={october}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Октябрь</p>
                  <p style={{ fontSize: '25px' }}>10</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Октябрь</p>
                  <p style={{ fontSize: '20px' }}>10</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('november')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={november}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Ноябрь</p>
                  <p style={{ fontSize: '25px' }}>11</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Ноябрь</p>
                  <p style={{ fontSize: '20px' }}>11</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
            <Button
              variant="brand-calendar"
              w="100%"
              h={['40px', '80px', '100px']}
              onClick={() => changeMounth('december')}
              _active={{
                color: 'white',
                bg: 'brand.blue',
                border: '2px',
                borderRadius: '5px',
              }}
              isActive={december}
            >
              {isLargerThan950 ? (
                <VStack align="center">
                  <p style={{ fontSize: '12px' }}>Декабрь</p>
                  <p style={{ fontSize: '25px' }}>12</p>
                  <p style={{ fontSize: '12px' }}>{year}</p>
                </VStack>
              ) : (
                <VStack align="center">
                  <p style={{ fontSize: '10px' }}>Декабрь</p>
                  <p style={{ fontSize: '20px' }}>12</p>
                  <p style={{ fontSize: '10px' }}>{year}</p>
                </VStack>
              )}
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
      <ModalCalendarNewDate isOpen={!!isCalenderNewDateSelect} />
    </>
  );
});
