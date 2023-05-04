import { InitialValue, SetValue } from '.';

import { AnyProp } from '../../interface/globalTypes';

export interface DateProps extends AnyProp {
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
}

export interface DescriptionProps extends AnyProp {
  label?: string;
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
}

export interface ProceedingProps extends AnyProp {
  disabled?: boolean;
  disabledMsg?: string;
  helperText?: string;
  label?: string;
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
}

export interface ResolutionProps extends AnyProp {
  label?: string;
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
}

export interface TypeProps extends AnyProp {
  setValue: SetValue;
  sx?: object;
  value: InitialValue;
  className: string;
}
