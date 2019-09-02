import { DarkTheme } from './dark.theme';

const THEMES: any = {
  darkTheme: DarkTheme
};

export const configRootTheme: any = (activeTheme: string): any => {
  return THEMES[activeTheme];
};
