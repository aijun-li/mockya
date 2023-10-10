import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/home/index.vue';
import CollectionPage from '@/views/collection/index.vue';
import SettingsPage from '@/views/settings/index.vue';
import StatisticsPage from '@/views/statistics/index.vue';
import TrafficPage from '@/views/traffic/index.vue';

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', component: HomePage },
  {
    path: '/collection/:id',
    component: CollectionPage,
    props: true,
  },
  {
    path: '/settings',
    component: SettingsPage,
  },
  {
    path: '/statistics',
    component: StatisticsPage,
  },
  {
    path: '/traffic',
    component: TrafficPage,
  },
];
