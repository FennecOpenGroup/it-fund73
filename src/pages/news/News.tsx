import { HStack, VStack, Text, Image, Stack, Spacer, useToast, useMediaQuery } from '@chakra-ui/react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactMarkdown from 'react-markdown';
import { LinkIcon } from '@chakra-ui/icons';
import React, { Dispatch, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { BiShow } from 'react-icons/bi';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Emotions } from '../../components/emotions/Emotions';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { calculateReadingTime } from '../../textfunctions/reattime/readtime';
import { ROUTE_MAINPAGE, ROUTE_NEWS } from '../../constants/routes';
import { IRootState } from '../../interfaces/IRootState';
import { coreGetNews } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { API_URL } from '../../constants/env';
import { transliterating } from '../../textfunctions/transliterating/transliterating';

export const News = React.memo(() => {
  const { height } = useWindowDimensions();
  const { url_name } = useParams<{ url_name: string }>();
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const news = useSelector((state: IRootState) => state.core.news);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const toast = useToast();

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThan1030] = useMediaQuery('(min-width: 1030px)');
  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan680] = useMediaQuery('(min-width: 680px)');
  const [isLargerThan395] = useMediaQuery('(min-width: 395px)');

  const newsСontent = useMemo(
    () => news?.find(newsData => transliterating(newsData.attributes.heading) === url_name),
    [news],
  );
  const image = newsСontent ? newsСontent.attributes.image.data['0'].attributes : undefined;

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
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Новости</title>
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
            <VStack w="full" maxW={isLargerThan1030 ? ['60%', '80%'] : '100%'} pt={4} pl={2} pr={5} align="start">
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
                <Stack direction={isLargerThan680 ? 'row' : 'column-reverse'} m={0} px={2} spacing={2} justify="start">
                  <Stack direction={isLargerThan395 ? 'row' : 'column-reverse'} p={0} m={0}>
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
                      {newsСontent?.attributes.date}
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
                      text={`${API_URL + ROUTE_MAINPAGE + ROUTE_NEWS}/${url_name}`}
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
                <Text color="#BBBBBB" px={2} align="center">
                  Нет подходящих новостей
                </Text>
              </VStack>
            )}
          </HStack>
          {!isLargerThan1030 && (
            <VStack w="full" spacing={2} minH={`${height / 2}px`}>
              <Text
                w="full"
                fontSize={['lg', 'xl', '2xl']}
                borderBottom="2px"
                align="center"
                color={themeIsDark ? 'white' : 'brand.dark'}
              >
                Ещё новости
              </Text>
              <Text color="#BBBBBB" fontSize={['xs', 'sm', 'md']} px={2} align="center">
                Нет подходящих новостей
              </Text>
            </VStack>
          )}
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
