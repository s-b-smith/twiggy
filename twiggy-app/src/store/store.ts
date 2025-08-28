import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from 'store/navBarSlice';

const store = configureStore({
  reducer: {
    navBar: navBarReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
