import { trpc } from '@/service';
import { handleError, withRefs } from '@/utils';
import { socket } from '@/ws';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IntStatKey, SocketEventName } from 'whistle.mockya/src/shared/types';

type StatItem = { key: IntStatKey; value: number };
type Stats = Partial<Record<IntStatKey, number>>;

export const useStatsStore = withRefs(
  defineStore('stats', () => {
    const stats = ref<Stats>({});

    async function fetchStats() {
      try {
        const data = await trpc.getStats.query();
        stats.value = Object.fromEntries((data as StatItem[]).map((item) => [item.key, item.value]));
      } catch (error) {
        handleError(error);
      }
    }

    socket.on(SocketEventName.StatsUpdate, fetchStats);

    return {
      stats,
      fetchStats,
    };
  }),
);
