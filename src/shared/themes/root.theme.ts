import { DarkTheme } from './dark.theme';

const THEMES = {
  darkTheme: DarkTheme
};

export const configRootTheme = (activeTheme: string) => {
  return THEMES[activeTheme];
};
