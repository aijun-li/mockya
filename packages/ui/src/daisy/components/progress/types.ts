import { IColorType } from '@/daisy/types';

export type ProgressColorType = Exclude<IColorType, 'neutral'>;
