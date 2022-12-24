import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartLine, IChartLineData, IChartLineOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartLine',
  component: ChartLine,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartLine>;

const Template: Story<typeof ChartLine> = (args) => {
  const CHART_DATA: IChartLineData[] = [
    { name: 'Roofs', data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 180] }
  ];

  const options: IChartLineOptions = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  };

  globalStyles();
  return (
    <Flex
      width="6xl"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="none"
      gap="lg"
    >
      <Text fontWeight="medium">Vendas por mes - Chart Line</Text>
      <ChartLine chartData={CHART_DATA} options={options} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 400,
  height: 300
};
