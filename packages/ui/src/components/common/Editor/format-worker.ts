import { CodeFormatMessage, WorkerRequest } from '@/types';
import * as prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';

self.addEventListener('message', async (event: MessageEvent<WorkerRequest<CodeFormatMessage>>) => {
  try {
    const formattedCode = await formatCode(event.data.message);

    self.postMessage({
      id: event.data.id,
      message: formattedCode,
    });
  } catch (error) {
    self.postMessage({
      id: event.data.id,
      error,
    });
  }
});

async function formatCode(data: CodeFormatMessage): Promise<CodeFormatMessage> {
  const { code, cursorOffset } = data;

  const result = await prettier.formatWithCursor(code, {
    cursorOffset,
    parser: 'json5',
    plugins: [babelPlugin, estreePlugin],
    singleQuote: true,
  });

  return {
    code: result.formatted,
    cursorOffset: result.cursorOffset,
  };
}
