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
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan665] = useMediaQuery('(min-width: 665px)');
  const [isLargerThan445] = useMediaQuery('(min-width: 445px)');

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
            <Tooltip label="Рутуб">
              <Button
                as={Link}
                href="https://rutube.ru/channel/32500034/"
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
          <HStack spacing={0} p={0} m={0} w={isLargerThan1181 ? 'full' : '0px'} justify="center" align="center">
            {isLargerThan1181 && (
              <HStack spacing={[0, 2, 4]} p={0} m={0} justify={!isLargerThan1580 ? 'flex-end' : 'start'}>
                <Stack align="center" direction="row" spacing={0} minH="180px">
                  <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                    <Text fontSize={isLargerThan1580 ? ['2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                      88,2
                    </Text>
                    <Text fontSize={isLargerThan1580 ? ['sm', 'md'] : '15px'} color="#BBBBBB" as="i" align="center">
                      тыс. участников
                    </Text>
                  </VStack>
                  <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                    <Text fontSize={isLargerThan1580 ? ['2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                      107
                    </Text>
                    <Text fontSize={isLargerThan1580 ? ['sm', 'md'] : '15px'} color="#BBBBBB" as="i" align="center">
                      млн руб.
                    </Text>
                  </VStack>
                  <VStack spacing={0} justify="center" align="center" px={2} m={0}>
                    <Text fontSize={isLargerThan1580 ? ['2xl', '3xl', '4xl', '5xl'] : '20px'} maxH="60px">
                      247
                    </Text>
                    <Text fontSize={isLargerThan1580 ? ['sm', 'md'] : '15px'} color="#BBBBBB" as="i" align="center">
                      проектов
                    </Text>
                  </VStack>
                </Stack>
              </HStack>
            )}
          </HStack>
        )}
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
        <HStack w="full" minW={!isLargerThan1231 ? '40%' : '30%'} maxW={!isLargerThan1231 ? 'full' : '30%'} spacing={1}>
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
          <HStack spacing={0} w="full">
            <>
              <Button variant="brand-header" h="52px" fontSize="xs" as={RouterLink} to={ROUTE_COMPANIES}>
                Что происходит в ИТ-отрасли
              </Button>
              <Button variant="brand-header" h="52px" fontSize="xs" as={RouterLink} to={ROUTE_EDUCATION}>
                Где получить ИТ-образование
              </Button>
              <Button variant="brand-header" h="52px" fontSize="xs" as={RouterLink} to={ROUTE_CALENDAR}>
                Когда будут ИТ-мероприятия
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
                Что происходит в отрасли
              </MenuItem>
              <MenuItem as={RouterLink} to={ROUTE_EDUCATION}>
                Где получить образование
              </MenuItem>
              <MenuItem as={RouterLink} to={ROUTE_CALENDAR}>
                Когда будут мероприятия
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {isLargerThan1231 && <Spacer />}
      </HStack>
    </VStack>
  );
});
