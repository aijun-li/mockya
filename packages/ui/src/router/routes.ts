import DetailPage from '@/views/detail/index.vue';
import HomePage from '@/views/home/index.vue';
import SettingsPage from '@/views/settings/index.vue';
import StatisticsPage from '@/views/statistics/index.vue';
import TrafficPage from '@/views/traffic/index.vue';
import { RouteRecordRaw } from 'vue-router';

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'detail',
    path: '/collection/:id',
    component: DetailPage,
    props: true,
  },
  {
    name: 'settings',
    path: '/settings',
    component: SettingsPage,
  },
  {
    name: 'statistics',
    path: '/statistics',
    component: StatisticsPage,
  },
  {
    name: 'traffic',
    path: '/traffic',
    component: TrafficPage,
  },
];
