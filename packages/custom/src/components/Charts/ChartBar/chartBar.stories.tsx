import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartBar, IChartDataBar, IChartBarOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartBar',
  component: ChartBar,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartBar>;

const Template: Story<typeof ChartBar> = (args) => {
  const OPTIONS: IChartBarOptions = {
    categories: [
      'Italy',
      'Japan',
      'China',
      'Canada',
      'France',
      'Germany',
      'South Korea',
      'Netherlands',
      'United States',
      'United Kingdom'
    ]
  };

  const CHART_DATA: IChartDataBar[] = [
    { data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }
  ];

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
      <ChartBar chartData={CHART_DATA} options={OPTIONS} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
