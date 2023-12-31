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
  createMatcherConfig,
  updateMatcherConfig,
  deleteMatcherConfig,
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
            @update="updateMatcher({ id: matcher.id, mockId: $event })"
            @delete="deleteMatcher(matcher.id)"
            @create-config="createMatcherConfig(matcher.id)"
            @update-config="updateMatcherConfig"
            @delete-config="deleteMatcherConfig"
          />
        </template>
      </div>
    </template>
  </ContentCard>
</template>

<style lang="scss" scoped>
.config-label {
  @apply flex-none flex items-center text-sm;
}
</style>
