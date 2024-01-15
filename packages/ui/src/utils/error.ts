import { toast } from '@/daisy';

const ERR_MSG_MAX_LEN = 300;

export function handleError(error: unknown) {
  console.error(error);

  const errorMsg = (error as Error).message.trim();

  if (errorMsg.length > ERR_MSG_MAX_LEN) {
    toast.error(
      `${errorMsg.slice(0, ERR_MSG_MAX_LEN)}...\n\n=====Please check console to see complete error message=====`,
    );
  } else {
    toast.error(errorMsg);
  }
}
