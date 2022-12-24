import { createStitches, defaultThemeMap } from '@stitches/react';
import { colorsDark, colorsLight } from './pallet';
import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      opacity: 'opacity'
    },
    theme: {
      colors: {
        ...colorsLight
      },
      space: {
        sm: '0.25rem', //4px
        md: '0.5rem', //8px
        lg: '1rem', //16px
        xl: '1.5rem', //24px
        '2xl': '2rem', //32px
        '3xl': '2.5rem' //40px
      },
      fontSizes: {
        sm: '0.875rem', //14px
        md: '1rem', //16px
        lg: '1.25rem', //20px
        xl: '1.5rem', //24px
        '2xl': '2rem', //32px
        '3xl': '3rem', //48px
        '4xl': '4rem', //64px
        '5xl': '6rem' //96px
      },
      fonts: {
        base: "'Noto Sans', sans-serif"
      },
      fontWeights: {
        regular: '400',
        medium: '600',
        bold: '700'
      },
      lineHeights: {
        1: '100%',
        2: '120%',
        3: '133%',
        4: '150%'
      },
      sizes: {
        max: 'max-content',
        min: 'min-content',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        full: '100%',
        '4xs': '12.5rem', //200px
        '3xs': '14rem', //224px
        '2xs': '16rem', //256px
        xs: '20rem', //320px
        sm: '24rem', //384px
        md: '28rem', //448px
        lg: '32rem', //512px
        xl: '36rem', //576px
        '2xl': '42rem', //672px
        '3xl': '48rem', //768px
        '4xl': '56rem', //896px
        '5xl': '64rem', //1024px
        '6xl': '72rem', //1152px
        '7xl': '80rem', //1280px
        '8xl': '90rem' //1440px
      },
      borderWidths: {
        none: '0px',
        xs: '1px',
        sm: '2px',
        md: '4px',
        lg: '8px'
      },
      borderStyles: {
        none: 'none',
        solid: 'solid',
        dashed: 'dashed',
        dotted: 'dotted',
        double: 'double',
        hidden: 'hidden'
      },
      radii: {
        none: '0px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        pill: '500px',
        circle: '50%',
        full: '9999px'
      },
      shadows: {
        xs: '0px 1px 3px rgb(0 0 0 / 0.2)',
        sm: '0px 3px 6px rgb(0 0 0 / 0.2)',
        md: '0px 8px 24px rgb(0 0 0 / 0.2)',
        lg: '0px 16px 32px rgb(0 0 0 / 0.2)'
      },
      opacity: {
        xs: '0.72',
        sm: '0.64',
        md: '0.32',
        lg: '0.16',
        xl: '0.08'
      },
      zIndices: {
        overlay: 9995,
        modal: 9999
      }
    },
    media: {
      sm: '(max-width: 768px)',
      md: '(max-width: 1366px)',
      lg: '(min-width: 1920px)'
    },
    utils: {
      mx: (value: string) => ({
        marginLeft: value,
        marginRight: value
      }),
      my: (value: string) => ({
        marginTop: value,
        marginBottom: value
      }),
      px: (value: string) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      py: (value: string) => ({
        paddingTop: value,
        paddingBottom: value
      })
    }
  });

export const darkTheme = createTheme({
  colors: {
    ...colorsDark
  }
});

export const lightTheme = createTheme({
  colors: {
    ...colorsLight
  }
});
