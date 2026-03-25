import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type FeedbackRatingProps = IconProps;

export const FeedbackRating: FC<FeedbackRatingProps> = createSpriteIcon({
  name: 'general/rating/feedback-rating',
  viewBox: '0 0 32 32',
  displayName: 'FeedbackRating',
});

export type FeedbackRatingFocusedProps = IconProps;

export const FeedbackRatingFocused: FC<FeedbackRatingFocusedProps> =
  createSpriteIcon({
    name: 'general/rating/feedback-rating-focused',
    viewBox: '0 0 32 32',
    displayName: 'FeedbackRatingFocused',
  });

export type FeedbackRatingFocusedOnProps = IconProps;

export const FeedbackRatingFocusedOn: FC<FeedbackRatingFocusedOnProps> =
  createSpriteIcon({
    name: 'general/rating/feedback-rating-focused-on',
    viewBox: '0 0 32 32',
    displayName: 'FeedbackRatingFocusedOn',
  });

export type FeedbackRatingOnProps = IconProps;

export const FeedbackRatingOn: FC<FeedbackRatingOnProps> = createSpriteIcon({
  name: 'general/rating/feedback-rating-on',
  viewBox: '0 0 32 32',
  displayName: 'FeedbackRatingOn',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
