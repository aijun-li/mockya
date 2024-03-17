<script lang="ts" setup>
import { ContentCard, IconButton, MatcherItem } from '@/components';
import { Tooltip } from '@/daisy';
import { useCommandPaletteStore, useRuleConfigStore } from '@/store';
import { track } from '@/utils/track';
import { FileAddition, HandUp } from '@icon-park/vue-next';
import { computed } from 'vue';

const {
  selectedRule,
  matcherList,
  createMatcher,
  updateMatcher,
  deleteMatcher,
  createMatcherCondition,
  updateMatcherCondition,
  deleteMatcherCondition,
} = useRuleConfigStore();

const validConditionsLen = computed(
  () =>
    selectedRule.value?.conditions.filter((condition) => condition.key.trim() && condition.value.trim()).length ?? 0,
);

const filteredMatcherList = computed(() => {
  if (selectedRule.value?.path.trim().length || validConditionsLen.value) {
    return matcherList.value;
  } else {
    return matcherList.value.filter((matcher) => !matcher.default);
  }
});

function onCreateClick() {
  createMatcher();
  track('create_matcher_btn_click');
}

const { registerActions } = useCommandPaletteStore();
registerActions([
  {
    id: 'create-matcher',
    label: 'Create Matcher',
    perform: () => {
      onCreateClick();
    },
  },
]);
</script>

<template>
  <ContentCard>
    <template #header>
      <div class="px-4 py-2 pr-3 flex items-center justify-between">
        <span>Matcher Config</span>
        <Tooltip class="flex text-xs" content="Add Matcher" position="left">
          <IconButton @click="onCreateClick">
            <FileAddition />
          </IconButton>
        </Tooltip>
      </div>
    </template>
    <template #default>
      <div v-if="filteredMatcherList.length" class="p-4 text-sm overflow-auto h-full w-full">
        <template v-for="(matcher, index) in filteredMatcherList" :key="matcher.id">
          <div v-if="index !== 0" class="divider my-2" />
          <MatcherItem
            :matcher="matcher"
            @update="updateMatcher({ id: matcher.id, ...$event })"
            @delete="deleteMatcher(matcher.id)"
            @create-condition="createMatcherCondition(matcher.id)"
            @update-condition="updateMatcherCondition"
            @delete-condition="deleteMatcherCondition"
          />
        </template>
      </div>
      <div v-else class="p-4 text-lg h-full w-full flex-center flex-col">
        <HandUp class="mb-4" :size="36" />
        <span>Create One Matcher</span>
        <span class="text-xs text-center">add url-path/conditions to use FALLBACK matcher</span>
      </div>
    </template>
  </ContentCard>
</template>
