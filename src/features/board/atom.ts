import { atom } from 'jotai';

import { BOARD_NODES } from '^/entities/board/constants';

import { BoardNodeStatus } from './types';

/**
 * @desc
 * 칸마다 어느 플레이어의 말이 얼만큼 서있는지를 담음.
 */
export const standingsAtom = atom<BoardNodeStatus[]>(
  Array.from({ length: BOARD_NODES.length }, () => null),
);
