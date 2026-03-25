import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type RunAsWorkflowProps = IconProps;

export const RunAsWorkflow: FC<RunAsWorkflowProps> = createSpriteIcon({
  name: 'plugins/databricks/run-as-workflow',
  viewBox: '0 0 16 16',
  displayName: 'RunAsWorkflow',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
