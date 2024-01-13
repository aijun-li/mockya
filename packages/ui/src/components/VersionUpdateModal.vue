<script lang="ts" setup>
import { Button, Modal } from '@/daisy';
import { VersionUpdateInfo } from '@/types';
import { ArrowRight } from '@icon-park/vue-next';
import { computed } from 'vue';

interface Props {
  data: VersionUpdateInfo;
}

type Emits = {
  confirm: [];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const changelog = computed(() => props.data.changelog);

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

const visible = defineModel<boolean>({ required: true });
</script>

<template>
  <Modal v-model="visible" title="New Version Available" show-close>
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
      <Button type="ghost" @click="visible = false">Cancel</Button>
      <Button type="primary" @click="emit('confirm')">Update</Button>
    </template>
  </Modal>
</template>
