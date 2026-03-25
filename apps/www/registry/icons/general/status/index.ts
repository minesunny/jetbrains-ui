import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type ErrorProps = IconProps;

export const Error: FC<ErrorProps> = createSpriteIcon({
  name: 'general/status/error',
  viewBox: '0 0 16 16',
  displayName: 'Error',
});

export type ErrorDialogProps = IconProps;

export const ErrorDialog: FC<ErrorDialogProps> = createSpriteIcon({
  name: 'general/status/error-dialog',
  viewBox: '0 0 28 28',
  displayName: 'ErrorDialog',
});

export type ErrorOutlineProps = IconProps;

export const ErrorOutline: FC<ErrorOutlineProps> = createSpriteIcon({
  name: 'general/status/error-outline',
  viewBox: '0 0 16 16',
  displayName: 'ErrorOutline',
});

export type InfoProps = IconProps;

export const Info: FC<InfoProps> = createSpriteIcon({
  name: 'general/status/info',
  viewBox: '0 0 16 16',
  displayName: 'Info',
});

export type InfoOutlineProps = IconProps;

export const InfoOutline: FC<InfoOutlineProps> = createSpriteIcon({
  name: 'general/status/info-outline',
  viewBox: '0 0 16 16',
  displayName: 'InfoOutline',
});

export type InformationDialogProps = IconProps;

export const InformationDialog: FC<InformationDialogProps> = createSpriteIcon({
  name: 'general/status/information-dialog',
  viewBox: '0 0 28 28',
  displayName: 'InformationDialog',
});

export type QuestionDialogProps = IconProps;

export const QuestionDialog: FC<QuestionDialogProps> = createSpriteIcon({
  name: 'general/status/question-dialog',
  viewBox: '0 0 28 28',
  displayName: 'QuestionDialog',
});

export type SuccessProps = IconProps;

export const Success: FC<SuccessProps> = createSpriteIcon({
  name: 'general/status/success',
  viewBox: '0 0 16 16',
  displayName: 'Success',
});

export type SuccessDialogProps = IconProps;

export const SuccessDialog: FC<SuccessDialogProps> = createSpriteIcon({
  name: 'general/status/success-dialog',
  viewBox: '0 0 28 28',
  displayName: 'SuccessDialog',
});

export type SuccessLoginProps = IconProps;

export const SuccessLogin: FC<SuccessLoginProps> = createSpriteIcon({
  name: 'general/status/success-login',
  viewBox: '0 0 48 48',
  displayName: 'SuccessLogin',
});

export type WarningProps = IconProps;

export const Warning: FC<WarningProps> = createSpriteIcon({
  name: 'general/status/warning',
  viewBox: '0 0 16 16',
  displayName: 'Warning',
});

export type WarningDialogProps = IconProps;

export const WarningDialog: FC<WarningDialogProps> = createSpriteIcon({
  name: 'general/status/warning-dialog',
  viewBox: '0 0 28 28',
  displayName: 'WarningDialog',
});

export type WarningOutlineProps = IconProps;

export const WarningOutline: FC<WarningOutlineProps> = createSpriteIcon({
  name: 'general/status/warning-outline',
  viewBox: '0 0 16 16',
  displayName: 'WarningOutline',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
