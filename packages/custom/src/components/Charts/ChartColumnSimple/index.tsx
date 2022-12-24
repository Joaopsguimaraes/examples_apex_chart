import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartColumnSimpleData = {
  name: string;
  data: number[];
};

export type IChartColumnSimpleOptions = {
  categories: string[];
};

type ChartColumnSimpleProps = {
  options: IChartColumnSimpleOptions;
  chartData: IChartColumnSimpleData[];
  height?: number;
  width?: number;
};

export function ChartColumnSingle({
  chartData,
  options,
  height = 350,
  width = 500
}: ChartColumnSimpleProps) {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '16%' } },
    stroke: { show: false },
    xaxis: {
      categories: options.categories
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$ ${val} thousands`
      }
    }
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
