import { useAppSelector } from '../../app/hook';

import { Alert } from '@mui/material';

import { themes } from '../../constants/themes';

import { CustomAlertProps, VariantType } from '../interface/custom';

// Alert que en modo oscuro se coloca con "outlined"
// se agrega la animacion de entrada, pero puede ser sobrescrita

const CustomAlert = (props: CustomAlertProps) => {
  const { children, noIcon, className, severity, sx, ...other } = props;
  const theme = useAppSelector((state) => state.globalData.theme);

  const variant: VariantType = theme === themes.LIGHT ? 'standard' : 'outlined';

  const classNameAlert =
    className === 'no-animate'
      ? ''
      : 'animate-in-bottom ' + (className ? className : '');

  return (
    <Alert
      variant={variant}
      severity={severity || 'info'}
      sx={{
        '& .MuiAlert-message': {
          width: '100%',
        },
        ...sx,
      }}
      icon={noIcon && <></>}
      className={classNameAlert}
      {...other}
    >
      {children}
    </Alert>
  );
};

export default CustomAlert;
