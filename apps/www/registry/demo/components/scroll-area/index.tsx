import {
  ScrollArea,
  ScrollBar,
  ScrollViewport,
} from '@/registry/components/scroll-area';

const buildEntries = () =>
  Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Event ${String(index + 1).padStart(2, '0')}`,
    detail:
      index % 3 === 0
        ? 'Background indexing completed for the workspace.'
        : index % 3 === 1
          ? 'Terminal session attached to the latest run configuration.'
          : 'A long diagnostic row keeps horizontal scrolling visible in the preview panel.',
  }));

export default function ScrollAreaDemo() {
  const entries = buildEntries();

  return (
    <ScrollArea className="h-40 w-[320px] rounded-md border">
      <ScrollViewport className="h-full w-full p-3">
        <div className="min-w-[520px] space-y-2 text-sm">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-[4px] border px-3 py-2 leading-4"
            >
              <div className="font-medium">{entry.title}</div>
              <div className="text-muted-foreground mt-1 whitespace-nowrap">
                {entry.detail}
              </div>
            </div>
          ))}
        </div>
      </ScrollViewport>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
