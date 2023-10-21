import { trpc } from '@/service';

export type MockHeader = Awaited<ReturnType<typeof trpc.getMockHeader.query>>;

export type BaseMock = Awaited<ReturnType<typeof trpc.getMock.query>>;

export type Mock = Awaited<ReturnType<typeof trpc.getMockFull.query>>;
