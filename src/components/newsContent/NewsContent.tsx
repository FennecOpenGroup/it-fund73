import { Stack, VStack, Image, Text, HStack, Spacer, Skeleton, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTE_MAINPAGE, ROUTE_NEWS } from '../../constants/routes';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { INews } from '../../interfaces/INews';
import { Emotions } from '../emotions/Emotions';
import { IRootState } from '../../interfaces/IRootState';

export const NewsContent = React.memo(
  ({ src_content, name_content, views_content, date_content, tag_content, short_name }: INews) => {
    const { height } = useWindowDimensions();
    const [load, setLoad] = useState(false);

    const search = useSelector((state: IRootState) => state.core.search);

    const [isLargerThan590] = useMediaQuery('(min-width: 590px)');

    const highlightFontSize = isLargerThan590 ? '18px' : '14px';

    const Highlight = ({ text = '', highlight = '' }) => {
      if (!highlight.trim()) {
        return <span style={{ color: '#1a1a1a', fontWeight: '700', fontSize: highlightFontSize }}>{text}</span>;
      }
      const regex = new RegExp(`(${highlight})`, 'gi');
      const parts = text.split(regex);

      return (
        <span>
          {parts.filter(String).map((part, i) => {
            return regex.test(part) ? (
              <mark key={i} style={{ color: '#1a1a1a', fontWeight: '700', fontSize: highlightFontSize }}>
                {part}
              </mark>
            ) : (
              <span key={i} style={{ color: '#1a1a1a', fontWeight: '700', fontSize: highlightFontSize }}>
                {part}
              </span>
            );
          })}
        </span>
      );
    };

    return (
      <VStack w="full">
        <VStack w="full" cursor="pointer" as={RouterLink} to={`${ROUTE_MAINPAGE + ROUTE_NEWS}/${short_name}`}>
          <Image
            src={src_content}
            w={load ? 'full' : '0px'}
            h={load ? `${height / 3.8}px` : '0px'}
            borderRadius="5px"
            objectFit="cover"
            transitionDuration="0.3s"
            onLoad={() => setLoad(true)}
            _hover={{ height: `${height / 3.5}px` }}
          />
          {load === false && (
            <Skeleton w="full" minH={`${height / 4}px`} border="5px" startColor="#BBBBBB" endColor="#e5e5e5" />
          )}
          <Stack border="1px" w="full" m={0} p={0} />
          <Stack align="start" w="full" m={1}>
            {name_content ? (
              <Highlight text={name_content} highlight={search} />
            ) : (
              <Skeleton w="full" minH={`${height / 16}px`} border="5px" startColor="#BBBBBB" endColor="#e5e5e5" />
            )}
          </Stack>
          <Stack border="1px" w="full" m={0} p={0} />
        </VStack>
        <HStack align="center" justify="center" w="full">
          {isLargerThan590 ? (
            <Emotions />
          ) : (
            <VStack m={0} px={2} spacing={2} justify="start" align="start">
              <Text color="#BBBBBB" fontSize={['xs', 'sm']}>
                {date_content?.toDateString()}
              </Text>
            </VStack>
          )}
          <Spacer />
          <HStack spacing={0} pr={2}>
            <BiShow color="#BBBBBB" size="22px" />
            {views_content ? (
              <Text color="#BBBBBB" fontSize={['sm', 'md', 'lg']} p={0} m={0}>
                {views_content}
              </Text>
            ) : (
              <Text color="#BBBBBB" fontSize={['xs', 'sm', 'md']} p={0} m={0} align="center">
                Нет просмотров
              </Text>
            )}
          </HStack>
        </HStack>
        {isLargerThan590 && (
          <HStack w="full" m={0} px={2} spacing={2} justify="start">
            <Text color="#BBBBBB">{date_content?.toDateString()}</Text>
            <Text color="#BBBBBB">{tag_content}</Text>
          </HStack>
        )}
      </VStack>
    );
  },
);
