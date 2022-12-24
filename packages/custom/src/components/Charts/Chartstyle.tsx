import { css, theme } from '../../../../base';
import { alpha } from '@mui/material';

export const chartCSS = css({
  '&.apexcharts-canvas': {
    // Tooltip
    '.apexcharts-xaxistooltip': {
      // ...cssStyles(theme).bgBlur(),
      border: 0,
      color: `${theme.colors.text}`,
      boxShadow: `${theme.shadows.sm}`,
      borderRadius: `${theme.radii.sm}`,
      '&:before': { borderBottomColor: 'transparent' },
      '&:after': { borderBottomColor: alpha(`${theme.colors.background}`, 0.8) }
    },
    '.apexcharts-tooltip.apexcharts-theme-light': {
      // ...cssStyles(theme).bgBlur(),
      border: 0,
      boxShadow: `${theme.shadows.sm}`,
      borderRadius: `${theme.radii.sm}`,
      '& .apexcharts-tooltip-title': {
        border: 0,
        textAlign: 'center',
        fontFamily: `${theme.fonts.base}`,
        fontWeight: `${theme.fontWeights.medium}`,
        backgroundColor: `${theme.colors.bgAccent}`,
        color: `${theme.colors.text}`
      }
    },
    // Legend
    '.apexcharts-legend': {
      padding: 0
    },
    '.apexcharts-legend-series': {
      display: 'flex !important',
      alignItems: 'center'
    },
    '.apexcharts-legend-marker': {
      marginRight: 8
    },
    '.apexcharts-legend-text': {
      lineHeight: '18px',
      textTransform: 'capitalize'
    }
  }
});
