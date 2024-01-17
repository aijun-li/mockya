import { io, type Socket } from 'socket.io-client';

export let socket: Socket;

export function initWebSocket() {
  if (import.meta.env.DEV) {
    socket = io('ws://localhost:8899', {
      path: '/whistle.mockya/socket.io/',
    });
  } else {
    socket = io({
      path: '/whistle.mockya/socket.io/',
    });
  }
}
