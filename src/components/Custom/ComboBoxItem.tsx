import { memo } from 'react';

import { Autocomplete, FormControl, TextField } from '@mui/material';

// import { comboBoxLabels } from '../../constants/comboBoxLabels';

import { ErrorToast } from '../../helpers/customSwal';

import { ComboBoxProps } from '../interface/custom';

// ComboBox normalizado con los formatos que se trabajan en la aplicacion
// Se recomienda SIEMPRE usar este componente para los ComboBox autocompletables

const ComboBoxItem = memo((props: ComboBoxProps) => {
  const {
    className = '',
    disabled = false,
    error,
    errorMessage,
    label,
    list = [],
    required = false,
    setValue,
    // setError,
    type,
    value = null,
    ...other
  } = props;

  const handleChange = (newValue: string) => {
    if (newValue && list) {
      const selectedItem = list.find((item) => item.description === newValue);

      if (selectedItem) {
        setValue(newValue, type, 'value');
        setValue(selectedItem.id, type, 'id');
        // setError(label.type, false);
      }
    } else {
      // TODO: Import initialValues from constants/filter

      // setValue(initialValues.value, type, 'value');
      // setValue(initialValues.id, type, 'id');
      // setError(label.type, false);
    }
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
        options={list.map((item) => item.description)}
        renderInput={(params) => (
          <TextField
            {...params}
            className={className}
            data-testid={other['data-testid'] || undefined}
            disabled={list.length === 0 || disabled}
            error={error}
            label={label}
            onClick={handleClick}
            required={required}
          />
        )}
        value={value}
      />
    </FormControl>
  );
});

ComboBoxItem.displayName = 'ComboBoxItem';

export default ComboBoxItem;
