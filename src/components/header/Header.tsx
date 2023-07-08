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
import { BsYoutube } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BiCaretDown } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';

// import LocalizedStrings from 'react-localization';

import logo from '../../assets/logo.svg';
import erofeev from '../../assets/team/erofeev_png.png';
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

export const Header = React.memo(() => {
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const it = useSelector((state: IRootState) => state.core.it);
  const education = useSelector((state: IRootState) => state.core.education);
  const business = useSelector((state: IRootState) => state.core.business);
  const government = useSelector((state: IRootState) => state.core.government);
  const search = useSelector((state: IRootState) => state.core.search);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const [isLargerThan1090] = useMediaQuery('(min-width: 1090px)');
  const [isLargerThan905] = useMediaQuery('(min-width: 905px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan425] = useMediaQuery('(min-width: 425px)');

  useEffect(() => {
    dispatch(coreGetTheme());
  }, []);

  return (
    <VStack
      position="sticky"
      top="0px"
      pt={[1, 2, 4, 6]}
      px={isLargerThan770 ? '10%' : '5%'}
      zIndex="20"
      w="full"
      justify="start"
      backgroundColor="brand.dark"
      spacing={0}
    >
      <HStack w="full">
        <VStack align="start">
          <HStack w="full">
            <Tooltip label="Сменить тему">
              <Button
                variant="brand-icon"
                leftIcon={themeIsDark ? <HiOutlineSun size="15px" /> : <HiOutlineMoon size="15px" />}
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
                leftIcon={<SlSocialVkontakte size="15px" />}
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
                leftIcon={<BsYoutube size="15px" />}
                iconSpacing={0}
                size="xs"
                p={0}
              />
            </Tooltip>
          </HStack>
          <Spacer />
          <HStack cursor="pointer" as={RouterLink} to={ROUTE_MAINPAGE}>
            <Image src={logo} minW={['80px', '120px', '260px']} loading="lazy" py={2} />
          </HStack>
        </VStack>
        {isLargerThan425 && (
          <HStack w="full" align="end" justifyContent={!isLargerThan905 ? 'flex-end' : 'start'}>
            {isLargerThan905 && <Spacer />}
            <Stack align="center" spacing={[1, 2]} direction={isLargerThan905 ? 'row' : 'column'}>
              <VStack spacing={0} justify="start">
                <Text fontSize={['md', 'lg', '2xl']}>239</Text>
                <Text fontSize={['xs', 'xs', 'md']} color="#BBBBBB">
                  реализованных проектов
                </Text>
              </VStack>
              <VStack spacing={0} justify="start">
                <Text fontSize={['md', 'lg', '2xl']} p={0} m={0}>
                  83337
                </Text>
                <Text fontSize={['xs', 'xs', 'md']} color="#BBBBBB">
                  участников
                </Text>
              </VStack>
              <VStack spacing={0} justify="start">
                <Text fontSize={['md', 'lg', '2xl']}>94,2 млн руб.</Text>
                <Text fontSize={['xs', 'xs', 'md']} color="#BBBBBB">
                  общая сумма поддержки
                </Text>
              </VStack>
            </Stack>
            {isLargerThan1090 && <Image src={erofeev} maxH="150px" loading="lazy" />}
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
        <HStack w="full" minW={!isLargerThan1090 ? '50%' : '30%'} maxW={!isLargerThan1090 ? 'full' : '30%'} spacing={1}>
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
                      IT
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
        {isLargerThan425 && <Spacer />}
        {isLargerThan1090 && (
          <HStack spacing={0}>
            <>
              <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_COMPANIES}>
                Что происходит в отрасли?
              </Button>
              <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_EDUCATION}>
                Где получить образование?
              </Button>
              <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_CALENDAR}>
                Когда будут мероприятия?
              </Button>
            </>
          </HStack>
        )}
        {isLargerThan425 && <Spacer />}
        {!isLargerThan1090 && (
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
        {isLargerThan1090 && <Spacer />}
      </HStack>
    </VStack>
  );
});
