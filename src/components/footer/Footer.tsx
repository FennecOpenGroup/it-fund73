import { Button, HStack, Spacer, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegram } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { SiOdnoklassniki } from 'react-icons/si';

import fog_logo from '../../assets/fog-logo.png';
import ul_logo from '../../assets/ul-logo.svg';

export const Footer = React.memo(() => {
  return (
    <HStack w="full" h="50px" justify="center" backgroundColor="brand.dark" px={8} py={2}>
      <HStack spacing={1}>
        <Button variant="brand-icon" leftIcon={<SlSocialVkontakte size="20px" />} iconSpacing={0} size="xs" p={0} />
        <Button variant="brand-icon" leftIcon={<FaTelegram size="20px" />} iconSpacing={0} size="xs" p={0} />
        <Button variant="brand-icon" leftIcon={<BsYoutube size="20px" />} iconSpacing={0} size="xs" p={0} />
        <Button variant="brand-icon" leftIcon={<SiOdnoklassniki size="20px" />} iconSpacing={0} size="xs" p={0} />
      </HStack>
      <Spacer />
      <HStack>
        <Text>Создано при поддержке</Text>
        <Image
          src={fog_logo}
          alt="itfund"
          loading="lazy"
          minW="20px"
          maxW="20px"
          maxH="20px"
          minH="20px"
          htmlWidth="full"
          htmlHeight="full"
        />
        <Text>X</Text>
        <Image
          src={ul_logo}
          alt="itfund"
          loading="lazy"
          minW="20px"
          maxW="20px"
          maxH="20px"
          minH="20px"
          htmlWidth="full"
          htmlHeight="full"
        />
      </HStack>
    </HStack>
  );
});
