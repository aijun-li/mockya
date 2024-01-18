<script lang="ts" setup>
import { ContentCard, IconButton, ResizeLayout, TrafficItemDetail, TrafficListItem } from '@/components';
import { LocalStorageKey } from '@/const';
import { Button, Hero, Input, Loading, Toggle } from '@/daisy';
import { useTrafficStore } from '@/store';
import { Clear, HandLeft } from '@icon-park/vue-next';
import { computed, ref } from 'vue';

enum FilterType {
  Mock = 'Mock',
  All = 'All',
  Real = 'Real',
}

const { trafficList, enabled, start, stop, clear } = useTrafficStore();

const selectedId = ref('');
const selectedItem = computed(() => trafficList.value.find(({ id }) => id === selectedId.value));

const filterType = ref(FilterType.All);
const filterText = ref('');

const filteredList = computed(() =>
  trafficList.value.filter((item) => {
    const text = filterText.value.trim().toLowerCase();
    if (filterType.value === FilterType.Mock && !item.match) {
      return false;
    } else if (filterType.value === FilterType.Real && item.match) {
      return false;
    } else if (text) {
      return item.url.trim().toLowerCase().includes(text);
    } else {
      return true;
    }
  }),
);

function onToggle(val: boolean) {
  if (val) {
    start();
  } else {
    stop();
  }
}

function onSelect(id: string) {
  selectedId.value = selectedId.value === id ? '' : id;
}
</script>

<template>
  <div class="h-full w-full">
    <ResizeLayout
      init-start-size="40%"
      :start-min-size="400"
      :start-max-size="600"
      :local-key="LocalStorageKey.TrafficResizeLayout"
    >
      <template #start>
        <ContentCard>
          <template #header>
            <div class="flex items-center justify-between px-4 py-2">
              <div class="flex items-center gap-2">
                Traffic
                <Toggle :model-value="enabled" type="success" @change="onToggle" />
              </div>
              <IconButton @click="clear">
                <Clear :size="18" />
              </IconButton>
            </div>
          </template>

          <template #default>
            <div class="h-full w-full p-4 flex flex-col">
              <div class="flex-none flex mb-4 items-center">
                <Input v-model="filterText" placeholder="Search" bordered size="xs" />
                <div class="ml-8 join">
                  <Button
                    v-for="fType in FilterType"
                    :key="fType"
                    class="join-item"
                    :type="filterType === fType ? 'primary' : undefined"
                    size="xs"
                    @click="filterType = fType"
                  >
                    {{ fType }}
                  </Button>
                </div>
              </div>

              <div v-if="filteredList.length" class="h-full relative overflow-auto">
                <TransitionGroup name="list">
                  <TrafficListItem
                    v-for="item in filteredList"
                    :key="item.id"
                    class="w-full mt-2 first:mt-0"
                    :item="item"
                    :selected="item.id === selectedId"
                    @click="onSelect(item.id)"
                  />
                </TransitionGroup>
              </div>
              <div v-else class="grow-[4] flex-center flex-col text-xl">
                <template v-if="enabled">
                  <Loading class="mb-4 w-12" shape="ring" />
                  Waiting For Requests
                </template>
                <template v-else>
                  <Loading class="mb-4 w-12" shape="ball" />
                  Traffic Listening Stopped
                </template>
              </div>

              <div v-if="!filteredList.length" class="grow-[1]"></div>
            </div>
          </template>
        </ContentCard>
      </template>

      <template #end>
        <ContentCard v-if="selectedItem">
          <template #header>
            <div class="flex items-center justify-between px-4 py-2">Request Detail</div>
          </template>
          <template #default>
            <TrafficItemDetail :item="selectedItem" />
          </template>
        </ContentCard>

        <ContentCard v-else>
          <Hero>
            <div class="flex-center flex-col text-xl">
              <HandLeft class="mb-4" :size="48" />
              Select One Item First
            </div>
          </Hero>
        </ContentCard>
      </template>
    </ResizeLayout>
  </div>
</template>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.list-leave-active {
  position: absolute;
}
</style>
