import { HStack, VStack, Text, Image, Stack, Spacer, useToast, useMediaQuery, Link } from '@chakra-ui/react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactMarkdown from 'react-markdown';
import { LinkIcon } from '@chakra-ui/icons';
import React, { Dispatch, useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BiShow } from 'react-icons/bi';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Emotions } from '../../components/emotions/Emotions';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { calculateReadingTime } from '../../textfunctions/reattime/readtime';
import { ROUTE_NEWS } from '../../constants/routes';
import { IRootState } from '../../interfaces/IRootState';
import { coreGetNews, coreGetShortNews } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { API_URL } from '../../constants/env';
import { transliterating } from '../../textfunctions/transliterating/transliterating';
import { INews } from '../../interfaces/INews';

export const News = React.memo(() => {
  const { height } = useWindowDimensions();
  const { url_name } = useParams<{ url_name: string }>();
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const news = useSelector((state: IRootState) => state.core.news);
  const shortNews = useSelector((state: IRootState) => state.core.shortNews);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const toast = useToast();

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThan1030] = useMediaQuery('(min-width: 1030px)');
  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan680] = useMediaQuery('(min-width: 680px)');
  const [isLargerThan395] = useMediaQuery('(min-width: 395px)');

  const [newsСontent, setNewsContent] = useState<INews>();

  const newsСontentMain = useMemo(
    () => news?.find(newsData => transliterating(newsData.attributes.heading) === url_name),
    [news],
  );
  const newsСontentShorts = useMemo(
    () => shortNews?.find(newsData => transliterating(newsData.attributes.heading) === url_name),
    [shortNews],
  );

  const image = newsСontent ? newsСontent.attributes.image.data['0'].attributes : undefined;

  const refNews = useRef<HTMLDivElement>(null);

  const tag =
    newsСontent?.attributes.tags === 'GOVERNMENT'
      ? 'ГОСУДАРСТВО'
      : newsСontent?.attributes.tags === 'BUSINESS'
      ? 'БИЗНЕС'
      : newsСontent?.attributes.tags === 'EDUCATION'
      ? 'ОБРАЗОВАНИЕ'
      : 'ИТ';

  useEffect(() => {
    dispatch(coreGetNews());
    dispatch(coreGetShortNews());
  }, []);
  useEffect(() => {
    newsСontentMain !== undefined ? setNewsContent(newsСontentMain) : setNewsContent(newsСontentShorts);
  }, [newsСontentMain, newsСontentShorts]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund73 | {`${newsСontent?.attributes.heading}`}</title>
        <meta charSet="UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        {newsСontent && <meta name="Новости" content={newsСontent.attributes.text} />}
        {newsСontent && <meta property="og:title" content={newsСontent.attributes.text} />}
        {newsСontent && <meta property="og:descripsion" content={newsСontent.attributes.text} />}
        {newsСontent && <meta name="vk:title" content={newsСontent.attributes.text} />}
        {newsСontent && <meta name="vk:descripsion" content={newsСontent.attributes.text} />}
        {image && <meta property="og:image:type" content={`${image.mime}`} />}
        {image && <meta name="vk:image" content={`${API_URL}${image.url}`} />}
        {image && <meta name="vk:image" content={`${API_URL}${image.url}`} />}
        {image && <meta name="vk:card" content={`${image.mime}`} />}
      </Helmet>
      <Header />
      <VStack
        minH={`${height}px`}
        justify="center"
        px={isLargerThan770 ? '10%' : '5%'}
        bg={themeIsDark ? '#121212' : 'white'}
      >
        <VStack
          w="full"
          bg={themeIsDark ? '#242323' : 'brand.beige'}
          pl={[2, 3, 4]}
          pb={[4, 6]}
          boxShadow="5px 0px rgb(3,0,15,15%)"
        >
          <HStack w="full" align="flex-start">
            <VStack
              w="full"
              maxW={isLargerThan1030 ? ['60%', '80%'] : '100%'}
              pt={4}
              pl={2}
              pr={5}
              align="start"
              ref={refNews}
            >
              <Text
                color={themeIsDark ? 'white' : 'brand.dark'}
                fontSize={['lg', 'xl', '2xl']}
                fontWeight="bold"
                align={isLargerThan1030 ? 'start' : 'center'}
              >
                {newsСontent?.attributes.heading}
              </Text>
              {image && (
                <Image
                  src={`${API_URL}${image.url}`}
                  w="full"
                  borderRadius="5px"
                  objectFit="cover"
                  borderColor={themeIsDark ? 'white' : 'brand.dark'}
                />
              )}
              <Stack border="1px" w="full" m={0} p={0} borderColor={themeIsDark ? 'white' : 'brand.dark'} />
              <Stack
                direction={isLargerThan1280 ? 'row' : 'column'}
                align={isLargerThan1280 ? 'center' : 'start'}
                justify={isLargerThan1280 ? 'center' : 'start'}
                w="full"
              >
                {newsСontent && (
                  <Emotions
                    newsId={newsСontent?.id}
                    like={newsСontent.attributes.like}
                    dislike={newsСontent.attributes.dislike}
                    delight={newsСontent.attributes.delight}
                    shock={newsСontent.attributes.shock}
                    smile_face={newsСontent.attributes.smile_face}
                    angry={newsСontent.attributes.angry}
                    info={true}
                  />
                )}
                <Spacer />
                <Stack direction={isLargerThan680 ? 'row' : 'column-reverse'} m={0} px={1} spacing={1} justify="start">
                  <Stack
                    direction={isLargerThan395 ? 'row' : 'column-reverse'}
                    p={0}
                    m={0}
                    align={isLargerThan395 ? 'center' : 'start'}
                  >
                    <HStack p={0}>
                      <BiShow color="#BBBBBB" />
                      {newsСontent?.attributes.views !== undefined ? (
                        <Text color="#BBBBBB" p={0} m={0} fontSize={['sm', 'md']}>
                          {newsСontent?.attributes.views}
                        </Text>
                      ) : (
                        <Text color="#BBBBBB" p={0} m={0} fontSize={['sm', 'md']}>
                          Нет просмотров
                        </Text>
                      )}
                    </HStack>
                    {isLargerThan395 && (
                      <Text color="#BBBBBB" fontSize={['sm', 'md']}>
                        ||
                      </Text>
                    )}
                    {newsСontent && (
                      <Text color="#BBBBBB" fontSize={['sm', 'md']}>
                        Время прочтения: ~{calculateReadingTime(newsСontent.attributes.text.split(' ').length, 250)} мин
                      </Text>
                    )}
                    {isLargerThan680 && (
                      <Text color="#BBBBBB" fontSize={['sm', 'md']}>
                        ||
                      </Text>
                    )}
                  </Stack>
                  <HStack p={0} m={0}>
                    <Text color="#BBBBBB" fontSize={['sm', 'md']}>
                      {new Date(`${newsСontent?.attributes.date}`).toLocaleDateString('ru-RU', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Text>
                    <Text color="#BBBBBB" fontSize={['sm', 'md']}>
                      ||
                    </Text>
                    <Text color="#BBBBBB" fontSize={['sm', 'md']}>
                      {tag}
                    </Text>
                    <Text color="#BBBBBB" fontSize={['sm', 'md']}>
                      ||
                    </Text>
                    <CopyToClipboard
                      text={`${API_URL + ROUTE_NEWS}/${url_name}`}
                      onCopy={() =>
                        toast({
                          description: 'Ссылка скопирована!',
                          status: 'info',
                          duration: 9000,
                          isClosable: true,
                        })
                      }
                    >
                      <LinkIcon
                        cursor="pointer"
                        color="#BBBBBB"
                        transitionDuration="0.3s"
                        _hover={{ color: 'brand.dark' }}
                      />
                    </CopyToClipboard>
                  </HStack>
                </Stack>
              </Stack>
              <Stack border="1px" w="full" m={0} p={0} borderColor={themeIsDark ? 'white' : 'brand.dark'} />
              <Stack w="full" justify="start" align="start" pt={4} color={themeIsDark ? 'white' : 'brand.dark'}>
                {newsСontent && <ReactMarkdown>{newsСontent?.attributes.text}</ReactMarkdown>}
              </Stack>
            </VStack>
            {isLargerThan1030 && (
              <VStack
                w="full"
                maxW={isLargerThan1025 ? '20%' : '35%'}
                spacing={2}
                borderLeft="2px"
                minH={`${height}px`}
                h={`${refNews.current?.clientHeight}px`}
                borderColor={themeIsDark ? 'white' : 'brand.dark'}
              >
                <Text
                  w="full"
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize={['lg', 'xl', '2xl']}
                  borderBottom="2px"
                  align="center"
                >
                  Ещё новости
                </Text>
                <VStack w="full" px={[1, 2, 3]}>
                  {shortNews ? (
                    Object.keys(shortNews).map(index => {
                      return (
                        <Link
                          as={RouterLink}
                          to={`${ROUTE_NEWS}/${transliterating(shortNews[Number(index)].attributes.heading)}`}
                          key={index}
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          fontSize={['sm', 'md']}
                        >
                          {shortNews[Number(index)].attributes.heading}
                        </Link>
                      );
                    })
                  ) : (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xs', 'sm', 'md']} align="center">
                      Нет подходящих новостей
                    </Text>
                  )}
                </VStack>
              </VStack>
            )}
          </HStack>
          {!isLargerThan1030 && (
            <VStack w="full" spacing={2} minH={`${height / 2}px`} px={[1, 2]}>
              <Text
                w="full"
                fontSize={['lg', 'xl', '2xl']}
                borderBottom="2px"
                align="center"
                color={themeIsDark ? 'white' : 'brand.dark'}
              >
                Ещё новости
              </Text>
              {shortNews ? (
                Object.keys(shortNews).map(index => {
                  return (
                    <Link
                      as={RouterLink}
                      to={`${ROUTE_NEWS}/${transliterating(shortNews[Number(index)].attributes.heading)}`}
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      fontSize={['sm', 'md']}
                      key={index}
                    >
                      {shortNews[Number(index)].attributes.heading}
                    </Link>
                  );
                })
              ) : (
                <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xs', 'sm', 'md']} align="center">
                  Нет подходящих новостей
                </Text>
              )}
            </VStack>
          )}
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
