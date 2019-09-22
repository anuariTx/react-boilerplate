import { DarkTheme } from './presets/dark.theme';

const THEMES: any = {
  darkTheme: DarkTheme
};

export const configRootTheme: any = (activeTheme: string) => {
  return THEMES[activeTheme];
};
