import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartArea, IChartAreaData, IChartAreaOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartArea',
  component: ChartArea,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartArea>;

const Template: Story<typeof ChartArea> = (args) => {
  const CHART_DATA: IChartAreaData[] = [
    { name: 'CNPJ', data: [31, 40, 28, 51, 42, 109, 100] },
    { name: 'CPF', data: [11, 32, 45, 32, 34, 52, 41] }
  ];
  const OPTIONS: IChartAreaOptions = {
    type: 'datetime',
    categories: [
      '2022-08-04T00:00:00.000Z',
      '2022-08-04T01:30:00.000Z',
      '2022-08-04T02:30:00.000Z',
      '2022-08-04T03:30:00.000Z',
      '2022-08-04T04:30:00.000Z',
      '2022-08-04T05:30:00.000Z',
      '2022-08-04T06:30:00.000Z'
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
      <Text fontWeight="medium">Clientes cadastrados - Chart Area</Text>
      <ChartArea chartData={CHART_DATA} options={OPTIONS} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
