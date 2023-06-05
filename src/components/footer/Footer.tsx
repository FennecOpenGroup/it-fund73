import { HStack, Link, Spacer, Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import fog_logo from '../../assets/fog-logo.png';
import ul_logo from '../../assets/ul-logo.svg';
import mini_logo from '../../assets/mini-logo.svg';
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
    <HStack px="10%" w="full" h="120px" justify="center" backgroundColor="brand.dark" py={2}>
      <Image src={mini_logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
      <VStack align="left">
        <Link href="" variant="brand-Link">
          Пользовательское соглашение
        </Link>
        <Link href="" variant="brand-Link">
          Политика конфиденциальности
        </Link>
        <Text>Публикации:275</Text>
        <Text>Компании:444</Text>
      </VStack>
      <Spacer />
      <VStack align="left">
        <Text>Все права защищены и охраняются законом</Text>
        <Text>Подписчиков: 23262</Text>
        <Text>© 2018-2023</Text>
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
      </VStack>
    </HStack>
  );
});
