import { PAWN_COLORS } from './constants';
import styles from './style.module.css';
import { PawnInfo } from './types';

interface Props {
  pawn: PawnInfo;
}

export default function Pawn({ pawn }: Props) {
  const renderPawnBody = (
    <div
      className={styles.pawnBody}
      style={{
        backgroundColor: PAWN_COLORS[pawn.player],
      }}
    />
  );

  const renderPawnLayer =
    pawn.layers > 1 ? (
      <span className={styles.layer}>{pawn.layers}</span>
    ) : null;

  return (
    <div className={styles.pawn}>
      {renderPawnBody}
      {renderPawnLayer}
    </div>
  );
}
