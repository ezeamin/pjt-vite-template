import { SxProps } from '@mui/material';

export interface CustomAlertProps {
  children: React.ReactNode;
  noIcon?: boolean;
  className?: string;
  severity?: 'error' | 'info' | 'success' | 'warning';
  sx?: SxProps;
}

export type VariantType = 'standard' | 'outlined' | 'filled' | undefined;
