export const track: umami.umami['track'] = (...args) => {
  if (import.meta.env.DEV) {
    return;
  }

  window.umami?.track(...(args as any));
};
