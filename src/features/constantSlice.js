import { createSlice } from '@reduxjs/toolkit';

const constantSlice = createSlice({
  name: 'constant',
  initialState: {
    isDarkMode :false,
    isMenuOpen :false,
    isGridMode:false,
    isSearching:false,
    searchingWords:'',
  },
  reducers: {
    dark: (state,action) => {
      state.isDarkMode = action.payload;
    },
    menu: (state,action) => {
      state.isMenuOpen = action.payload;
    },
    grid: (state,action) => {
      state.isGridMode = action.payload;
    },
    search: (state,action) => {
      state.isSearching = action.payload;
    },
    searching: (state,action) => {
      state.searchingWords = action.payload;
    },

    
  }
});

export const { dark,menu,grid,search,searching } = constantSlice.actions;
export default constantSlice.reducer;
