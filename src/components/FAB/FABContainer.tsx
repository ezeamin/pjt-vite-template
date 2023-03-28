import { useAppSelector, useAppDispatch } from '../../app/hook';

import { Stack } from '@mui/material';

import DarkModeRounded from '@mui/icons-material/DarkModeRounded';
import LightModeRounded from '@mui/icons-material/LightModeRounded';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';

import { changeMeta } from '../../helpers/changeMeta';
import { setTheme } from '../../features/globalData';

import { themes } from '../../constants/themes';

import FAB from './FAB';

import { DTI, DTI_LIST } from '../../dti/dti';

const FABContainer = () => {
  const theme = useAppSelector((state) => state.globalData.theme);

  const dispatch = useAppDispatch();

  const themeIcon =
    theme === themes.LIGHT ? <DarkModeRounded /> : <LightModeRounded />;

  const handleChangeTheme = () => {
    const newValue = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));

    // Change theme-color meta tag based on theme
    changeMeta(newValue);
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Stack sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }} gap={1}>
      <FAB
        icon={themeIcon}
        color='primary'
        handleClick={handleChangeTheme}
        data-testid={DTI(DTI_LIST.BUTTON(DTI_LIST.ACTIONS.TOGGLE_THEME))}
      />
      <FAB
        icon={<KeyboardArrowUpRounded />}
        color='primary'
        handleClick={handleScroll}
        data-testid={DTI(DTI_LIST.BUTTON(DTI_LIST.ACTIONS.GO_TO_TOP))}
      />
    </Stack>
  );
};

export default FABContainer;
