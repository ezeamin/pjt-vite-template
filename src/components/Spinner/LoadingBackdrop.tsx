import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hook';

import { Backdrop, Typography } from '@mui/material';

const LoadingBackdrop = () => {
  const { loadingBackdropOpened } = useAppSelector((state) => state.loading);

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    if (!loadingBackdropOpened) {
      setShowMessage(false);
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
      setShowMessage(false);
    };
  }, [loadingBackdropOpened]);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: 99999999 }}
      open={!!loadingBackdropOpened}
    >
      <div>
        <div className='sk-cube-grid'>
          <div className='sk-cube sk-cube1'></div>
          <div className='sk-cube sk-cube2'></div>
          <div className='sk-cube sk-cube3'></div>
          <div className='sk-cube sk-cube4'></div>
          <div className='sk-cube sk-cube5'></div>
          <div className='sk-cube sk-cube6'></div>
          <div className='sk-cube sk-cube7'></div>
          <div className='sk-cube sk-cube8'></div>
          <div className='sk-cube sk-cube9'></div>
        </div>
        <Typography
          variant='body1'
          component='p'
          fontWeight='500'
          style={{ transition: 'all 1s', marginTop: '-5rem' }}
          sx={showMessage ? { opacity: 1 } : { opacity: 0 }}
        >
          Por favor espere...
        </Typography>
      </div>
    </Backdrop>
  );
};

export default LoadingBackdrop;
