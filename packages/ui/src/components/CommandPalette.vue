<script lang="ts" setup>
import { useCollectionsStore, useCommandPaletteStore, useRuleConfigStore, useRuleListStore } from '@/store';
import { CommandPaletteItem } from '@/types';
import { isMac } from '@/utils';
import {
  Analysis,
  CodeBrackets,
  FileCode,
  Home,
  MonitorOne,
  NotebookOne,
  Setting,
  Terminal,
} from '@icon-park/vue-next';
import { onClickOutside, onKeyDown } from '@vueuse/core';
import { computed, ref } from 'vue';
import { Command } from 'vue-command-palette';
import { useRouter } from 'vue-router';

const { visible, actionsConfig } = useCommandPaletteStore();

const dialogEl = ref<HTMLDivElement | null>(null);

const { collections, fetchCollections } = useCollectionsStore();
const { rules } = useRuleListStore();
const { mockList } = useRuleConfigStore();

fetchCollections();

const router = useRouter();

onClickOutside(dialogEl, (event) => {
  const divEl = event.target as HTMLDivElement;
  if (divEl?.hasAttribute('command-dialog-mask')) {
    visible.value = false;
  }
});

onKeyDown(
  'k',
  (e) => {
    if ((isMac && e.metaKey) || (!isMac && e.ctrlKey)) {
      e.preventDefault();
      visible.value = !visible.value;
    }
  },
  { dedupe: true },
);

onKeyDown('Escape', () => {
  if (visible.value) {
    visible.value = false;
  }
});

const pagesConfig = [
  {
    icon: Home,
    label: 'Home',
  },
  {
    icon: MonitorOne,
    label: 'Traffic',
  },
  {
    icon: Analysis,
    label: 'Statistics',
  },
  {
    icon: Setting,
    label: 'Settings',
  },
];
const collectionsConfig = computed(() =>
  collections.value.map((c) => ({
    id: c.id,
    icon: NotebookOne,
    label: `${c.name}  #${c.id}`,
    perform: () => {
      router.push(`/collection/${c.id}`);
    },
  })),
);
const rulesConfig = computed(() =>
  rules.value.map((r) => ({
    id: r.id,
    icon: FileCode,
    label: r.name,
    perform: () => {
      router.replace({
        query: {
          ruleId: r.id,
        },
      });
    },
  })),
);
const mocksConfig = computed(() =>
  mockList.value.map((m) => ({
    id: m.id,
    icon: CodeBrackets,
    label: m.name,
    perform: () => {
      router.replace({
        query: {
          mockId: m.id,
        },
      });
    },
  })),
);
const groups = computed(() =>
  [
    {
      title: 'Actions',
      items: actionsConfig.value.map((a) => ({
        ...a,
        icon: Terminal,
      })),
    },
    {
      title: 'Mocks',
      items: mocksConfig.value,
    },
    {
      title: 'Rules',
      items: rulesConfig.value,
    },
    {
      title: 'Collections',
      items: collectionsConfig.value,
    },
    {
      title: 'Pages',
      items: pagesConfig.map((config) => ({
        ...config,
        id: config.label.toLowerCase(),
        perform: () => {
          router.push(`/${config.label.toLowerCase()}`);
        },
      })),
    },
  ].filter((group) => group.items.length),
);

function onItemSelect(item: CommandPaletteItem) {
  item.perform();
  visible.value = false;
}
</script>

<template>
  <Command.Dialog ref="dialogEl" :visible="visible" theme="easy-mock-palette">
    <template #header>
      <Command.Input placeholder="Search..." />
    </template>
    <template #body>
      <Command.List>
        <Command.Group v-for="group in groups" :key="group.title" :heading="group.title">
          <Command.Item
            v-for="item in group.items"
            :key="item.id"
            :data-value="item.label"
            @select="onItemSelect(item)"
          >
            <component :is="item.icon" />
            {{ item.label }}
          </Command.Item>
        </Command.Group>

        <Command.Empty> No Matching Results. </Command.Empty>
      </Command.List>
    </template>
  </Command.Dialog>
</template>

<style lang="scss">
.easy-mock-palette {
  @apply m-0 mx-auto flex justify-center;

  [command-dialog-mask] {
    @apply bg-black/60 fixed w-screen h-screen left-0 top-0 z-[200];
    animation: 333ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running shown;
  }

  [command-dialog-wrapper] {
    @apply relative bg-base-100 max-w-[640px] w-[90vw] rounded overflow-hidden;
    margin: 20vh auto auto;
    animation: 333ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running shown;
  }

  [command-input] {
    @apply outline-none w-full text-lg p-4 m-0;
    @apply border-none border-b border-b-base-content rounded-none;

    &::placeholder {
      @apply text-neutral-content;
    }
  }

  [command-item] {
    @apply cursor-pointer h-10 text-sm flex items-center gap-2 px-4 select-none relative;
    transition: all 150ms ease;
    content-visibility: auto;

    &[aria-selected='true'],
    &:hover {
      @apply bg-base-200/80;

      &:after {
        @apply bg-primary h-full w-1 z-[123] absolute left-0;
        content: '';
      }
    }

    &:active {
      @apply transition-[background] bg-base-200;
    }
  }

  [command-list] {
    @apply overflow-auto overscroll-contain;
    height: var(--command-list-height);
    max-height: min(360px, 50vh);
    transition: height 200ms ease;
  }

  [command-list-sizer] {
    @apply flex flex-col;
  }

  * + [command-group] {
    margin-top: 8px;
  }

  [command-group-heading] {
    @apply select-none text-xs px-2 pb-1 flex items-center sticky top-0 z-[10] bg-base-100;
  }

  [command-empty=''] {
    @apply text-sm flex-center py-6 whitespace-pre-wrap;
  }

  [command-separator] {
    @apply bg-base-300 h-[1px] w-full my-1;
  }

  [command-dialog-footer] ul,
  [command-dialog-footer] ul li {
    display: flex;
    align-items: center;
  }

  [command-dialog-footer] ul li {
    gap: 4px;
    margin-left: 4px;
    margin-right: 4px;
  }
}

// dialog animation
.command-dialog-enter-active,
.command-dialog-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.command-dialog-enter-from,
.command-dialog-leave-to {
  opacity: 0;
}

.command-dialog-enter-active {
  transition-duration: 0.3s;
}

// transition for command-dialog-wrapper
.command-dialog-enter-active [command-dialog-wrapper] {
  transition-delay: 0.2s;
}

.command-dialog-enter-from [command-dialog-wrapper],
.command-dialog-leave-to [command-dialog-wrapper] {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.command-dialog-enter-active [command-dialog-wrapper] {
  transition: transform ease-out 0.3s;
}

.command-dialog-enter-to [command-dialog-wrapper],
.command-dialog-leave-from [command-dialog-wrapper] {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.command-dialog-leave-active [command-dialog-wrapper] {
  transition: transfrom ease-in 0.2s;
}
</style>
