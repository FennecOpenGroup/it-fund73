import { VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Helmet>
        <title>it-fund73</title>
      </Helmet>
      <VStack minH={`${height}px`} justify="center"></VStack>
    </>
  );
});
