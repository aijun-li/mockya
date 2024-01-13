<script lang="ts" setup>
import { ContentCard, VersionUpdateModal } from '@/components';
import { Button, Diff, Divider, Loading } from '@/daisy';
import { trpc } from '@/service';
import { VersionUpdateInfo } from '@/types';
import { handleError } from '@/utils';
import { Github, Refresh } from '@icon-park/vue-next';
import { ref } from 'vue';

const appVersion = import.meta.env.DEV ? `${__APP_VERSION__} (dev)` : __APP_VERSION__;

const updateModalVisible = ref(false);

const checkLoading = ref(false);

const versionUpdateInfo = ref<VersionUpdateInfo>({
  hasUpdates: false,
  changelog: {
    currentVersion: '',
    latestVersion: '',
    features: [],
    fixes: [],
  },
});

function onReportIssue() {
  window.open('https://github.com/aijun-li/mockya/issues', '_blank');
}

async function onCheckForUpdates() {
  if (checkLoading.value) {
    return;
  }

  try {
    checkLoading.value = true;
    const res = await trpc.checkForUpdates.query();

    versionUpdateInfo.value = res;

    if (res.hasUpdates) {
      updateModalVisible.value = true;
    }
  } catch (error) {
    handleError(error);
  } finally {
    checkLoading.value = false;
  }
}

async function onUpdateVersion() {
  try {
    await trpc.updateVersion.mutate();
  } catch (error) {
    handleError(error);
  }
}
</script>

<template>
  <div class="h-full w-full">
    <ContentCard class="flex flex-col p-6">
      <Diff class="h-30 w-100 rounded" default-position="253px">
        <template #item-one>
          <div class="bg-primary text-primary-content text-6xl font-black grid place-content-center">Mock Ya</div>
        </template>
        <template #item-two>
          <div class="bg-base-200 text-6xl font-black grid place-content-center">Mock Ya</div>
        </template>
      </Diff>

      <Divider />

      <div class="setting-section">
        <div class="title">About</div>
        <div class="entry">
          <div>Version:</div>
          <div>{{ appVersion }}</div>
        </div>
        <div class="flex gap-4">
          <Button size="xs" :outline="!checkLoading" :disabled="checkLoading" @click="onCheckForUpdates">
            <Refresh v-if="!checkLoading" />
            <Loading v-else class="w-3" />
            Check for Updates
          </Button>
          <Button size="xs" outline @click="onReportIssue">
            <Github />
            Report Issue
          </Button>
        </div>
      </div>
    </ContentCard>

    <VersionUpdateModal v-model="updateModalVisible" :data="versionUpdateInfo" @confirm="onUpdateVersion" />
  </div>
</template>

<style lang="scss" scoped>
.setting-section {
  @apply flex flex-col gap-2;

  .title {
    @apply font-semibold;
  }

  .entry {
    @apply text-sm flex gap-2;
  }
}
</style>
