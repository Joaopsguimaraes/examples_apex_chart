import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartRadialBar, IChartRadialBarData, IChartRadialBarOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartRadialBar',
  component: ChartRadialBar,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartRadialBar>;

const Template: Story<typeof ChartRadialBar> = (args) => {
  const CHART_DATA: IChartRadialBarData = [44, 55];
  const OPTIONS: IChartRadialBarOptions = {
    label: ['Team A', 'Team B'],
    total: 2000
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
      <ChartRadialBar options={OPTIONS} chartData={CHART_DATA} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
