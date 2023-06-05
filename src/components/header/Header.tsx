import {
  Button,
  VStack,
  HStack,
  Image,
  Input,
  Spacer,
  ButtonGroup,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsEye, BsYoutube } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegram } from 'react-icons/fa';
import { SiOdnoklassniki } from 'react-icons/si';
import { BiCaretDown } from 'react-icons/bi';
// import LocalizedStrings from 'react-localization';

import logo from '../../assets/logo.svg';

export const Header = React.memo(() => {
  // const texts = new LocalizedStrings({
  //   EN: {
  //     calendar: 'Calendar of events',
  //     branch: 'IT-branch',
  //     education: 'IT-education',
  //     projects: 'Projects',
  //     registration: 'Registration for the contest',
  //     aboutUs: 'About us',
  //     language: 'Language',
  //     eye: 'For the visually impaired',
  //   },
  //   RU: {
  //     calendar: 'Календарь событий',
  //     branch: 'ИТ-отрасль',
  //     education: 'ИТ-образование',
  //     projects: 'Проекты',
  //     registration: 'Регистрация на конкурс',
  //     aboutUs: 'О нас',
  //     language: 'Язык',
  //     eye: 'Для слабовидящих',
  //   },
  // });

  // const lang = useSelector((state: IRootState) => state.core.lang);
  // const dispatch = useDispatch<Dispatch<RootActions>>();
  return (
    <VStack
      h="170px"
      position="sticky"
      top="0px"
      pt={0}
      px="10%"
      zIndex="20"
      w="full"
      justify="start"
      backgroundColor="brand.dark"
    >
      <HStack w="full">
        <Tooltip label="Сменить тему">
          <Button variant="brand-icon" leftIcon={<HiOutlineMoon size="15px" />} iconSpacing={0} size="xs" p={0} />
        </Tooltip>
        <Tooltip label="Для слабовидящих">
          <Button variant="brand-icon" leftIcon={<BsEye size="15px" />} iconSpacing={0} size="xs" p={0} />
        </Tooltip>
        <Tooltip label="ВКонтакте">
          <Button variant="brand-icon" leftIcon={<SlSocialVkontakte size="15px" />} iconSpacing={0} size="xs" p={0} />
        </Tooltip>
        <Tooltip label="Телеграм">
          <Button variant="brand-icon" leftIcon={<FaTelegram size="15px" />} iconSpacing={0} size="xs" p={0} />
        </Tooltip>
        <Tooltip label="Ютуб">
          <Button variant="brand-icon" leftIcon={<BsYoutube size="15px" />} iconSpacing={0} size="xs" p={0} />
        </Tooltip>
        <Tooltip label="Одноклассники">
          <Button variant="brand-icon" leftIcon={<SiOdnoklassniki size="15px" />} iconSpacing={0} size="xs" p={0} />
        </Tooltip>
      </HStack>
      <HStack w="full">
        <Image src={logo} minW="200px" minH="50px" />
      </HStack>
      <Spacer />
      <HStack
        w="full"
        h="52px"
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
              <VStack justify="space-between">
                <HStack>
                  <Checkbox color="white">Вариант</Checkbox>
                  <Checkbox color="white">Вариант</Checkbox>
                </HStack>
                <HStack>
                  <Checkbox color="white">Вариант</Checkbox>
                  <Checkbox color="white">Вариант</Checkbox>
                </HStack>
              </VStack>
            </MenuList>
          </Menu>
        </ButtonGroup>
        <Spacer />
        <HStack spacing={0}>
          <Button variant="brand-header" h="52px" fontSize="sm">
            Что происходит в отрасли?
          </Button>
          <Button variant="brand-header" h="52px" fontSize="sm">
            Где получить образование?
          </Button>
          <Button variant="brand-header" h="52px" fontSize="sm">
            Когда будут мероприятия?
          </Button>
        </HStack>
        <Spacer />
        <Spacer />
      </HStack>
    </VStack>
  );
});
