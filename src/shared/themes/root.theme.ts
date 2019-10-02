import { lightTheme } from './presets/light.theme';
import { darkTheme } from './presets/dark.theme';

const themes: any = {
  lightTheme,
  darkTheme
};

export const configRootTheme: any = (activeTheme: string) => {
  return themes[activeTheme];
};
