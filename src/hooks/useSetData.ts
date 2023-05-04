import { useCallback, useState } from 'react';

import dayjs from 'dayjs';

import { useSetDataType } from './interface';

import { initialValues } from '../constants/filter/initialValues';

// Setter genérico para filtros de busqueda en modales
// Muy similar a un useState pero con la particularidad de que
// permite modificar campo a campo de una manera integrada

// TODO: Create StateType interface based on initialValues, then replace all any with StateType

const useSetData: useSetDataType = (props) => {
  const initialState = props;

  const [formData, setFormData] = useState(initialState);

  const setData = useCallback(
    (value: string | number | dayjs.Dayjs, name: string, field: string) => {
      setFormData((state: any) => ({
        ...state,
        [name]: { ...state[name], [field]: value },
        // [name]: { ...state[name as keyof StateType], [field]: value },
      }));
    },
    [setFormData]
  );

  const setError = useCallback(
    (argName: string, argValue: string | boolean, argMsg?: string) => {
      const message = argMsg;
      const name = argName;
      const value = argValue;

      setFormData((state: any) => ({
        ...state,
        [name]: {
          ...state[name],
          // ...state[name as keyof StateType],
          error: !!value,
          extra: { ...state[name].extra, message },
          // extra: { ...state[name as keyof StateType].extra, message },
        },
      }));
    },
    [setFormData]
  );

  const resetField = useCallback(
    (name: string) => {
      setFormData((state: any) => ({
        ...state,
        [name]: initialValues,
      }));
    },
    [setFormData]
  );

  // el segundo, tercer y cuarto parámetro son opcionales
  return [formData, setData, setError, setFormData, resetField];
};

export default useSetData;
