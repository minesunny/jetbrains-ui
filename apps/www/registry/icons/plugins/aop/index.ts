import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AbstractAdviceProps = IconProps;

export const AbstractAdvice: FC<AbstractAdviceProps> = createSpriteIcon({
  name: 'plugins/aop/abstract-advice',
  viewBox: '0 0 16 16',
  displayName: 'AbstractAdvice',
});

export type AfterAdviceProps = IconProps;

export const AfterAdvice: FC<AfterAdviceProps> = createSpriteIcon({
  name: 'plugins/aop/after-advice',
  viewBox: '0 0 16 16',
  displayName: 'AfterAdvice',
});

export type AfterReturningAdviceProps = IconProps;

export const AfterReturningAdvice: FC<AfterReturningAdviceProps> =
  createSpriteIcon({
    name: 'plugins/aop/after-returning-advice',
    viewBox: '0 0 16 16',
    displayName: 'AfterReturningAdvice',
  });

export type AfterThrowingAdviceProps = IconProps;

export const AfterThrowingAdvice: FC<AfterThrowingAdviceProps> =
  createSpriteIcon({
    name: 'plugins/aop/after-throwing-advice',
    viewBox: '0 0 16 16',
    displayName: 'AfterThrowingAdvice',
  });

export type AroundAdviceProps = IconProps;

export const AroundAdvice: FC<AroundAdviceProps> = createSpriteIcon({
  name: 'plugins/aop/around-advice',
  viewBox: '0 0 16 16',
  displayName: 'AroundAdvice',
});

export type BeforeAdviceProps = IconProps;

export const BeforeAdvice: FC<BeforeAdviceProps> = createSpriteIcon({
  name: 'plugins/aop/before-advice',
  viewBox: '0 0 16 16',
  displayName: 'BeforeAdvice',
});

export type FromArrowProps = IconProps;

export const FromArrow: FC<FromArrowProps> = createSpriteIcon({
  name: 'plugins/aop/from-arrow',
  viewBox: '0 0 16 16',
  displayName: 'FromArrow',
});

export type PointcutProps = IconProps;

export const Pointcut: FC<PointcutProps> = createSpriteIcon({
  name: 'plugins/aop/pointcut',
  viewBox: '0 0 16 16',
  displayName: 'Pointcut',
});

export type ToArrowProps = IconProps;

export const ToArrow: FC<ToArrowProps> = createSpriteIcon({
  name: 'plugins/aop/to-arrow',
  viewBox: '0 0 16 16',
  displayName: 'ToArrow',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
