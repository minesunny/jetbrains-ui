import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type AddBookmarksListProps = IconProps;

export const AddBookmarksList: FC<AddBookmarksListProps> = createSpriteIcon({
  name: 'general/bookmarks/add-bookmarks-list',
  viewBox: '0 0 16 16',
  displayName: 'AddBookmarksList',
});

export type BookmarkProps = IconProps;

export const Bookmark: FC<BookmarkProps> = createSpriteIcon({
  name: 'general/bookmarks/bookmark',
  viewBox: '0 0 16 16',
  displayName: 'Bookmark',
});

export type BookmarksProps = IconProps;

export const Bookmarks: FC<BookmarksProps> = createSpriteIcon({
  name: 'general/bookmarks/bookmarks',
  viewBox: '0 0 16 16',
  displayName: 'Bookmarks',
});

export type BookmarksListProps = IconProps;

export const BookmarksList: FC<BookmarksListProps> = createSpriteIcon({
  name: 'general/bookmarks/bookmarks-list',
  viewBox: '0 0 16 16',
  displayName: 'BookmarksList',
});

export type MnemonicProps = IconProps;

export const Mnemonic: FC<MnemonicProps> = createSpriteIcon({
  name: 'general/bookmarks/mnemonic',
  viewBox: '0 0 16 16',
  displayName: 'Mnemonic',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
