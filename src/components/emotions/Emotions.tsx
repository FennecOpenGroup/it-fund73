/* eslint no-return-assign: "error" */
import { HStack, Text, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchChangeEmojiMinus, fetchChangeEmojiPlus } from '../../api/emojiApi';
import { IRootState } from '../../interfaces/IRootState';

interface IEmoutionsProps {
  newsId: number;
  like?: number;
  dislike?: number;
  delight?: number;
  shock?: number;
  smile_face?: number;
  angry?: number;
}

export const Emotions = React.memo(({ newsId, like, dislike, delight, shock, smile_face, angry }: IEmoutionsProps) => {
  const news = useSelector((state: IRootState) => state.core.news);

  const data = localStorage.getItem('newsReadtions');
  console.log(data);
  const emotionsData = data ? JSON.parse(data) : undefined;

  useEffect(() => {
    const dataStorage = localStorage.getItem('newsReadtions');
    const newsReadtions: {
      [x: string]: {
        dislike: boolean;
        delight: boolean;
        shock: boolean;
        smile_face: boolean;
        angry: boolean;
        like: boolean;
      };
    } = {};
    if (!dataStorage && news) {
      Object.keys(news)
        .reverse()
        .map(index => {
          return (newsReadtions[`${news[Number(index)].id}`] = {
            dislike: false,
            delight: false,
            shock: false,
            smile_face: false,
            angry: false,
            like: false,
          });
        });
      const list = JSON.stringify(newsReadtions);
      localStorage.setItem('newsReadtions', list);
    }

  }, [news]);

  return (
    <HStack spacing={0} p={0} m={0}>
      {emotionsData !== undefined && delight !== undefined && (
        <Button
          variant="brand-reactions"
          size="30px"
          iconSpacing={0}
          onClick={async () => {
            emotionsData[newsId].like = false;
            emotionsData[newsId].dislike = false;
            emotionsData[newsId].shock = false;
            emotionsData[newsId].smile_face = false;
            emotionsData[newsId].angry = false;
            if (!emotionsData[newsId].delight) {
              emotionsData[newsId].delight = true;
              await fetchChangeEmojiPlus(newsId, 'delight', delight);
            } else {
              emotionsData[newsId].delight = false;
              await fetchChangeEmojiMinus(newsId, 'delight', delight);
            }
            localStorage.setItem('newsReadtions', JSON.stringify(emotionsData));
          }}
          p={0}
          m={0}
          leftIcon={
            emotionsData[newsId].delight ? (
              <Text fontSize="22px">😍</Text>
            ) : (
              <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                😍
              </Text>
            )
          }
        />
      )}
      {emotionsData !== undefined && shock !== undefined && (
        <Button
          variant="brand-reactions"
          size="30px"
          iconSpacing={0}
          onClick={async () => {
            emotionsData[newsId].like = false;
            emotionsData[newsId].dislike = false;
            emotionsData[newsId].delight = false;
            emotionsData[newsId].smile_face = false;
            emotionsData[newsId].angry = false;
            if (!emotionsData[newsId].shock) {
              emotionsData[newsId].shock = true;
              await fetchChangeEmojiPlus(newsId, 'shock', shock);
            } else {
              emotionsData[newsId].shock = false;
              await fetchChangeEmojiMinus(newsId, 'shock', shock);
            }
            localStorage.setItem('newsReadtions', JSON.stringify(emotionsData));
          }}
          p={0}
          m={0}
          leftIcon={
            emotionsData[newsId].shock ? (
              <Text fontSize="22px">😯</Text>
            ) : (
              <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                😯
              </Text>
            )
          }
        />
      )}
      {emotionsData !== undefined && smile_face !== undefined && (
        <Button
          variant="brand-reactions"
          size="30px"
          iconSpacing={0}
          onClick={async () => {
            emotionsData[newsId].like = false;
            emotionsData[newsId].dislike = false;
            emotionsData[newsId].delight = false;
            emotionsData[newsId].shock = false;
            emotionsData[newsId].angry = false;
            if (!emotionsData[newsId].smile_face) {
              emotionsData[newsId].smile_face = true;
              await fetchChangeEmojiPlus(newsId, 'smile_face', smile_face);
            } else {
              emotionsData[newsId].smile_face = false;
              await fetchChangeEmojiMinus(newsId, 'smile_face', smile_face);
            }
            localStorage.setItem('newsReadtions', JSON.stringify(emotionsData));
          }}
          p={0}
          m={0}
          leftIcon={
            emotionsData[newsId].smile_face ? (
              <Text fontSize="22px">🙂</Text>
            ) : (
              <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                🙂
              </Text>
            )
          }
        />
      )}
      {emotionsData !== undefined && angry !== undefined && (
        <Button
          variant="brand-reactions"
          size="30px"
          iconSpacing={0}
          onClick={async () => {
            emotionsData[newsId].like = false;
            emotionsData[newsId].dislike = false;
            emotionsData[newsId].delight = false;
            emotionsData[newsId].shock = false;
            emotionsData[newsId].smile_face = false;
            if (!emotionsData[newsId].angry) {
              emotionsData[newsId].angry = true;
              await fetchChangeEmojiPlus(newsId, 'angry', angry);
            } else {
              emotionsData[newsId].angry = false;
              await fetchChangeEmojiMinus(newsId, 'angry', angry);
            }
            localStorage.setItem('newsReadtions', JSON.stringify(emotionsData));
          }}
          p={0}
          m={0}
          leftIcon={
            emotionsData[newsId].angry ? (
              <Text fontSize="22px">😡</Text>
            ) : (
              <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                😠
              </Text>
            )
          }
        />
      )}
      {emotionsData !== undefined && dislike !== undefined && (
        <Button
          variant="brand-reactions"
          size="30px"
          iconSpacing={0}
          onClick={async () => {
            emotionsData[newsId].like = false;
            emotionsData[newsId].angry = false;
            emotionsData[newsId].delight = false;
            emotionsData[newsId].shock = false;
            emotionsData[newsId].smile_face = false;
            if (!emotionsData[newsId].dislike) {
              emotionsData[newsId].dislike = true;
              await fetchChangeEmojiPlus(newsId, 'dislike', dislike);
            } else {
              emotionsData[newsId].dislike = false;
              await fetchChangeEmojiMinus(newsId, 'dislike', dislike);
            }
            localStorage.setItem('newsReadtions', JSON.stringify(emotionsData));
          }}
          p={0}
          m={0}
          leftIcon={
            emotionsData[newsId].dislike ? (
              <Text fontSize="22px">👎</Text>
            ) : (
              <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                👎
              </Text>
            )
          }
        />
      )}
      {emotionsData !== undefined && like !== undefined && (
        <Button
          variant="brand-reactions"
          size="30px"
          iconSpacing={0}
          onClick={async () => {
            emotionsData[newsId].dislike = false;
            emotionsData[newsId].angry = false;
            emotionsData[newsId].delight = false;
            emotionsData[newsId].shock = false;
            emotionsData[newsId].smile_face = false;
            if (!emotionsData[newsId].like) {
              emotionsData[newsId].like = true;
              await fetchChangeEmojiPlus(newsId, 'like', like);
            } else {
              emotionsData[newsId].like = false;
              await fetchChangeEmojiMinus(newsId, 'like', like);
            }
            localStorage.setItem('newsReadtions', JSON.stringify(emotionsData));
          }}
          p={0}
          m={0}
          leftIcon={
            emotionsData[newsId].like ? (
              <Text fontSize="22px">👍</Text>
            ) : (
              <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                👍
              </Text>
            )
          }
        />
      )}
    </HStack>
  );
});
