<script lang="ts" setup>
import { useJsonFormat } from '@/hooks';
import { Correct, Error } from '@icon-park/vue-next';
import { ref, watch } from 'vue';
import { TrafficItem } from 'whistle.mockya/src/shared/types';
import { Editor } from '.';

interface Props {
  item: TrafficItem;
}

const props = defineProps<Props>();

const resp = ref<any>();

const { formatJson } = useJsonFormat();

watch(
  () => [props.item.id, props.item.resp],
  async () => {
    if (props.item.resp !== undefined) {
      try {
        const result = await formatJson({ code: props.item.resp, cursorOffset: 0 });
        resp.value = result.code;
      } catch {
        resp.value = undefined;
      }
    } else {
      resp.value = undefined;
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div class="p-4 h-full w-full flex flex-col text-sm">
    <div class="overflow-auto h-full w-full">
      <div class="grid grid-cols-[max-content,1fr] auto-rows-auto gap-2">
        <div class="title">Mocked</div>
        <div class="flex items-center">
          <Correct v-if="item.match" theme="filled" class="text-success" size="14" />
          <Error v-else theme="filled" class="text-error" size="14" />
        </div>

        <div class="title">URL</div>
        <div class="break-all">{{ item.url }}</div>

        <div class="title">Path</div>
        <div class="break-all">{{ item.path }}</div>
      </div>

      <div class="section">
        <div class="title section-title">Query Entries</div>
        <table class="table table-xs table-zebra">
          <tbody>
            <tr v-for="(entry, index) in item.queryEntries" :key="index">
              <td class="leading-3 w-1/4">{{ entry[0] }}</td>
              <td class="leading-3">{{ entry[1] }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <div class="title section-title">Body Entries</div>
        <table class="table table-xs table-zebra">
          <tbody>
            <tr v-for="(entry, index) in item.bodyEntries" :key="index">
              <td class="leading-3">{{ entry[0] }}</td>
              <td class="leading-3">{{ entry[1] }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <div class="title section-title">Response</div>
        <Editor v-if="resp !== undefined" v-model="resp" read-only hide-operations />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  @apply font-semibold;
}
.section {
  .title {
    @apply mt-2 sticky top-0 bg-base-100 z-[99];
  }
}
</style>
