import { Button, HStack, Spacer, Text, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegram } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { SiOdnoklassniki } from 'react-icons/si';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import fog_logo from '../../assets/fog-logo.png';
import ul_logo from '../../assets/ul-logo.svg';
import { IRootState } from '../../interfaces/IRootState';

export const Footer = React.memo(() => {
  const texts = new LocalizedStrings({
    EN: {
      create: 'Created with the support of',
    },
    RU: {
      create: 'Создано при поддержке',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

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
        <Text>{texts.getString('create', lang)}</Text>
        <Link href="https://siiidr.github.io/FennecOpenGroup/" isExternal>
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
        </Link>
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
