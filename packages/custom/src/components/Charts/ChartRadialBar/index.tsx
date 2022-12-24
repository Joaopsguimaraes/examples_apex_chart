import React from 'react';
import merge from 'lodash/merge';
import { theme } from '../../../../../base';
import { BaseOptionChart } from '../BaseOptionChart';
import ReactApexChart from 'react-apexcharts';
import numeral from 'numeral';

export type IChartRadialBarData = number[];

export type IChartRadialBarOptions = {
  label: string[];
  total: number;
};

export type ChartRadialBarProps = {
  options: IChartRadialBarOptions;
  chartData: IChartRadialBarData;
  height?: number;
  width?: number;
};

function fNumber(number: string | number) {
  return numeral(number).format();
}

export function ChartRadialBar({
  options,
  chartData,
  height = 350,
  width = 500
}: ChartRadialBarProps) {
  const chartOptions = merge(BaseOptionChart(), {
    labels: options.label,
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          [
            { offset: 0, color: `${theme.colors.primary}` },
            { offset: 100, color: `${theme.colors.blue300}` }
          ],
          [
            { offset: 0, color: `${theme.colors.orange500}` },
            { offset: 100, color: `${theme.colors.orange500}` }
          ]
        ]
      }
    },
    legend: { horizontalAlign: 'center' },
    plotOptions: {
      radialBar: {
        hollow: { size: '68%' },
        dataLabels: {
          value: { offsetY: 16 },
          total: {
            formatter: () => fNumber(options.total)
          }
        }
      }
    }
  });

  return (
    <ReactApexChart
      type="radialBar"
      series={chartData}
      options={chartOptions}
      height={height}
      width={width}
    />
  );
}
