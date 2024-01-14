<script lang="ts" setup>
import { ContentCard } from '@/components';
import { Button, Divider, Loading, toast } from '@/daisy';
import { trpc } from '@/service';
import { useVersionStore } from '@/store';
import { handleError } from '@/utils';
import { track } from '@/utils/track';
import { Bug, Github, Log, Refresh } from '@icon-park/vue-next';
import copy from 'copy-to-clipboard';

const appVersion = import.meta.env.DEV ? `${__APP_VERSION__} (dev)` : __APP_VERSION__;

const { checkVersionLoading, checkForUpdates } = useVersionStore();

async function onCopyLogFileUrl() {
  try {
    const logFileUrl = await trpc.getLogFileUrl.query();
    copy(logFileUrl);
    toast.success('Log File Url Copied!');
  } catch (error) {
    handleError(error);
  }
}

function onBrandClick() {
  window.open('https://github.com/aijun-li/mockya', '_blank');
}

async function onCheckForUpdates() {
  await checkForUpdates(true);
  track('check_for_updates_btn_click');
}

function onViewChangelog() {
  window.open('https://github.com/aijun-li/mockya/blob/main/CHANGELOG.md', '_blank');
  track('view_changelog_btn_click');
}

function onReportIssue() {
  window.open('https://github.com/aijun-li/mockya/issues', '_blank');
  track('report_issue_btn_click');
}
</script>

<template>
  <div class="h-full w-full">
    <ContentCard class="flex flex-col p-6">
      <div
        class="h-30 w-100 rounded bg-base-200 text-6xl font-black grid place-content-center cursor-pointer transition-all shadow hover:bg-primary hover:text-primary-content"
        @click="onBrandClick"
      >
        MockYa
      </div>

      <Divider />

      <div class="setting-section">
        <div class="title">Debug</div>
        <div class="flex gap-4">
          <Button size="xs" outline @click="onCopyLogFileUrl">
            <Bug />
            Copy Log File Url
          </Button>
        </div>
      </div>

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
