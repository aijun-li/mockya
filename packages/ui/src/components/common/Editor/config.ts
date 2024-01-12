import { CompletionContext } from '@codemirror/autocomplete';
import { linter } from '@codemirror/lint';
import { EditorView } from '@codemirror/view';
import { json5, json5Language, json5ParseLinter } from 'codemirror-json5';
import Mock from 'mockjs';

const completionRules = [
  // field command
  {
    pattern: /['"].+>\w*/,
    prefix: '>',
    candidates: ['encode'],
    title: 'Field Command',
  },
  // mock.js
  {
    pattern: /['"]@\w*/,
    prefix: '@',
    candidates: Object.keys(Mock.Random).filter((key) => key !== 'extend' && !key.startsWith('_')),
    title: 'Mock.js Placeholder',
  },
];

function getCompletions(context: CompletionContext) {
  for (let i = 0; i < completionRules.length; i++) {
    const rule = completionRules[i];
    const word = context.matchBefore(rule.pattern);
    if (!word || word.from == word.to) {
      continue;
    }
    return {
      from: word.from + word.text.lastIndexOf(rule.prefix),
      options: rule.candidates.map((candidate) => ({
        label: `${rule.prefix}${candidate}`,
        type: 'function',
        section: rule.title,
      })),
    };
  }
  return null;
}

const autoComplete = json5Language.data.of({
  autocomplete: getCompletions,
});

export const theme = EditorView.theme({
  '&': { height: '100%', minHeight: '0', flex: '1' },
  '&.cm-focused': { outline: 'none' },
  '.cm-scroller': { fontFamily: 'SFMono-Regular, Consolas, Menlo, monospace', fontSize: '14px' },
  '.cm-gutters': { backgroundColor: 'white', borderRight: 'none' },
  '.cm-activeLine': { backgroundColor: 'oklch(var(--b2)/0.6)' },
  '.cm-activeLineGutter': { backgroundColor: 'oklch(var(--b2))' },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
    {
      backgroundColor: 'oklch(var(--pc)/0.9)',
    },
});

export const defaultExtensions = [json5(), linter(json5ParseLinter()), theme, autoComplete];
