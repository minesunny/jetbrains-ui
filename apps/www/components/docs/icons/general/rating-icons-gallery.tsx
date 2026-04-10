'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/rating/feedbackRating',
  'general/rating/feedbackRatingFocused',
  'general/rating/feedbackRatingFocusedOn',
  'general/rating/feedbackRatingOn',
] as const;

export function RatingIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
