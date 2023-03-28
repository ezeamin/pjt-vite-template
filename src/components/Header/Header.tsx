import { Stack, Typography } from '@mui/material';

import { LogoImageStyled } from './styled';

const Header = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      component='header'
      alignItems='center'
      justifyContent={{ xs: 'center', md: 'space-between' }}
      sx={{ my: 3 }}
    >
      <LogoImageStyled
        src='/img/logos/logo-corte.png'
        alt='logo poder judicial de tucuman'
        className='animate-in-top'
      />
      <Typography
        component='h1'
        variant='h5'
        sx={{
          mt: { xs: 3, md: 0 },
          fontWeight: 'bold',
          animationDelay: '300ms',
        }}
        className='animate-in-top'
      >
        Template-pjt
      </Typography>
    </Stack>
  );
};

export default Header;
