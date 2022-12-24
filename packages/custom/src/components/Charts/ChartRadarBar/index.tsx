import React from 'react';
import merge from 'lodash/merge';
import { theme } from '../../../../../base';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartRadarBarData = {
  name: string;
  data: number[];
};

export type IChartRadarBarOptions = {
  type?: string;
  categories: string[];
};

export type ChartRadarBarProps = {
  options: IChartRadarBarOptions;
  width?: number;
  height?: number;
  chartData: IChartRadarBarData[];
};

export function ChartRadarBar({
  options,
  chartData,
  height = 350,
  width = 500
}: ChartRadarBarProps) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2 },
    fill: { opacity: 0.48 },
    legend: { position: 'bottom', horizontalAlign: 'center' },
    xaxis: {
      categories: options.categories,
      labels: {
        style: {
          colors: [
            `${theme.colors.text}`,
            `${theme.colors.text}`,
            `${theme.colors.text}`,
            `${theme.colors.text}`,
            `${theme.colors.text}`,
            `${theme.colors.text}`
          ]
        }
      }
    }
  });

  return (
    <ReactApexChart
      type="radar"
      series={chartData}
      options={chartOptions}
      height={height}
      width={width}
    />
  );
}
