import { BoardNodePosition, BoardNodeRoute } from './types';

export const BOARD_NODES: BoardNodeRoute[] = [
  // 0
  {
    backTo: 19,
    passThrough: {},
    startTo: 1,
  },
  // 1
  {
    backTo: 0,
    passThrough: { 0: 2 },
    startTo: 2,
  },
  // 2
  {
    backTo: 1,
    passThrough: { 1: 3 },
    startTo: 3,
  },
  // 3
  {
    backTo: 2,
    passThrough: { 2: 4 },
    startTo: 4,
  },
  // 4
  {
    backTo: 3,
    passThrough: { 3: 5 },
    startTo: 20,
  },
  // 5
  {
    backTo: 4,
    passThrough: { 4: 6 },
    startTo: 6,
  },
  // 6
  {
    backTo: 5,
    passThrough: { 5: 7 },
    startTo: 7,
  },
  // 7
  {
    backTo: 6,
    passThrough: { 6: 8 },
    startTo: 8,
  },
  // 8
  {
    backTo: 7,
    passThrough: { 7: 9 },
    startTo: 9,
  },
  // 9
  {
    backTo: 8,
    passThrough: { 8: 10 },
    startTo: 25,
  },
  // 10
  {
    backTo: 9,
    passThrough: { 9: 11 },
    startTo: 11,
  },
  // 11
  {
    backTo: 10,
    passThrough: { 10: 12 },
    startTo: 12,
  },
  // 12
  {
    backTo: 11,
    passThrough: { 11: 13 },
    startTo: 13,
  },
  // 13
  {
    backTo: 12,
    passThrough: { 12: 14 },
    startTo: 14,
  },
  // 14
  {
    backTo: 24,
    passThrough: { 13: 15 },
    startTo: 15,
  },
  // 15
  {
    backTo: 14,
    passThrough: { 14: 16 },
    startTo: 16,
  },
  // 16
  {
    backTo: 15,
    passThrough: { 15: 17 },
    startTo: 17,
  },
  // 17
  {
    backTo: 16,
    passThrough: { 16: 18 },
    startTo: 18,
  },
  // 18
  {
    backTo: 17,
    passThrough: { 17: 19 },
    startTo: 19,
  },
  // 19
  {
    backTo: 28,
    passThrough: { 18: 'finish', 28: 'finish' },
    startTo: 'finish',
  },
  // 20
  {
    backTo: 4,
    passThrough: {},
    startTo: 21,
  },
  // 21
  {
    backTo: 20,
    passThrough: { 20: 22 },
    startTo: 22,
  },
  // 22
  {
    backTo: 21,
    passThrough: { 21: 23, 26: 27 },
    startTo: 27,
  },
  // 23
  {
    backTo: 22,
    passThrough: { 22: 24 },
    startTo: 24,
  },
  // 24
  {
    backTo: 23,
    passThrough: { 23: 14 },
    startTo: 14,
  },
  // 25
  {
    backTo: 9,
    passThrough: {},
    startTo: 26,
  },
  // 26
  {
    backTo: 25,
    passThrough: { 25: 22 },
    startTo: 22,
  },
  // 27
  {
    backTo: 22,
    passThrough: { 22: 28 },
    startTo: 28,
  },
  // 28
  {
    backTo: 27,
    passThrough: { 27: 19 },
    startTo: 19,
  },
];

export const BOARD_NODE_POSITIONS: BoardNodePosition[] = [
  // 0
  {
    top: '77%',
    left: '92%',
  },
  // 1
  {
    top: '57%',
    left: '92%',
  },
  // 2
  {
    top: '37%',
    left: '92%',
  },
  // 3
  {
    top: '17%',
    left: '92%',
  },
  // 4
  {
    top: '0%',
    left: '90%',
  },
  // 5
  {
    top: '2%',
    left: '77%',
  },
  // 6
  {
    top: '2%',
    left: '57%',
  },
  // 7
  {
    top: '2%',
    left: '37%',
  },
  // 8
  {
    top: '2%',
    left: '17%',
  },
  // 9
  {
    top: '0%',
    left: '0%',
  },
  // 10
  {
    top: '17%',
    left: '2%',
  },
  // 11
  {
    top: '37%',
    left: '2%',
  },
  // 12
  {
    top: '57%',
    left: '2%',
  },
  // 13
  {
    top: '77%',
    left: '2%',
  },
  // 14
  {
    top: '90%',
    left: '0%',
  },
  // 15
  {
    top: '92%',
    left: '17%',
  },
  // 16
  {
    top: '92%',
    left: '37%',
  },
  // 17
  {
    top: '92%',
    left: '57%',
  },
  // 18
  {
    top: '92%',
    left: '77%',
  },
  // 19
  {
    top: '90%',
    left: '90%',
  },
  // 20
  {
    top: `${(100 / 6) * 1 - 3}%`,
    left: `${(100 / 6) * 5 - 3}%`,
  },
  // 21
  {
    top: `${(100 / 6) * 2 - 3}%`,
    left: `${(100 / 6) * 4 - 3}%`,
  },
  // 22
  {
    top: '45%',
    left: '45%',
  },
  // 23
  {
    top: `${(100 / 6) * 4 - 3}%`,
    left: `${(100 / 6) * 2 - 3}%`,
  },
  // 24
  {
    top: `${(100 / 6) * 5 - 3}%`,
    left: `${(100 / 6) * 1 - 3}%`,
  },
  // 25
  {
    top: `${(100 / 6) * 1 - 3}%`,
    left: `${(100 / 6) * 1 - 3}%`,
  },
  // 26
  {
    top: `${(100 / 6) * 2 - 3}%`,
    left: `${(100 / 6) * 2 - 3}%`,
  },
  // 27
  {
    top: `${(100 / 6) * 4 - 3}%`,
    left: `${(100 / 6) * 4 - 3}%`,
  },
  // 28
  {
    top: `${(100 / 6) * 5 - 3}%`,
    left: `${(100 / 6) * 5 - 3}%`,
  },
];

export const IS_BIG: boolean[] = [
  // 0
  false,
  // 1
  false,
  // 2
  false,
  // 3
  false,
  // 4
  true,
  // 5
  false,
  // 6
  false,
  // 7
  false,
  // 8
  false,
  // 9
  true,
  // 10
  false,
  // 11
  false,
  // 12
  false,
  // 13
  false,
  // 14
  true,
  // 15
  false,
  // 16
  false,
  // 17
  false,
  // 18
  false,
  // 19
  true,
  // 20
  false,
  // 21
  false,
  // 22
  true,
  // 23
  false,
  // 24
  false,
  // 25
  false,
  // 26
  false,
  // 27
  false,
  // 28
  false,
];
