import type { eventWithTime } from '@kenobi.ai/types';

export type eventWithTimeAndPacker = eventWithTime & {
  v: string;
};

export const MARK = 'v1';
