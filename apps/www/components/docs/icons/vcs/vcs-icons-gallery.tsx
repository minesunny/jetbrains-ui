'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'vcs/Collaboration_Tools/CollaborationTools',
  'vcs/Collaboration_Tools/cursor',
  'vcs/Collaboration_Tools/cursorLight',
  'vcs/Collaboration_Tools/faceNotVisible',
  'vcs/Collaboration_Tools/faceSlightNotVisible',
  'vcs/Collaboration_Tools/faceSlightVisible',
  'vcs/Collaboration_Tools/faceVisible',
  'vcs/Collaboration_Tools/followTheLeader',
  'vcs/Collaboration_Tools/leader',
  'vcs/Collaboration_Tools/presenceDot',
  'vcs/Diff/ApplyAll',
  'vcs/Diff/ApplySelected',
  'vcs/Diff/arrowOfMatch',
  'vcs/Diff/arrowOfPartialMatch',
  'vcs/Diff/compare',
  'vcs/Diff/conflict',
  'vcs/Diff/diffCenter',
  'vcs/Diff/diffLeft',
  'vcs/Diff/diffRight',
  'vcs/Diff/moveBugToOther',
  'vcs/Diff/moveToLeft',
  'vcs/Diff/moveToRight',
  'vcs/Diff/showInfoAboutIncompatibleChange',
  'vcs/Diff/splitMode',
  'vcs/Diff/switchCenterLeft',
  'vcs/Diff/switchCenterRight',
  'vcs/Diff/undefined',
  'vcs/VCS',
] as const;

export function VcsIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
