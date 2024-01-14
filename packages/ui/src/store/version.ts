import { toast } from '@/daisy';
import { trpc } from '@/service';
import { ChangelogInfo } from '@/types';
import { handleError, sleep, withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useVersionStore = withRefs(
  defineStore('version', () => {
    const checkVersionLoading = ref(false);
    const updateVersionLoading = ref(false);

    const versionModalVisible = ref(false);

    const hasUpdates = ref(false);
    const changelog = ref<ChangelogInfo>({
      currentVersion: '',
      latestVersion: '',
      features: [],
      fixes: [],
    });

    async function checkForUpdates(showNoUpdatesToast = false) {
      if (checkVersionLoading.value) {
        return;
      }

      try {
        checkVersionLoading.value = true;
        // const data = await trpc.checkForUpdates.query({ currentVersion: '0.1.4' });
        const data = await trpc.checkForUpdates.query();
        hasUpdates.value = data.hasUpdates;
        changelog.value = data.changelog;

        if (data.hasUpdates) {
          versionModalVisible.value = true;
        } else if (showNoUpdatesToast) {
          toast.info('No updates available');
        }
      } catch (error) {
        handleError(error);
      } finally {
        checkVersionLoading.value = false;
      }
    }

    async function updateVersion() {
      if (updateVersionLoading.value) {
        return;
      }

      try {
        updateVersionLoading.value = true;
        const needReload = await trpc.updateVersion.mutate();
        if (needReload) {
          await sleep(1000);
          location.reload();
        }
      } catch (error) {
        handleError(error);
      } finally {
        updateVersionLoading.value = false;
      }
    }

    return {
      checkVersionLoading,
      updateVersionLoading,
      versionModalVisible,
      hasUpdates,
      changelog,
      checkForUpdates,
      updateVersion,
    };
  }),
);
