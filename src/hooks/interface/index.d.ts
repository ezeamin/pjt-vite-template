import { Dispatch, SetStateAction } from 'react';

import { SetValue } from '../../components/interface';
import { resolutionLabels } from '../../constants/filter/labels';

import { InitialValues } from '../../constants/interface';

export type setDataProps = {
  fromDate: InitialValues;
  resolution: InitialValues;
  text: InitialValues;
  toDate: InitialValues;
  type: InitialValues;
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
