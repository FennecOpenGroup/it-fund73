/* eslint-disable react-hooks/exhaustive-deps */
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import React, { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from 'react-localization';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';

interface IDrawerNewsProps {
  isOpen: boolean;
}

export const DrawerNews = React.memo(({ isOpen }: IDrawerNewsProps) => {
  const texts = new LocalizedStrings({
    EN: {
      info: 'Список новостей',
    },
    RU: {
      info: 'Список новостей',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.MAIN_DRAWER_NEWS)), []);

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} size="md" placement="left">
      <DrawerOverlay />
      <DrawerContent backgroundColor="brand.dark" color="white">
        <DrawerCloseButton />
        <DrawerHeader fontSize={['lg', 'xl']}>{texts.getString('info', lang)}</DrawerHeader>
        <DrawerBody maxW="80%"></DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
