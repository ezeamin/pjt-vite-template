import { InitialValue, SetValue } from '.';

import { initialValues } from '../../constants/filterInitialValues';

import { setDataProps } from '../../hooks/interface';

export interface DateProps {
  dateError?: boolean;
  disableFuture?: boolean;
  label: string;
  maxDate?: boolean;
  minDate?: boolean;
  setValue: SetValue;
  sx?: object;
  type: string;
  value: InitialValue;
  className: string;
  [key: string]: any;
}

export interface DescriptionProps {
  label?: string;
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
  [key: string]: any;
}

export interface ProceedingProps {
  disabled?: boolean;
  disabledMsg?: string;
  helperText?: string;
  label?: string;
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
  [key: string]: any;
}

export interface ResolutionProps {
  label?: string;
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
  [key: string]: any;
}

export interface TypeProps {
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
  [key: string]: any;
}
