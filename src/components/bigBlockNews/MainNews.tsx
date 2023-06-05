import { Stack, VStack, Image, Link, Text, HStack, Button, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BsEmojiHeartEyesFill } from 'react-icons/bs';
import { ImShocked2 } from 'react-icons/im';
import { FaAngry, FaSmile } from 'react-icons/fa';
import { BiAngry, BiDislike, BiHappyHeartEyes, BiLike, BiShocked, BiShow, BiSmile } from 'react-icons/bi';

interface News {
  src: any;
  name: string;
  views: number;
}

export const MainNews = React.memo(({ src, name, views }: News) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [happy, setHappy] = useState(false);
  const [shocked, setShocked] = useState(false);
  const [angry, setAngry] = useState(false);
  const [smile, setSmile] = useState(false);

  return (
    <VStack w="50%">
      <Image src={src} w="full" borderTopStartRadius="5px" borderTopEndRadius="5px" />
      <Stack border="1px" w="full" m={0} p={0} />
      <Stack align="start" w="full" m={1}>
        <Link href="" color="brand.dark" fontWeight="bold" fontSize="md">
          {name}
        </Link>
      </Stack>
      <Stack border="1px" w="full" m={0} p={0} />
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
              happy ? <BsEmojiHeartEyesFill size="25px" transform="scale(-1, 1)" /> : <BiHappyHeartEyes size="25px" />
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
            leftIcon={shocked ? <ImShocked2 size="25px" transform="scale(-1, 1)" /> : <BiShocked size="25px" />}
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
            leftIcon={angry ? <FaAngry size="25px" transform="scale(-1, 1)" /> : <BiAngry size="25px" />}
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
            leftIcon={smile ? <FaSmile size="25px" transform="scale(-1, 1)" /> : <BiSmile size="25px" />}
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
            leftIcon={dislike ? <AiFillDislike size="25px" transform="scale(-1, 1)" /> : <BiDislike size="25px" />}
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
            leftIcon={like ? <AiFillLike size="25px" /> : <BiLike size="25px" />}
          />
        </HStack>
        <Spacer />
        <HStack spacing={0}>
          <BiShow color="#BBBBBB" size="22px" />
          <Text color="#BBBBBB" fontSize="lg" p={0} m={0}>
            {views}K
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
});
