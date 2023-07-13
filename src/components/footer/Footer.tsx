import { HStack, Link, Spacer, Text, Image, VStack, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

import fog_logo from '../../assets/logo-fog.svg';
import mini_logo from '../../assets/mini-logo.svg';
import ul_logo from '../../assets/ul-logo.svg';

export const Footer = React.memo(() => {
  const [isLargerThan820] = useMediaQuery('(min-width: 820px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan430] = useMediaQuery('(min-width: 430px)');

  return (
    <Stack
      px={isLargerThan770 ? '10%' : '5%'}
      w="full"
      minH="160px"
      justify="center"
      align={isLargerThan820 ? 'center' : 'start'}
      backgroundColor="brand.dark"
      py={2}
      direction={isLargerThan820 ? 'row' : 'column'}
    >
      <Image
        src={mini_logo}
        alt="itfund"
        loading="lazy"
        maxW={isLargerThan820 ? '80px' : isLargerThan430 ? '60px' : '50px'}
        maxH={isLargerThan820 ? '70px' : isLargerThan430 ? '55px' : '45px'}
        p={2}
      />
      <VStack align="left" spacing={1}>
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
      {isLargerThan820 && <Spacer />}
      <VStack align="left" spacing={1}>
        <VStack align="left" spacing={0}>
          <Link href="" variant="brand-Link">
            Политика в отношении обработки персональных данных
          </Link>
          <Link href="" variant="brand-Link">
            Пользовательское соглашение
          </Link>
        </VStack>
        <HStack borderBottom="1px solid white" w="full" m={0} p={0} />
        <Text>© Все права защищены и охраняются законом</Text>
        <HStack>
          <Text>Создан</Text>
          <Link href="https://siiidr.github.io/FennecOpenGroup/" isExternal>
            <Image src={fog_logo} alt="itfund" loading="lazy" w="25px" htmlWidth="full" htmlHeight="full" />
          </Link>
          <Text>при поддержке</Text>
          <Link href="https://ulgov.ru/" isExternal>
            <Image src={ul_logo} alt="itfund" loading="lazy" w="30px" htmlWidth="full" htmlHeight="full" />
          </Link>
        </HStack>
        <Text>{`2016 - ${new Date().getFullYear()}`}</Text>
      </VStack>
    </Stack>
  );
});
