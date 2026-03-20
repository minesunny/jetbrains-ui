import * as React from 'react';

import { Button } from '@/registry/components/button';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/registry/components/context-menu';

export default function ContextMenuDemo() {
  const [showLineNumbers, setShowLineNumbers] = React.useState(true);
  const [indentStyle, setIndentStyle] = React.useState('spaces');

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Button variant="secondary">Right Click</Button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Editor</ContextMenuLabel>
        <ContextMenuItem inset>
          Rename
          <ContextMenuShortcut>F6</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reformat Code
          <ContextMenuShortcut>⌥⌘L</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Refactor</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Extract Method</ContextMenuItem>
            <ContextMenuItem>Inline Variable</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showLineNumbers}
          onCheckedChange={(checked) => setShowLineNumbers(checked === true)}
        >
          Show Line Numbers
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>Indentation</ContextMenuLabel>
        <ContextMenuRadioGroup
          value={indentStyle}
          onValueChange={(value) => setIndentStyle(value)}
        >
          <ContextMenuRadioItem value="spaces">Spaces</ContextMenuRadioItem>
          <ContextMenuRadioItem value="tabs">Tabs</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
