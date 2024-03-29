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
  HStack,
} from '@chakra-ui/react';
import React, { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import 'react-phone-input-2/lib/style.css';
import { MdDateRange } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';

interface IModalCalendarNewDateProps {
  isOpen: boolean;
  id: string;
}

export const ModalCalendarEventInfo = React.memo(({ isOpen, id }: IModalCalendarNewDateProps) => {
  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.CALENDAR_EVENT_INFO)), []);

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);
  const events = useSelector((state: IRootState) => state.core.events);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <ModalOverlay />
        <ModalContent bg={themeIsDark ? '#121212' : 'white'} border="2px">
          <ModalCloseButton color={themeIsDark ? 'white' : 'brand.dark'} />
          <ModalHeader fontSize={['lg', 'xl']} color={themeIsDark ? 'white' : 'brand.dark'}>
            {events && events[Number(id)].attributes.name}
          </ModalHeader>
          <ModalBody>
            <VStack w="full" align="start">
              <Text color={themeIsDark ? 'white' : 'brand.dark'} fontSize={['sm', 'md']}>
                {events && <ReactMarkdown>{events[Number(id)].attributes.text}</ReactMarkdown>}
              </Text>
            </VStack>
            <VStack w="full" align="start" spacing={0} pt={4}>
              <HStack>
                <MdDateRange size="1.2em" color="gray" />
                <Text color="gray" fontSize={['sm', 'md']}>
                  {events &&
                    new Date(`${events[Number(id)].attributes.date}`).toLocaleDateString('ru-RU', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                </Text>
              </HStack>
              <HStack>
                <FaMapMarkerAlt size="1.2em" color="gray" />
                <Text color="gray" fontSize={['sm', 'md']}>
                  {events && events[Number(id)].attributes.address}
                </Text>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
