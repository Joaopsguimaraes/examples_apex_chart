import React from 'react';
import merge from 'lodash/merge';
import { theme } from '../../../../../base';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';

export type IChartColumnNegativeData = {
  name: string;
  data: number[];
};

export type IChartColumnNegativeOptions = {
  type?: string;
  categories: string[];
};

type ChartColumnNegativeProps = {
  options: IChartColumnNegativeOptions;
  chartData: IChartColumnNegativeData[];
  height?: number;
  width?: number;
};

export function ChartColumnNegative({
  chartData,
  options,
  height = 350,
  width = 500
}: ChartColumnNegativeProps) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { show: false },
    yaxis: {
      labels: {
        formatter: (y: number) => `${y.toFixed(0)}%`
      }
    },
    xaxis: {
      type: 'datetime',
      categories: options.categories
    },
    plotOptions: {
      bar: {
        columnWidth: '58%',
        colors: {
          ranges: [
            { from: -100, to: -46, color: `${theme.colors.yellow300}` },
            { from: -45, to: 0, color: `${theme.colors.red500}` }
          ]
        }
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
