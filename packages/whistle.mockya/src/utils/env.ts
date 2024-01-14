import path from 'path';

export const pluginInstaller = (function () {
  const pathSegments = __dirname.split(path.sep);

  if (pathSegments.includes('.WhistleAppData')) {
    return 'whistle';
  } else if (pathSegments.includes('pnpm') || pathSegments.includes('.pnpm')) {
    return 'pnpm';
  } else {
    return 'npm';
  }
})();
