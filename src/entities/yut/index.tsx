import styles from './style.module.css';
import { YutInfo } from './types';

interface Props {
  yut: YutInfo;
}

export default function Yut({ yut }: Props) {
  const renderMark = (() => {
    if (yut.isFlipped) {
      return (
        <>
          <div className={styles.crossContainer}>
            <div className={styles.cross} />
            <div className={styles.revCross} />
          </div>
          <div className={styles.crossContainer}>
            <div className={styles.cross} />
            <div className={styles.revCross} />
          </div>
          <div className={styles.crossContainer}>
            <div className={styles.cross} />
            <div className={styles.revCross} />
          </div>
        </>
      );
    }

    if (yut.isMarked) {
      return <div className={styles.backDoMark} />;
    }

    return null;
  })();

  return (
    <div
      className={`${styles.yut} ${yut.isFlipped ? styles.flipped : styles.open}`}
    >
      {renderMark}
    </div>
  );
}
