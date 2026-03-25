import { atom } from 'jotai';

/**
 * @desc
 * 현재 누구의 턴인지를 담음.
 */
export const currentPlayerAtom = atom<number>(-1);

/**
 * @desc
 * 현재 게임의 승리자, 즉 윷놀이의 목표를 가장 먼저 달성한 플레이어를 담음.
 */
export const winnerAtom = atom<number>(-1);
