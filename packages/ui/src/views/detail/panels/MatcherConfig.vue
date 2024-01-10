<script lang="ts" setup>
import { ContentCard, IconButton, MatcherItem } from '@/components';
import { Tooltip } from '@/daisy';
import { useRuleConfigStore } from '@/store';
import { FileAddition } from '@icon-park/vue-next';
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

const filteredMatcherList = computed(() => {
  if (selectedRule.value?.path.trim().length) {
    return matcherList.value;
  } else {
    return matcherList.value.filter((matcher) => !matcher.default);
  }
});
</script>

<template>
  <ContentCard>
    <template #header>
      <div class="px-4 py-2 pr-3 flex items-center justify-between">
        <span>Matcher Config</span>
        <Tooltip class="flex text-xs" content="Add Matcher" position="left">
          <IconButton @click="createMatcher">
            <FileAddition />
          </IconButton>
        </Tooltip>
      </div>
    </template>
    <template #default>
      <div class="p-4 text-sm overflow-auto h-full">
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
    </template>
  </ContentCard>
</template>
