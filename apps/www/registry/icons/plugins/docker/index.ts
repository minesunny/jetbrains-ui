import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type DockerProps = IconProps;

export const Docker: FC<DockerProps> = createSpriteIcon({
  name: 'plugins/docker/docker',
  viewBox: '0 0 16 16',
  displayName: 'Docker',
});

export type DockerComposeProps = IconProps;

export const DockerCompose: FC<DockerComposeProps> = createSpriteIcon({
  name: 'plugins/docker/docker-compose',
  viewBox: '0 0 16 16',
  displayName: 'DockerCompose',
});

export type DockerComposeScaledServiceStoppedProps = IconProps;

export const DockerComposeScaledServiceStopped: FC<DockerComposeScaledServiceStoppedProps> =
  createSpriteIcon({
    name: 'plugins/docker/docker-compose-scaled-service-stopped',
    viewBox: '0 0 16 16',
    displayName: 'DockerComposeScaledServiceStopped',
  });

export type DockerComposeScaledServiceUpProps = IconProps;

export const DockerComposeScaledServiceUp: FC<DockerComposeScaledServiceUpProps> =
  createSpriteIcon({
    name: 'plugins/docker/docker-compose-scaled-service-up',
    viewBox: '0 0 16 16',
    displayName: 'DockerComposeScaledServiceUp',
  });

export type DockerComposeServiceStoppedProps = IconProps;

export const DockerComposeServiceStopped: FC<DockerComposeServiceStoppedProps> =
  createSpriteIcon({
    name: 'plugins/docker/docker-compose-service-stopped',
    viewBox: '0 0 16 16',
    displayName: 'DockerComposeServiceStopped',
  });

export type DockerComposeServiceUpProps = IconProps;

export const DockerComposeServiceUp: FC<DockerComposeServiceUpProps> =
  createSpriteIcon({
    name: 'plugins/docker/docker-compose-service-up',
    viewBox: '0 0 16 16',
    displayName: 'DockerComposeServiceUp',
  });

export type DockerRegistryProps = IconProps;

export const DockerRegistry: FC<DockerRegistryProps> = createSpriteIcon({
  name: 'plugins/docker/docker-registry',
  viewBox: '0 0 16 16',
  displayName: 'DockerRegistry',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
