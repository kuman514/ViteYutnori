import { atom } from 'jotai';

/**
 * @desc
 * 플레이어 별 대기실에 남은 말 수
 */
export const waitingPerPlayerAtom = atom<number[]>([]);
