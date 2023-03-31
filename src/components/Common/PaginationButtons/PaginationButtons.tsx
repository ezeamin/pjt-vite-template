import { useAppDispatch, useAppSelector } from '../../../app/hook';

import { Box, Pagination, Typography } from '@mui/material';

import { setPage } from '../../../features/pagination';

import { DTI, DTI_LIST } from '../../../dti/dti';

import { PaginationButtonsProps } from '../../interface/common';

const PaginationButtons = (props: PaginationButtonsProps) => {
  const { apiInfo } = props;

  const pagination = useAppSelector((state) => state.pagination);

  const dispatch = useAppDispatch();

  const handleChangePage = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  if (!apiInfo || Object.keys(apiInfo)?.length === 0) return null;

  return (
    <Box
      sx={{ display: apiInfo?.numberOfElementsOnScreen ? 'block' : 'none' }}
      textAlign='center'
      className='animate-in-bottom'
    >
      <Pagination
        count={apiInfo?.totalPages}
        onChange={(_e, newPage) => handleChangePage(newPage)}
        page={pagination.page}
        showFirstButton
        showLastButton
        sx={{
          '& ul': {
            justifyContent: 'center',
          },
          marginTop: '1rem',
        }}
        variant='outlined'
        data-testid={DTI(DTI_LIST.KEYWORDS.PAGE_SELECTOR)}
      />
      <Typography
        component='p'
        style={{ marginTop: '1rem' }}
        data-testid={DTI(DTI_LIST.KEYWORDS.CURRENT_PAGE_MESSAGE)}
      >
        {`Mostrando ${apiInfo?.numberOfElementsOnScreen} ${
          apiInfo?.numberOfElementsOnScreen === 1 ? 'entrada' : 'entradas'
        } de ${apiInfo?.totalElements}`}
      </Typography>
    </Box>
  );
};

export default PaginationButtons;
