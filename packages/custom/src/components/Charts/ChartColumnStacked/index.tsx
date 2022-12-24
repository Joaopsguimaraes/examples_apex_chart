import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartColumnStackedData = {
  name: string;
  data: number[];
};

export type IChartColumnStackedOptions = {
  categories: string[];
};

type ChartColumnStackedProps = {
  options: IChartColumnStackedOptions;
  chartData: IChartColumnStackedData[];
  height?: number;
  width?: number;
};

export function ChartColumnStacked({
  options,
  chartData,
  height = 350,
  width = 500
}: ChartColumnStackedProps) {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      stacked: true,
      zoom: { enabled: true }
    },
    legend: { itemMargin: { vertical: 8 }, position: 'right', offsetY: 20 },
    plotOptions: { bar: { columnWidth: '16%' } },
    stroke: { show: false },
    xaxis: {
      type: 'datetime',
      categories: options.categories
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
