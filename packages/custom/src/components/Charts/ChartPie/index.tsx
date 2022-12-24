import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartPieData = number[];

export type IChartPieOptions = {
  label: string[];
};

export type ChartPieProps = {
  options: IChartPieOptions;
  chartData: IChartPieData;
  height?: number;
  width?: number;
};

export function ChartPie({ options, chartData, height = 350, width = 500 }: ChartPieProps) {
  const chartOptions = merge(BaseOptionChart(), {
    labels: options.label,
    legend: {
      position: 'right',
      offsetX: -20,
      offsetY: 64,
      itemMargin: { vertical: 8 }
    },
    stroke: { show: false },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <ReactApexChart
      type="pie"
      series={chartData}
      options={chartOptions}
      height={height}
      width={width}
    />
  );
}
