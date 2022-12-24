import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ChartColumnNegative, IChartColumnNegativeData, IChartColumnNegativeOptions } from '.';
import { Flex, globalStyles, Text } from '../../../../../base';

export default {
  title: 'BASE/Chart/ChartColumnNegative',
  component: ChartColumnNegative,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof ChartColumnNegative>;

const Template: Story<typeof ChartColumnNegative> = (args) => {
  const OPTIONS: IChartColumnNegativeOptions = {
    categories: [
      '2011-01-01',
      '2011-02-01',
      '2011-03-01',
      '2011-04-01',
      '2011-05-01',
      '2011-06-01',
      '2011-07-01',
      '2011-08-01',
      '2011-09-01',
      '2011-10-01',
      '2011-11-01',
      '2011-12-01',
      '2012-01-01',
      '2012-02-01',
      '2012-03-01',
      '2012-04-01',
      '2012-05-01',
      '2012-06-01',
      '2012-07-01',
      '2012-08-01',
      '2012-09-01',
      '2012-10-01',
      '2012-11-01',
      '2012-12-01',
      '2013-01-01',
      '2013-02-01',
      '2013-03-01',
      '2013-04-01',
      '2013-05-01',
      '2013-06-01',
      '2013-07-01',
      '2013-08-01',
      '2013-09-01'
    ]
  };

  const CHART_DATA: IChartColumnNegativeData[] = [
    {
      name: 'Cash Flow',
      data: [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07, 5.8,
        2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1,
        -39.6, -37.6, -29.4, -21.4, -2.4
      ]
    }
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
      <ChartColumnNegative options={OPTIONS} chartData={CHART_DATA} {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: 500,
  height: 350
};
