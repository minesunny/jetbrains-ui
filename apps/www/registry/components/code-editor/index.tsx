'use client';

import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import type Ace from 'ace-builds';

import { cn } from '@workspace/ui/lib/utils';
import { useJetBrainsLocale } from '@/registry/components/provider';
import {
  DynamicTabsList,
  type DynamicTabItem,
} from '@/registry/components/tabs/dynamic-tabs';
import { Separator } from '@/registry/components/separator';
import { useAceEditor, type UseAceEditorOptions } from './use-ace-editor';

// ---------------------------------------------------------------------------
// EditorTabItem
// ---------------------------------------------------------------------------

export interface EditorTabItem extends DynamicTabItem {
  /** Ace language mode, e.g. 'typescript', 'css' */
  mode?: string;
  /** Editor content for this tab */
  content?: string;
}

// ---------------------------------------------------------------------------
// Editor Context
// ---------------------------------------------------------------------------

interface EditorContextValue {
  editor: Ace.Editor | null;
}

const EditorContext = createContext<EditorContextValue>({ editor: null });

// ---------------------------------------------------------------------------
// CodeEditor (root)
// ---------------------------------------------------------------------------

export interface CodeEditorProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  children: ReactNode;
}

function CodeEditor({ className, children, ...props }: CodeEditorProps) {
  return (
    <div
      data-slot="code-editor"
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md border border-gray-10 dark:border-gray-5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

CodeEditor.displayName = 'CodeEditor';

// ---------------------------------------------------------------------------
// CodeEditorTabs
// ---------------------------------------------------------------------------

export type CodeEditorTabsProps = ComponentPropsWithoutRef<
  typeof DynamicTabsList
>;

function CodeEditorTabs({ className, ...props }: CodeEditorTabsProps) {
  return (
    <DynamicTabsList
      data-slot="code-editor-tabs"
      className={cn(
        'rounded-none border-b border-gray-10 dark:border-gray-5',
        className,
      )}
      {...props}
    />
  );
}

CodeEditorTabs.displayName = 'CodeEditorTabs';

// ---------------------------------------------------------------------------
// CodeEditorPane
// ---------------------------------------------------------------------------

export interface CodeEditorPaneProps extends UseAceEditorOptions {
  className?: string;
}

function CodeEditorPane({
  className,
  mode,
  value,
  onChange,
  readOnly,
  options,
  theme,
}: CodeEditorPaneProps) {
  const { editorRef, editor } = useAceEditor({
    mode,
    value,
    onChange,
    readOnly,
    options,
    theme,
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      <div
        data-slot="code-editor-pane"
        ref={editorRef}
        className={cn('relative flex-1 min-h-0 w-full', className)}
      />
    </EditorContext.Provider>
  );
}

CodeEditorPane.displayName = 'CodeEditorPane';

// ---------------------------------------------------------------------------
// CodeEditorStatusBar
// ---------------------------------------------------------------------------

function useEditorStatus() {
  const { editor } = useContext(EditorContext);
  const [status, setStatus] = useState({
    line: 1,
    column: 1,
    mode: 'text',
  });

  useEffect(() => {
    if (!editor) return;

    const update = () => {
      const pos = editor.getCursorPosition();
      const modeName =
        (editor.session.getMode() as { $id?: string }).$id?.replace(
          'ace/mode/',
          '',
        ) ?? 'text';
      setStatus({
        line: pos.row + 1,
        column: pos.column + 1,
        mode: modeName,
      });
    };

    update();
    editor.session.selection.on('changeCursor', update);
    editor.on('changeMode', update);

    return () => {
      editor.session.selection.off('changeCursor', update);
      editor.off('changeMode', update);
    };
  }, [editor]);

  return status;
}

export interface CodeEditorStatusBarProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  encoding?: string;
  indentInfo?: string;
}

function CodeEditorStatusBar({
  encoding,
  indentInfo,
  className,
  ...props
}: CodeEditorStatusBarProps) {
  const { line, column, mode } = useEditorStatus();
  const { t } = useJetBrainsLocale();

  return (
    <div
      data-slot="code-editor-status-bar"
      className={cn(
        'flex h-6 shrink-0 items-center gap-2 border-t border-gray-10 bg-gray-11 px-3 text-xs text-gray-6 dark:border-gray-5 dark:bg-gray-3 dark:text-gray-8',
        className,
      )}
      {...props}
    >
      <span>{t('codeEditor.lineColumn', { line, column })}</span>
      <Separator orientation="vertical" className="h-3" />
      <span>{encoding ?? t('codeEditor.encoding')}</span>
      <Separator orientation="vertical" className="h-3" />
      <span className="capitalize">{mode}</span>
      <Separator orientation="vertical" className="h-3" />
      <span>{indentInfo ?? t('codeEditor.indentInfo')}</span>
    </div>
  );
}

CodeEditorStatusBar.displayName = 'CodeEditorStatusBar';

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  CodeEditor,
  CodeEditorTabs,
  CodeEditorPane,
  CodeEditorStatusBar,
  EditorContext,
};
