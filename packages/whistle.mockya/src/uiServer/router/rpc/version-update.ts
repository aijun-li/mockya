import logger from '@/logger';
import { procedure, router } from '@/tools/trpc';
import axios from 'axios';
import path from 'path';
import { z } from 'zod';

const latestVersionUrl = 'https://registry.npmjs.org/whistle.mockya/latest';
// TODO: proxy
const changelogUrl = 'https://raw.githubusercontent.com/aijun-li/mockya/main/CHANGELOG.md';

async function getVersionInfo(mockVersion?: string) {
  const {
    data: { version: latestVersion },
  }: { data: { version: string } } = await axios.get(latestVersionUrl);

  const currentVersion = mockVersion ?? (require('../../../../package.json').version as string);

  return {
    currentVersion,
    latestVersion,
  };
}

export default router({
  checkForUpdates: procedure
    .input(
      z
        .object({
          currentVersion: z.string().optional(),
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const { currentVersion, latestVersion } = await getVersionInfo(input?.currentVersion);

      if (latestVersion === currentVersion) {
        return {
          hasUpdates: false,
          changelog: {
            currentVersion,
            latestVersion,
            features: [],
            fixes: [],
          },
        };
      }

      const { data: rawChangelog }: { data: string } = await axios.get(changelogUrl);

      const features: string[] = [];
      const fixes: string[] = [];

      const findState = {
        active: false,
        inFeatureBlock: false,
        inFixBlock: false,
      };

      const entryRegex = /^-(.*)\(\[\w+\]\(.*\)\)$/;

      const valid = rawChangelog
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .some((line) => {
          if (line.startsWith(`## [${latestVersion}]`)) {
            findState.active = true;
            return false;
          } else if (!findState.active) {
            return false;
          } else if (line.startsWith(`## [${currentVersion}]`)) {
            return true;
          } else if (line.startsWith('### Bug Fixes')) {
            findState.inFeatureBlock = false;
            findState.inFixBlock = true;
          } else if (line.startsWith('### Features')) {
            findState.inFeatureBlock = true;
            findState.inFixBlock = false;
          } else {
            const match = line.match(entryRegex);
            if (!match) {
              return false;
            }
            const entry = match[1].trim();
            if (!entry) {
              return false;
            }
            if (findState.inFeatureBlock) {
              features.push(entry);
            } else if (findState.inFixBlock) {
              fixes.push(entry);
            }
          }
        });

      return {
        hasUpdates: true,
        changelog: {
          currentVersion,
          latestVersion,
          features: valid ? [...new Set(features)] : [],
          fixes: valid ? [...new Set(fixes)] : [],
        },
      };
    }),

  updateVersion: procedure.mutation(async () => {
    const { currentVersion, latestVersion } = await getVersionInfo();

    logger.debug(`Install Directory: ${path.resolve(__dirname, '../../../..')}`);

    if (currentVersion === latestVersion) {
      return;
    }
  }),
});
