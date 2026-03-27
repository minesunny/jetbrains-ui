import { SVG } from '@/registry/components/svg';

const icons = [
  'breakpoints/breakpoint',
  'database/access-method',
  'general/general/search',
];

export default function SvgDemo() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {icons.map((name) => (
        <div
          key={name}
          className="flex h-24 flex-col items-center justify-center gap-3 rounded-lg border bg-fd-card px-3"
        >
          <SVG name={name} size="xl" />
          <code className="text-center text-xs">{name}</code>
        </div>
      ))}
    </div>
  );
}
