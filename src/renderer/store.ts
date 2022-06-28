import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface FileInfo {
  name: string;
  path: string;
  size: number;
  id?: number;
}

export interface ConverterState {
  files: FileInfo[];
}

const initialState: ConverterState = {
  files: [],
};

interface AddFile {
  payload: FileInfo;
}

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    addFile(state, action: AddFile) {
      state.files.push({
        id: state.files.length,
        ...action.payload,
      });
    },
  },
});

export const { addFile } = converterSlice.actions;

export const store = configureStore({
  reducer: converterSlice.reducer,
});
