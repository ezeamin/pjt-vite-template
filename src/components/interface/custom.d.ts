import type { ReactNode } from 'react';
import type { SxProps } from '@mui/material';

import { AnyProp } from '../../interface/globalTypes';

// Custom Clickable Row

export interface CustomClickableRowProps extends AnyProp {
  onClick: () => void;
  children: React.ReactNode;

  sx?: SxProps;
  disabled?: boolean;
}

// Custom Alert

export interface CustomAlertProps {
  children: React.ReactNode;
  noIcon?: boolean;
  className?: string;
  severity?: 'error' | 'info' | 'success' | 'warning';
  sx?: SxProps;
}

export type VariantType = 'standard' | 'outlined' | 'filled' | undefined;

//   Custom Icon Button

export interface CustomIconButtonProps extends AnyProp {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
  sx?: SxProps;
}

// Custom Combo Box

export interface BasicProps extends AnyProp {
  setValue: SetValue;
  sx?: SxProps;
  value: InitialValue.value;
}

export interface BasicPropsForDate extends AnyProp {
  setValue: SetValue;
  sx?: SxProps;
  value: InitialValuesForDate.value;
}

interface ComboBoxListType extends BasicList {}

export interface ComboBoxProps extends BasicProps {
  className?: string;
  'data-testid': string | undefined;
  disabled?: boolean;
  error: InitialValues.error;
  errorMessage?: string;
  helperText?: string;
  list?: ComboBoxListType[];
  required?: boolean;
  setError?: SetError;
  type: string;
}
