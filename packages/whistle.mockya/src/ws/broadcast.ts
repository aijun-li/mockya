import { SocketEventName, TrafficItem } from '@/shared/types';
import { io } from '.';

export function broadcastStatsChange() {
  io?.emit(SocketEventName.StatsUpdate);
}

export function broadcastTrafficChange(item: TrafficItem) {
  io?.emit(SocketEventName.TrafficUpdate, item);
}
