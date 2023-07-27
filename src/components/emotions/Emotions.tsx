/* eslint no-return-assign: "error" */
/* eslint no-unneeded-ternary: "error" */
import { HStack, Text, Button, Grid, GridItem } from '@chakra-ui/react';
import React, { Dispatch, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import {
  fetchChangeEmojiMinus,
  fetchChangeEmojiPlus,
  fetchChangeEmojiShortsMinus,
  fetchChangeEmojiShortsPlus,
} from '../../api/emojiApi';
import { IEmotions } from '../../interfaces/IEmotions';
import { IRootState } from '../../interfaces/IRootState';
import { RootActions } from '../../types/RootActions';
import { coreGetNews, coreGetShortNews, coreSetEmotions } from '../../actions/coreActions';
import { INews } from '../../interfaces/INews';
import { transliterating } from '../../textfunctions/transliterating/transliterating';
import { shortenNumber } from '../../textfunctions/shortenNumber/shortenNumber';

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
    const { url_name } = useParams<{ url_name: string }>();
    const news = useSelector((state: IRootState) => state.core.news);
    const shortNews = useSelector((state: IRootState) => state.core.shortNews);
    const emotions = useSelector((state: IRootState) => state.core.emotions);
    const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

    const [currentNewsId, setNewsContent] = useState<INews>();

    const newsСontentMain = useMemo(
      () => news?.find(newsData => transliterating(newsData.attributes.heading) === url_name),
      [news],
    );
    const newsСontentShorts = useMemo(
      () => shortNews?.find(newsData => transliterating(newsData.attributes.heading) === url_name),
      [shortNews],
    );

    const data = newsСontentShorts ? localStorage.getItem('shortsReactions') : localStorage.getItem('newsReactions');
    const emotionsData = data ? JSON.parse(data) : undefined;

    async function handleEmotionClick(emotion: string) {
      const funcData = newsСontentShorts
        ? localStorage.getItem('shortsReactions')
        : localStorage.getItem('newsReactions');
      const emotionsfuncData = funcData ? JSON.parse(funcData) : undefined;
      const emotionInfo: any = emotionsfuncData;

      const lastEmotion = newsСontentShorts
        ? localStorage.getItem(`lastEmotionShorts:${newsId}`)
        : localStorage.getItem(`lastEmotion:${newsId}`);
      let lastEmotionCount = newsСontentShorts
        ? localStorage.getItem(`lastEmotionShortsCount:${newsId}`)
        : localStorage.getItem(`lastEmotionCount:${newsId}`);

      dispatch(coreSetEmotions(emotionInfo));
      if (currentNewsId && news) {
        let emotionStatus =
          emotion === 'like'
            ? currentNewsId.attributes.like
            : emotion === 'dislike'
            ? currentNewsId.attributes.dislike
            : emotion === 'shock'
            ? currentNewsId.attributes.shock
            : emotion === 'smile_face'
            ? currentNewsId.attributes.smile_face
            : emotion === 'delight'
            ? currentNewsId.attributes.delight
            : currentNewsId.attributes.angry;

        Object.keys(emotionInfo[newsId]).forEach(async function (element) {
          if (element !== emotion) {
            emotionInfo[newsId][element] = false;
          }
        });
        if (emotionInfo[newsId][emotion] === false && emotionStatus !== undefined) {
          emotionInfo[newsId][emotion] = true;
          newsСontentShorts
            ? await fetchChangeEmojiShortsPlus(newsId, `${emotion}`, emotionStatus)
            : await fetchChangeEmojiPlus(newsId, `${emotion}`, emotionStatus);
          emotionStatus += 1;
          if (lastEmotion === '' || lastEmotion === emotion) {
            newsСontentShorts
              ? localStorage.setItem(`lastEmotionShorts:${newsId}`, emotion)
              : localStorage.setItem(`lastEmotion:${newsId}`, emotion);
            newsСontentShorts
              ? localStorage.setItem(`lastEmotionShortsCount:${newsId}`, String(emotionStatus))
              : localStorage.setItem(`lastEmotionCount:${newsId}`, String(emotionStatus));
          } else {
            lastEmotionCount = newsСontentShorts
              ? localStorage.getItem(`lastEmotionShortsCount:${newsId}`)
              : localStorage.getItem(`lastEmotionCount:${newsId}`);
            emotionStatus !== undefined &&
              emotionStatus > 0 &&
              (newsСontentShorts
                ? await fetchChangeEmojiShortsMinus(newsId, `${lastEmotion}`, Number(lastEmotionCount))
                : await fetchChangeEmojiMinus(newsId, `${lastEmotion}`, Number(lastEmotionCount)));
            newsСontentShorts
              ? localStorage.setItem(`lastEmotionShorts:${newsId}`, emotion)
              : localStorage.setItem(`lastEmotion:${newsId}`, emotion);
            newsСontentShorts
              ? localStorage.setItem(`lastEmotionShortsCount:${newsId}`, String(emotionStatus))
              : localStorage.setItem(`lastEmotionCount:${newsId}`, String(emotionStatus));
          }
        } else {
          emotionInfo[newsId][emotion] = false;
          emotionStatus !== undefined &&
            emotionStatus > 0 &&
            (newsСontentShorts
              ? await fetchChangeEmojiShortsMinus(newsId, `${emotion}`, emotionStatus)
              : await fetchChangeEmojiMinus(newsId, `${emotion}`, emotionStatus));
        }
        dispatch(coreSetEmotions(emotionInfo));
        dispatch(coreGetNews());
        dispatch(coreGetShortNews());
        newsСontentShorts
          ? localStorage.setItem('shortsReactions', JSON.stringify(emotionInfo))
          : localStorage.setItem('newsReactions', JSON.stringify(emotionInfo));
      }
    }

    useEffect(() => {
      if (url_name) {
        newsСontentMain !== undefined ? setNewsContent(newsСontentMain) : setNewsContent(newsСontentShorts);
      } else {
        const mainNews = news?.find(name => name.id === newsId);
        setNewsContent(mainNews);
      }
    }, [newsСontentMain, newsСontentShorts, url_name, news]);

    useEffect(() => {
      if (newsСontentShorts) {
        const dataStorage = localStorage.getItem('shortsReactions');
        const newsReactions: IEmotions = {};
        if (!dataStorage && shortNews) {
          Object.keys(shortNews).map(index => {
            return (newsReactions[`${shortNews[Number(index)].id}`] = {
              dislike: false,
              delight: false,
              shock: false,
              smile_face: false,
              angry: false,
              like: false,
            });
          });
          localStorage.setItem('shortsReactions', JSON.stringify(newsReactions));
        }
        dispatch(coreSetEmotions(emotionsData));
      } else {
        const dataStorage = localStorage.getItem('newsReactions');
        const newsReactions: IEmotions = {};
        if (!dataStorage && news) {
          Object.keys(news).map(index => {
            return (newsReactions[`${news[Number(index)].id}`] = {
              dislike: false,
              delight: false,
              shock: false,
              smile_face: false,
              angry: false,
              like: false,
            });
          });
          localStorage.setItem('newsReactions', JSON.stringify(newsReactions));
        }
        dispatch(coreSetEmotions(emotionsData));
      }
    }, [news]);
    useEffect(() => {
      if (newsСontentShorts) {
        const lastEmotion = localStorage.getItem(`lastEmotionShorts:${newsId}`);
        const lastEmotionCount = localStorage.getItem(`lastEmotionShortsCount:${newsId}`);
        if (!lastEmotion) {
          localStorage.setItem(`lastEmotionShorts:${newsId}`, '');
        }
        if (!lastEmotionCount) {
          localStorage.setItem(`lastEmotionShortsCount:${newsId}`, '0');
        }
      } else {
        const lastEmotion = localStorage.getItem(`lastEmotion:${newsId}`);
        const lastEmotionCount = localStorage.getItem(`lastEmotionCount:${newsId}`);
        if (!lastEmotion) {
          localStorage.setItem(`lastEmotion:${newsId}`, '');
        }
        if (!lastEmotionCount) {
          localStorage.setItem(`lastEmotionCount:${newsId}`, '0');
        }
      }
    }, []);

    return (
      <Grid maxH="40px" templateColumns="repeat(6, 1fr)" templateRows="repeat(1, 1fr)" p={0} m={0}>
        <GridItem>
          {emotionsData !== undefined && emotions !== undefined && emotions[newsId] && delight !== undefined && (
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
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.delight)}
                      </Text>
                    )}
                  </HStack>
                ) : (
                  <HStack spacing={0}>
                    <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                      😍
                    </Text>
                    {news && info && (
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.delight)}
                      </Text>
                    )}
                  </HStack>
                )
              }
            />
          )}
        </GridItem>
        <GridItem>
          {emotionsData !== undefined && emotions !== undefined && emotions[newsId] && shock !== undefined && (
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
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.shock)}
                      </Text>
                    )}
                  </HStack>
                ) : (
                  <HStack spacing={0}>
                    <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                      😯
                    </Text>
                    {news && info && (
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.shock)}
                      </Text>
                    )}
                  </HStack>
                )
              }
            />
          )}
        </GridItem>
        <GridItem>
          {emotionsData !== undefined && emotions !== undefined && emotions[newsId] && smile_face !== undefined && (
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
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.smile_face)}
                      </Text>
                    )}
                  </HStack>
                ) : (
                  <HStack spacing={0}>
                    <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                      🙂
                    </Text>
                    {news && info && (
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.smile_face)}
                      </Text>
                    )}
                  </HStack>
                )
              }
            />
          )}
        </GridItem>
        <GridItem>
          {emotionsData !== undefined && emotions !== undefined && emotions[newsId] && angry !== undefined && (
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
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.angry)}
                      </Text>
                    )}
                  </HStack>
                ) : (
                  <HStack spacing={0}>
                    <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                      😠
                    </Text>
                    {news && info && (
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.angry)}
                      </Text>
                    )}
                  </HStack>
                )
              }
            />
          )}
        </GridItem>
        <GridItem>
          {emotionsData !== undefined && emotions !== undefined && emotions[newsId] && dislike !== undefined && (
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
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.dislike)}
                      </Text>
                    )}
                  </HStack>
                ) : (
                  <HStack spacing={0}>
                    <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                      👎
                    </Text>
                    {news && info && (
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.dislike)}
                      </Text>
                    )}
                  </HStack>
                )
              }
            />
          )}
        </GridItem>
        <GridItem>
          {emotionsData !== undefined && emotions !== undefined && emotions[newsId] && like !== undefined && (
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
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.like)}
                      </Text>
                    )}
                  </HStack>
                ) : (
                  <HStack spacing={0}>
                    <Text fontSize="xl" filter="grayscale(100%) hue-rotate(90deg)">
                      👍
                    </Text>
                    {news && info && (
                      <Text color={themeIsDark ? 'white' : 'brand.dark'}>
                        {currentNewsId && shortenNumber(currentNewsId.attributes.like)}
                      </Text>
                    )}
                  </HStack>
                )
              }
            />
          )}
        </GridItem>
      </Grid>
    );
  },
);
