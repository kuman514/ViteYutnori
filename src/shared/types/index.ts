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

export interface Pawn {
  /**
   * @desc
   * 말의 주인.
   */
  player: number;
  /**
   * @desc
   * 말이 겹쳐있는 정도.
   */
  layers: number;
}

export enum ThrowResult {
  DO = 1,
  GAE = 2,
  GEOL = 3,
  YUT = 4,
  MO = 5,
  BACKDO = -1,
}

export interface PlayerMove {
  /**
   * @desc
   * 현재 턴에서 윷을 던진 결과. 이걸 통해 말을 얼마나 움직일 수 있을지 결정할 수 있다.
   */
  throwResults: Record<ThrowResult, number>;
  /**
   * @desc
   * 현재 턴에서 앞으로 윷을 던질 수 있는 횟수.
   */
  throwChances: number;
}
