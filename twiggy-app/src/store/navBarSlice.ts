import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavBarState {
  isOpen: boolean;
}

const initialState: NavBarState = {
  isOpen: true
};

const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    }
  }
});

export const { setIsOpen } = navBarSlice.actions;
export default navBarSlice.reducer;
