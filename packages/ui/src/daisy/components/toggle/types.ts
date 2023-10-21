import { IColorType } from '@/daisy/types';

export type ToggleColor = Exclude<IColorType, 'neutral'>;
