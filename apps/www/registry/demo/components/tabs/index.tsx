import {
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

  return (
    <Tabs
      defaultValue="overview"
      orientation={orientation}
      className={
        vertical ? 'flex w-full max-w-[520px] gap-3' : 'w-full max-w-[520px]'
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
  );
}
