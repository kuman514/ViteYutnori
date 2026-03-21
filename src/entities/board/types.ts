import { NextMove } from '^/shared/types';

export interface BoardNode {
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
