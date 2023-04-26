import { Button, Heading, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

import { ROUTE_ABOUTUS, ROUTE_DOCS, ROUTE_REQUISITES, ROUTE_TEAM } from '../../constants/routes';

interface IAboutUsBlock {
  fund?: boolean;
  team?: boolean;
  docs?: boolean;
  num?: boolean;
}

export const AboutUsBlock = React.memo(({ fund, team, docs, num }: IAboutUsBlock) => {
  return (
    <VStack justify="center" px={6} py={1} align="start" position="sticky" top="0px" zIndex="15">
      <VStack justify="center" position="static" pt={14}>
        <VStack spacing={0} align="start">
          <Heading color="brand.dark" fontWeight="semibold" fontSize={['xl', '2xl', '3xl']}>
            О нас
          </Heading>
          <Button
            variant="brand-header"
            h="30px"
            fontSize={['sm', 'md', 'lg']}
            textDecoration={fund ? 'underline' : 'none'}
            fontWeight={fund ? 'bold' : 'normal'}
            color="brand.dark"
            as={RouterLink}
            to={ROUTE_ABOUTUS}
          >
            Фонд
          </Button>
          <Button
            variant="brand-header"
            h="30px"
            fontSize={['sm', 'md', 'lg']}
            textDecoration={team ? 'underline' : 'none'}
            fontWeight={team ? 'bold' : 'normal'}
            color="brand.dark"
            as={RouterLink}
            to={ROUTE_TEAM}
          >
            Команда
          </Button>
          <Button
            variant="brand-header"
            h="30px"
            fontSize={['sm', 'md', 'lg']}
            textDecoration={docs ? 'underline' : 'none'}
            fontWeight={docs ? 'bold' : 'normal'}
            color="brand.dark"
            as={RouterLink}
            to={ROUTE_DOCS}
          >
            Документы
          </Button>
          <Button
            variant="brand-header"
            h="30px"
            fontSize={['sm', 'md', 'lg']}
            textDecoration={num ? 'underline' : 'none'}
            fontWeight={num ? 'bold' : 'normal'}
            color="brand.dark"
            as={RouterLink}
            to={ROUTE_REQUISITES}
          >
            Реквизиты
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
});
