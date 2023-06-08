import { Stack, VStack, Image, Link, Text, HStack, Button, Spacer, Skeleton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiShow } from 'react-icons/bi';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';

interface News {
  src?: any;
  name?: string;
  tag?: string;
  views?: string;
  date?: Date;
}

export const NewsContent = React.memo(({ src, name, views, date, tag }: News) => {
  const { height } = useWindowDimensions();

  const [load, setLoad] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [happy, setHappy] = useState(false);
  const [shocked, setShocked] = useState(false);
  const [angry, setAngry] = useState(false);
  const [smile, setSmile] = useState(false);

  return (
    <VStack w="full">
      <VStack w="full" cursor="pointer">
        <Image
          src={src}
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
          {name ? (
            <Link href="" color="brand.dark" fontWeight="bold" fontSize="md">
              {name}
            </Link>
          ) : (
            <Skeleton w="full" minH={`${height / 16}px`} border="5px" startColor="#BBBBBB" endColor="#e5e5e5" />
          )}
        </Stack>
        <Stack border="1px" w="full" m={0} p={0} />
      </VStack>
      <HStack align="center" justify="center" w="full">
        <HStack spacing={0} p={0} m={0}>
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => {
              setHappy(!happy);
              setLike(false);
              setDislike(false);
              setShocked(false);
              setAngry(false);
              setSmile(false);
            }}
            p={0}
            m={0}
            leftIcon={
              happy ? (
                <Text fontSize="22px">😍</Text>
              ) : (
                <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                  😍
                </Text>
              )
            }
          />
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => {
              setShocked(!shocked);
              setLike(false);
              setDislike(false);
              setHappy(false);
              setAngry(false);
              setSmile(false);
            }}
            p={0}
            m={0}
            leftIcon={
              shocked ? (
                <Text fontSize="22px">😯</Text>
              ) : (
                <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                  😯
                </Text>
              )
            }
          />
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => {
              setSmile(!smile);
              setLike(false);
              setDislike(false);
              setHappy(false);
              setShocked(false);
              setAngry(false);
            }}
            p={0}
            m={0}
            leftIcon={
              smile ? (
                <Text fontSize="22px">🙂</Text>
              ) : (
                <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                  🙂
                </Text>
              )
            }
          />
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => {
              setAngry(!angry);
              setLike(false);
              setDislike(false);
              setHappy(false);
              setShocked(false);
              setSmile(false);
            }}
            p={0}
            m={0}
            leftIcon={
              angry ? (
                <Text fontSize="22px">😡</Text>
              ) : (
                <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                  😠
                </Text>
              )
            }
          />
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => {
              setDislike(!dislike);
              setLike(false);
              setSmile(false);
              setHappy(false);
              setShocked(false);
              setAngry(false);
            }}
            p={0}
            m={0}
            leftIcon={
              dislike ? (
                <Text fontSize="22px">👎</Text>
              ) : (
                <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                  👎
                </Text>
              )
            }
          />
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => {
              setLike(!like);
              setDislike(false);
              setSmile(false);
              setHappy(false);
              setShocked(false);
              setAngry(false);
            }}
            p={0}
            m={0}
            leftIcon={
              like ? (
                <Text fontSize="22px">👍</Text>
              ) : (
                <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                  👍
                </Text>
              )
            }
          />
        </HStack>
        <Spacer />
        <HStack spacing={0} pr={2}>
          <BiShow color="#BBBBBB" size="22px" />
          {views ? (
            <Text color="#BBBBBB" fontSize="lg" p={0} m={0}>
              {views}
            </Text>
          ) : (
            <Text color="#BBBBBB" fontSize="md" p={0} m={0}>
              Нет просмотров
            </Text>
          )}
        </HStack>
      </HStack>
      <HStack w="full" m={0} px={2} spacing={2} justify="start">
        <Text color="#BBBBBB">{date?.toDateString()}</Text>
        <Text color="#BBBBBB">{tag}</Text>
      </HStack>
    </VStack>
  );
});
