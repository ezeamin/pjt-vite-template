import { useAppDispatch, useAppSelector } from '../../../app/hook';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';

import { setEntries } from '../../../features/pagination';

import { DTI, DTI_LIST } from '../../../dti/dti';

import type { SelectChangeEvent } from '@mui/material';
import { SelectEntriesProps } from '../../interface/common';

const defaultValueEntries = 15;

const SelectEntries = (props: SelectEntriesProps) => {
  const { show = true, ...other } = props;

  const { entries } = useAppSelector((state) => state.pagination);

  const dispatch = useAppDispatch();

  const handleChange = (e: SelectChangeEvent<number>) => {
    dispatch(setEntries(e.target.value));
  };

  if (!show) return null;

  return (
    <Stack
      direction='row'
      justifyContent='flex-end'
      alignItems='center'
      className='animate-in-right-short'
      {...other}
    >
      <Typography component='p' marginRight={1}>
        Mostrar
      </Typography>
      <FormControl sx={{ display: 'inline' }}>
        <InputLabel id='selectEntradas-label'>Num</InputLabel>
        <Select
          label='Num'
          labelId='selectEntradas-label'
          onChange={handleChange}
          sx={{ width: '80px' }}
          value={entries}
          data-testid={DTI(DTI_LIST.KEYWORDS.ENTRIES)}
        >
          <MenuItem value={defaultValueEntries}>{defaultValueEntries}</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default SelectEntries;
