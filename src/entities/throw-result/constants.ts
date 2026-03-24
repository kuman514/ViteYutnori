import { ThrowResult } from './types';

export const THROW_RESULT_KOREAN: Record<ThrowResult, string> = {
  [ThrowResult.DO]: '도',
  [ThrowResult.GAE]: '개',
  [ThrowResult.GEOL]: '걸',
  [ThrowResult.YUT]: '윷',
  [ThrowResult.MO]: '모',
  [ThrowResult.BACKDO]: '빽도',
};

export const THROW_RESULT_BADGE_COLORS: Record<ThrowResult, string> = {
  [ThrowResult.DO]: '#f0b7a0',
  [ThrowResult.GAE]: '#fff5a8',
  [ThrowResult.GEOL]: '#b3ffb9',
  [ThrowResult.YUT]: '#c1d1ff',
  [ThrowResult.MO]: '#f2c4ff',
  [ThrowResult.BACKDO]: '#797979',
};
