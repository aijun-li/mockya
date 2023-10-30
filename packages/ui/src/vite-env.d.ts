/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client"/>

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}
