import { TableRow } from '@mui/material';

import { CustomClickableRowProps } from '../interface/custom';

// Row para las tablas, que se puede clickear
// se agrega el efecto de hover

const CustomClickableRow = (props: CustomClickableRowProps) => {
  const { onClick = () => {}, sx, children, disabled, ...other } = props;

  return (
    <TableRow
      onClick={onClick}
      sx={
        !disabled
          ? {
              cursor: 'pointer',
              transition: 'background-color 0.15s',
              '&:last-child td, &:last-child th': { border: 0 },
              '&:hover': {
                backgroundColor: 'light.main',
              },
              ...sx,
            }
          : {}
      }
      {...other}
    >
      {children}
    </TableRow>
  );
};

export default CustomClickableRow;
