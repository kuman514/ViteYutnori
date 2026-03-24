import { THROW_RESULT_BADGE_COLORS, THROW_RESULT_KOREAN } from './constants';
import styles from './style.module.css';
import { ThrowResult } from './types';

interface Props {
  throwResult: ThrowResult;
  count: number;
}

export default function ThrowResultBadge({ throwResult, count }: Props) {
  const renderCount =
    count > 1 ? <div className={styles.counter}>{count}</div> : null;

  return (
    <div className={styles.throwResultBadge}>
      <div
        className={styles.badgeBody}
        style={{
          backgroundColor: THROW_RESULT_BADGE_COLORS[throwResult],
          fontSize: throwResult === ThrowResult.BACKDO ? '1rem' : '1.5rem',
        }}
      >
        {THROW_RESULT_KOREAN[throwResult]}
      </div>
      {renderCount}
    </div>
  );
}
