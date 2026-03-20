import { Separator } from '@/registry/components/separator';

interface SeparatorDemoProps {
  orientation: 'horizontal' | 'vertical';
}

export default function SeparatorDemo({ orientation }: SeparatorDemoProps) {
  if (orientation === 'vertical') {
    return (
      <div className="flex h-16 items-center gap-3 text-sm">
        <span>Left</span>
        <Separator orientation="vertical" />
        <span>Right</span>
      </div>
    );
  }

  return (
    <div className="w-[320px] space-y-2 text-sm">
      <p>Top content</p>
      <Separator />
      <p>Bottom content</p>
    </div>
  );
}
