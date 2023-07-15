import { Stack, VStack, Image, Text, HStack, Spacer, Skeleton, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTE_MAINPAGE, ROUTE_NEWS } from '../../constants/routes';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Emotions } from '../emotions/Emotions';
import { IRootState } from '../../interfaces/IRootState';
import { fetchChangeViews } from '../../api/newsApi';

interface INewsContentProps {
  id: number;
  src_content: string;
  name_content: string;
  views_content?: number;
  date_content: Date;
  tag_content: string;
  url_name: string;
}

export const NewsContent = React.memo(
  ({ src_content, name_content, views_content, date_content, tag_content, url_name, id }: INewsContentProps) => {
    const { height } = useWindowDimensions();
    const [load, setLoad] = useState(false);

    const search = useSelector((state: IRootState) => state.core.search);
    const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

    const [isLargerThan590] = useMediaQuery('(min-width: 590px)');

    const highlightFontSize = isLargerThan590 ? '18px' : '14px';
    const highlightColor = themeIsDark ? 'white' : '#121212';
    const tag =
      tag_content === 'GOVERNMENT'
        ? 'ГОСУДАРСТВО'
        : tag_content === 'BUSINESS'
        ? 'БИЗНЕС'
        : tag_content === 'EDUCATION'
        ? 'ОБРАЗОВАНИЕ'
        : 'ИТ';

    const Highlight = ({ text = '', highlight = '' }) => {
      if (!highlight.trim()) {
        return <span style={{ color: highlightColor, fontWeight: 'bold', fontSize: highlightFontSize }}>{text}</span>;
      }
      const regex = new RegExp(`(${highlight})`, 'gi');
      const parts = text.split(regex);

      return (
        <span>
          {parts.filter(String).map((part, i) => {
            return regex.test(part) ? (
              <mark key={i} style={{ color: '#1a1a1a', fontWeight: 'bold', fontSize: highlightFontSize }}>
                {part}
              </mark>
            ) : (
              <span key={i} style={{ color: '#1a1a1a', fontWeight: 'bold', fontSize: highlightFontSize }}>
                {part}
              </span>
            );
          })}
        </span>
      );
    };

    return (
      <VStack w="full">
        <VStack
          w="full"
          cursor="pointer"
          as={RouterLink}
          to={`${ROUTE_MAINPAGE + ROUTE_NEWS}/${url_name}`}
          onClick={async () => {
            await fetchChangeViews(id, views_content);
          }}
        >
          <Image
            src={src_content}
            w={load ? 'full' : '0px'}
            h={load ? `${height / 3.5}px` : '0px'}
            borderRadius="5px"
            objectFit="cover"
            transitionDuration="0.3s"
            onLoad={() => setLoad(true)}
            _hover={{ height: `${height / 3.2}px` }}
          />
          {load === false && (
            <Skeleton w="full" minH={`${height / 4}px`} border="5px" startColor="#BBBBBB" endColor="#e5e5e5" />
          )}
          <Stack border="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
          <Stack align="start" w="full" m={1}>
            {name_content ? (
              <Highlight text={name_content} highlight={search} />
            ) : (
              <Skeleton w="full" minH={`${height / 16}px`} border="5px" startColor="#BBBBBB" endColor="#e5e5e5" />
            )}
          </Stack>
          <Stack border="1px" borderColor={themeIsDark ? 'white' : 'brand.dark'} w="full" m={0} p={0} />
        </VStack>
        <HStack align="center" justify="center" w="full">
          {isLargerThan590 ? (
            <Emotions />
          ) : (
            <VStack m={0} px={2} spacing={2} justify="start" align="start">
              <Text color="#BBBBBB" fontSize={['xs', 'sm']}>
                {date_content}
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
          <HStack w="full" m={0} p={0} spacing={2} justify="start">
            <Text color="#BBBBBB">{date_content}</Text>
            <Text color="#BBBBBB">{tag}</Text>
          </HStack>
        )}
      </VStack>
    );
  },
);
