import { track } from '@/utils/track';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  track((props) => ({ ...props, referrer: `https://${JSON.stringify(__APP_VERSION__)}` }));
});

export { router };
