import { Server } from 'socket.io';

export let io: Server | undefined;

export function initWebSocket(server: Whistle.PluginServer) {
  if (!io) {
    io = new Server(server, {
      connectionStateRecovery: {},
    });
  }
}
