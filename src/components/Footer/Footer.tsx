import { useEffect, useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { currentYear } from '../../constants/generalConstants';

import { DTI, DTI_LIST } from '../../dti/dti';

const Footer = () => {
  const [version, setVersion] = useState<string>('1.0.0');

  /* Obtener la versión del archivo package.json. */
  useEffect(() => {
    const fetchD = async () => {
      const pjson = await import('../../../package.json');
      setVersion(pjson.version);
    };
    fetchD();
  }, []);

  return (
    <Stack alignItems='center' component='footer' sx={{ my: 2 }}>
      <Typography
        component='p'
        variant='body1'
        textAlign='center'
        data-testid={DTI(DTI_LIST.FOOTER_VERSION)}
      >
        &copy; {currentYear} - Poder Judicial de Tucumán - Dirección de Sistemas
        <br />v{version}
      </Typography>
    </Stack>
  );
};

export default Footer;
