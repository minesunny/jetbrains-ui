'use client';

import { useEffect, useRef, useCallback, type RefObject } from 'react';
import ace from 'ace-builds/src-noconflict/ace';

// Ensure the theme module is loaded so ace.define registers it
import './theme';

export interface UseAceEditorOptions {
  /** Ace language mode, e.g. 'typescript', 'javascript', 'css' */
  mode?: string;
  /** Initial editor content */
  value?: string;
  /** Called when editor content changes */
  onChange?: (value: string) => void;
  /** Read-only mode */
  readOnly?: boolean;
  /** Additional Ace editor options */
  options?: Record<string, unknown>;
  /** Ace theme name. Defaults to 'jetbrains'. */
  theme?: string;
  /** Pre-existing EditSession to use instead of creating a default one */
  session?: InstanceType<typeof ace.EditSession>;
}

export interface UseAceEditorReturn {
  /** Ref to attach to the container div */
  editorRef: RefObject<HTMLDivElement | null>;
  /** The Ace editor instance (null before mount) */
  editor: InstanceType<typeof ace.Editor> | null;
}

export function useAceEditor({
  mode,
  value,
  onChange,
  readOnly,
  options,
  theme = 'jetbrains',
  session,
}: UseAceEditorOptions = {}): UseAceEditorReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<InstanceType<typeof ace.Editor> | null>(null);
  const onChangeRef = useRef(onChange);

  // Keep onChange ref in sync so the callback never goes stale
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Create / destroy editor
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create an isolated div for Ace so it doesn't mutate React's DOM node.
    // This prevents "removeChild" errors when React unmounts the component.
    const aceDiv = document.createElement('div');
    aceDiv.style.cssText = 'width:100%;height:100%;position:absolute;inset:0';
    container.appendChild(aceDiv);

    const editor = ace.edit(aceDiv);
    editorRef.current = editor;

    // Apply theme
    editor.setTheme(`ace/theme/${theme}`);

    // Use provided session or configure default
    if (session) {
      editor.setSession(session);
    } else {
      // Apply mode if provided
      if (mode) {
        editor.session.setMode(`ace/mode/${mode}`);
      }

      // Set initial value
      if (value !== undefined) {
        editor.session.setValue(value);
      }
    }

    // Set initial value
    if (value !== undefined) {
      editor.session.setValue(value);
    }

    // Apply options
    if (readOnly !== undefined) {
      editor.setReadOnly(readOnly);
    }
    if (options) {
      editor.setOptions(options);
    }

    // Wire up onChange
    editor.session.on('change', () => {
      onChangeRef.current?.(editor.session.getValue());
    });

    return () => {
      editor.destroy();
      aceDiv.remove();
      editorRef.current = null;
    };
    // Only run on mount/unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync value prop changes
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor || value === undefined) return;

    const currentValue = editor.session.getValue();
    if (currentValue !== value) {
      // Move cursor to start to avoid jumping to end
      const cursor = editor.getCursorPosition();
      editor.session.setValue(value);
      editor.moveCursorToPosition(cursor);
    }
  }, [value]);

  // Sync mode changes
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor || !mode) return;
    editor.session.setMode(`ace/mode/${mode}`);
  }, [mode]);

  // Sync readOnly changes
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor || readOnly === undefined) return;
    editor.setReadOnly(readOnly);
  }, [readOnly]);

  // Sync options changes
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor || !options) return;
    editor.setOptions(options);
  }, [options]);

  const getEditor = useCallback(() => editorRef.current, []);

  return { editorRef: containerRef, editor: editorRef.current };
}
