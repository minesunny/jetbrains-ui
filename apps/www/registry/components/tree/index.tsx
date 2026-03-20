'use client';

import * as React from 'react';
import { ChevronRight } from '@/registry/icons/general/general/chevron-right';

import { cn } from '@workspace/ui/lib/utils';
import './index.css';

export interface TreeItemData {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: TreeItemData[];
}

type TreeExpandedIds = string[];

export interface TreeProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  items: TreeItemData[];
  indentation?: number;
  selectedId?: string;
  defaultSelectedId?: string;
  onSelectedIdChange?: (id: string) => void;
  expandedIds?: TreeExpandedIds;
  defaultExpandedIds?: TreeExpandedIds;
  onExpandedIdsChange?: (ids: TreeExpandedIds) => void;
}

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined;
  defaultValue: T;
  onChange?: (value: T) => void;
}) {
  const [internalValue, setInternalValue] = React.useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const state = isControlled ? (value as T) : internalValue;

  const setState = React.useCallback(
    (next: T | ((prev: T) => T)) => {
      const resolved =
        typeof next === 'function' ? (next as (prev: T) => T)(state) : next;

      if (!isControlled) {
        setInternalValue(resolved);
      }

      onChange?.(resolved);
    },
    [isControlled, onChange, state],
  );

  return [state, setState] as const;
}

function Tree({
  items,
  className,
  indentation = 16,
  selectedId,
  defaultSelectedId,
  onSelectedIdChange,
  expandedIds,
  defaultExpandedIds = [],
  onExpandedIdsChange,
  ...props
}: TreeProps) {
  const [selectedValue, setSelectedValue] = useControllableState<
    string | undefined
  >({
    value: selectedId,
    defaultValue: defaultSelectedId,
    onChange: (value) => {
      if (value !== undefined) {
        onSelectedIdChange?.(value);
      }
    },
  });

  const [expandedValue, setExpandedValue] =
    useControllableState<TreeExpandedIds>({
      value: expandedIds,
      defaultValue: defaultExpandedIds,
      onChange: onExpandedIdsChange,
    });

  const expandedSet = React.useMemo(
    () => new Set(expandedValue),
    [expandedValue],
  );

  const toggleExpanded = React.useCallback(
    (id: string) => {
      setExpandedValue((prev) =>
        prev.includes(id)
          ? prev.filter((value) => value !== id)
          : [...prev, id],
      );
    },
    [setExpandedValue],
  );

  const selectItem = React.useCallback(
    (id: string, disabled?: boolean) => {
      if (disabled) return;
      setSelectedValue(id);
    },
    [setSelectedValue],
  );

  const renderNodes = React.useCallback(
    (nodes: TreeItemData[], level: number): React.ReactNode => {
      return nodes.map((node) => {
        const hasChildren = Boolean(node.children?.length);
        const expanded = hasChildren && expandedSet.has(node.id);
        const selected = selectedValue === node.id;

        return (
          <li
            key={node.id}
            className="jb-tree-node m-0"
            role="treeitem"
            aria-selected={selected || undefined}
            aria-expanded={hasChildren ? expanded : undefined}
            aria-disabled={node.disabled || undefined}
          >
            <div
              className="jb-tree-row flex items-center gap-0.5"
              style={{ paddingInlineStart: `${level * indentation}px` }}
            >
              {hasChildren ? (
                <button
                  type="button"
                  className="jb-tree-toggle inline-flex h-6 w-5 shrink-0 items-center justify-center rounded-[3px] bg-transparent p-0 outline-none transition-[background-color,color] duration-75"
                  data-expanded={expanded || undefined}
                  aria-label={expanded ? 'Collapse item' : 'Expand item'}
                  onClick={() => toggleExpanded(node.id)}
                  disabled={node.disabled}
                >
                  <ChevronRight
                    size="md"
                    className="jb-tree-chevron size-4 transition-transform duration-75"
                  />
                </button>
              ) : (
                <span
                  className="jb-tree-toggle-placeholder inline-flex h-6 w-5 shrink-0 items-center justify-center"
                  aria-hidden="true"
                />
              )}

              <button
                type="button"
                className="jb-tree-item relative flex min-h-6 w-full cursor-pointer select-none items-center gap-2 rounded-[3px] px-2 py-1 text-left text-sm leading-4 font-normal outline-none transition-[background-color,color] duration-75 disabled:pointer-events-none disabled:cursor-not-allowed"
                data-selected={selected || undefined}
                onClick={() => selectItem(node.id, node.disabled)}
                disabled={node.disabled}
              >
                {node.icon ? (
                  <span
                    className="jb-tree-item-icon inline-flex size-[14px] shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    {node.icon}
                  </span>
                ) : null}
                <span className="jb-tree-item-label min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                  {node.label}
                </span>
              </button>
            </div>

            {hasChildren && expanded ? (
              <ul role="group" className="jb-tree-group">
                {renderNodes(node.children ?? [], level + 1)}
              </ul>
            ) : null}
          </li>
        );
      });
    },
    [expandedSet, indentation, selectItem, selectedValue, toggleExpanded],
  );

  return (
    <div
      data-slot="tree"
      className={cn('jb-tree w-full', className)}
      {...props}
    >
      <ul className="jb-tree-root m-0 list-none p-0" role="tree">
        {renderNodes(items, 0)}
      </ul>
    </div>
  );
}

export { Tree };
