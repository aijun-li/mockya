import { CodeFormatMessage } from '@/types';
import { workerApi } from '@/utils';
import formatWorkerScript from '@/workers/format?worker&url';
import { onUnmounted } from 'vue';

export function useCodeFormat() {
  const { postMessage: workerFormat, terminate: terminateWorker } = workerApi<CodeFormatMessage>(formatWorkerScript);

  onUnmounted(() => {
    terminateWorker();
  });

  function formatCode(params: CodeFormatMessage) {
    return workerFormat(params);
  }

  return {
    formatCode,
  };
}
