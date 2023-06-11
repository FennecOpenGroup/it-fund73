import { HStack, VStack, Text, Image, Stack, Spacer, useToast } from '@chakra-ui/react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { LinkIcon } from '@chakra-ui/icons';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BiShow } from 'react-icons/bi';
import { useParams } from 'react-router';

import { Emotions } from '../../components/emotions/Emotions';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import education_img from '../../assets/education.jpg';
import business_img from '../../assets/busisness.jpg';
import it_img from '../../assets/it.jpg';
import government_img from '../../assets/government.jpg';
import government2_img from '../../assets/government2.jpg';
import { TagsEnum } from '../../enums/TagsEnum';
import { transliterating } from '../../textfunctions/transliterating/transliterating';
import { calculateReadingTime } from '../../textfunctions/reattime/readtime';
import { ADRESS, ROUTE_MAINPAGE, ROUTE_NEWS } from '../../constants/routes';

export const News = React.memo(() => {
  const { height } = useWindowDimensions();
  const { short_name } = useParams<{ short_name: string }>();
  const toast = useToast();

  const newsData = [
    {
      src: education_img,
      name: 'Промышленное программирование на Python для подростков в Лицее Академии Яндекса',
      short_name: transliterating('Промышленное программирование на Python для подростков в Лицее Академии Яндекса'),
      content:
        'Академия Яндекса открыла набор на офлайн-курс для подростков 13-18 лет, которые уже знакомы с основами языка Python.<br /><br />Пройти онлайн тестирование ученики 8-11 классов и студенты 1-2 курсов техникумов и колледжей могут до 27 июня на сайте: https://vk.cc/coh7Mx<br /><br />Участники программы научатся:<br />Разрабатывать веб-приложения<br />Создавать чат-боты<br />Обучать Алису<br />Тестировать программы<br />Писать красивый код<br />Работать в команде<br /><br />Программа длится год и рассчитана на совмещение курса с основной учёбой. Обучение бесплатное, по окончании участники получат сертификат.<br /><br />В Ульяновске заниматься можно на площадке Лицея Академии Яндекса по адресу ул. Северный Венец, 32к3.<br /><br />Заполнить анкету и пройти онлайн-тестирование нужно до 27 июня: https://vk.cc/coh7Mx',

      tag: TagsEnum.EDUCATION,
      views: undefined,
      date: new Date(2023, 5, 30),
      reaction: undefined,
    },
    {
      src: business_img,
      name: 'SimbirSoft в числе лидеров Рейтинга Рунета!',
      short_name: transliterating('SimbirSoft в числе лидеров Рейтинга Рунета!'),
      content:
        'По итогам года “Рейтинг Рунета” опубликовал список ведущих ИТ-компаний страны в различных номинациях. Компания SimbirSoft вошла в топ аутстафф-агентств, предоставляющих команды специалистов для решения ИТ-задач компаний:<br /><br />1 место — «Аутстаффинг: анализ и тестирование ПО»;<br />1 место — «Аутстаффинг: программирование ПО»;<br />2 место — «Аутстаффинг».<br /><br />«Начав работу 22 года назад, мы выстроили стратегию постоянного развития и расширения горизонтов, чтобы ещё больше диверсифицировать бизнес. SimbirSoft работает с различными типами клиентов в разных странах. Некоторые наши заказчики из небольших и средних компаний заморозили проекты на неопределённое время, чтобы понять, как будет развиваться ситуация в мире и стране, и определить, что делать в новых реалиях. С крупными компаниями ситуация обстоит иначе: бизнес понимает, что в долгосрочной перспективе выиграет. Компании, которые использовали ИТ-решения для автоматизации работы, оптимизации издержек, реализации стратегических задач, только наращивают темпы и увеличивают объёмы. Всё это позволило SimbirSoft расширить портфель проектов, увеличить выручку и выйти в лидеры Рейтинга Рунета даже в нестабильном 2022 году.<br /><br />В сложных экономических условиях бизнес нуждается в качественной и быстрой реализации ИТ-решений, чтобы обеспечивать эффективную работу. Ульяновская область известна своим ИТ-ландшафтом. Тот факт, что в Рейтинг Рунета вошли несколько представителей ИТ-бизнеса из Ульяновска, подтверждает высокую экспертизу и широкий проектный опыт компаний из ИТ-кластера региона", - комментирует руководитель направления аккаунтинга компании SimbirSoft Марина Горелова.<br /><br />Рейтинг Рунета ежегодно формирует ТОП ИТ-компаний России. Это инструмент поиска и оценки подрядчика ИТ-решений, который учитывает количество постоянных клиентов, стоимость услуг и участие компании в профильных конкурсах. Полученные данные проходят тщательную проверку, после чего выстраиваются в рейтинг по стране и по региону.',
      tag: TagsEnum.BUSINESS,
      views: undefined,
      date: new Date(2023, 4, 18),
      reaction: undefined,
    },
    {
      src: it_img,
      name: '6 проектов ИТ-сферы: первый пул проектов, поддержанных Фондом в 2023 году',
      short_name: transliterating('6 проектов ИТ-сферы: первый пул проектов, поддержанных Фондом в 2023 году'),
      content:
        'В этом году традиционную поддержку Фонд окажет 6 проектам, направленные на образование школьников и студентов, повышение квалификации преподавателей и проведение региональных ИТ-мероприятий.<br /><br />Какие проекты поддержит Фонд в этом году?<br /><br />▫ Чемпионат ИТ-сферы Ульяновской области (Руководитель: Виктор Негода)><br />▫ Командный студенческий чемпионат Ульяновской области по программированию (Руководитель: Виктор Негода)<br />▫ Международная цифровая олимпиада «ВОЛГА-IT`2023» (Руководитель: Денис Ефремов)<br />▫ Развитие сообщества Код-классов Ульяновской области (Руководитель: Алла Костишко)<br />▫ ИТ-Марафон (Руководитель: Наталья Китаева)<br />▫ «Инженерно-техническая подготовка в школьном образовании» - программа повышения квалификации для педагогических работников школ, педагогов дополнительного образования (Руководитель: Валерий Сибирев)',
      tag: TagsEnum.IT,
      views: undefined,
      date: new Date(2023, 4, 16),
      reaction: undefined,
    },
    {
      src: government2_img,
      name: '33 жителя Ульяновской области набрали 100 баллов во всероссийском ИТ-диктанте',
      short_name: transliterating('33 жителя Ульяновской области набрали 100 баллов во всероссийском ИТ-диктанте'),
      content:
        'Всего в ИТ-диктанте приняло участие 3452 ульяновца, из них 33 набрали высший бал. Ульяновская область стала вторым регионом в России по количеству участников, уступив лишь Тюменской области.',
      tag: TagsEnum.GOVERNMENT,
      views: undefined,
      date: new Date(),
      reaction: undefined,
    },
    {
      src: government_img,
      name: 'Выставка «Армия-2023»',
      short_name: transliterating('Выставка «Армия-2023»'),
      content:
        'С 14 по 20 августа 2023 планируется организация коллективной экспозиции предприятий малого и среднего предпринимательства Ульяновской области в рамках Международного военно-технического форума «Армия-2023». Выставка пройдет в КВЦ «Патриот» Московкой области.<br /><br />Компаниям предоставляется выставочная площадь для организации объединенной экспозиции на безвозмездной основе при поддержке АНО «Региональный центр поддержки сопровождения предпринимательства» и Фонда развития информационных технологий Ульяновской области.<br /><br />Приоритет будет отдан компаниям с цифровыми решениями в области технологий искусственного интеллекта.<br /><br />Срок приёма заявок до 16 мая 2023 года<br />Адрес электронной почты: it-fond@yandex.ru<br />Контакты: 8 (8422) 58-17-47',
      tag: TagsEnum.GOVERNMENT,
      views: undefined,
      date: new Date(2023, 4, 3),
      reaction: undefined,
    },
  ];

  const news_content = newsData.find(news => news.short_name === short_name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>it-fund | Новости</title>
      </Helmet>
      <Header />
      <VStack minH={`${height}px`} justify="center" px="10%">
        <VStack w="full" bg="brand.beige" pl={[2, 3, 4]} pb={[4, 6]} boxShadow="5px 0px rgb(3,0,15,15%)">
          <HStack w="full" align="flex-start">
            <VStack w="full" maxW="80%" pt={4} pl={2} pr={5} align="start">
              <Text color="brand.dark" fontSize="2xl" fontWeight="bold" align="start">
                {news_content?.name}
              </Text>
              <Image src={news_content?.src} w="full" borderRadius="5px" objectFit="cover" />
              <Stack border="1px" w="full" m={0} p={0} />
              <HStack align="center" justify="center" w="full">
                <Emotions />
                <Spacer />
                <HStack m={0} px={2} spacing={2} justify="start">
                  <HStack p={0}>
                    <BiShow color="#BBBBBB" />
                    <Text color="#BBBBBB" p={0} m={0}>
                      Нет просмотров
                    </Text>
                  </HStack>
                  <Text color="#BBBBBB">||</Text>
                  {news_content && (
                    <Text color="#BBBBBB">
                      Время прочтения: ~{calculateReadingTime(news_content.content.split(' ').length, 250)} мин
                    </Text>
                  )}
                  <Text color="#BBBBBB">||</Text>
                  <Text color="#BBBBBB">{news_content?.date.toDateString()}</Text>
                  <Text color="#BBBBBB">||</Text>
                  <Text color="#BBBBBB">{news_content?.tag}</Text>
                  <Text color="#BBBBBB">||</Text>
                  <CopyToClipboard
                    text={`${ADRESS + ROUTE_MAINPAGE + ROUTE_NEWS}/${short_name}`}
                    onCopy={() =>
                      toast({
                        description: 'Ссылка скопирована!',
                        status: 'info',
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    <LinkIcon cursor='pointer' color="#BBBBBB" transitionDuration='0.3s' _hover={{ color: 'brand.dark' }} />
                  </CopyToClipboard>
                </HStack>
              </HStack>
              <Stack border="1px" w="full" m={0} p={0} />
              <Stack w="full" justify="start" align="start" pt={4}>
                {news_content?.content && (
                  <Text color="brand.dark" fontSize="md">
                    {news_content.content
                      .trim()
                      .replace(/(?:\r\n|\r|\n)/g, '<br />')
                      .split('<br />')
                      .map(function (item: any, index: any) {
                        return (
                          <span key={index}>
                            {item}
                            <br />
                          </span>
                        );
                      })}
                  </Text>
                )}
              </Stack>
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
