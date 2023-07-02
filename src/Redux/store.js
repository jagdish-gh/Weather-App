import { configureStore } from '@reduxjs/toolkit';
import userSearchSlice from './user/userSearchSlice';

const store = configureStore({
  reducer: {
    userData: userSearchSlice,
  },
});

export default store;
