import { Fab } from '@mui/material';

import { FABProps } from '../interface/fab';

const FAB = (props: FABProps) => {
  const { color = 'primary', icon, handleClick, ...other } = props;

  return (
    <Fab color={color} aria-label='scroll-up' onClick={handleClick} {...other}>
      {icon}
    </Fab>
  );
};

export default FAB;
