import { atom } from 'jotai';

/**
 * @desc
 * 게임 설정 중 플레이어 수를 담음.
 */
export const numberOfPlayersAtom = atom<number>(0);
