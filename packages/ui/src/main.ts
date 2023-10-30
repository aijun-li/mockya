import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import { createPinia } from 'pinia';
import { registerSW } from 'virtual:pwa-register';
import { createApp } from 'vue';
import App from './App.vue';
import './antd.scss';
import { router } from './router';
import './style.css';

registerSW({ immediate: true });

dayjs.extend(relativeTime);

const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');
