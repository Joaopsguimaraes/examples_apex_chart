import { darkTheme, globalCss, theme } from '.';

export const globalStyles = globalCss({
  ':focus': {
    outline: 'transparent'
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$base'
  },
  body: {
    color: theme.colors.text,
    background: theme.colors.background,
    '--webkit-font-smoothing': 'antialiased'
  },
  'body, button': {
    fontFamily: '$base'
  },
  '@font-face': {
    fontFamily: "'Noto Sans', sans-serif",
    src: "url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap')"
  },
  '::-webkit-scrollbar': {
    width: 5,
    height: 5
  },
  '::-webkit-scrollbar-track': {
    background: theme.colors.gray100,
    [`.${darkTheme} &`]: {
      background: theme.colors.gray600
    }
  },

  '::-webkit-scrollbar-thumb': {
    background: theme.colors.gray300,
    border: `1px solid ${theme.colors.gray300}`,
    borderRadius: '$md',
    [`.${darkTheme} &`]: {
      background: theme.colors.gray600,
      border: `1px solid ${theme.colors.gray600}`
    }
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: theme.colors.gray500,
    [`.${darkTheme} &`]: {
      background: theme.colors.gray500,
      border: `1px solid ${theme.colors.gray500}`
    }
  }
});
