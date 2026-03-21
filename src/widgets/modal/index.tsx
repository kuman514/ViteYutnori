import { useAtom } from 'jotai';

import { modalAtom } from '^/shared/modal/atom';
import { ModalType } from '^/shared/modal/types';
import UIButton from '^/shared/ui/button';

import styles from './style.module.css';

export default function Modal() {
  const [{ modalType, modalContent }, setModalAtom] = useAtom(modalAtom);

  if (modalType === ModalType.OFF) {
    return null;
  }

  const renderModalContent = (() => {
    switch (modalType) {
      case ModalType.INFO:
        return (
          <>
            <section>{modalContent}</section>
            <UIButton
              buttonType="ok"
              ariaLabel="close-modal"
              onClick={() => {
                setModalAtom({ modalType: ModalType.OFF, modalContent: '' });
              }}
            >
              확인
            </UIButton>
          </>
        );
      default:
        return null;
    }
  })();

  return (
    <section aria-label="overlay" className={styles.overlay}>
      <section aria-label="modal" className={styles.modal}>
        {renderModalContent}
      </section>
    </section>
  );
}
