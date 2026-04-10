'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'general/aiAssistant/aiAssistant',
  'general/aiAssistant/aiAssistantColored',
  'general/aiAssistant/aiAssistantDisabled',
  'general/aiAssistant/attached',
  'general/aiAssistant/dislike',
  'general/aiAssistant/dislikeSelected',
  'general/aiAssistant/featureAnswer',
  'general/aiAssistant/featureCodeBlock',
  'general/aiAssistant/featureComment',
  'general/aiAssistant/featureCommit',
  'general/aiAssistant/featureContext',
  'general/aiAssistant/featureDocs',
  'general/aiAssistant/like',
  'general/aiAssistant/likeSelected',
  'general/aiAssistant/send',
  'general/aiAssistant/sendToEditor',
  'general/aiAssistant/sendToTheLeft',
  'general/aiAssistant/sendToTheLeftGrayed',
  'general/aiAssistant/sendToTheRight',
  'general/aiAssistant/sendToTheRightGrayed',
] as const;

export function AiAssistantIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
