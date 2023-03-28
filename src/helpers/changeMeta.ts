import { themes } from '../constants/themes';

export const changeMeta = (theme: string) => {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === themes.LIGHT ? '#ffffff' : '#121212');
};
