/* eslint-disable react-hooks/exhaustive-deps */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React, { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';

interface IModalCalendarNewDateProps {
  isOpen: boolean;
}

export const ModalCalendarNewDate = React.memo(({ isOpen }: IModalCalendarNewDateProps) => {
  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.CALENDAR_NEW_DATE)), []);

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      <ModalOverlay />
      <ModalContent bg={themeIsDark ? '#121212' : 'white'} border="2px">
        <ModalCloseButton color={themeIsDark ? 'white' : 'brand.dark'} />
        <ModalHeader fontSize={['lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
          Мероприятие
        </ModalHeader>
        <ModalBody>
          <VStack w="full" spacing={4}>
            <VStack align="start" spacing={0} w="full">
              <Text fontSize="sm" color={themeIsDark ? 'white' : 'brand.dark'}>
                Название
              </Text>
              <Input h="40px" bgColor="#D0D0D0" color="brand.dark" />
            </VStack>
            <VStack align="start" spacing={0} w="full">
              <Text fontSize="sm" color={themeIsDark ? 'white' : 'brand.dark'}>
                Дата проведения
              </Text>
              <Input h="40px" color="brand.dark" type="date" bgColor="#D0D0D0" />
            </VStack>
            <VStack align="start" spacing={0} w="full">
              <Text fontSize="sm" color={themeIsDark ? 'white' : 'brand.dark'}>
                Место проведения
              </Text>
              <Input h="40px" bgColor="#D0D0D0" color="brand.dark" />
            </VStack>
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
              variant="brand-high"
              bg={themeIsDark ? 'white' : 'brand.dark'}
              color={themeIsDark ? 'brand.dark' : 'white'}
              w="full"
            >
              Отправить
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
