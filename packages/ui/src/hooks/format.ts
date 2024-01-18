import { CodeFormatMessage } from '@/types';
import { workerApi } from '@/utils';
import formatWorkerScript from '@/workers/format?worker&url';
import { onUnmounted } from 'vue';

export function useJsonFormat() {
  const { postMessage: workerFormat, terminate: terminateWorker } = workerApi<CodeFormatMessage>(formatWorkerScript);

  onUnmounted(() => {
    terminateWorker();
  });

  function formatJson(params: CodeFormatMessage) {
    return workerFormat(params);
  }

  return {
    formatJson,
  };
}
