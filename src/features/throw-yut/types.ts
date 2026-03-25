import { ThrowResult } from '^/entities/throw-result/types';

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
