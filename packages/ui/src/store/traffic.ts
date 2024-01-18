import { withRefs } from '@/utils';
import { socket } from '@/ws';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SocketEventName, TrafficItem } from 'whistle.mockya/src/shared/types';

const MAX_LEN = 300;

export const useTrafficStore = withRefs(
  defineStore('traffic', () => {
    const trafficList = ref<TrafficItem[]>([]);
    const enabled = ref(false);

    function listener(item: TrafficItem) {
      const index = trafficList.value.findIndex(({ id }) => item.id === id);

      if (index < 0) {
        trafficList.value.push(item);
      } else {
        trafficList.value[index] = item;
      }

      if (trafficList.value.length > MAX_LEN) {
        trafficList.value.shift();
      }
    }

    function start() {
      socket.on(SocketEventName.TrafficUpdate, listener);
      enabled.value = true;
    }

    function stop() {
      socket.off(SocketEventName.TrafficUpdate, listener);
      enabled.value = false;
    }

    function clear() {
      trafficList.value = [];
    }

    return {
      enabled,
      trafficList,
      start,
      stop,
      clear,
    };
  }),
);
