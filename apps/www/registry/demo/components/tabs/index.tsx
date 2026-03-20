import {
  DynamicTabs,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/registry/components/tabs';

interface TabsDemoProps {
  orientation: 'horizontal' | 'vertical';
}

export default function TabsDemo({ orientation }: TabsDemoProps) {
  const vertical = orientation === 'vertical';
  const dynamicItems = [
    {
      value: 'logs',
      label: 'Logs',
      content: 'Read runtime logs and diagnostics from the latest execution.',
    },
    {
      value: 'metrics',
      label: 'Metrics',
      content: 'Track CPU, memory, and latency metrics in one compact view.',
    },
    {
      value: 'alerts',
      label: 'Alerts',
      content: 'Review active alerts and suggested troubleshooting actions.',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-muted-foreground mb-2 text-xs">
          Tabs (Radix UI primitives)
        </p>
        <Tabs
          defaultValue="overview"
          orientation={orientation}
          className={
            vertical
              ? 'flex w-full max-w-[520px] gap-3'
              : 'w-full max-w-[520px]'
          }
        >
          <TabsList
            className={vertical ? 'h-auto flex-col items-stretch' : undefined}
          >
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent value="overview">
              View project summary, status, and key indicators in one place.
            </TabsContent>
            <TabsContent value="details">
              Manage configuration and update advanced settings for this module.
            </TabsContent>
            <TabsContent value="activity">
              Check recent actions, build logs, and integration events.
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <div>
        <p className="text-muted-foreground mb-2 text-xs">
          DynamicTabs (data-driven wrapper on top of Radix UI)
        </p>
        <DynamicTabs
          orientation={orientation}
          items={dynamicItems}
          defaultValue="logs"
          className={
            vertical
              ? 'flex w-full max-w-[520px] gap-3'
              : 'w-full max-w-[520px]'
          }
          listClassName={vertical ? 'h-auto flex-col items-stretch' : undefined}
        />
      </div>
    </div>
  );
}
