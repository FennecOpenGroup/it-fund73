/* eslint-disable react-hooks/exhaustive-deps */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-phone-input-2/lib/style.css';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

interface IModalCalendarNewDateProps {
  isOpen: boolean;
  id: string;
}

export const ModalCalendarEventInfo = React.memo(({ isOpen, id }: IModalCalendarNewDateProps) => {
  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.CALENDAR_EVENT_INFO)), []);

  const themeIsDark = useSelector((state: IRootState) => state.core.themeIsDark);
  const events = useSelector((state: IRootState) => state.core.events);

  const { width } = useWindowDimensions();

  const [isLargerThan1000] = useMediaQuery('(min-width: 800px)');
  events && console.log(events[Number(id)].attributes.name);
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
          <ModalBody w="full"></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
