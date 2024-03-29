/* eslint no-return-assign: "error" */
/* eslint no-unneeded-ternary: "error" */
/* eslint no-console: "error" */
import { HStack, Text, Button } from '@chakra-ui/react';
import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchChangeEmojiMinus, fetchChangeEmojiPlus } from '../../api/emojiApi';
import { IEmotions } from '../../interfaces/IEmotions';
import { IRootState } from '../../interfaces/IRootState';
import { RootActions } from '../../types/RootActions';
import { coreGetNews, coreSetEmotions } from '../../actions/coreActions';

interface IEmoutionsProps {
  newsId: number;
  like?: number;
  dislike?: number;
  delight?: number;
  shock?: number;
  smile_face?: number;
  angry?: number;
  info?: boolean;
}

export const Emotions = React.memo(
  ({ newsId, like, dislike, delight, smile_face, angry, shock, info }: IEmoutionsProps) => {
    const dispatch = useDispatch<Dispatch<RootActions>>();

    const news = useSelector((state: IRootState) => state.core.news);
    const emotions = useSelector((state: IRootState) => state.core.emotions);
    const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

    const data = localStorage.getItem('newsReadtions');
    const emotionsData = data ? JSON.parse(data) : undefined;

    async function handleEmotionClick(emotion: string) {
      const funcData = localStorage.getItem('newsReadtions');
      const emotionsfuncData = funcData ? JSON.parse(funcData) : undefined;
      const emotionInfo: any = emotionsfuncData;

      const lastEmotion = localStorage.getItem(`lastEmotion:${newsId}`);
      let lastEmotionCount = localStorage.getItem(`lastEmotionCount:${newsId}`);

      dispatch(coreSetEmotions(emotionInfo));
      if (news) {
        let emotionStatus =
          emotion === 'like'
            ? news[newsId - 1].attributes.like
            : emotion === 'dislike'
            ? news[newsId - 1].attributes.dislike
            : emotion === 'shock'
            ? news[newsId - 1].attributes.shock
            : emotion === 'smile_face'
            ? news[newsId - 1].attributes.smile_face
            : emotion === 'delight'
            ? news[newsId - 1].attributes.delight
            : news[newsId - 1].attributes.angry;

        Object.keys(emotionInfo[newsId]).forEach(async function (element) {
          if (element !== emotion && news) {
            emotionInfo[newsId][element] = false;
          }
        });

        if (emotionInfo[newsId][emotion] === false && news && emotionStatus !== undefined) {
          emotionInfo[newsId][emotion] = true;
          await fetchChangeEmojiPlus(newsId, `${emotion}`, emotionStatus);
          emotionStatus += 1;
          if (lastEmotion === '' || lastEmotion === emotion) {
            localStorage.setItem(`lastEmotion:${newsId}`, emotion);
            localStorage.setItem(`lastEmotionCount:${newsId}`, String(emotionStatus));
          } else {
            lastEmotionCount = localStorage.getItem(`lastEmotionCount:${newsId}`);
            emotionStatus !== undefined &&
              emotionStatus > 0 &&
              (await fetchChangeEmojiMinus(newsId, `${lastEmotion}`, Number(lastEmotionCount)));
            localStorage.setItem(`lastEmotion:${newsId}`, emotion);
            localStorage.setItem(`lastEmotionCount:${newsId}`, String(emotionStatus));
          }
        } else {
          emotionInfo[newsId][emotion] = false;
          emotionStatus !== undefined &&
            emotionStatus > 0 &&
            (await fetchChangeEmojiMinus(newsId, `${emotion}`, emotionStatus));
        }
        dispatch(coreSetEmotions(emotionInfo));
        dispatch(coreGetNews());
        localStorage.setItem('newsReadtions', JSON.stringify(emotionInfo));
      }
    }

    useEffect(() => {
      const dataStorage = localStorage.getItem('newsReadtions');
      const newsReadtions: IEmotions = {};
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
        localStorage.setItem('newsReadtions', JSON.stringify(newsReadtions));
      }
      dispatch(coreSetEmotions(emotionsData));
    }, [news]);

    useEffect(() => {
      const lastEmotion = localStorage.getItem(`lastEmotion:${newsId}`);
      const lastEmotionCount = localStorage.getItem(`lastEmotionCount:${newsId}`);
      if (!lastEmotion) {
        localStorage.setItem(`lastEmotion:${newsId}`, '');
      }
      if (!lastEmotionCount) {
        localStorage.setItem(`lastEmotionCount:${newsId}`, '0');
      }
    }, []);

    return (
      <HStack spacing={2} p={0} m={0}>
        {emotionsData !== undefined && emotions !== undefined && delight !== undefined && (
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => handleEmotionClick('delight')}
            p={0}
            m={0}
            leftIcon={
              emotions[newsId].delight ? (
                <HStack spacing={0}>
                  <Text fontSize="22px">😍</Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.delight}</Text>
                  )}
                </HStack>
              ) : (
                <HStack spacing={0}>
                  <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                    😍
                  </Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.delight}</Text>
                  )}
                </HStack>
              )
            }
          />
        )}
        {emotionsData !== undefined && emotions !== undefined && shock !== undefined && (
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => handleEmotionClick('shock')}
            p={0}
            m={0}
            leftIcon={
              emotions[newsId].shock ? (
                <HStack spacing={0}>
                  <Text fontSize="22px">😯</Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.shock}</Text>
                  )}
                </HStack>
              ) : (
                <HStack spacing={0}>
                  <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                    😯
                  </Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.shock}</Text>
                  )}
                </HStack>
              )
            }
          />
        )}
        {emotionsData !== undefined && emotions !== undefined && smile_face !== undefined && (
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => handleEmotionClick('smile_face')}
            p={0}
            m={0}
            leftIcon={
              emotions[newsId].smile_face ? (
                <HStack spacing={0}>
                  <Text fontSize="22px">🙂</Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.smile_face}</Text>
                  )}
                </HStack>
              ) : (
                <HStack spacing={0}>
                  <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                    🙂
                  </Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.smile_face}</Text>
                  )}
                </HStack>
              )
            }
          />
        )}
        {emotionsData !== undefined && emotions !== undefined && angry !== undefined && (
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => handleEmotionClick('angry')}
            p={0}
            m={0}
            leftIcon={
              emotions[newsId].angry ? (
                <HStack spacing={0}>
                  <Text fontSize="22px">😡</Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.angry}</Text>
                  )}
                </HStack>
              ) : (
                <HStack spacing={0}>
                  <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                    😠
                  </Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.angry}</Text>
                  )}
                </HStack>
              )
            }
          />
        )}
        {emotionsData !== undefined && emotions !== undefined && dislike !== undefined && (
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => handleEmotionClick('dislike')}
            p={0}
            m={0}
            leftIcon={
              emotions[newsId].dislike ? (
                <HStack spacing={0}>
                  <Text fontSize="22px">👎</Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.dislike}</Text>
                  )}
                </HStack>
              ) : (
                <HStack spacing={0}>
                  <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                    👎
                  </Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.dislike}</Text>
                  )}
                </HStack>
              )
            }
          />
        )}
        {emotionsData !== undefined && emotions !== undefined && like !== undefined && (
          <Button
            variant="brand-reactions"
            size="30px"
            iconSpacing={0}
            onClick={() => handleEmotionClick('like')}
            p={0}
            m={0}
            leftIcon={
              emotions[newsId].like ? (
                <HStack spacing={0}>
                  <Text fontSize="22px">👍</Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.like}</Text>
                  )}
                </HStack>
              ) : (
                <HStack spacing={0}>
                  <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                    👍
                  </Text>
                  {news && info && (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'}>{news[newsId - 1].attributes.like}</Text>
                  )}
                </HStack>
              )
            }
          />
        )}
      </HStack>
    );
  },
);
