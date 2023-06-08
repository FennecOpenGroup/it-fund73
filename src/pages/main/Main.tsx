import { HStack, VStack, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { NewsContent } from '../../components/newsContent/NewsContent';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { TagsEnum } from '../../enums/TagsEnum';
import education_img from '../../assets/education.jpg';
import business_img from '../../assets/busisness.jpg';
import it_img from '../../assets/it.jpg';
import government_img from '../../assets/government.jpg';
import government2_img from '../../assets/government2.jpg';
import { IRootState } from '../../interfaces/IRootState';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  // const texts = new LocalizedStrings({
  //   EN: {
  //     fund1: 'In ',
  //     fund2: 'projects were allocated',
  //     fund3: 'million rubles',
  //     fund4: 'people involved in the projects received support',
  //     more: 'Read more',
  //   },
  //   RU: {
  //     fund1: 'За',
  //     fund2: 'проектам было выделено',
  //     fund3: 'млн. руб',
  //     fund4: 'человек участвовавших в проектах получили поддержку',
  //     more: 'Подробнее',
  //   },
  // });

  // const lang = useSelector((state: IRootState) => state.core.lang);
  const it = useSelector((state: IRootState) => state.core.it);
  const education = useSelector((state: IRootState) => state.core.education);
  const business = useSelector((state: IRootState) => state.core.business);
  const government = useSelector((state: IRootState) => state.core.government);
  const search = useSelector((state: IRootState) => state.core.search);

  const newsData = {
    '0': {
      src: education_img,
      name: 'Промышленное программирование на Python для подростков в Лицее Академии Яндекса',
      content:
        'Академия Яндекса открыла набор на офлайн-курс для подростков 13-18 лет, которые уже знакомы с основами языка Python.',
      tag: TagsEnum.EDUCATION,
      views: undefined,
      date: new Date(),
      reaction: undefined,
    },
    '1': {
      src: business_img,
      name: 'SimbirSoft в числе лидеров Рейтинга Рунета!',
      content:
        'По итогам года “Рейтинг Рунета” опубликовал список ведущих ИТ-компаний страны в различных номинациях. Компания SimbirSoft вошла в топ аутстафф-агентств, предоставляющих команды специалистов для решения ИТ-задач компаний',
      tag: TagsEnum.BUSINESS,
      views: undefined,
      date: new Date(),
      reaction: undefined,
    },
    '2': {
      src: it_img,
      name: '6 проектов ИТ-сферы: первый пул проектов, поддержанных Фондом в 2023 году',
      content:
        'В этом году традиционную поддержку Фонд окажет 6 проектам, направленные на образование школьников и студентов, повышение квалификации преподавателей и проведение региональных ИТ-мероприятий.',
      tag: TagsEnum.IT,
      views: undefined,
      date: new Date(),
      reaction: undefined,
    },
    '3': {
      src: government2_img,
      name: '33 жителя Ульяновской области набрали 100 баллов во всероссийском ИТ-диктанте',
      content:
        'Всего в ИТ-диктанте приняло участие 3452 ульяновца, из них 33 набрали высший бал. Ульяновская область стала вторым регионом в России по количеству участников, уступив лишь Тюменской области.',
      tag: TagsEnum.GOVERNMENT,
      views: undefined,
      date: new Date(),
      reaction: undefined,
    },
    '4': {
      src: government_img,
      name: 'Выставка «Армия-2023»',
      content:
        'С 14 по 20 августа 2023 планируется организация коллективной экспозиции предприятий малого и среднего предпринимательства Ульяновской области в рамках Международного военно-технического форума «Армия-2023». Выставка пройдет в КВЦ «Патриот» Московкой области.',
      tag: TagsEnum.GOVERNMENT,
      views: undefined,
      date: new Date(),
      reaction: undefined,
    },
  };

  return (
    <>
      <Helmet>
        <title>it-fund | Новости</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} align="start" justify="start" px="10%">
        <VStack
          w="full"
          minH={`${height}px`}
          bg="brand.beige"
          pl={[2, 3, 4]}
          pb={[4, 6]}
          boxShadow="5px 0px rgb(3,0,15,15%)"
        >
          <HStack w="full" align="flex-start">
            <VStack w="full" pt={6}>
              <Grid w="full" gap="2.5" templateRows="auto" templateColumns="repeat(2, 1fr)">
                {Object.keys(newsData).map(index => {
                  const data = newsData[index as unknown as keyof typeof newsData];
                  const arr = [];
                  it && arr.push(TagsEnum.IT);
                  education && arr.push(TagsEnum.EDUCATION);
                  business && arr.push(TagsEnum.BUSINESS);
                  government && arr.push(TagsEnum.GOVERNMENT);

                  if (arr.includes(data.tag) && (search === undefined || data.name.includes(search))) {
                    return (
                      <GridItem key={index}>
                        <NewsContent
                          name={data.name}
                          src={data.src}
                          views={data.views}
                          tag={data.tag}
                          date={data.date}
                        />
                      </GridItem>
                    );
                  }
                  return false;
                })}
              </Grid>
            </VStack>
            <VStack w="full" maxW="20%" spacing={2} borderLeft="2px" minH={`${height}px`}>
              <Text w="full" color="brand.dark" fontSize="2xl" borderBottom="2px" align="center">
                Новости
              </Text>
              <Text color="#BBBBBB" fontSize="md">
                Нет подходящих новостей
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});
