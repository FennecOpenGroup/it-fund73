import { Button, HStack, Image, Spacer } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { MdManageSearch } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { ROUTE_ABOUTUS, ROUTE_CALENDAR, ROUTE_MAINPAGE, ROUTE_REGISTRATION } from '../../constants/routes';

interface IHeaderProps {
  calendar?: boolean;
  registration?: boolean;
  aboutUs?: boolean;
}

export const Header = React.memo(({ calendar, registration, aboutUs }: IHeaderProps) => {
  return (
    <HStack w="full" justify="center" backgroundColor="brand.dark" px={6} py={1}>
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
          borderBottom={calendar ? '2px' : '0px'}
          as={RouterLink}
          to={ROUTE_CALENDAR}
        >
          Календарь событий
        </Button>
        <Button
          variant="brand-header"
          size="sm"
          borderBottom={registration ? '2px' : '0px'}
          as={RouterLink}
          to={ROUTE_REGISTRATION}
        >
          Регистрация на конкурс
        </Button>
        <Button
          variant="brand-header"
          size="sm"
          borderBottom={aboutUs ? '2px' : '0px'}
          as={RouterLink}
          to={ROUTE_ABOUTUS}
        >
          О нас
        </Button>
        <Button variant="brand-header" size="sm">
          Язык
        </Button>
        <Button variant="brand-header" size="sm" fontWeight="bold">
          Для слабовидящих
        </Button>
        <HStack spacing={0}>
          <Button variant="brand-icon" leftIcon={<HiOutlineMoon size="20px" />} iconSpacing={0} size="xs" />
          <Button variant="brand-icon" leftIcon={<MdManageSearch size="25px" />} iconSpacing={0} />
        </HStack>
      </HStack>
    </HStack>
  );
});
