import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartColumnSingle, IChartColumnSimpleData, IChartColumnSimpleOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartColumnSingle',
  component: ChartColumnSingle,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartColumnSingle>;

const Template: Story<typeof ChartColumnSingle> = (args) => {
  const CHART_DATA: IChartColumnSimpleData[] = [
    { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }
  ];

  const OPTIONS: IChartColumnSimpleOptions = {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
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
      <ChartColumnSingle options={OPTIONS} chartData={CHART_DATA} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
