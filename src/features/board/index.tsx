import BoardNode from '^/entities/board-node';
import { BOARD_NODE_POSITIONS, IS_BIG } from '^/entities/board/constants';

import styles from './style.module.css';

export default function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.squareLine} />
      <div className={`${styles.diagonalLine} ${styles.diagonal45Deg}`} />
      <div className={`${styles.diagonalLine} ${styles.diagonalRev45Deg}`} />
      {BOARD_NODE_POSITIONS.map((position, index) => (
        <div
          key={`node-${index}`}
          id={`node-${index}`}
          className={styles.node}
          style={{
            width: IS_BIG[index] ? '10%' : '6%',
            ...position,
          }}
        >
          <BoardNode />
        </div>
      ))}
    </div>
  );
}
