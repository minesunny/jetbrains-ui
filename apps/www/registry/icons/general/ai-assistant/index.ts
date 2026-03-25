import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AiAssistantProps = IconProps;

export const AiAssistant: FC<AiAssistantProps> = createSpriteIcon({
  name: 'general/ai-assistant/ai-assistant',
  viewBox: '0 0 16 16',
  displayName: 'AiAssistant',
});

export type AiAssistantColoredProps = IconProps;

export const AiAssistantColored: FC<AiAssistantColoredProps> = createSpriteIcon(
  {
    name: 'general/ai-assistant/ai-assistant-colored',
    viewBox: '0 0 16 16',
    displayName: 'AiAssistantColored',
  },
);

export type AiAssistantDisabledProps = IconProps;

export const AiAssistantDisabled: FC<AiAssistantDisabledProps> =
  createSpriteIcon({
    name: 'general/ai-assistant/ai-assistant-disabled',
    viewBox: '0 0 16 16',
    displayName: 'AiAssistantDisabled',
  });

export type AttachedProps = IconProps;

export const Attached: FC<AttachedProps> = createSpriteIcon({
  name: 'general/ai-assistant/attached',
  viewBox: '0 0 16 16',
  displayName: 'Attached',
});

export type DislikeProps = IconProps;

export const Dislike: FC<DislikeProps> = createSpriteIcon({
  name: 'general/ai-assistant/dislike',
  viewBox: '0 0 16 16',
  displayName: 'Dislike',
});

export type DislikeSelectedProps = IconProps;

export const DislikeSelected: FC<DislikeSelectedProps> = createSpriteIcon({
  name: 'general/ai-assistant/dislike-selected',
  viewBox: '0 0 16 16',
  displayName: 'DislikeSelected',
});

export type FeatureAnswerProps = IconProps;

export const FeatureAnswer: FC<FeatureAnswerProps> = createSpriteIcon({
  name: 'general/ai-assistant/feature-answer',
  viewBox: '0 0 16 16',
  displayName: 'FeatureAnswer',
});

export type FeatureCodeBlockProps = IconProps;

export const FeatureCodeBlock: FC<FeatureCodeBlockProps> = createSpriteIcon({
  name: 'general/ai-assistant/feature-code-block',
  viewBox: '0 0 16 16',
  displayName: 'FeatureCodeBlock',
});

export type FeatureCommentProps = IconProps;

export const FeatureComment: FC<FeatureCommentProps> = createSpriteIcon({
  name: 'general/ai-assistant/feature-comment',
  viewBox: '0 0 16 16',
  displayName: 'FeatureComment',
});

export type FeatureCommitProps = IconProps;

export const FeatureCommit: FC<FeatureCommitProps> = createSpriteIcon({
  name: 'general/ai-assistant/feature-commit',
  viewBox: '0 0 16 16',
  displayName: 'FeatureCommit',
});

export type FeatureContextProps = IconProps;

export const FeatureContext: FC<FeatureContextProps> = createSpriteIcon({
  name: 'general/ai-assistant/feature-context',
  viewBox: '0 0 16 16',
  displayName: 'FeatureContext',
});

export type FeatureDocsProps = IconProps;

export const FeatureDocs: FC<FeatureDocsProps> = createSpriteIcon({
  name: 'general/ai-assistant/feature-docs',
  viewBox: '0 0 16 16',
  displayName: 'FeatureDocs',
});

export type LikeProps = IconProps;

export const Like: FC<LikeProps> = createSpriteIcon({
  name: 'general/ai-assistant/like',
  viewBox: '0 0 16 16',
  displayName: 'Like',
});

export type LikeSelectedProps = IconProps;

export const LikeSelected: FC<LikeSelectedProps> = createSpriteIcon({
  name: 'general/ai-assistant/like-selected',
  viewBox: '0 0 16 16',
  displayName: 'LikeSelected',
});

export type SendProps = IconProps;

export const Send: FC<SendProps> = createSpriteIcon({
  name: 'general/ai-assistant/send',
  viewBox: '0 0 16 16',
  displayName: 'Send',
});

export type SendToEditorProps = IconProps;

export const SendToEditor: FC<SendToEditorProps> = createSpriteIcon({
  name: 'general/ai-assistant/send-to-editor',
  viewBox: '0 0 16 16',
  displayName: 'SendToEditor',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
