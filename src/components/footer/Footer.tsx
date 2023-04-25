import { HStack, Spacer } from '@chakra-ui/react';
import React from 'react';

export const Footer = React.memo(() => {
  return (
    <HStack w="full" h="50px" justify="center" backgroundColor="brand.dark" px={8} py={2}>
      <Spacer />
    </HStack>
  );
});
