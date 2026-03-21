export enum ModalType {
  OFF = 'off',
  SELECT_PLAYERS = 'select-players',
  RESULT = 'result',
  INFO = 'info',
}

export interface ModalAtom {
  modalType: ModalType;
  modalContent: string;
}
