import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartRadarBar, IChartRadarBarData, IChartRadarBarOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartRadarBar',
  component: ChartRadarBar,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartRadarBar>;

const Template: Story<typeof ChartRadarBar> = (args) => {
  const CHART_DATA: IChartRadarBarData[] = [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20]
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80]
    },
    {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10]
    }
  ];

  const options: IChartRadarBarOptions = {
    categories: ['2011', '2012', '2013', '2014', '2015', '2016']
  };
  globalStyles();
  return (
    <Flex
      width="4xl"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="none"
      gap="lg"
    >
      <Text fontWeight="medium">Clientes por Pais - Chart Bar</Text>
      <ChartRadarBar options={options} chartData={CHART_DATA} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
