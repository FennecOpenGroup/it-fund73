import { HStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { fetchChangeEmojiPlus } from '../../api/emojiApi';

interface IEmoutionsProps {
  newsId: number;
  like: number;
  dislike: number;
  delight: number;
  shock: number;
  smile_face: number;
  angry: number;
}

export const Emotions = React.memo(({ newsId, like, dislike, delight, shock, smile_face, angry }: IEmoutionsProps) => {
  const [likeState, setLikeState] = useState(false);
  const [dislikeState, setDislikeState] = useState(false);
  const [happy, setHappy] = useState(false);
  const [shocked, setShocked] = useState(false);
  const [angryState, setAngryState] = useState(false);
  const [smile, setSmile] = useState(false);

  return (
    <HStack spacing={0} p={0} m={0}>
      <Button
        variant="brand-reactions"
        size="30px"
        iconSpacing={0}
        onClick={async () => {
          setHappy(!happy);
          setLikeState(false);
          setDislikeState(false);
          setShocked(false);
          setAngryState(false);
          setSmile(false);
          await fetchChangeEmojiPlus(newsId, 'delight', delight);
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
        onClick={async () => {
          setShocked(!shocked);
          setLikeState(false);
          setDislikeState(false);
          setHappy(false);
          setAngryState(false);
          setSmile(false);
          await fetchChangeEmojiPlus(newsId, 'shock', shock);
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
        onClick={async () => {
          setSmile(!smile);
          setLikeState(false);
          setDislikeState(false);
          setHappy(false);
          setShocked(false);
          setAngryState(false);
          await fetchChangeEmojiPlus(newsId, 'smile_face', smile_face);
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
        onClick={async () => {
          setAngryState(!angryState);
          setLikeState(false);
          setDislikeState(false);
          setHappy(false);
          setShocked(false);
          setSmile(false);
          await fetchChangeEmojiPlus(newsId, 'angry', angry);
        }}
        p={0}
        m={0}
        leftIcon={
          angryState ? (
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
        onClick={async () => {
          setDislikeState(!dislikeState);
          setLikeState(false);
          setSmile(false);
          setHappy(false);
          setShocked(false);
          setAngryState(false);
          await fetchChangeEmojiPlus(newsId, 'dislike', dislike);
        }}
        p={0}
        m={0}
        leftIcon={
          dislikeState ? (
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
        onClick={async () => {
          setLikeState(!likeState);
          setDislikeState(false);
          setSmile(false);
          setHappy(false);
          setShocked(false);
          setAngryState(false);
          await fetchChangeEmojiPlus(newsId, 'like', like);
        }}
        p={0}
        m={0}
        leftIcon={
          likeState ? (
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
