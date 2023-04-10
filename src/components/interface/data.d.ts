import dayjs from 'dayjs';

export interface SetError {
  (label: string, value: boolean): void;
}
export interface SetValue {
  (
    value: string | number | dayjs.Dayjs | null,
    name: string,
    field: 'id' | 'value'
  ): void;
}
