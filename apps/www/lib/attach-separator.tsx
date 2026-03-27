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

export const attachSeparator: BuildPageTreeOptions['attachSeparator'] = (
  node,
) => {
  switch (node.name) {
    case 'JetBrains UI':
      node.name = (
        <Separator
          icon={<JetBrainsUIIcon className="!size-3" />}
          name="JetBrains UI"
        />
      );
      break;
    case 'Radix UI':
      node.name = (
        <Separator icon={<RadixIcon className="!size-2.5" />} name="Radix UI" />
      );
      break;
    case 'Base UI':
      node.name = <Separator icon={<BaseUIIcon />} name="Base UI" />;
      break;
    case 'Headless UI':
      node.name = <Separator icon={<HeadlessUIIcon />} name="Headless UI" />;
      break;
    case 'Effects':
      node.name = (
        <Separator
          icon={<SVG name="general/ai-assistant/ai-assistant" />}
          name="Effects"
        />
      );
      break;
    case 'Community':
      node.name = <Separator icon={<CommunityIcon />} name="Community" />;
      break;
    case 'Backgrounds':
      node.name = (
        <Separator icon={<ImageIcon strokeWidth={5} />} name="Backgrounds" />
      );
      break;
    case 'Texts':
      node.name = (
        <Separator icon={<SVG name="file-types/text" />} name="Texts" />
      );
      break;
    case 'Icons':
      node.name = <Separator icon={<Search strokeWidth={2} />} name="Icons" />;
      break;
    case 'Usage':
      node.name = (
        <Separator icon={<SVG name="terminal/command" />} name="Usage" />
      );
      break;
    case 'Guide':
      node.name = (
        <Separator icon={<SVG name="terminal/command" />} name="Usage" />
      );
      break;
    case 'Menu':
      node.name = (
        <Separator
          icon={<SVG name="plugins/code-with-me/cwm-icon-modificator-menu" />}
          name="Menu"
        />
      );
      break;
  }

  return node;
};
