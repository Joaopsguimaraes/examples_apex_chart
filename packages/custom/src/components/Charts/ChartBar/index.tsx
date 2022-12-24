import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartDataBar = {
  data: number[];
};

export type IChartBarOptions = {
  type?: string;
  categories: string[];
};

type ChartBarProps = {
  options: IChartBarOptions;
  width?: number;
  height?: number;
  chartData: IChartDataBar[];
};

export function ChartBar({ options, width = 500, height = 350, chartData }: ChartBarProps) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { show: false },
    plotOptions: {
      bar: { horizontal: true, barHeight: '30%' }
    },
    xaxis: { categories: options.categories }
  });

  return (
    <ReactApexChart
      type="bar"
      series={chartData}
      options={chartOptions}
      height={height}
      width={width}
    />
  );
}
