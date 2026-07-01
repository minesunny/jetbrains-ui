import BaseUIIcon from '@workspace/ui/components/icons/baseui-icon';
import CommunityIcon from '@workspace/ui/components/icons/community-icon';
import ImageIcon from '@workspace/ui/components/icons/image-icon';
import HeadlessUIIcon from '@workspace/ui/components/icons/headlessui-icon';
import RadixIcon from '@workspace/ui/components/icons/radix-icon';
import type { BuildPageTreeOptions } from 'fumadocs-core/source';
import { SVG } from '@/registry/components/svg';
import JetBrainsUIIcon from '@/lib/jetbrains-ui-icon';
import { Search } from 'lucide-react';

const Icon = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative size-5 [&_svg]:size-[12px] flex items-center justify-center bg-border text-muted-foreground rounded-[5px]">
      {children}

      <span className="absolute left-1/2 translate-x-[calc(-50%-0.5px)] bg-border w-px h-[8px] top-full" />
    </span>
  );
};

export const Separator = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <span className="flex items-center gap-2">
      <Icon>{icon}</Icon>
      <span className="text-[13px] text-neutral-500">{name}</span>
    </span>
  );
};

// Map separator names (both en/zh) to icon + display config
const SEPARATOR_MAP: Record<
  string,
  { icon: React.ReactNode; display: string }
> = {
  'JetBrains UI': {
    icon: <JetBrainsUIIcon className="!size-3" />,
    display: 'JetBrains UI',
  },
  'Radix UI': {
    icon: <RadixIcon className="!size-2.5" />,
    display: 'Radix UI',
  },
  'Base UI': { icon: <BaseUIIcon />, display: 'Base UI' },
  'Headless UI': { icon: <HeadlessUIIcon />, display: 'Headless UI' },
  Effects: {
    icon: <SVG name="general/ai-assistant/ai-assistant" />,
    display: 'Effects',
  },
  Community: { icon: <CommunityIcon />, display: 'Community' },
  Backgrounds: {
    icon: <ImageIcon strokeWidth={5} />,
    display: 'Backgrounds',
  },
  Texts: { icon: <SVG name="file-types/text" />, display: 'Texts' },
  Icons: { icon: <Search strokeWidth={2} />, display: 'Icons' },
  图标: { icon: <Search strokeWidth={2} />, display: '图标' },
  Usage: {
    icon: <SVG name="terminal/command" />,
    display: 'Usage',
  },
  Guide: {
    icon: <SVG name="terminal/command" />,
    display: 'Usage',
  },
  Menu: {
    icon: <SVG name="plugins/code-with-me/cwm-icon-modificator-menu" />,
    display: 'Menu',
  },
  菜单: {
    icon: <SVG name="plugins/code-with-me/cwm-icon-modificator-menu" />,
    display: '菜单',
  },
  Components: {
    icon: <SVG name="plugins/java-ee/component" />,
    display: 'Components',
  },
  组件: {
    icon: <SVG name="plugins/java-ee/component" />,
    display: '组件',
  },
};

export const attachSeparator: BuildPageTreeOptions['attachSeparator'] = (
  node,
) => {
  const match = SEPARATOR_MAP[node.name as string];
  if (match) {
    node.name = <Separator icon={match.icon} name={match.display} />;
  }
  return node;
};
