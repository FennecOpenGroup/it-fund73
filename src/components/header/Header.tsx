import { Button, HStack, Image, Spacer } from '@chakra-ui/react';
import React, { Dispatch, useCallback } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { MdManageSearch } from 'react-icons/md';
import LocalizedStrings from 'react-localization';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { coreSetLang, coreSetVisibleModal } from '../../actions/coreActions';
import logo from '../../assets/logo.svg';
import { ROUTE_ABOUTUS, ROUTE_CALENDAR, ROUTE_MAINPAGE, ROUTE_REGISTRATION } from '../../constants/routes';
import { LangEnum } from '../../enums/LangEnum';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';
import { RootActions } from '../../types/RootActions';

interface IHeaderProps {
  calendar?: boolean;
  registration?: boolean;
  aboutUs?: boolean;
}

export const Header = React.memo(({ calendar, registration, aboutUs }: IHeaderProps) => {
  const texts = new LocalizedStrings({
    EN: {
      calendar: 'Calendar of events',
      registration: 'Registration for the contest',
      aboutUs: 'About us',
      language: 'Language',
      eye: 'For the visually impaired',
    },
    RU: {
      calendar: 'Календарь событий',
      registration: 'Регистрация на конкурс',
      aboutUs: 'О нас',
      language: 'Язык',
      eye: 'Для слабовидящих',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const handleLangClick = useCallback(() => {
    dispatch(coreSetLang(lang === LangEnum.RU ? LangEnum.EN : LangEnum.RU));
  }, [lang]);
  const handleDrawerNewsClick = useCallback(() => dispatch(coreSetVisibleModal(ModalsEnum.MAIN_DRAWER_NEWS)), []);

  return (
    <HStack
      position="sticky"
      top="0px"
      zIndex="20"
      w="full"
      justify="center"
      backgroundColor="brand.dark"
      px={6}
      py={1}
      mb={10}
    >
      <HStack position="static" w="full">
        <HStack as={RouterLink} to={ROUTE_MAINPAGE} cursor="pointer">
          <Image
            src={logo}
            alt="itfund"
            loading="lazy"
            minW="32px"
            minH="32px"
            maxH="50px"
            htmlWidth="full"
            htmlHeight="full"
          />
        </HStack>
        <Spacer />
        <HStack spacing={[2, 4, 6]}>
          <Button
            variant="brand-header"
            size="sm"
            textDecoration={calendar ? 'underline' : 'none'}
            fontWeight={calendar ? 'bold' : 'normal'}
            as={RouterLink}
            to={ROUTE_CALENDAR}
          >
            {texts.getString('calendar', lang)}
          </Button>
          <Button
            variant="brand-header"
            size="sm"
            textDecoration={registration ? 'underline' : 'none'}
            fontWeight={registration ? 'bold' : 'normal'}
            as={RouterLink}
            to={ROUTE_REGISTRATION}
          >
            {texts.getString('registration', lang)}
          </Button>
          <Button
            variant="brand-header"
            size="sm"
            textDecoration={aboutUs ? 'underline' : 'none'}
            fontWeight={aboutUs ? 'bold' : 'normal'}
            as={RouterLink}
            to={ROUTE_ABOUTUS}
          >
            {texts.getString('aboutUs', lang)}
          </Button>
          <Button variant="brand-header" size="sm" fontWeight="bold">
            {texts.getString('eye', lang)}
          </Button>
          <Button variant="brand-header" size="sm" onClick={handleLangClick}>
            {texts.getString('language', lang)}
          </Button>
          <HStack spacing={0}>
            <Button variant="brand-icon" leftIcon={<HiOutlineMoon size="20px" />} iconSpacing={0} size="xs" />
            <Button
              variant="brand-icon"
              leftIcon={<MdManageSearch size="25px" />}
              iconSpacing={0}
              onClick={handleDrawerNewsClick}
            />
          </HStack>
        </HStack>
      </HStack>
    </HStack>
  );
});
