import { memo, useEffect, useState } from 'react';

import { Autocomplete, FormControl, TextField } from '@mui/material';

import { comboBoxLabels } from '../../constants/comboBoxLabels';

import { ErrorToast } from '../../helpers/customSwal';

import { ComboBoxProps } from '../interface';

// ComboBox normalizado con los formatos que se trabajan en la aplicacion
// Se recomienda SIEMPRE usar este componente para los ComboBox autocompletables

const ComboBoxItem = memo((props: ComboBoxProps) => {
  const {
    disabled = false,
    error,
    errorMessage,
    list = [],
    required = false,
    setData,
    setError = () => {},
    type,
    value = null,
    ...other
  } = props;

  const [label, setLabel] = useState({ label: '', type: '' });

  useEffect(() => {
    if (type) {
      const labelType = comboBoxLabels.find((label) => label.type === type);

      labelType && setLabel(labelType);
    }
  }, [type]);

  const handleChange = (newValue: string) => {
    // @ts-ignore
    const id = list.find(({ description }) => description === newValue).id;
    setData(newValue, label.type, 'value');
    setData(id, label.type, 'id');
    setError(label.type, false);
  };

  const handleClick = () => {
    if (list.length === 0 || disabled) {
      ErrorToast(errorMessage || 'Campo no disponible');
    }
  };

  return (
    <FormControl {...other}>
      <Autocomplete
        disabled={list.length === 0 || disabled}
        id={`${type}ComboBox`}
        isOptionEqualToValue={(option, value) =>
          option.descripcion === value.value
        }
        noOptionsText='Sin opciones'
        onChange={(__e, newValue) => {
          handleChange(newValue);
        }}
        // @ts-ignore
        options={list.map((item) => item.description)}
        renderInput={(params) => (
          <TextField
            {...params}
            data-testid={other['data-testid'] || undefined}
            disabled={list.length === 0 || disabled}
            error={error}
            label={required ? `${label?.label} *` : label?.label}
            onClick={handleClick}
          />
        )}
        value={value}
      />
    </FormControl>
  );
});

export default ComboBoxItem;
