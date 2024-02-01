export * from './env';

export function getNodeVersion() {
  return process.version;
}

export function getWhistleVersion() {
  const whistleRoot = process.env.WHISTLE_ROOT;

  if (!whistleRoot) {
    return '';
  }

  const matchRes = whistleRoot.match(/.*\/whistle@(.*?)\/.*/);
  if (matchRes) {
    return `v${matchRes[1]}`;
  }

  return '';
}
