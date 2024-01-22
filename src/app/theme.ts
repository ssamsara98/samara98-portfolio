import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  plantshop: {
    green: '#1E6F5C',
    yellow: '#E6DD3B',
    cream: '#ECE7B4',
  },
  furniture: {
    primary: '#002939',
    secondary: '#DDC190',
  },
  salman: {
    skin1: '#FFEED9',
    skin2: '#FFDDBF',
  },
  inwood: {
    primaryLight: '#70908B',
    primaryDark: '#07484A',
    green: '#CAF3E5',
    blue: '#E0EFF6',
    purple: '#EEEBFF',
    yellow: '#FFF4E7',
    white: '#FDFBF8',
    brown: '#ADADAD',
    gray: '#D9D9D9',
  },
};

const fonts = {
  inwoodBody: `"Open Sans"`,
  inwoodHeading: `"Playfair Display"`,
};

const breakpoints = {
  tablet: '48em', // 768px
  tabletl: '64em', // 1024px
  laptop: '80em', // 1280px
  desktop: '96em', // 1536px
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  breakpoints,
});
