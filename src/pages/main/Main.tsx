/* eslint no-return-assign: "error" */
import { HStack, VStack, Text, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import React, { Dispatch, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import { NewsContent } from '../../components/newsContent/NewsContent';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { TagsEnum } from '../../enums/TagsEnum';
import { IRootState } from '../../interfaces/IRootState';
import { API_URL } from '../../constants/env';
import { RootActions } from '../../types/RootActions';
import { coreGetNews } from '../../actions/coreActions';
import { transliterating } from '../../textfunctions/transliterating/transliterating';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  const it = useSelector((state: IRootState) => state.core.it);
  const education = useSelector((state: IRootState) => state.core.education);
  const business = useSelector((state: IRootState) => state.core.business);
  const government = useSelector((state: IRootState) => state.core.government);
  const search = useSelector((state: IRootState) => state.core.search);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const news = useSelector((state: IRootState) => state.core.news);
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');

  let rowsCount = 0;
  let rowEven = false;

  useEffect(() => {
    dispatch(coreGetNews());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Главная</title>
        <meta charSet="UTF-8" />
        <meta name="Главная страница" content="Фонд развития информационный технологий" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="it-fund" />
        <meta property="og:title" content="Фонд развития информационный технологий" />
        <meta property="og:descripsion" content="Фонд развития информационный технологий" />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="60" />
        <meta name="vk:card" content="image/svg" />
        <meta name="vk:title" content="Фонд развития информационный технологий" />
        <meta name="vk:descripsion" content="Фонд развития информационный технологий" />
        <meta name="vk:image" content="/assets/logo.svg" />
      </Helmet>
      <Header />
      <VStack
        minH={`${height}px`}
        align="start"
        justify="start"
        px={isLargerThan770 ? '10%' : '5%'}
        bg={themeIsDark ? '#121212' : 'white'}
      >
        <VStack
          w="full"
          minH={`${height}px`}
          bg={themeIsDark ? '#242323' : 'brand.beige'}
          pl={[1, 2, 3, 4]}
          pr={isLargerThan620 ? 0 : [1, 2, 3, 4]}
          boxShadow="5px 0px rgb(3,0,15,15%)"
        >
          <HStack w="full" align="flex-start">
            <VStack w="full" pt={[1, 2, 6]}>
              {news && (
                <Grid
                  w="full"
                  gap="2.5"
                  templateRows={`repeat(${rowsCount}, 1fr)`}
                  templateColumns={isLargerThan1025 ? 'repeat(6, 3fr)' : 'repeat(1, 1fr)'}
                >
                  {Object.keys(news)
                    .reverse()
                    .map(index => {
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
                        (search === undefined || data.heading.includes(search))
                      ) {
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
                      return false;
                    })}
                </Grid>
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
                <Text color="#BBBBBB" fontSize={['xs', 'sm', 'md']} align="center">
                  Нет подходящих новостей
                </Text>
              </VStack>
            )}
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
