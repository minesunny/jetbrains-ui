import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/registry/components/tooltip';
import { Button } from '@/registry/components/button';

interface TooltipDemoProps {
  side: 'top' | 'right' | 'bottom' | 'left';
}

export default function TooltipDemo({ side }: TooltipDemoProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover Me</Button>
        </TooltipTrigger>
        <TooltipContent side={side}>Tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
