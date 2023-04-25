import { HStack, Image, Spacer } from '@chakra-ui/react';
import React from 'react';

import logo from '../../assets/logo.svg';

export const Header = React.memo(() => {
  return (
    <HStack w="full" justify="center" backgroundColor="brand.dark" px={8} py={2}>
      <Image
        src={logo}
        alt="itfund"
        loading="lazy"
        minW="32px"
        minH="32px"
        maxH="60px"
        htmlWidth="full"
        htmlHeight="full"
      />
      <Spacer />
    </HStack>
  );
});
