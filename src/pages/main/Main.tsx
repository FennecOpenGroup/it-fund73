import { HStack, VStack, Text, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
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
import { transliterating } from '../../textfunctions/transliterating/transliterating';

export async function newsDataCreate(){
  const url = new URL(`api/news?populate=deep`, 'http://89.108.102.229:1337/' || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
}

// export const newsData = {
//   '0': {
//     src: education_img,
//     name: 'Промышленное программирование на Python для подростков в Лицее Академии Яндекса',
//     short_name: transliterating('Промышленное программирование на Python для подростков в Лицее Академии Яндекса'),
//     content:
//       'Академия Яндекса открыла набор на офлайн-курс для подростков 13-18 лет, которые уже знакомы с основами языка Python.<br /><br />Пройти онлайн тестирование ученики 8-11 классов и студенты 1-2 курсов техникумов и колледжей могут до 27 июня на сайте: https://vk.cc/coh7Mx<br /><br />Участники программы научатся:<br />Разрабатывать веб-приложения<br />Создавать чат-боты<br />Обучать Алису<br />Тестировать программы<br />Писать красивый код<br />Работать в команде<br /><br />Программа длится год и рассчитана на совмещение курса с основной учёбой. Обучение бесплатное, по окончании участники получат сертификат.<br /><br />В Ульяновске заниматься можно на площадке Лицея Академии Яндекса по адресу ул. Северный Венец, 32к3.<br /><br />Заполнить анкету и пройти онлайн-тестирование нужно до 27 июня: https://vk.cc/coh7Mx',
// 
//     tag: TagsEnum.EDUCATION,
//     views: undefined,
//     date: new Date(2023, 4, 30),
//     reaction: undefined,
//   },
//   '1': {
//     src: business_img,
//     name: 'SimbirSoft в числе лидеров Рейтинга Рунета!',
//     short_name: transliterating('SimbirSoft в числе лидеров Рейтинга Рунета!'),
//     content:
//       'По итогам года “Рейтинг Рунета” опубликовал список ведущих ИТ-компаний страны в различных номинациях. Компания SimbirSoft вошла в топ аутстафф-агентств, предоставляющих команды специалистов для решения ИТ-задач компаний:<br /><br />1 место — «Аутстаффинг: анализ и тестирование ПО»;<br />1 место — «Аутстаффинг: программирование ПО»;<br />2 место — «Аутстаффинг».<br /><br />«Начав работу 22 года назад, мы выстроили стратегию постоянного развития и расширения горизонтов, чтобы ещё больше диверсифицировать бизнес. SimbirSoft работает с различными типами клиентов в разных странах. Некоторые наши заказчики из небольших и средних компаний заморозили проекты на неопределённое время, чтобы понять, как будет развиваться ситуация в мире и стране, и определить, что делать в новых реалиях. С крупными компаниями ситуация обстоит иначе: бизнес понимает, что в долгосрочной перспективе выиграет. Компании, которые использовали ИТ-решения для автоматизации работы, оптимизации издержек, реализации стратегических задач, только наращивают темпы и увеличивают объёмы. Всё это позволило SimbirSoft расширить портфель проектов, увеличить выручку и выйти в лидеры Рейтинга Рунета даже в нестабильном 2022 году.<br /><br />В сложных экономических условиях бизнес нуждается в качественной и быстрой реализации ИТ-решений, чтобы обеспечивать эффективную работу. Ульяновская область известна своим ИТ-ландшафтом. Тот факт, что в Рейтинг Рунета вошли несколько представителей ИТ-бизнеса из Ульяновска, подтверждает высокую экспертизу и широкий проектный опыт компаний из ИТ-кластера региона", - комментирует руководитель направления аккаунтинга компании SimbirSoft Марина Горелова.<br /><br />Рейтинг Рунета ежегодно формирует ТОП ИТ-компаний России. Это инструмент поиска и оценки подрядчика ИТ-решений, который учитывает количество постоянных клиентов, стоимость услуг и участие компании в профильных конкурсах. Полученные данные проходят тщательную проверку, после чего выстраиваются в рейтинг по стране и по региону.',
//     tag: TagsEnum.BUSINESS,
//     views: undefined,
//     date: new Date(2023, 4, 18),
//     reaction: undefined,
//   },
//   '2': {
//     src: it_img,
//     name: '6 проектов ИТ-сферы: первый пул проектов, поддержанных Фондом в 2023 году',
//     short_name: transliterating('6 проектов ИТ-сферы: первый пул проектов, поддержанных Фондом в 2023 году'),
//     content:
//       'В этом году традиционную поддержку Фонд окажет 6 проектам, направленные на образование школьников и студентов, повышение квалификации преподавателей и проведение региональных ИТ-мероприятий.',
//     tag: TagsEnum.IT,
//     views: undefined,
//     date: new Date(2023, 4, 16),
//     reaction: undefined,
//   },
//   '3': {
//     src: government2_img,
//     name: '33 жителя Ульяновской области набрали 100 баллов во всероссийском ИТ-диктанте',
//     short_name: transliterating('33 жителя Ульяновской области набрали 100 баллов во всероссийском ИТ-диктанте'),
//     content:
//       'Всего в ИТ-диктанте приняло участие 3452 ульяновца, из них 33 набрали высший бал. Ульяновская область стала вторым регионом в России по количеству участников, уступив лишь Тюменской области.',
//     tag: TagsEnum.GOVERNMENT,
//     views: undefined,
//     date: new Date(),
//     reaction: undefined,
//   },
//   '4': {
//     src: government_img,
//     name: 'Выставка «Армия-2023»',
//     short_name: transliterating('Выставка «Армия-2023»'),
//     content:
//       'С 14 по 20 августа 2023 планируется организация коллективной экспозиции предприятий малого и среднего предпринимательства Ульяновской области в рамках Международного военно-технического форума «Армия-2023». Выставка пройдет в КВЦ «Патриот» Московкой области.',
//     tag: TagsEnum.GOVERNMENT,
//     views: undefined,
//     date: new Date(2023, 4, 3),
//     reaction: undefined,
//   },
// };


export const Main = React.memo(() => {
  const { height } = useWindowDimensions();

  const it = useSelector((state: IRootState) => state.core.it);
  const education = useSelector((state: IRootState) => state.core.education);
  const business = useSelector((state: IRootState) => state.core.business);
  const government = useSelector((state: IRootState) => state.core.government);
  const search = useSelector((state: IRootState) => state.core.search);
  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const [isLargerThan1572] = useMediaQuery('(min-width: 1572px)');
  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');

  let rowsCount = 0;
  let rowEven = false;

  const [newsData, setnewsData] = useState('');

  useEffect(() => {
    async function datesInit() {
      const dates = await newsDataCreate();
      setnewsData(dates.data);
    }
    datesInit();
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Главная</title>
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
              <Grid
                w="full"
                gap={['0.5', '1.5', '2.5']}
                templateRows={`repeat(${rowsCount}, 1fr)`}
                templateColumns={isLargerThan1025 ? 'repeat(6, 3fr)' : 'repeat(1, 1fr)'}
              >
                {Object.keys(newsData).map(index => {
                  const data = newsData[index as unknown as keyof typeof newsData].attributes;
                  console.log(data)
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
                  
                  if (arr.includes(data.tags) && (search === undefined || data.heading.includes(search))) {
                    return (
                      <GridItem key={index} colSpan={isLargerThan1572 ? (rowEven ? 2 : 3) : 3}>
                        <NewsContent
                          name_content={data.heading}
                          src_content={education_img}
                          views_content={data.views}
                          tag_content={data.tags}
                          date_content={data.date}
                          main_content={data.text}
                          reaction_content={undefined}
                          short_name={'123'}
                        />
                      </GridItem>
                    );
                  }
                  return false;
                })}
              </Grid>
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
