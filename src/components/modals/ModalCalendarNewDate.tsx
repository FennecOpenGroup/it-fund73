/* eslint-disable react-hooks/exhaustive-deps */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Input,
  Button,
  FormLabel,
  FormControl,
  Tooltip,
  InputGroup,
  InputRightElement,
  Fade,
  useMediaQuery,
} from '@chakra-ui/react';
import { AddIcon, NotAllowedIcon, CheckIcon } from '@chakra-ui/icons';
import React, { Dispatch, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';
import { IForm } from '../../interfaces/IForm';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

interface IModalCalendarNewDateProps {
  isOpen: boolean;
}

export const ModalCalendarNewDate = React.memo(({ isOpen }: IModalCalendarNewDateProps) => {
  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.CALENDAR_NEW_DATE)), []);

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const [formSended, setFormSended] = useState(false);

  const { width } = useWindowDimensions();

  const [isLargerThan1000] = useMediaQuery('(min-width: 800px)');

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Слишком короткое название')
      .max(256, 'Слишком длинное название')
      .required('Обязательно к заполению'),
    adress: Yup.string()
      .min(5, 'Слишком короткое название')
      .max(300, 'Слишком длинное название')
      .required('Обязательно к заполению'),
    email: Yup.string().email('Недопустимый формат электронной почты').required('Обязательно к заполению'),
    date: Yup.date().required('Обязательно к заполению'),
    tel: Yup.string().matches(phoneRegExp, 'Номер введён не верно').required('Обязательно к заполению'),
  });

  const handleFormSubmit = (values: IForm) => {
    // eslint-disable-next-line
    console.log(values);
    setFormSended(true);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <ModalOverlay />
        <ModalContent bg={themeIsDark ? '#121212' : 'white'} border="2px">
          <ModalCloseButton color={themeIsDark ? 'white' : 'brand.dark'} />
          <ModalHeader fontSize={['lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
            Мероприятие
          </ModalHeader>
          <ModalBody w="full">
            <VStack w="full">
              <Formik
                key="suggest-an-event"
                initialValues={{ name: '', date: new Date(), adress: '', email: '', tel: '' } as IForm}
                validationSchema={FormSchema}
                onSubmit={handleFormSubmit}
              >
                {formik => (
                  <Form>
                    <Field name="name">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.name && !!form.errors.name}>
                          <FormLabel
                            htmlFor="form-name"
                            color="white"
                            requiredIndicator={<></>}
                            fontSize={['xs', 'sm']}
                          >
                            Мероприятие
                          </FormLabel>
                          <InputGroup size="md" w="full" pb={2}>
                            <Input
                              {...field}
                              id="form-name"
                              h="40px"
                              minW="275px"
                              w={isLargerThan1000 ? width / 4 : width / 2}
                              bgColor="#D0D0D0"
                              color="brand.dark"
                              placeholder="Название мероприятия"
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.name}>
                                {form.errors.name ? (
                                  <Tooltip label={form.errors.name} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="red" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="date">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.date && !!form.errors.date}>
                          <FormLabel
                            htmlFor="form-date"
                            color="white"
                            requiredIndicator={<></>}
                            fontSize={['xs', 'sm']}
                          >
                            Дата
                          </FormLabel>
                          <InputGroup size="md" pb={2}>
                            <Input {...field} id="Date" h="40px" color="brand.dark" type="date" bgColor="#D0D0D0" />
                            <InputRightElement>
                              <Fade in={!!form.errors.date}>
                                {form.errors.date ? (
                                  <Tooltip label={form.errors.date} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="red" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="adress">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.adress && !!form.errors.adress}>
                          <FormLabel
                            htmlFor="form-adress"
                            color="white"
                            requiredIndicator={<></>}
                            fontSize={['xs', 'sm']}
                          >
                            Место проведения
                          </FormLabel>
                          <InputGroup size="md" pb={2}>
                            <Input
                              {...field}
                              id="form-adress"
                              h="40px"
                              color="brand.dark"
                              bgColor="#D0D0D0"
                              placeholder="г.Ульяновск, ул.Уличная, 10"
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.adress}>
                                {form.errors.adress ? (
                                  <Tooltip label={form.errors.adress} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="red" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.email && !!form.errors.email}>
                          <FormLabel
                            htmlFor="form-email"
                            color="white"
                            requiredIndicator={<></>}
                            fontSize={['xs', 'sm']}
                          >
                            Email
                          </FormLabel>
                          <InputGroup size="md" pb={2}>
                            <Input
                              {...field}
                              id="form-email"
                              h="40px"
                              color="brand.dark"
                              bgColor="#D0D0D0"
                              placeholder="IvanIvanov@example.com"
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.email}>
                                {form.errors.email ? (
                                  <Tooltip label={form.errors.email} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="red" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="tel">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.tel && !!form.errors.tel}>
                          <FormLabel htmlFor="form-tel" color="white" requiredIndicator={<></>} fontSize={['xs', 'sm']}>
                            Номер телефона
                          </FormLabel>
                          <InputGroup size="md">
                            <Input
                              {...field}
                              id="form-tel"
                              h="40px"
                              color="brand.dark"
                              bgColor="#D0D0D0"
                              placeholder="+70123456789"
                              type="tel"
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.tel}>
                                {form.errors.tel ? (
                                  <Tooltip label={form.errors.tel} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="red" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <VStack py={5}>
                      <label
                        htmlFor="file"
                        style={{
                          color: 'gray',
                          cursor: 'pointer',
                          display: 'flex',
                          alignContent: 'center',
                          alignItems: 'center',
                          fontWeight: 'bold',
                        }}
                      >
                        <Input
                          name=""
                          variant="brand-file"
                          id="file"
                          h="40px"
                          border="0px"
                          color={themeIsDark ? 'white' : 'brand.dark'}
                          type="file"
                          multiple
                          hidden
                        />
                        Приложите файл
                        <AddIcon w="30px" color={themeIsDark ? 'white' : 'brand.dark'} />
                      </label>
                      <Button
                        type="submit"
                        variant="brand-high"
                        bg={themeIsDark ? 'white' : 'brand.dark'}
                        color={themeIsDark ? 'brand.dark' : 'white'}
                        w="full"
                        isDisabled={
                          !formik.values.name ||
                          !formik.values.date ||
                          !formik.values.adress ||
                          !formik.values.email ||
                          !formik.values.tel ||
                          !!formik.errors.name ||
                          !!formik.errors.date ||
                          !!formik.errors.adress ||
                          !!formik.errors.email ||
                          !!formik.errors.tel ||
                          formSended
                        }
                        rightIcon={formSended ? <CheckIcon boxSize="15px" /> : <></>}
                        iconSpacing={4}
                      >
                        Отправить
                      </Button>
                    </VStack>
                  </Form>
                )}
              </Formik>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
