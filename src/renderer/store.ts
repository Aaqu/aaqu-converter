import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  url: null,
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setUrl(state, action) {
      state.url = action.payload;
    },
  },
});

export const { setUrl } = converterSlice.actions;

export const store = configureStore({
  reducer: converterSlice.reducer,
});

// console.log('first', store.getState());
//
// store.subscribe(() => console.log('second', store.getState()));
//
// store.dispatch(setUrl('aaaaaa'));
