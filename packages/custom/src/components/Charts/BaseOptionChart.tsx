import { ApexOptions } from 'apexcharts';

import { theme } from '../../../../base';

// ----------------------------------------------------------------------

export function BaseOptionChart(): ApexOptions {
  const LABEL_TOTAL = {
    show: true,
    label: 'Total',
    color: `${theme.colors.text}`,
    fontFamily: `${theme.fonts.base}`,
    fontSize: `${theme.fontSizes.sm}`,
    fontWeight: `${theme.fontWeights.regular}`,
    lineHeight: `${theme.lineHeights[1]}`
  };

  const LABEL_VALUE = {
    offsetY: 8,
    fontFamily: `${theme.fonts.base}`,
    fontSize: `${theme.fontSizes.sm}`,
    fontWeight: `${theme.fontWeights.regular}`,
    lineHeight: `${theme.lineHeights[1]}`
  };

  return {
    colors: [
      `${theme.colors.primary}`,
      `${theme.colors.yellow300}`,
      `${theme.colors.blue500}`,
      `${theme.colors.orange500}`,
      `${theme.colors.green500}`,
      `${theme.colors.red500}`
    ],

    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      // animations: { enabled: false },
      foreColor: `${theme.colors.text}`,
      fontFamily: `${theme.fonts.base}`
    },

    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04
        }
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88
        }
      }
    },

    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
    },

    dataLabels: { enabled: false },

    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },

    grid: {
      strokeDashArray: 3,
      borderColor: `${theme.colors.gray300}`
    },

    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false }
    },

    markers: {
      size: 0,
      strokeColors: `${theme.colors.bgAccent}`
    },

    tooltip: {
      x: {
        show: false
      }
    },

    legend: {
      show: true,
      fontSize: String(13),
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        radius: 12
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        colors: `${theme.colors.text}`
      }
    },

    plotOptions: {
      bar: {
        columnWidth: '28%',
        borderRadius: 4
      },
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL
          }
        }
      },
      radialBar: {
        track: {
          strokeWidth: '100%',
          background: `${theme.colors.gray500}`
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL
        }
      },
      radar: {
        polygons: {
          fill: { colors: ['transparent'] },
          strokeColors: `${theme.colors.text}`,
          connectorColors: `${theme.colors.text}`
        }
      },
      polarArea: {
        rings: {
          strokeColor: `${theme.colors.text}`
        },
        spokes: {
          connectorColors: `${theme.colors.text}`
        }
      }
    },

    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: { bar: { columnWidth: '40%' } }
        }
      },
      {
        breakpoint: 1024,
        options: {
          plotOptions: { bar: { columnWidth: '32%' } }
        }
      }
    ]
  };
}
