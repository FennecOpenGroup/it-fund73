import { HStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

export const Emotions = React.memo(() => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [happy, setHappy] = useState(false);
  const [shocked, setShocked] = useState(false);
  const [angry, setAngry] = useState(false);
  const [smile, setSmile] = useState(false);

  return (
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
  );
});
