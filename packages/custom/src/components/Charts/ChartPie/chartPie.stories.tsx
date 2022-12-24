import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartPie, IChartPieData, IChartPieOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartPie',
  component: ChartPie,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartPie>;

const Template: Story<typeof ChartPie> = (args) => {
  const CHART_DATA: IChartPieData = [44, 55, 13, 43];
  const OPTIONS: IChartPieOptions = {
    label: ['Team A', 'Team B', 'Team C', 'Team D']
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
      <ChartPie options={OPTIONS} chartData={CHART_DATA} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
