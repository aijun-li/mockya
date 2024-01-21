export * from './env';
export * from './error';
export * from './pinia';
export * from './worker';

export function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
