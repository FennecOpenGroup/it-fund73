import { HStack, Link, Spacer, Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import fog_logo from '../../assets/logo-fog.svg';
import mini_logo from '../../assets/mini-logo.svg';
import ul_logo from '../../assets/ul-logo.svg';
import { IRootState } from '../../interfaces/IRootState';

export const Footer = React.memo(() => {
  const texts = new LocalizedStrings({
    EN: {
      create: 'Created with the support of',
      support: 'with the support of',
    },
    RU: {
      create: 'Создали ',
      support: 'при поддержке',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

  return (
    <HStack px="10%" w="full" h="150px" justify="center" backgroundColor="brand.dark" py={2}>
      <Image src={mini_logo} alt="itfund" loading="lazy" htmlWidth="full" htmlHeight="full" />
      <VStack align="left">
        <Link href="" variant="brand-Link">
          Пользовательское соглашение
        </Link>
        <Text>
          Контакты:
          <Link href="tel:8 (8422) 58-17-47">8 (8422) 58-17-47</Link>
          <Link href="mailto:it_ulsk@mail.ru">it_ulsk@mail.ru</Link>
        </Text>
        <Text>
          Адрес:
          <Link
            href="https://yandex.ru/maps/195/ulyanovsk/house/ulitsa_minayeva_11/YEEYdQ9nSkMAQFtufX9xeX9mYg==/?ll=48.387366%2C54.308356&z=16.48"
            isExternal
          >
            432017, г.Ульяновск, улица Минаева, дом 11, офис 305
          </Link>
        </Text>
      </VStack>
      <Spacer />
      <VStack align="left">
        <Link href="" variant="brand-Link">
          Политика в отношении обработки персональных данных
        </Link>
        <Text>Все права защищены и охраняются законом</Text>
        <Text>{`© 2017-${new Date().getFullYear()}`}</Text>
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
