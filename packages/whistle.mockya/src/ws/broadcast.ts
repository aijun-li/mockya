import { SocketEventName } from '@/shared/types';
import { io } from '.';

export function broadcastStatsChange() {
  io?.emit(SocketEventName.StatsUpdate);
}
