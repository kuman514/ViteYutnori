import { atom } from 'jotai';

import { ModalAtom, ModalType } from './types';

export const modalAtom = atom<ModalAtom>({
  modalType: ModalType.OFF,
  modalContent: '',
});
