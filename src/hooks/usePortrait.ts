import { useMediaQuery } from '@mui/material';

// Detecta dinámicamente si la pantalla tiene un tamaño menor a @param (=sm)

const usePortrait = (size: string = 'sm'): boolean => {
  return useMediaQuery((theme: any) => theme.breakpoints.down(size));
};

export default usePortrait;
