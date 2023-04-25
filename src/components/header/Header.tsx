import { Button, HStack, Image, Spacer } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';

import logo from '../../assets/logo.svg';

export const Header = React.memo(() => {
  return (
    <HStack w="full" justify="center" backgroundColor="brand.dark" px={6} py={1}>
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
      <Spacer />
      <Button variant="brand-header" size="sm">
        Календарь событий
      </Button>
      <Button variant="brand-header" size="sm">
        Регистрация на конкурс
      </Button>
      <Button variant="brand-header" size="sm">
        О нас
      </Button>
      <Button variant="brand-header" size="sm">
        Язык
      </Button>
      <Button variant="brand-header" size="sm" fontWeight="bold" _hover={{ fontWeight: 'bold', bg: 'brand.blue' }}>
        Для слабовидящих
      </Button>
      <Button variant="brand-icon" leftIcon={<HiOutlineMoon size="25px" />} iconSpacing={0} />
    </HStack>
  );
});
