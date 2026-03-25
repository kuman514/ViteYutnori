import { atom } from 'jotai';

import { ThrowResult } from '^/entities/throw-result/types';
import { YutInfo } from '^/entities/yut/types';

import { PlayerMove } from './types';

/**
 * @desc
 * 가장 최근에 나온 윷 던지기 결과를 담음.
 */
export const recentThrowResultAtom = atom<YutInfo[]>([]);

/**
 * @desc
 * 이번 턴에서 남아있는 가용 윷 던지기 결과와 윷을 더 던질 수 있는 기회 등등를 담음.
 */
export const playerMoveAtom = atom<PlayerMove>({
  throwResults: {
    [ThrowResult.DO]: 0,
    [ThrowResult.GAE]: 0,
    [ThrowResult.GEOL]: 0,
    [ThrowResult.YUT]: 0,
    [ThrowResult.MO]: 0,
    [ThrowResult.BACKDO]: 0,
  },
  throwChances: 0,
});
