import { toast } from '@/daisy';

export function handleError(error: unknown) {
  console.error(error);
  toast.error((error as Error).message.trim());
}
