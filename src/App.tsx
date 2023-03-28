import { useLayoutEffect, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from './app/hook';

import { CssBaseline, ThemeProvider } from '@mui/material';

import LazyLoadingSpinner from './components/Spinner/LazyLoadingSpinner';

import { themes } from './constants/themes';

import { changeMeta } from './helpers/changeMeta';
import { setTheme } from './features/globalData';

import useTheme from './hooks/useTheme';

import Main from './views/Main';

const App = () => {
  const theme = useTheme();
  const themeOption = useAppSelector((state) => state.globalData.theme);

  const dispatch = useAppDispatch();

  // Automatic theme detection, before rendering
  useLayoutEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localStorage.getItem('theme')
    ) {
      dispatch(setTheme(themes.DARK));
    }

    // Change theme-color meta tag based on theme
    changeMeta(themeOption);
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LazyLoadingSpinner />}>
        <CssBaseline />
        <Main />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
