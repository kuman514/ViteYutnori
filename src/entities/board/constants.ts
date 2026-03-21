import { BoardNode } from './types';

export const BOARD_NODES: BoardNode[] = [
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
