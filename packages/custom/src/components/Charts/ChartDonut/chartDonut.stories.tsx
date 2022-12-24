import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartDonut, IChartDonutData, IChartDonutOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartDonut',
  component: ChartDonut,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartDonut>;

const Template: Story<typeof ChartDonut> = (args) => {
  const CHART_DATA: IChartDonutData = [44, 55, 13, 43];

  const options: IChartDonutOptions = {
    label: ['Apple', 'Mango', 'Orange', 'Watermelon']
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
      <ChartDonut options={options} chartData={CHART_DATA} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
