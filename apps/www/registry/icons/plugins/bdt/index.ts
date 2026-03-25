import type { FC } from 'react';
import { createSpriteIcon } from '@/registry/components/icons';
import type { IconProps } from '../types';

export type ArbitraryClusterProps = IconProps;

export const ArbitraryCluster: FC<ArbitraryClusterProps> = createSpriteIcon({
  name: 'plugins/bdt/arbitrary-cluster',
  viewBox: '0 0 16 16',
  displayName: 'ArbitraryCluster',
});

export type AwsGlueProps = IconProps;

export const AwsGlue: FC<AwsGlueProps> = createSpriteIcon({
  name: 'plugins/bdt/aws-glue',
  viewBox: '0 0 16 16',
  displayName: 'AwsGlue',
});

export type ChartAreaProps = IconProps;

export const ChartArea: FC<ChartAreaProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-area',
  viewBox: '0 0 16 16',
  displayName: 'ChartArea',
});

export type ChartAreaRangeProps = IconProps;

export const ChartAreaRange: FC<ChartAreaRangeProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-area-range',
  viewBox: '0 0 16 16',
  displayName: 'ChartAreaRange',
});

export type ChartBarProps = IconProps;

export const ChartBar: FC<ChartBarProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-bar',
  viewBox: '0 0 16 16',
  displayName: 'ChartBar',
});

export type ChartBubbleProps = IconProps;

export const ChartBubble: FC<ChartBubbleProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-bubble',
  viewBox: '0 0 16 16',
  displayName: 'ChartBubble',
});

export type ChartHistogramProps = IconProps;

export const ChartHistogram: FC<ChartHistogramProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-histogram',
  viewBox: '0 0 16 16',
  displayName: 'ChartHistogram',
});

export type ChartLineProps = IconProps;

export const ChartLine: FC<ChartLineProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-line',
  viewBox: '0 0 16 16',
  displayName: 'ChartLine',
});

export type ChartPieProps = IconProps;

export const ChartPie: FC<ChartPieProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-pie',
  viewBox: '0 0 16 16',
  displayName: 'ChartPie',
});

export type ChartScatterProps = IconProps;

export const ChartScatter: FC<ChartScatterProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-scatter',
  viewBox: '0 0 16 16',
  displayName: 'ChartScatter',
});

export type ChartStockProps = IconProps;

export const ChartStock: FC<ChartStockProps> = createSpriteIcon({
  name: 'plugins/bdt/chart-stock',
  viewBox: '0 0 16 16',
  displayName: 'ChartStock',
});

export type ClusterProps = IconProps;

export const Cluster: FC<ClusterProps> = createSpriteIcon({
  name: 'plugins/bdt/cluster',
  viewBox: '0 0 16 16',
  displayName: 'Cluster',
});

export type DbtUtilityProps = IconProps;

export const DbtUtility: FC<DbtUtilityProps> = createSpriteIcon({
  name: 'plugins/bdt/dbt-utility',
  viewBox: '0 0 16 16',
  displayName: 'DbtUtility',
});

export type FlinkProps = IconProps;

export const Flink: FC<FlinkProps> = createSpriteIcon({
  name: 'plugins/bdt/flink',
  viewBox: '0 0 16 16',
  displayName: 'Flink',
});

export type PySparkProps = IconProps;

export const PySpark: FC<PySparkProps> = createSpriteIcon({
  name: 'plugins/bdt/py-spark',
  viewBox: '0 0 16 16',
  displayName: 'PySpark',
});

export type RemoteFileSystemsProps = IconProps;

export const RemoteFileSystems: FC<RemoteFileSystemsProps> = createSpriteIcon({
  name: 'plugins/bdt/remote-file-systems',
  viewBox: '0 0 16 16',
  displayName: 'RemoteFileSystems',
});

export type SparkRunProps = IconProps;

export const SparkRun: FC<SparkRunProps> = createSpriteIcon({
  name: 'plugins/bdt/spark-run',
  viewBox: '0 0 14 14',
  displayName: 'SparkRun',
});

export type ZeppelinProps = IconProps;

export const Zeppelin: FC<ZeppelinProps> = createSpriteIcon({
  name: 'plugins/bdt/zeppelin',
  viewBox: '0 0 16 16',
  displayName: 'Zeppelin',
});

export { iconNames } from '../types';
export type { IconName, IconMode, IconProps, IconSize } from '../types';
