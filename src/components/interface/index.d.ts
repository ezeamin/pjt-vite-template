import dayjs from 'dayjs';

import { InitialValues } from '../../constants/interface';

export interface SetValue {
  (
    value: string | number | dayjs.Dayjs,
    name: string,
    field: 'id' | 'value'
  ): void;
}

interface SetError {
  (label: string, value: boolean): void;
}

interface ComboBoxListType {
  id: number;
  description: string;
}

export interface ComboBoxProps {
  disabled?: boolean;
  error: InitialValues.error;
  errorMessage?: string;
  helperText?: string;
  list?: ComboBoxListType[];
  other?: object;
  required?: boolean;
  setData: SetValue;
  setError?: SetError;
  sx?: object;
  type?: string;
  value: InitialValue.value;
  [key: string]: any;
}
