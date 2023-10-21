import type { EventBusKey } from '@vueuse/core';

export const enum LocalStorageKey {
  DetailResizeLayout = 'mockya-detail-resize-layout',
  ConfigResizeLayout = 'mockya-config-resize-layout',
  EditorLineWrap = 'mockya-editor-line-wrap',
}

export const GlobalEvents = {
  ChangeSelectMock: Symbol('change-select-mock') as EventBusKey<{ id: number }>,
};

export const updateSaveDelay = 250;
