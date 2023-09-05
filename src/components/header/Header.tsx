import {
  Button,
  VStack,
  Stack,
  HStack,
  Image,
  Input,
  Link,
  Spacer,
  ButtonGroup,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  Checkbox,
  Text,
  useMediaQuery,
  MenuItem,
} from '@chakra-ui/react';
import React, { Dispatch, useEffect } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { SlSocialVkontakte, SlSocialYoutube } from 'react-icons/sl';
import { BiCaretDown } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';

import {
  ROUTE_ABOUTUS,
  ROUTE_CALENDAR,
  ROUTE_COMPANIES,
  ROUTE_MAINPAGE,
  ROUTE_EDUCATION,
} from '../../constants/routes';
import { RootActions } from '../../types/RootActions';
import { IRootState } from '../../interfaces/IRootState';
import {
  coreGetTheme,
  coreSetBusinessNews,
  coreSetEducationNews,
  coreSetGovernmentNews,
  coreSetITNews,
  coreSetSearchDraft,
  coreSetTheme,
} from '../../actions/coreActions';
import erofeev from '../../assets/team/Erofeev-transformed.png';
import full_logo from '../../assets/full-logo.svg';

export const Header = React.memo(() => {
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const it = useSelector((state: IRootState) => state.core.it);
  const education = useSelector((state: IRootState) => state.core.education);
  const business = useSelector((state: IRootState) => state.core.business);
  const government = useSelector((state: IRootState) => state.core.government);
  const search = useSelector((state: IRootState) => state.core.search);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const [isLargerThan1580] = useMediaQuery('(min-width: 1580px)');
  const [isLargerThan1181] = useMediaQuery('(min-width: 1181px)');
  const [isLargerThan1231] = useMediaQuery('(min-width: 1231px)');
  const [isLargerThan905] = useMediaQuery('(min-width: 905px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan665] = useMediaQuery('(min-width: 665px)');
<<<<<<< HEAD
  const [isLargerThan445] = useMediaQuery('(min-width: 445px)');
=======
  const [isLargerThan370] = useMediaQuery('(min-width: 370px)');
>>>>>>> f33fb1f9022e337bb6ca2700bfd2fd0d64a26238

  useEffect(() => {
    dispatch(coreGetTheme());
  }, []);

  return (
    <VStack
      position="static"
      top="0px"
      pt={[1, 2, 4, 6]}
      px={isLargerThan770 ? '10%' : '5%'}
      zIndex="20"
      w="full"
      justify="start"
      backgroundColor="brand.dark"
      spacing={0}
    >
      <HStack w="full" align="end">
        <VStack align="end" justify="end" w={isLargerThan665 ? 'auto' : 'full'}>
          <HStack w="full">
            <Tooltip label="Сменить тему">
              <Button
                variant="brand-icon"
                leftIcon={
                  themeIsDark ? (
                    <HiOutlineSun size="16px" />
                  ) : (
                    <HiOutlineMoon size={isLargerThan445 ? '16px' : '10px'} />
                  )
                }
                onClick={() => {
                  dispatch(coreSetTheme(!themeIsDark));
                  localStorage.setItem('theme', themeIsDark ? 'light' : 'dark');
                }}
                iconSpacing={0}
                size="xs"
                p={0}
              />
            </Tooltip>
            <Tooltip label="ВКонтакте">
              <Button
                as={Link}
                href="https://vk.com/itfund73"
                isExternal
                variant="brand-icon"
                leftIcon={<SlSocialVkontakte size={isLargerThan445 ? '16px' : '10px'} />}
                iconSpacing={0}
                size="xs"
                p={0}
              />
            </Tooltip>
            <Tooltip label="Ютуб">
              <Button
                as={Link}
                href="https://youtube.com/@user-or8ou2iv4e"
                isExternal
                variant="brand-icon"
                leftIcon={<SlSocialYoutube size={isLargerThan445 ? '16px' : '10px'} />}
                iconSpacing={0}
                size="xs"
                p={0}
              />
            </Tooltip>
          </HStack>
          <Spacer />
          <HStack
            cursor="pointer"
            as={RouterLink}
            to={ROUTE_MAINPAGE}
            align="start"
            w={isLargerThan665 ? 'auto' : 'full'}
          >
<<<<<<< HEAD
            <Image
              src={full_logo}
              minH={isLargerThan665 ? '100px' : 'auto'}
              minW="120px"
              w="full"
              loading="lazy"
              py={0}
              pb={isLargerThan445 ? '1px' : '5px'}
            />
          </HStack>
        </VStack>
        {isLargerThan770 && (
          <HStack spacing={0} p={0} m={0} w={isLargerThan1181 ? 'full' : '0px'} justify="end" align="end">
            {isLargerThan1181 && (
              <HStack spacing={[0, 2, 4]} p={0} m={0} justify={!isLargerThan1580 ? 'flex-end' : 'start'}>
                <Stack align="center" direction={isLargerThan1580 ? 'row' : 'column'} spacing={0} minH="220px">
                  <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                    <Text fontSize={isLargerThan1580 ? ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                      88,2
                    </Text>
                    <Text
                      fontSize={isLargerThan1580 ? ['xs', 'sm', 'md'] : '15px'}
                      color="#BBBBBB"
                      as="i"
                      align="center"
                    >
                      тыс. участников
                    </Text>
                  </VStack>
                  <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                    <Text fontSize={isLargerThan1580 ? ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                      107
                    </Text>
                    <Text
                      fontSize={isLargerThan1580 ? ['xs', 'sm', 'md'] : '15px'}
                      color="#BBBBBB"
                      as="i"
                      align="center"
                    >
                      млн руб.
                    </Text>
                  </VStack>
                  <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                    <Text fontSize={isLargerThan1580 ? ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                      247
                    </Text>
                    <Text
                      fontSize={isLargerThan1580 ? ['xs', 'sm', 'md'] : '15px'}
                      color="#BBBBBB"
                      as="i"
                      align="center"
                    >
                      проектов
                    </Text>
                  </VStack>
                </Stack>
              </HStack>
            )}
          </HStack>
        )}
        <HStack spacing={0} align="flex-end" w="full" flexDirection={isLargerThan1181 ? 'row' : 'row-reverse'}>
          <VStack
            spacing={0}
            position="relative"
            right={isLargerThan1181 ? '-20px' : ['6px', '20px']}
            pb={1}
            align="center"
            minH={isLargerThan1181 ? '220px' : isLargerThan905 ? '80px' : '40px'}
          >
            <Text
              fontSize={isLargerThan905 ? ['xs', 'sm', 'md'] : ['6px', '8px', '10px']}
              p={0}
              m={0}
              fontWeight="bold"
              align="center"
              justifyContent="center"
            >
              Сергей Ерофеев, директор фонда:
            </Text>
            <Text
              fontSize={isLargerThan905 ? ['xs', 'sm'] : ['4px', '6px']}
              color="#BBBBBB"
              p={0}
              m={0}
              as="i"
              align="center"
              maxW={['310px', '280px', '250px']}
              maxH="190px"
            >
              Расшиваем «узкие» места в системе подготовки ИТ-кадров. Развиваем ИТ-сообщество. Содействуем цифровой
              трансформации экономики и соцсферы.
            </Text>
          </VStack>
          <Image
            src={erofeev}
            alt="erofeev"
            loading="lazy"
            htmlWidth="full"
            maxW={
              isLargerThan905
                ? '140px'
                : isLargerThan770
                ? '100px'
                : isLargerThan665
                ? '80px'
                : isLargerThan445
                ? '60px'
                : '45px'
            }
            htmlHeight="full"
          />
=======
            <Image src={full_logo} minH="80px" minW="120px" w="full" loading="lazy" py={0} />
          </HStack>
        </VStack>
        <HStack spacing={0} p={0} m={0} w="full" justify="end" align="end">
          {isLargerThan1181 && (
            <HStack spacing={[1, 3, 5]} p={0} m={0} justify={!isLargerThan1580 ? 'flex-end' : 'start'}>
              <Stack align="center" direction={isLargerThan1580 ? 'row' : 'column'} spacing={0}>
                <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                  <Text fontSize={isLargerThan1580 ? ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                    88,2
                  </Text>
                  <Text fontSize={isLargerThan1580 ? ['xs', 'sm', 'md'] : '15px'} color="#BBBBBB" as="i" align="center">
                    тыс. участников
                  </Text>
                </VStack>
                <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                  <Text fontSize={isLargerThan1580 ? ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                    107
                  </Text>
                  <Text fontSize={isLargerThan1580 ? ['xs', 'sm', 'md'] : '15px'} color="#BBBBBB" as="i" align="center">
                    млн руб.
                  </Text>
                </VStack>
                <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                  <Text fontSize={isLargerThan1580 ? ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                    247
                  </Text>
                  <Text fontSize={isLargerThan1580 ? ['xs', 'sm', 'md'] : '15px'} color="#BBBBBB" as="i" align="center">
                    проектов
                  </Text>
                </VStack>
              </Stack>
            </HStack>
          )}
          <HStack spacing={0} align="flex-end">
            <VStack spacing={0} position="relative" right={['-5px', '-10px', '-20px', '-30px']} pb={1} align="center">
              <Text
                fontSize={isLargerThan905 ? ['xs', 'sm', 'md'] : ['7px', '10px', '12px']}
                p={0}
                m={0}
                fontWeight="bold"
                align="center"
                justifyContent="center"
              >
                Сергей Ерофеев, директор фонда:
              </Text>
              <Text
                fontSize={isLargerThan905 ? ['xs', 'sm'] : isLargerThan370 ? ['7px', '8px', '10px'] : '6px'}
                color="#BBBBBB"
                p={0}
                m={0}
                as="i"
                align="center"
                maxW="250px"
                maxH="180px"
              >
                Расшиваем «узкие» места в системе подготовки ИТ-кадров. Развиваем ИТ-сообщество. Содействуем цифровой
                трансформации экономики и соцсферы.
              </Text>
            </VStack>
            <Image
              src={erofeev}
              alt="erofeev"
              loading="lazy"
              htmlWidth="full"
              maxW={isLargerThan905 ? '140px' : ['70px', '85px', '100px', '120px']}
              htmlHeight="full"
            />
          </HStack>
>>>>>>> f33fb1f9022e337bb6ca2700bfd2fd0d64a26238
        </HStack>
      </HStack>
      <HStack
        w="full"
        h="52px"
        margin={0}
        px={2}
        spacing={4}
        backgroundColor="#313131"
        borderTopStartRadius="5px"
        borderTopEndRadius="5px"
      >
        <HStack w="full" minW={!isLargerThan1231 ? '50%' : '30%'} maxW={!isLargerThan1231 ? 'full' : '30%'} spacing={1}>
          <ButtonGroup w="full" p={0} spacing={0}>
            <Input
              variant="brand-search"
              borderBottom="2px solid #5F5F5F"
              borderLeft="2px solid #5F5F5F"
              borderTop="2px solid #5F5F5F"
              borderTopEndRadius="0px"
              borderBottomEndRadius="0px"
              w="full"
              placeholder="Поиск..."
              value={search}
              onChange={(text: any) => dispatch(coreSetSearchDraft(text.target.value.toString()))}
              h="30px"
            />
            <Menu closeOnSelect={false}>
              <MenuButton
                as={Button}
                variant="brand-menu"
                borderTopEndRadius="5px"
                borderBottomEndRadius="5px"
                h="30px"
                p={0}
                pl={2}
                leftIcon={<BiCaretDown size="20px" />}
              />
              <MenuList>
                <VStack justify="start" px={2}>
                  <HStack justify="start" w="full">
                    <Checkbox
                      color="white"
                      isChecked={education}
                      onChange={() => dispatch(coreSetEducationNews(!education))}
                    >
                      Образование
                    </Checkbox>
                    <Checkbox color="white" isChecked={it} onChange={() => dispatch(coreSetITNews(!it))}>
                      ИТ
                    </Checkbox>
                  </HStack>
                  <HStack justify="start" w="full">
                    <Checkbox
                      color="white"
                      isChecked={business}
                      onChange={() => dispatch(coreSetBusinessNews(!business))}
                    >
                      Бизнес
                    </Checkbox>
                    <Checkbox
                      color="white"
                      isChecked={government}
                      onChange={() => dispatch(coreSetGovernmentNews(!government))}
                    >
                      Государство
                    </Checkbox>
                  </HStack>
                </VStack>
              </MenuList>
            </Menu>
          </ButtonGroup>
          <Tooltip label="О фонде">
            <Button
              variant="brand-icon"
              leftIcon={<RiTeamFill size="25px" />}
              iconSpacing={0}
              as={RouterLink}
              to={ROUTE_ABOUTUS}
            />
          </Tooltip>
        </HStack>
        {isLargerThan1231 && (
          <HStack spacing={0}>
            <>
              <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_COMPANIES}>
                Что происходит в ИТ-отрасли?
              </Button>
              <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_EDUCATION}>
                Где получить ИТ-образование?
              </Button>
              <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_CALENDAR}>
                Когда будут ИТ-мероприятия?
              </Button>
            </>
          </HStack>
        )}
        {!isLargerThan1231 && (
          <Menu>
            <MenuButton
              as={Button}
              m={1}
              p={1}
              variant="brand-icon"
              color="white"
              rightIcon={<GiHamburgerMenu size="20px" />}
            />
            <MenuList>
              <MenuItem as={RouterLink} to={ROUTE_COMPANIES}>
                Что происходит в отрасли?
              </MenuItem>
              <MenuItem as={RouterLink} to={ROUTE_EDUCATION}>
                Где получить образование?
              </MenuItem>
              <MenuItem as={RouterLink} to={ROUTE_CALENDAR}>
                Когда будут мероприятия?
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {isLargerThan1231 && <Spacer />}
      </HStack>
    </VStack>
  );
});
