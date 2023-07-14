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
  Grid,
  GridItem,
  Stack,
} from '@chakra-ui/react';
import React, { Dispatch, useCallback, useEffect, useRef, useState } from 'react';
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

  const refCalendar = useRef<HTMLDivElement>(null);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

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

  const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
  const [isLargerThan950] = useMediaQuery('(min-width: 950px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  const [year, setYear] = useState(2023);

  const isLeapYear = (yearLeap: number) => {
    if (yearLeap % 4 !== 0) return false;
    if (yearLeap % 100 !== 0) return true;
    if (yearLeap % 400 !== 0) return false;
    return true;
  };

  const mounthCount =
    january || march || may || july || august || october || december
      ? 31
      : february
      ? isLeapYear(year)
        ? 29
        : 28
      : 30;

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
      <VStack
        justify="start"
        minH={`${height / 1.3}px`}
        px={isLargerThan770 ? '10%' : '5%'}
        bg={themeIsDark ? '#242323' : 'white'}
      >
        <VStack w="full" p={[1, 2, 3]}>
          <Stack direction={isLargerThan620 ? 'row' : 'column'} w="full" justify="center" align="center" pr={[1, 2]}>
            <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md', 'lg']}>
              Календарь мероприятий
            </Text>
            <Spacer />
            <HStack>
              <Button
                rightIcon={isCalenderNewDateSelect ? <MinusIcon /> : <AddIcon />}
                onClick={handleCalenderNewDateClick}
                fontSize={['sm', 'md', 'lg']}
                bg="transparent"
                color={themeIsDark ? 'white' : 'brand.dark'}
                _hover={{
                  bg: 'brand.blue',
                }}
              >
                Предложить мероприятие
              </Button>
              <Menu>
                <MenuButton
                  h="48px"
                  px={[1, 2, 4]}
                  py={2}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                  bg="transparent"
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  style={{ colorScheme: 'dark' }}
                  _hover={{
                    bg: 'brand.blue',
                  }}
                >
                  {year}
                </MenuButton>
                <MenuList maxH="250px" overflow="auto">
                  <MenuItem onClick={() => setYear(2023)}>2023</MenuItem>
                  <MenuItem onClick={() => setYear(2024)}>2024</MenuItem>
                  <MenuItem onClick={() => setYear(2025)}>2025</MenuItem>
                  <MenuItem onClick={() => setYear(2026)}>2026</MenuItem>
                  <MenuItem onClick={() => setYear(2027)}>2027</MenuItem>
                  <MenuItem onClick={() => setYear(2028)}>2028</MenuItem>
                  <MenuItem onClick={() => setYear(2029)}>2029</MenuItem>
                  <MenuItem onClick={() => setYear(2030)}>2030</MenuItem>
                  <MenuItem onClick={() => setYear(2031)}>2031</MenuItem>
                  <MenuItem onClick={() => setYear(2032)}>2032</MenuItem>
                  <MenuItem onClick={() => setYear(2033)}>2033</MenuItem>
                  <MenuItem onClick={() => setYear(2034)}>2034</MenuItem>
                  <MenuItem onClick={() => setYear(2035)}>2035</MenuItem>
                  <MenuItem onClick={() => setYear(2036)}>2036</MenuItem>
                  <MenuItem onClick={() => setYear(2037)}>2037</MenuItem>
                  <MenuItem onClick={() => setYear(2038)}>2038</MenuItem>
                  <MenuItem onClick={() => setYear(2039)}>2039</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Stack>
          <VStack
            w="full"
            maxH={`${height / 1.5}px`}
            border="2px"
            borderRadius="5px"
            borderColor={themeIsDark ? 'gray' : 'brand.dark'}
            justify="center"
            bg={themeIsDark ? '#121212' : 'brand.beige'}
            ref={refCalendar}
            overflow="auto"
            __css={{
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `brand.beige`,
              },
            }}
          >
            {january ||
            february ||
            april ||
            march ||
            may ||
            june ||
            july ||
            august ||
            september ||
            october ||
            november ||
            december ? (
              <VStack w="full" spacing={0}>
                <Grid w="full" gap={0} templateColumns="repeat(7, 1fr)" templateRows="auto">
                  {Object.keys(Array(mounthCount).fill('')).map(index => {
                    return (
                      <GridItem key={index}>
                        <Button
                          bg={themeIsDark ? '#121212' : 'white'}
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          border="1px"
                          minW="120px"
                          minH="100px"
                          w="full"
                          _active={{
                            color: 'white',
                            bg: 'brand.blue',
                            border: '1px',
                            borderColor: 'transparent',
                            borderRadius: '5px',
                          }}
                          _hover={{
                            borderColor: 'transparent',
                            bg: 'brand.blue',
                          }}
                        >
                          {Number(index) + 1}
                        </Button>
                      </GridItem>
                    );
                  })}
                </Grid>
              </VStack>
            ) : (
              <VStack minH={`${height / 2}px`} w="full" justify="center">
                <Text color="#BBBBBB" fontSize={['xs', 'lg', '2xl']} fontWeight="bold" align="center">
                  Не выбран месяц
                </Text>
              </VStack>
            )}
          </VStack>
          <HStack w="full" justify="center" align="center">
            {refCalendar.current?.clientWidth && (
              <Grid
                w="full"
                gap={1}
                templateRows={
                  isLargerThan1440 ? 'repeat(1, 1fr)' : isLargerThan600 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'
                }
                templateColumns={
                  isLargerThan1440 ? 'repeat(12, 1fr)' : isLargerThan600 ? 'repeat(6, 1fr)' : 'repeat(3, 1fr)'
                }
              >
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('january')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('february')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('march')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('april')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('may')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('june')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('july')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('august')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('september')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('october')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('november')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
                <GridItem>
                  <Button
                    variant="brand-calendar"
                    bg={themeIsDark ? '#121212' : 'white'}
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    w="100%"
                    h={['80px', '100px']}
                    onClick={() => changeMounth('december')}
                    _active={{
                      color: 'white',
                      bg: 'brand.blue',
                      border: '2px',
                      borderColor: 'transparent',
                      borderRadius: '5px',
                    }}
                    _hover={{
                      borderColor: 'transparent',
                      bg: 'brand.blue',
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
                </GridItem>
              </Grid>
            )}
          </HStack>
        </VStack>
      </VStack>
      <Footer />
      <ModalCalendarNewDate isOpen={!!isCalenderNewDateSelect} />
    </>
  );
});
