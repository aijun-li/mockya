import { WorkerResponse } from '@/types';

type PromiseResolve<U> = (value: U | PromiseLike<U>) => void;
type PromiseReject = (reason?: any) => void;

export function workerApi<T, U = T>(source: string) {
  const worker = new Worker(source, { type: 'module' });
  let nextId = 0;
  const handlers = new Map<number, [PromiseResolve<U>, PromiseReject]>();

  worker.addEventListener('message', (event: MessageEvent<WorkerResponse<U>>) => {
    const { id, message, error } = event.data;

    const actions = handlers.get(id);

    if (!actions) {
      return;
    }

    const [resolve, reject] = actions;
    handlers.delete(id);

    if (error) {
      reject(error);
    } else {
      resolve(message);
    }
  });

  function postMessage(message: T) {
    const id = ++nextId;

    return new Promise<U>((resolve, reject) => {
      handlers.set(id, [resolve, reject]);
      worker.postMessage({ id, message });
    });
  }

  function terminate() {
    worker.terminate();
  }

  return {
    postMessage,
    terminate,
  };
}
