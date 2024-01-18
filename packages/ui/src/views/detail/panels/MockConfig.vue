<script lang="ts" setup>
import { ContentCard, CreateMockModal, Editor, IconButton, MockDropdownList } from '@/components';
import { GlobalEvents, updateSaveDelay } from '@/const';
import { Tooltip } from '@/daisy';
import { useRuleConfigStore } from '@/store';
import { track } from '@/utils/track';
import { FileAddition } from '@icon-park/vue-next';
import { useDebounceFn, useEventBus } from '@vueuse/core';
import { computed, ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { selectedRule, deleteMock, updateMock } = useRuleConfigStore();

const route = useRoute();
const router = useRouter();

const mockList = computed(() => selectedRule.value?.mocks ?? []);

const createVisible = ref(false);

const defaultMockId = computed(() => mockList.value.find((mock) => mock.default)?.id);

const selectedMockId = ref(defaultMockId.value ?? 0);

const selectedMock = computed(() => mockList.value.find((mock) => mock.id === selectedMockId.value));

const code = ref(selectedMock.value?.body ?? '');

const bus = useEventBus(GlobalEvents.ChangeSelectMock);

bus.on((e) => {
  if (mockList.value.find((mock) => mock.id === e.id)) {
    selectedMockId.value = e.id;
  }
});

watch(selectedMockId, () => {
  code.value = selectedMock.value?.body ?? '';
});

watch(defaultMockId, () => {
  selectedMockId.value = defaultMockId.value ?? 0;
});

watchEffect(() => {
  if (mockList.value.length && route.query.mockId) {
    const target = mockList.value.find((mock) => mock.id === Number(route.query.mockId));
    if (target) {
      selectedMockId.value = target.id;
    }
    router.replace({
      query: {
        ...route.query,
        mockId: undefined,
      },
    });
  }
});

const saveCode = useDebounceFn((params: { id: number; body: string }) => {
  updateMock(params);
}, updateSaveDelay);

function onCodeChange() {
  const id = selectedMockId.value;
  const body = code.value;
  if (selectedMock.value) {
    selectedMock.value.body = code.value;
  }
  if (id) {
    saveCode({ id, body });
  }
}

async function onDeleteMock(id: number) {
  if (id === selectedMockId.value) {
    selectedMockId.value = defaultMockId.value ?? 0;
  }
  await deleteMock(id);
}

async function onUpdateMock(id: number, name: string) {
  mockList.value.find((mock) => mock.id === id)!.name = name;
  await updateMock({ id, name });
}

function onCreated(id?: number) {
  if (!id || !mockList.value.find((mock) => mock.id === id)) {
    return;
  }
  selectedMockId.value = id;
}

function onCreateClick() {
  createVisible.value = true;
  track('create_mock_btn_click');
}
</script>

<template>
  <ContentCard>
    <template #header>
      <div class="px-4 py-2 pr-3 flex items-center justify-between">
        <span>Mock Config</span>
        <Tooltip class="flex text-xs" content="Add Mock" position="left">
          <IconButton @click="onCreateClick">
            <FileAddition />
          </IconButton>
        </Tooltip>
      </div>
    </template>
    <template #default>
      <div class="p-4 flex flex-col h-full w-full">
        <div class="mb-1 flex items-center">
          <MockDropdownList v-model="selectedMockId" @delete="onDeleteMock" @update="onUpdateMock" />
        </div>

        <Editor v-model="code" class="editor flex-1 min-h-0" @change="onCodeChange" />
      </div>

      <CreateMockModal v-model="createVisible" @created="onCreated" />
    </template>
  </ContentCard>
</template>

<style lang="scss" scoped></style>
