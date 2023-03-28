import { useCallback, useState } from 'react';

import dayjs from 'dayjs';

import { useSetDataType } from './interface';

import { initialValues } from '../constants/filter/initialValues';

// Setter genérico para filtros de busqueda en modales
// Muy similar a un useState pero con la particularidad de que
// permite modificar campo a campo de una manera integrada

const useSetData: useSetDataType = (props) => {
  const initialState = props;

  const [formData, setFormData] = useState(initialState);

  const setData = useCallback(
    (value: string | number | dayjs.Dayjs, name: string, field: string) => {
      setFormData((state: any) => ({
        ...state,
        [name]: { ...state[name], [field]: value },
      }));
    },
    [setFormData]
  );

  const setError = useCallback(
    (argName: string, argValue: string | boolean, argMsg?: string) => {
      let message = argMsg;
      let name = argName;
      let value = argValue;

      // Si el primer parámetro es un booleano, se asume que el segundo parámetro es el nombre del campo y se invierten
      if (typeof argName === 'boolean' && typeof argValue === 'string') {
        name = argValue;
        value = argName;
      }

      setFormData((state: any) => ({
        ...state,
        [name]: {
          ...state[name],
          error: !!value,
          // extra: { ...state[name].extra, message },
        },
      }));
    },
    [setFormData]
  );

  const resetField = useCallback(
    (name: string) => {
      setFormData((state) => ({
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
