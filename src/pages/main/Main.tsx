/* eslint no-return-assign: "error" */
/* eslint no-unsafe-optional-chaining: "error" */
import { VStack, useMediaQuery, Text, Grid, GridItem, HStack, Link, Button } from '@chakra-ui/react';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';

import { NewsContent } from '../../components/newsContent/NewsContent';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { TagsEnum } from '../../enums/TagsEnum';
import { IRootState } from '../../interfaces/IRootState';
import { API_URL } from '../../constants/env';
import { RootActions } from '../../types/RootActions';
import { coreGetNews, coreGetShortNews } from '../../actions/coreActions';
import { transliterating } from '../../textfunctions/transliterating/transliterating';
import { ROUTE_NEWS } from '../../constants/routes';
import { fetchChangeShortsViews } from '../../api/newsApi';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  const it = useSelector((state: IRootState) => state.core.it);
  const education = useSelector((state: IRootState) => state.core.education);
  const business = useSelector((state: IRootState) => state.core.business);
  const government = useSelector((state: IRootState) => state.core.government);
  const search = useSelector((state: IRootState) => state.core.search);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const news = useSelector((state: IRootState) => state.core.news);
  const shortNews = useSelector((state: IRootState) => state.core.shortNews);
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const loadCount = 8;
  const [newsCounter, setNewsCounter] = useState(loadCount);

  const loadShortCount = 10;
  const [shortNewsCounter, setShortNewsCounter] = useState(loadShortCount);

  const refNews = useRef<HTMLDivElement>(null);
  const contentHeight = refNews.current?.clientHeight;

  const [isLargerThan1350] = useMediaQuery('(min-width: 1350px)');
  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');

  let shortRowsCount = 0;
  let rowsCount = 0;

  let rowEven = false;
  let newsCount = 0;

  useEffect(() => {
    dispatch(coreGetNews());
    dispatch(coreGetShortNews());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund73 | Главная</title>
        <meta charSet="UTF-8" />
        <meta name="descripsion" content="Главная страница" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:url" content="https://www.it-fund73.ru/" />
        <meta
          property="og:title"
          content="Фонд развития информационный технологий в Ульяновской области является оператором государственный поддержки IT-проектов и компаний в регионе с 2016 года."
        />
        <meta property="og:descripsion" content="Фонд развития информационный технологий" />
        <meta property="og:image" content="%PUBLIC_URL%/logo_ref.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="vk:card" content="image/jpg" />
        <meta property="vk:url" content="https://www.it-fund73.ru/" />
        <meta name="vk:title" content="Фонд развития информационный технологий" />
        <meta name="vk:descripsion" content="Фонд развития информационный технологий" />
        <meta name="vk:image" content=".%PUBLIC_URL%/logo_ref.jpg" />
        <meta
          name="keywords"
          content="Фонд развития, информационный-технологий, Ульяновской области, Ульяновск, IT-фонд, IT, ИТ-отрасль, Где получить образование?, Что происходит в отрасли?"
        />
      </Helmet>
      <Header />
      <VStack
        justify="center"
        align="center"
        px={isLargerThan770 ? '10%' : '5%'}
        bg={themeIsDark ? '#121212' : 'brand.beige'}
      >
        <VStack
          w="full"
          bg={themeIsDark ? '#242323' : 'white'}
          pl={[1, 2, 3, 4]}
          pr={isLargerThan620 ? 0 : [1, 2, 3, 4]}
          boxShadow="5px 0px rgb(3,0,15,15%)"
          ref={refNews}
          pb={0}
        >
          <HStack w="full" align="flex-start">
            <VStack w="full" pt={[1, 2, 6]}>
              {news && (
                <Grid
                  w="full"
                  gap="5"
                  templateRows={`repeat(${rowsCount}, 1fr)`}
                  templateColumns={isLargerThan1025 ? 'repeat(6, 3fr)' : 'repeat(1, 1fr)'}
                >
                  {Object.keys(Array(newsCounter).fill('')).map(index => {
                    if (news[Number(index)]) {
                      const data = news[Number(index)].attributes;

                      const image = data.image.data['0'].attributes;
                      const arr = [];
                      it && arr.push(TagsEnum.IT);
                      education && arr.push(TagsEnum.EDUCATION);
                      business && arr.push(TagsEnum.BUSINESS);
                      government && arr.push(TagsEnum.GOVERNMENT);

                      if (rowEven === true) {
                        if (rowsCount < 2) rowsCount += 1;
                        else {
                          rowsCount = 0;
                          rowEven = false;
                        }
                      }
                      if (rowEven === false) {
                        if (rowsCount < 2) rowsCount += 1;
                        else {
                          rowsCount = 0;
                          rowEven = true;
                        }
                      }
                      if (
                        arr.includes(data.tags as TagsEnum) &&
                        (search === undefined || data.heading.includes(search)) &&
                        newsCount <= 1
                      ) {
                        newsCount += 1;
                        return (
                          <GridItem key={index} colSpan={3}>
                            <NewsContent
                              id={news[Number(index)].id}
                              name_content={data.heading}
                              src_content={`${API_URL}${image.url}`}
                              views_content={data.views}
                              tag_content={data.tags}
                              date_content={data.date}
                              url_name={transliterating(data.heading)}
                              like={data.like}
                              dislike={data.dislike}
                              delight={data.delight}
                              shock={data.shock}
                              smile_face={data.smile_face}
                              angry={data.angry}
                            />
                          </GridItem>
                        );
                      }
                      if (
                        arr.includes(data.tags as TagsEnum) &&
                        (search === undefined || data.heading.includes(search)) &&
                        newsCount > 1
                      ) {
                        return (
                          <GridItem key={index} colSpan={isLargerThan1350 ? 2 : 3}>
                            <NewsContent
                              id={news[Number(index)].id}
                              name_content={data.heading}
                              src_content={`${API_URL}${image.url}`}
                              views_content={data.views}
                              tag_content={data.tags}
                              date_content={data.date}
                              url_name={transliterating(data.heading)}
                              like={data.like}
                              dislike={data.dislike}
                              delight={data.delight}
                              shock={data.shock}
                              smile_face={data.smile_face}
                              angry={data.angry}
                            />
                          </GridItem>
                        );
                      }
                      return false;
                    }
                    return false;
                  })}
                </Grid>
              )}
              {news && newsCounter < news?.length && (
                <HStack w="full" pb={2} m={0}>
                  <Button
                    variant="brand-news"
                    rightIcon={<BiPlus />}
                    w="full"
                    color={themeIsDark ? 'white' : 'brand.dark'}
                    onClick={() => {
                      const newsUp = newsCounter + loadCount <= news?.length ? loadCount : news?.length - newsCounter;
                      setNewsCounter(newsCounter + newsUp);
                    }}
                  >
                    Ещё новости
                  </Button>
                </HStack>
              )}
            </VStack>
            {isLargerThan620 && (
              <VStack
                w="full"
                maxW={isLargerThan1025 ? '20%' : '35%'}
                spacing={2}
                borderLeft="2px"
                borderColor={themeIsDark ? 'white' : 'brand.dark'}
                minH={`${height}px`}
                h={contentHeight}
                align="center"
              >
                <Text
                  w="full"
                  color={themeIsDark ? 'white' : 'brand.dark'}
                  fontSize={['lg', 'xl', '2xl']}
                  borderBottom="2px"
                  align="center"
                >
                  Новости
                </Text>
                <VStack w="full" px={[1, 2, 3]}>
                  {shortNews ? (
                    Object.keys(shortNews).map(index => {
                      if (shortRowsCount < shortNewsCounter) {
                        shortRowsCount += 1;

                        return (
                          <Link
                            as={RouterLink}
                            to={`${ROUTE_NEWS}/${transliterating(shortNews[Number(index)].attributes.heading)}`}
                            key={index}
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            fontSize={['sm', 'md']}
                            onClick={async () => {
                              await fetchChangeShortsViews(
                                shortNews[Number(index)].id,
                                Number(shortNews[Number(index)].attributes.views),
                              );
                            }}
                          >
                            {shortNews[Number(index)].attributes.heading}
                          </Link>
                        );
                      }
                      return false;
                    })
                  ) : (
                    <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['xs', 'sm', 'md']} align="center">
                      Нет подходящих новостей
                    </Text>
                  )}
                  {shortNews && shortNewsCounter < shortNews?.length && (
                    <Button
                      variant="brand-news"
                      rightIcon={<BiPlus />}
                      w="full"
                      color={themeIsDark ? 'white' : 'brand.dark'}
                      onClick={() => {
                        const newsUp = shortNewsCounter + loadShortCount;

                        setShortNewsCounter(newsUp);
                      }}
                    >
                      Ещё новости
                    </Button>
                  )}
                </VStack>
              </VStack>
            )}
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
