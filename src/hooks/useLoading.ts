import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';

import { setLoadingBackdropOpened } from '../features/loading';

const useLoading = (isLoading = false, isUninitialized = true) => {
  const dispatch = useAppDispatch();

  const pagination = useAppSelector((state) => state.pagination);

  useEffect(() => {
    if (isLoading) dispatch(setLoadingBackdropOpened(true));

    if (!isUninitialized && !isLoading)
      dispatch(setLoadingBackdropOpened(false));
  }, [
    isLoading,
    isUninitialized,
    dispatch,
    pagination.page,
    pagination.entries,
  ]);
};

export default useLoading;
