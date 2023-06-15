import {
  Button,
  VStack,
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
} from '@chakra-ui/react';
import React, { Dispatch } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsEye, BsYoutube } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegram } from 'react-icons/fa';
import { SiOdnoklassniki } from 'react-icons/si';
import { BiCaretDown } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import LocalizedStrings from 'react-localization';

import logo from '../../assets/logo.svg';
import erofeev from '../../assets/erofeev_png.png';
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
  coreSetBusinessNews,
  coreSetEducationNews,
  coreSetGovernmentNews,
  coreSetITNews,
  coreSetSearchDraft,
} from '../../actions/coreActions';

export const Header = React.memo(() => {

  const dispatch = useDispatch<Dispatch<RootActions>>();
  const it = useSelector((state: IRootState) => state.core.it);
  const education = useSelector((state: IRootState) => state.core.education);
  const business = useSelector((state: IRootState) => state.core.business);
  const government = useSelector((state: IRootState) => state.core.government);
  const search = useSelector((state: IRootState) => state.core.search);

  return (
    <VStack
      position="sticky"
      top="0px"
      pt={2}
      px="10%"
      zIndex="20"
      w="full"
      justify="start"
      backgroundColor="brand.dark"
      spacing={0}
    >
      <HStack w='full'>
        <VStack w='full'>
            <HStack w="full">
              <Tooltip label="Сменить тему">
                <Button variant="brand-icon" leftIcon={<HiOutlineMoon size="15px" />} iconSpacing={0} size="xs" p={0} />
              </Tooltip>
              <Tooltip label="Для слабовидящих">
                <Button variant="brand-icon" leftIcon={<BsEye size="15px" />} iconSpacing={0} size="xs" p={0} />
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
              <Tooltip label="Телеграм">
                <Button variant="brand-icon" leftIcon={<FaTelegram size="15px" />} iconSpacing={0} size="xs" p={0} />
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
              <Tooltip label="Одноклассники">
                <Button
                  as={Link}
                  href="https://ok.ru/group/70000001880401"
                  isExternal
                  variant="brand-icon"
                  leftIcon={<SiOdnoklassniki size="15px" />}
                  iconSpacing={0}
                  size="xs"
                  p={0}
                />
              </Tooltip>
          </HStack>
          <Spacer />
          <HStack w="full" cursor="pointer" as={RouterLink} to={ROUTE_MAINPAGE}>
            <Image src={logo} minW="200px" minH="50px" />
          </HStack>
        </VStack>
        <HStack w='full' align='end'>
          <HStack align='start' spacing={4}>
            <VStack align='center' spacing={0}>
              <Text fontSize='2xl'>239</Text>
              <Text fontSize='md' color="#BBBBBB">реализованных проектов</Text>
            </VStack>
            <VStack align='center' spacing={0}>
              <Text fontSize='2xl' p={0} m={0}>83337</Text>
              <Text fontSize='md' color="#BBBBBB">участников</Text>
            </VStack>
            <VStack align='center' spacing={0}> 
              <Text fontSize='2xl'>94,2 млн руб.</Text>
              <Text fontSize='md' color="#BBBBBB">общая сумма поддержки</Text>
            </VStack>
          </HStack>
          <Image src={erofeev} maxH='150px' />
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
        <ButtonGroup minW="25%" maxW="40%" p={0} spacing={0}>
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
        <Spacer />
        <HStack spacing={0}>
          <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_COMPANIES}>
            Что происходит в отрасли?
          </Button>
          <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_EDUCATION}>
            Где получить образование?
          </Button>
          <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_CALENDAR}>
            Когда будут мероприятия?
          </Button>
          <Button variant="brand-header" h="52px" fontSize="sm" as={RouterLink} to={ROUTE_ABOUTUS}>
            О фонде
          </Button>
        </HStack>
        <Spacer />
        <Spacer />
      </HStack>
    </VStack>
  );
});
