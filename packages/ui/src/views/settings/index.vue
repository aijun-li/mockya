<script lang="ts" setup>
import { ContentCard } from '@/components';
import { Button, Diff, Divider, Loading } from '@/daisy';
import { useVersionStore } from '@/store';
import { Github, Log, Refresh } from '@icon-park/vue-next';

const appVersion = import.meta.env.DEV ? `${__APP_VERSION__} (dev)` : __APP_VERSION__;

const { checkVersionLoading, checkForUpdates } = useVersionStore();

async function onCheckForUpdates() {
  await checkForUpdates(true);
}

function onViewChangelog() {
  window.open('https://github.com/aijun-li/mockya/blob/main/CHANGELOG.md', '_blank');
}

function onReportIssue() {
  window.open('https://github.com/aijun-li/mockya/issues', '_blank');
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
          <Button size="xs" :outline="!checkVersionLoading" :disabled="checkVersionLoading" @click="onCheckForUpdates">
            <Refresh v-if="!checkVersionLoading" />
            <Loading v-else class="w-3" />
            Check for Updates
          </Button>
          <Button size="xs" outline @click="onViewChangelog">
            <Log />
            View Changelog
          </Button>
          <Button size="xs" outline @click="onReportIssue">
            <Github />
            Report Issue
          </Button>
        </div>
      </div>
    </ContentCard>
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
