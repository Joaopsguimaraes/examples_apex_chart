import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartDonutData = number[];

export type IChartDonutOptions = {
  label: string[];
};

type ChartDonutProps = {
  options: IChartDonutOptions;
  width?: number;
  height?: number;
  chartData: IChartDonutData;
};

export function ChartDonut({ options, width = 500, height = 350, chartData }: ChartDonutProps) {
  const chartOptions = merge(BaseOptionChart(), {
    labels: options.label,
    stroke: { show: false },
    legend: { horizontalAlign: 'center' },
    plotOptions: { pie: { donut: { size: '80%' } } }
  });

  return (
    <ReactApexChart
      type="donut"
      series={chartData}
      options={chartOptions}
      height={height}
      width={width}
    />
  );
}
