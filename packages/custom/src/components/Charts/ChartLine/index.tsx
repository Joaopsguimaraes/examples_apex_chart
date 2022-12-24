import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartLineData = {
  name: string;
  data: number[];
};

export type IChartLineOptions = {
  categories: string[];
};

export type ChartLineProps = {
  options: IChartLineOptions;
  width?: number;
  height?: number;
  chartData: IChartLineData[];
};

export function ChartLine({ options, width = 500, height = 350, chartData }: ChartLineProps) {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: options.categories
    },
    tooltip: { x: { show: true }, marker: { show: true } }
  });

  return (
    <ReactApexChart
      type="line"
      series={chartData}
      options={chartOptions}
      height={height}
      width={width}
    />
  );
}
