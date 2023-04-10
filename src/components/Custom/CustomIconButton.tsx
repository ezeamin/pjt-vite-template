import { IconButton, Tooltip } from '@mui/material';

import { CustomIconButtonProps } from '../interface/custom';

// IconButton con tooltip y tamaño normalizado

const CustomIconButton = (props: CustomIconButtonProps) => {
  const { title, icon, sx, ...other } = props;

  return (
    <Tooltip title={title}>
      <span>
        <IconButton
          sx={{
            height: '40px',
            ...sx,
          }}
          {...other}
        >
          {icon}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default CustomIconButton;
