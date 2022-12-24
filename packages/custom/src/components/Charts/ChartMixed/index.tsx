import React from 'react';
import merge from 'lodash/merge';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartMixedData = {
  name: string;
  type: string;
  data: number[];
};

export type IChartMixedOptions = {
  label: string[];
};

type ChartMixedProps = {
  options: IChartMixedOptions;
  chartData: IChartMixedData[];
  height?: number;
  width?: number;
};

export function ChartMixed({ options, chartData, height = 350, width = 500 }: ChartMixedProps) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '20%' } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: options.label,
    xaxis: { type: 'datetime' },
    yaxis: { title: { text: 'Points' }, min: 0 },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: number) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} points`;
          }
          return y;
        }
      }
    }
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
