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
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import * as Yup from 'yup';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';
import { IForm } from '../../interfaces/IForm';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { fetchPropose } from '../../api/eventsApi';

interface IModalCalendarNewDateProps {
  isOpen: boolean;
}

export const ModalCalendarNewDate = React.memo(({ isOpen }: IModalCalendarNewDateProps) => {
  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.CALENDAR_NEW_DATE)), []);

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  const [formSended, setFormSended] = useState(false);
  const [number, setNumber] = useState('');

  const { width } = useWindowDimensions();

  const [isLargerThan1000] = useMediaQuery('(min-width: 800px)');

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Слишком короткое название')
      .max(100, 'Слишком длинное название')
      .required('Обязательно к заполению'),
    address: Yup.string()
      .min(5, 'Слишком короткое название')
      .max(300, 'Слишком длинное название')
      .required('Обязательно к заполению'),
    email: Yup.string().email('Недопустимый формат электронной почты').required('Обязательно к заполению'),
    date: Yup.date().min(new Date(), 'Неактуальная дата').required('Обязательно к заполению'),
    file: Yup.string(),
  });

  const handleFormSubmit = async (values: IForm) => {
    // eslint-disable-next-line
    values.tel = number;

    await fetchPropose({
      data: {
        name: values.name,
        place: values.address,
        date: values.date,
        email: values.email,
        phone: values.tel,
        tag: 'Не проверено',
      },
    });
    setFormSended(true);
    setTimeout(() => {
      setFormSended(false);
    }, 2000);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <ModalOverlay />
        <ModalContent
          bg={themeIsDark ? '#121212' : 'white'}
          border="2px"
          minW={isLargerThan1000 ? width / 4.5 : width / 1.8}
        >
          <ModalCloseButton color={themeIsDark ? 'white' : 'brand.dark'} />
          <ModalHeader fontSize={['lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
            Данные мероприятия
          </ModalHeader>
          <ModalBody w="full">
            <VStack w="full">
              <Formik
                key="suggest-an-event"
                initialValues={
                  { name: '', date: new Date(), address: '', email: '', tel: '', file: undefined } as IForm
                }
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
                            color={themeIsDark ? 'white' : 'brand.dark'}
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
                              w={isLargerThan1000 ? width / 4.6 : width / 2}
                              bgColor="transparent"
                              color={themeIsDark ? 'white' : 'brand.dark'}
                              placeholder="Название мероприятия"
                              variant="brand-support"
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.name || !!form.values.name}>
                                {form.errors.name ? (
                                  <Tooltip label={form.errors.name} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="green" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="date">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.date && !!form.errors.date} pb={2}>
                          <FormLabel
                            htmlFor="form-date"
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            requiredIndicator={<></>}
                            fontSize={['xs', 'sm']}
                          >
                            Дата
                          </FormLabel>
                          <InputGroup size="md" pb={2}>
                            <Input
                              {...field}
                              id="form-date"
                              h="40px"
                              color={themeIsDark ? 'white' : 'brand.dark'}
                              type="date"
                              bgColor="transparent"
                              variant="brand-support"
                              style={themeIsDark ? { colorScheme: 'dark' } : { colorScheme: 'white' }}
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.date || !!form.values.date}>
                                {form.errors.date ? (
                                  <Tooltip label={form.errors.date} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="green" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="address">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.address && !!form.errors.address}>
                          <FormLabel
                            htmlFor="form-address"
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            requiredIndicator={<></>}
                            fontSize={['xs', 'sm']}
                          >
                            Место проведения
                          </FormLabel>
                          <InputGroup size="md" pb={2}>
                            <Input
                              {...field}
                              id="form-address"
                              h="40px"
                              placeholder="г.Ульяновск, ул.Уличная, 10"
                              bgColor="transparent"
                              variant="brand-support"
                              color={themeIsDark ? 'white' : 'brand.dark'}
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.address || !!form.values.address}>
                                {form.errors.address ? (
                                  <Tooltip label={form.errors.address} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="green" />
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
                            color={themeIsDark ? 'white' : 'brand.dark'}
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
                              bgColor="transparent"
                              placeholder="IvanIvanov@example.com"
                              variant="brand-support"
                              color={themeIsDark ? 'white' : 'brand.dark'}
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.email || !!form.values.email}>
                                {form.errors.email ? (
                                  <Tooltip label={form.errors.email} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="green" />
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
                          <FormLabel
                            htmlFor="form-tel"
                            color={themeIsDark ? 'white' : 'brand.dark'}
                            requiredIndicator={<></>}
                            fontSize={['xs', 'sm']}
                          >
                            Номер телефона
                          </FormLabel>
                          <InputGroup size="md">
                            <PhoneInput
                              {...field}
                              country="ru"
                              inputStyle={
                                themeIsDark
                                  ? {
                                      color: 'white',
                                      backgroundColor: 'transparent',
                                      width: '100%',
                                      height: '40px',
                                    }
                                  : {
                                      color: 'black',
                                      backgroundColor: 'transparent',
                                      width: '100%',
                                      height: '40px',
                                    }
                              }
                              dropdownStyle={
                                themeIsDark
                                  ? { color: 'gray', backgroundColor: '#1a1a1a', colorScheme: 'dark' }
                                  : { color: 'black' }
                              }
                              buttonStyle={{
                                backgroundColor: 'transparent',
                              }}
                              value={number}
                              onChange={event => setNumber(event)}
                            />
                            <InputRightElement>
                              <Fade in={!!form.errors.tel || !!form.values.tel}>
                                {form.errors.tel ? (
                                  <Tooltip label={form.errors.tel} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="green" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="file">
                      {({ field, form }: FieldProps<string, IForm>) => (
                        <FormControl isRequired isInvalid={!!form.values.file && !!form.errors.file}>
                          <InputGroup size="md">
                            <label
                              htmlFor="file"
                              style={
                                themeIsDark
                                  ? {
                                      color: 'white',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignContent: 'center',
                                      alignItems: 'center',
                                      fontWeight: '600',
                                      paddingTop: '10px',
                                      paddingBottom: '10px',
                                    }
                                  : {
                                      color: 'black',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignContent: 'center',
                                      alignItems: 'center',
                                      fontWeight: '600',
                                      paddingTop: '10px',
                                      paddingBottom: '10px',
                                    }
                              }
                            >
                              <Input
                                {...field}
                                id="file"
                                h="40px"
                                border="0px"
                                color={themeIsDark ? 'white' : 'brand.dark'}
                                type="file"
                                multiple
                                display="none"
                                required={false}
                              />
                              Приложите файл
                              <AddIcon w="30px" color={themeIsDark ? 'white' : 'brand.dark'} />
                            </label>
                            <InputRightElement>
                              <Fade in={!!form.errors.file || !!form.values.file}>
                                {form.errors.file ? (
                                  <Tooltip label={form.errors.file} placement="bottom">
                                    <NotAllowedIcon color="red" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="green" />
                                )}
                              </Fade>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <VStack>
                      <Button
                        type="submit"
                        variant="brand-high"
                        bg={themeIsDark ? 'white' : 'brand.dark'}
                        color={themeIsDark ? 'brand.dark' : 'white'}
                        w="full"
                        isDisabled={
                          !formik.values.name ||
                          !formik.values.date ||
                          !formik.values.address ||
                          !formik.values.email ||
                          !formik.values.file ||
                          !!formik.errors.name ||
                          !!formik.errors.date ||
                          !!formik.errors.address ||
                          !!formik.errors.email ||
                          !!formik.errors.file ||
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
