import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartColumnStacked, IChartColumnStackedData, IChartColumnStackedOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartColumnStacked',
  component: ChartColumnStacked,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartColumnStacked>;

const Template: Story<typeof ChartColumnStacked> = (args) => {
  const CHART_DATA: IChartColumnStackedData[] = [
    { name: 'Product A', data: [44, 55, 41, 67, 22, 43] },
    { name: 'Product B', data: [13, 23, 20, 8, 13, 27] },
    { name: 'Product C', data: [11, 17, 15, 15, 21, 14] },
    { name: 'Product D', data: [21, 7, 25, 13, 22, 8] }
  ];

  const OPTIONS: IChartColumnStackedOptions = {
    categories: [
      '01/01/2011 GMT',
      '01/02/2011 GMT',
      '01/03/2011 GMT',
      '01/04/2011 GMT',
      '01/05/2011 GMT',
      '01/06/2011 GMT'
    ]
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
      <ChartColumnStacked options={OPTIONS} chartData={CHART_DATA} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
