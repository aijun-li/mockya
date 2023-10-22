<script lang="ts" setup>
import { IconButton, MockDropdownList } from '@/components';
import { GlobalEvents, updateSaveDelay } from '@/const';
import { Button, Input, Tooltip } from '@/daisy';
import { useConfirm } from '@/hooks';
import { Matcher, MatcherUpdateConfig } from '@/types';
import { Delete, Plus, ReduceOne } from '@icon-park/vue-next';
import { useDebounceFn, useEventBus } from '@vueuse/core';
import { computed, ref } from 'vue';

interface Props {
  matcher: Matcher;
}

type Emits = {
  'update': [mockId: number];
  'delete': [];
  'create-config': [];
  'delete-config': [id: number];
  'update-config': [params: MatcherUpdateConfig];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const configs = computed(() => props.matcher.configs);

const mock = computed(() => props.matcher.mock);

const isDefault = computed(() => props.matcher.default);

const bus = useEventBus(GlobalEvents.ChangeSelectMock);

const hovered = ref(false);

const {
  confirmed: deleteConfirmed,
  trigger: tryDelete,
  cancel: cancelDelete,
} = useConfirm(() => {
  emit('delete');
});

const onConfigFieldInput = useDebounceFn((params: MatcherUpdateConfig) => {
  emit('update-config', params);
}, updateSaveDelay);

function onMockChange(id: number) {
  bus.emit({ id });
  emit('update', id);
}
</script>

<template>
  <div class="flex items-center" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <div class="flex-1 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
      <template v-if="!isDefault">
        <div class="info-label">When</div>

        <div>
          <div class="grid grid-cols-[1fr,auto,1fr,auto] gap-y-2">
            <template v-for="config in configs" :key="config.id">
              <Input
                v-model="config.key"
                bordered
                size="sm"
                @input="onConfigFieldInput({ id: config.id, key: $event.trim() })"
              />
              <span class="leading-8 mx-2">=</span>
              <Input
                v-model="config.value"
                bordered
                size="sm"
                @input="onConfigFieldInput({ id: config.id, value: $event.trim() })"
              />
              <div class="ml-2 h-full flex-center">
                <IconButton transparent @click="emit('delete-config', config.id)">
                  <ReduceOne />
                </IconButton>
                <!-- <div v-else class="empty-placeholder" /> -->
              </div>
            </template>
          </div>
          <div class="flex items-center w-full">
            <Button
              class="flex-1 mr-2 normal-case text-xs"
              :class="{
                'mt-2': configs.length,
              }"
              size="sm"
              @click="emit('create-config')"
            >
              <Plus :stroke-width="5" :size="14" />
              <span>New Condition</span>
            </Button>
            <div class="empty-placeholder" />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="info-label">When</div>
        <div class="info-label flex">
          <Tooltip class="flex-1 mr-2" content="only works when URL Path is not empty" position="bottom">
            <Button class="flex-center w-full text-xs">Fallback</Button>
          </Tooltip>
          <div class="empty-placeholder" />
        </div>
      </template>

      <div class="info-label">Use</div>

      <div class="flex items-center">
        <MockDropdownList v-model="mock.id" class="mr-2" read-only @change="onMockChange" />
        <IconButton
          v-if="!isDefault"
          class="flex-none"
          transparent
          :danger="deleteConfirmed"
          @click="tryDelete"
          @mouseleave="cancelDelete"
        >
          <Delete />
        </IconButton>
        <div v-else class="empty-placeholder" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-label {
  @apply leading-8;
}
.empty-placeholder {
  @apply w-6 flex-none;
}
</style>
