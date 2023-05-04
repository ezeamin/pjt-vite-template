import { Dispatch, SetStateAction } from 'react';

import { SetValue } from '../../components/interface';

import { InitialValues } from '../../constants/interface';

// TODO: Replace when created
export type setDataProps = {
  someKey: InitialValues;
  /*fromDate: InitialValues;
  resolution: InitialValues;
  text: InitialValues;
  toDate: InitialValues;
  type: InitialValues;*/
};

type setDataType = SetValue;
export type setErrorType = (
  argName: string,
  argValue: string | boolean,
  argMsg?: string,
) => void;
type setFormDataType = Dispatch<SetStateAction<setDataProps>>;
type resetFieldType = (name: string) => void;

export type useSetDataType = (
  props: setDataProps
) => [setDataProps, setDataType, setErrorType, setFormDataType, resetFieldType];

export type StateType = setDataProps;
