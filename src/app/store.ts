import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

import globalDataSlice from '../features/globalData';
import loadingSlice from '../features/loading';
import paginationSlice from '../features/pagination';

const rootReducer = combineReducers({
  globalData: globalDataSlice,
  loading: loadingSlice,
  pagination: paginationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]), //agregar middleware SIN []
  devTools: import.meta.env.MODE === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
