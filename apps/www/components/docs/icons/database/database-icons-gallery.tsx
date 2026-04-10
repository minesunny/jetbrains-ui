'use client';

import { SvgIconsGallery } from '@/components/docs/icons/svg-icons-gallery';

const icons = [
  'database/DataGrip/SQLDMLStatement',
  'database/DataGrip/SQLGroupByType',
  'database/DataGrip/SQLOtherStatement',
  'database/DataGrip/SQLSelectStatement',
  'database/DataGrip/UDFScript',
  'database/DataGrip/accessMethod',
  'database/DataGrip/adapterScript',
  'database/DataGrip/aggregate',
  'database/DataGrip/argument',
  'database/DataGrip/binaryData',
  'database/DataGrip/blueKey',
  'database/DataGrip/body',
  'database/DataGrip/cassandraFileType',
  'database/DataGrip/checkConstraint',
  'database/DataGrip/collation',
  'database/DataGrip/collection',
  'database/DataGrip/collectionKey',
  'database/DataGrip/collectionType',
  'database/DataGrip/column',
  'database/DataGrip/columnBlueKey',
  'database/DataGrip/columnBlueKeyDot',
  'database/DataGrip/columnBlueKeyDotIndex',
  'database/DataGrip/columnBlueKeyIndex',
  'database/DataGrip/columnDot',
  'database/DataGrip/columnDotIndex',
  'database/DataGrip/columnFilter',
  'database/DataGrip/columnGoldBlueKey',
  'database/DataGrip/columnGoldBlueKeyDot',
  'database/DataGrip/columnGoldBlueKeyDotIndex',
  'database/DataGrip/columnGoldBlueKeyIndex',
  'database/DataGrip/columnGoldKey',
  'database/DataGrip/columnGoldKeyDot',
  'database/DataGrip/columnGoldKeyDotIndex',
  'database/DataGrip/columnGoldKeyIndex',
  'database/DataGrip/columnGreyKey',
  'database/DataGrip/columnIndex',
  'database/DataGrip/commit',
  'database/DataGrip/connector',
] as const;

export function DatabaseIconsGallery() {
  return <SvgIconsGallery icons={icons.map((name) => ({ name }))} />;
}
