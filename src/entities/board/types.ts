/**
 * @desc
 * 말이 움직일 때의 목적지의 모든 유형의 집합.
 * `'finish'`: 마지막 칸같이 움직이면 골인이 되는 목적지.
 * 그 외(숫자): 한 칸씩 갈 때 가야 하는 목적지.
 */
export type NextMove = number | 'finish';

export interface BoardNodeRoute {
  /**
   * @desc
   * 빽도가 나왔을 때 목적지.
   */
  backTo: number;
  /**
   * @desc
   * 아직 정지하지 않고 통과 중일 때 가야 할 칸의 목록.
   */
  passThrough: Record<number, NextMove>;
  /**
   * @desc
   * 정지할 때 가야할 칸.
   */
  startTo: NextMove;
}

export interface BoardNodePosition {
  top: `${number}%`;
  left: `${number}%`;
}
