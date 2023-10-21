import { TOAST_TYPES } from './const';

export type ToastType = (typeof TOAST_TYPES)[number];
export type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';

export interface ToastOptions {
  type: ToastType;
  content: string;
  duration?: number;
  position?: ToastPosition;
  html?: boolean;
}

export interface ToastProps extends ToastOptions {
  id: number;
  offset?: number;
  onClose: () => void;
  onDestroy: () => void;
}

export type ToastCloseCallback = () => void;

export type TypedToast = (content: string, options?: Partial<ToastOptions>) => ToastCloseCallback;
export type TypedToastObj = { [key in ToastType]: TypedToast };
export type BaseToast = (options: ToastOptions) => ToastCloseCallback;

export type Toast = BaseToast & TypedToastObj;
