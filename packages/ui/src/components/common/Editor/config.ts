import { CompletionContext } from '@codemirror/autocomplete';
import { linter } from '@codemirror/lint';
import { EditorView } from '@codemirror/view';
import { json5, json5Language, json5ParseLinter } from 'codemirror-json5';
import Mock from 'mockjs';

const mockVariants = Object.keys(Mock.Random).filter((key) => key !== 'extend' && !key.startsWith('_'));

function getCompletions(context: CompletionContext) {
  const word = context.matchBefore(/['"]@\w*/);
  if (!word || word.from == word.to) return null;
  return {
    from: word.from + 1,
    options: mockVariants.map((variant) => ({
      label: `@${variant}`,
      type: 'function',
      section: 'Mock.js Placeholder',
    })),
  };
}

const autoComplete = json5Language.data.of({
  autocomplete: getCompletions,
});

export const theme = EditorView.theme({
  '&': { height: '100%', minHeight: '0', flex: '1' },
  '&.cm-focused': { outline: 'none' },
  '.cm-scroller': { fontFamily: 'SFMono-Regular, Consolas, Menlo, monospace', fontSize: '14px' },
  '.cm-gutters': { backgroundColor: 'white', borderRight: 'none' },
  '.cm-activeLine': { backgroundColor: 'hsl(var(--b2)/0.6)' },
  '.cm-activeLineGutter': { backgroundColor: 'hsl(var(--b2))' },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
    {
      backgroundColor: 'hsl(var(--pc)/0.9)',
    },
});

export const defaultExtensions = [json5(), linter(json5ParseLinter()), theme, autoComplete];
