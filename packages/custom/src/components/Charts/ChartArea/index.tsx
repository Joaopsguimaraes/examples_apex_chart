import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartAreaData = {
  name: string;
  data: number[];
};

export type IChartAreaOptions = {
  type: string;
  categories: string[];
};

type ChartAreaProps = {
  options: IChartAreaOptions;
  chartData: IChartAreaData[];
  width?: number;
  height?: number;
};

export function ChartArea({ options, chartData, width = 500, height = 350 }: ChartAreaProps) {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      type: `${options.type}`,
      categories: options.categories
    },
    tooltip: { x: { format: 'dd/MM/yy HH:mm' } }
  });

  return (
    <ReactApexChart
      type="area"
      series={chartData}
      options={chartOptions}
      height={height}
      width={width}
    />
  );
}
