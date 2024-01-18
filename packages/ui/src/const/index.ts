import type { EventBusKey } from '@vueuse/core';

export const enum LocalStorageKey {
  DetailResizeLayout = 'mockya-detail-resize-layout',
  ConfigResizeLayout = 'mockya-config-resize-layout',
  TrafficResizeLayout = 'mockya-traffic-resize-layout',
  EditorLineWrap = 'mockya-editor-line-wrap',

  VersionUpdateShowTime = 'version-update-show-time',
}

export const GlobalEvents = {
  ChangeSelectMock: Symbol('change-select-mock') as EventBusKey<{ id: number }>,
};

export const updateSaveDelay = 250;
