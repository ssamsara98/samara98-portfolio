import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
};
const breakpoints = {
  tablet: '48em',
  laptop: '80em',
  desktop: '96em',
};

export const theme = extendTheme({
  config,
  colors,
  breakpoints,
});
