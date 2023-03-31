// import { Link } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

// import { paths } from '../../constants/routing/paths';

import usePortrait from '../../hooks/usePortrait';

const Header = () => {
  const isPortrait = usePortrait('md');

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      component='header'
      alignItems='center'
      justifyContent={{ xs: 'center', md: 'space-between' }}
      sx={{ my: 3 }}
    >
      {/* Add if routing is needed */}
      {/* <Link to={paths.HOME}> */}
      <img
        src='/img/logos/logo-corte-2019.png'
        alt='logo poder judicial de tucuman'
        className='animate-in-top'
        height={isPortrait ? '44.6px' : '71.39px'}
        width={isPortrait ? '250px' : '400px'}
      />
      {/* </Link> */}
      <Typography
        component='h1'
        variant='h5'
        sx={{
          mt: { xs: 2, md: 0 },
          fontWeight: 'bold',
          animationDelay: '300ms',
        }}
        className='animate-in-top'
      >
        Template pjt
      </Typography>
    </Stack>
  );
};

export default Header;
