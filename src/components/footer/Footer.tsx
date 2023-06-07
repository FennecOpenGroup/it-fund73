import { HStack, Link, Spacer, Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import fog_logo from '../../assets/logo-fog.svg';
import ul_logo from '../../assets/ul-logo.svg';
import mini_logo from '../../assets/mini-logo.svg';
import { IRootState } from '../../interfaces/IRootState';

export const Footer = React.memo(() => {
  const texts = new LocalizedStrings({
    EN: {
      create: 'Created with the support of',
      support: 'with the support of',
    },
    RU: {
      create: 'Создано ',
      support: 'при поддержке',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

  return (
    <HStack px="10%" w="full" h="130px" justify="center" backgroundColor="brand.dark" py={2}>
      <Image src={mini_logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
      <VStack align="left">
        <Link href="" variant="brand-Link">
          Пользовательское соглашение
        </Link>
        <Text>Подписчиков: 0</Text>
        <Text>Публикации: 0</Text>
        <Text>Компании: 0</Text>
      </VStack>
      <Spacer />
      <VStack align="left">
        <Link href="" variant="brand-Link">
          Политика конфиденциальности
        </Link>
        <Text>Все права защищены и охраняются законом</Text>
        <Text>© 2018-2023</Text>
        <HStack>
          <Text>{texts.getString('create', lang)}</Text>
          <Link href="https://siiidr.github.io/FennecOpenGroup/" isExternal>
            <Image src={fog_logo} alt="itfund" loading="lazy" w="25px" htmlWidth="full" htmlHeight="full" />
          </Link>
          <Text>{texts.getString('support', lang)}</Text>
          <Link href="https://ulgov.ru/" isExternal>
            <Image src={ul_logo} alt="itfund" loading="lazy" w="30px" htmlWidth="full" htmlHeight="full" />
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
});
