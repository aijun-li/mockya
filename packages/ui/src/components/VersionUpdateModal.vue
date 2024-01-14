<script lang="ts" setup>
import { Button, Loading, Modal } from '@/daisy';
import { useVersionStore } from '@/store';

import { ArrowRight } from '@icon-park/vue-next';
import { computed } from 'vue';

const { versionModalVisible, updateVersionLoading, changelog, updateVersion } = useVersionStore();

const listConfigs = computed(() => [
  {
    title: 'New Features',
    data: changelog.value.features,
  },
  {
    title: 'Bug Fixes',
    data: changelog.value.fixes,
  },
]);

async function onUpdateClick() {
  await updateVersion();
}
</script>

<template>
  <Modal v-model="versionModalVisible" title="🎉 New Version Available 🎉" show-close>
    <template #default>
      <div class="flex items-center gap-4 text-2xl font-semibold">
        {{ changelog.currentVersion }} <ArrowRight /> {{ changelog.latestVersion }}
      </div>
      <template v-for="config in listConfigs" :key="config.title">
        <div v-if="config.data.length" class="mt-4">
          <div class="font-semibold">{{ config.title }}</div>
          <ul class="list-disc list-inside">
            <li v-for="entry in config.data" :key="entry">
              {{ entry }}
            </li>
          </ul>
        </div>
      </template>
    </template>
    <template #action>
      <Button type="ghost" @click="versionModalVisible = false">Cancel</Button>
      <Button type="primary" :disabled="updateVersionLoading" @click="onUpdateClick">
        <Loading v-if="updateVersionLoading" size="xs" />
        Update
      </Button>
    </template>
  </Modal>
</template>
