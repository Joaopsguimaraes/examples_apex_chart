import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartColumnMultipleData = {
  name?: string;
  data: number[];
};

export type IChartColumnMultipleOptions = {
  type?: string;
  categories: string[];
};

type ChartColumnMultipleProps = {
  options: IChartColumnMultipleOptions;
  width?: number;
  height?: number;
  chartData: IChartColumnMultipleData[];
};

export function ChartColumnMultiple({
  options,
  width = 500,
  height = 350,
  chartData
}: ChartColumnMultipleProps) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: options.categories
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$ ${val} thousands`
      }
    },
    plotOptions: { bar: { columnWidth: '36%' } }
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
