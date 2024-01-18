import { trpc } from '@/service';
import { handleError } from '@/utils';
import { ref } from 'vue';

export function useHealthCheck() {
  const healthy = ref(false);
  const healthChecked = ref(false);
  const healthCheckLoading = ref(false);

  async function checkHealth() {
    try {
      healthCheckLoading.value = true;
      const result = await trpc.checkWhistle.query();
      healthy.value = result.whistle;
    } catch (error) {
      healthy.value = false;
      if (healthChecked.value) {
        handleError(error);
      }
    } finally {
      healthCheckLoading.value = false;
      healthChecked.value = true;
    }
  }

  return {
    healthy,
    healthChecked,
    healthCheckLoading,
    checkHealth,
  };
}
