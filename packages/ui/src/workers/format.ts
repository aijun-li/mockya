import { CodeFormatMessage, WorkerRequest } from '@/types';
import { CodeLang } from '@shared/types';
import * as prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';

self.addEventListener('message', async (event: MessageEvent<WorkerRequest<CodeFormatMessage>>) => {
  try {
    const withCursor = Boolean(event.data.message.cursorOffset);
    const format = withCursor ? formatCodeWithCursor : formatCode;
    const formattedCode = await format(event.data.message, event.data.message.lang ?? CodeLang.JSON);

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

async function formatCodeWithCursor(data: CodeFormatMessage, lang: CodeLang): Promise<CodeFormatMessage> {
  const { code, cursorOffset = 0 } = data;

  const result = await prettier.formatWithCursor(code, {
    cursorOffset,
    parser: lang === CodeLang.JSON ? 'json5' : 'babel',
    plugins: [babelPlugin, estreePlugin],
    singleQuote: true,
  });

  return {
    code: result.formatted,
    cursorOffset: result.cursorOffset,
  };
}

async function formatCode(data: CodeFormatMessage, lang: CodeLang): Promise<CodeFormatMessage> {
  const result = await prettier.format(data.code, {
    parser: lang === CodeLang.JSON ? 'json5' : 'babel',
    plugins: [babelPlugin, estreePlugin],
    singleQuote: true,
  });

  return {
    code: result,
  };
}
